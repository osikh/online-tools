<script>
import forge from 'node-forge';

export default {
  data() {
    return {
      certificateFile: null,
      certificatePasskey: null,
      certificateInfo: null,
      error: null,
    };
  },
  methods: {
    updatePasskey(event) {
      this.certificatePasskey = event.target.value
    },
    // Handle file upload
    onFileChange(event) {
      this.certificateFile = event.target.files[0];
      if (this.certificateFile) {
        this.certificatePasskey = prompt('Enter the password for the certificate');
        if (this.certificatePasskey) {
          this.loadP12Certificate(this.certificateFile, this.certificatePasskey);
        }
      }
    },
    getCertInfo() {
      if (!this.certificatePasskey)
        this.error = "Certificate passkey is required"

      if (!this.certificateFile)
        this.error = "Please select certificate"

      if (this.certificateFile && this.certificatePasskey) {
        this.loadP12Certificate(this.certificateFile, this.certificatePasskey)
      }
    },
    async loadP12Certificate(file, password) {
      this.error = ""
      try {
        // Read the file as ArrayBuffer (binary data)
        const arrayBuffer = await this.readFileAsArrayBuffer(file);

        // Parse the PKCS#12 (.p12) file using node-forge
        const p12Asn1 = forge.asn1.fromDer(forge.util.createBuffer(arrayBuffer));
        const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, password);

        // Extract certificates and other information
        const certBag = p12.getBags({ bagType: forge.pki.oids.certBag });
        const cert = certBag[forge.pki.oids.certBag][0].cert;  // Assuming there's only one certificate

        // Extract useful information
        const issuerName = cert.issuer.attributes.map(attr => `${attr.shortName}=${attr.value}`).join(', ');
        const subjectName = cert.subject.attributes.map(attr => `${attr.shortName}=${attr.value}`).join(', ');
        const serialNumber = cert.serialNumber;
        const validFrom = cert.validity.notBefore;
        const validTo = cert.validity.notAfter;

        // Public Key Information
        const publicKey = cert.publicKey;
        const publicKeyAlgorithm = publicKey.n ? 'RSA' : 'EC'; // Simple check to identify the type (RSA or EC)
        const publicKeyModulus = publicKey.n ? publicKey.n.toString(16) : null; // RSA Modulus
        const publicKeyExponent = publicKey.e ? publicKey.e.toString(16) : null; // RSA Exponent

        // Signature Algorithm
        const signatureAlgorithm = cert.signatureAlgorithm;

        // Certificate Version
        const version = cert.version;

        // Subject Alternative Names (SANs)
        const subjectAltNames = cert.getExtension('subjectAltName') ? cert.getExtension('subjectAltName').altNames : [];

        // Key Usage (if available)
        const keyUsage = cert.getExtension('keyUsage') ? cert.getExtension('keyUsage').keyUsage : null;

        // Extensions and CRL Distribution Points (if available)
        const crlDistributionPoints = cert.getExtension('crlDistributionPoints') ? cert.getExtension('crlDistributionPoints').crlDistributionPoints : [];

        // Authority Key Identifier (if available)
        const authorityKeyIdentifier = cert.getExtension('authorityKeyIdentifier') ? cert.getExtension('authorityKeyIdentifier').keyIdentifier : null;

        // Subject Key Identifier (if available)
        const subjectKeyIdentifier = cert.getExtension('subjectKeyIdentifier') ? cert.getExtension('subjectKeyIdentifier').keyIdentifier : null;

        // Organize the information
        this.certificateInfo = {
          issuerName,
          subjectName,
          serialNumber,
          validFrom,
          validTo,
          publicKeyAlgorithm,
          publicKeyModulus,
          publicKeyExponent,
          signatureAlgorithm,
          version,
          subjectAltNames,
          keyUsage,
          crlDistributionPoints,
          authorityKeyIdentifier,
          subjectKeyIdentifier,
        };
      } catch (error) {
        this.error = 'Failed to load the certificate: ' + error.message;
      }
    },

    // Helper method to read file as ArrayBuffer
    readFileAsArrayBuffer(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    },
  },
}
</script>


<template>
  <div>
    <CRow class="parent-row">
      <!-- Toolbox -->
      <CCol :lg="4" :sm="12" class="p-0 order-lg-1 order-2 toolbox-column">
        <CCard class="rounded-0 h-100">
          <CCardHeader>
            <CRow>
              <CCol :sm="5">
                <strong>Settings</strong>
              </CCol>
              <CCol :sm="7" class="d-none d-md-block">
                <CButtonGroup class="float-end" role="group" aria-label="Basic outlined example">
                  <CButton color="secondary" size="sm" variant="outline">
                    Share With Others
                    <CIcon icon="cil-share-alt" />
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <div class="mb-3">
              <CFormInput id="certupload" type="file" size="sm" label="Cert Upload" accept=".p12,.pfx" @change="onFileChange" />
            </div>
            <div class="mb-3">
              <CFormInput id="certupload" type="text" size="sm" label="Cert Passkey" v-model="this.certificatePasskey" @input="updatePasskey" placeholder="Enter Certificate Password" />
            </div>
            <CButton color="primary" class="w-100" shape="rounded-0" variant="outline" @click="getCertInfo">
              Get Cert Info
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :lg="8" :sm="12" class="p-0 order-lg-2 order-1 data-column">
        <CCard class="rounded-0 h-100">
          <CCardHeader>
            <CRow>
              <CCol :sm="5">
                <strong>Output</strong> <small></small>
              </CCol>
              <CCol :sm="7" class="d-none d-md-block">
                <CButtonGroup class="float-end" role="group" aria-label="Basic outlined example">
                  <CButton color="secondary" size="sm" variant="outline">
                    <CIcon icon="cil-copy" />
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody class="p-0 m-0">
            <div v-if="certificateInfo">
              <h3>Certificate Information:</h3>
              <p><strong>Issuer:</strong> {{ certificateInfo.issuerName }}</p>
              <p><strong>Subject:</strong> {{ certificateInfo.subjectName }}</p>
              <p><strong>Serial Number:</strong> {{ certificateInfo.serialNumber }}</p>
              <p><strong>Valid From:</strong> {{ certificateInfo.validFrom }}</p>
              <p><strong>Valid To:</strong> {{ certificateInfo.validTo }}</p>
              <p><strong>Public Key Algorithm:</strong> {{ certificateInfo.publicKeyAlgorithm }}</p>
              <p><strong>Public Key Modulus:</strong> {{ certificateInfo.publicKeyModulus }}</p>
              <p><strong>Public Key Exponent:</strong> {{ certificateInfo.publicKeyExponent }}</p>
              <p><strong>Signature Algorithm:</strong> {{ certificateInfo.signatureAlgorithm }}</p>
              <p><strong>Subject Alternative Names:</strong>
                <span v-if="certificateInfo.subjectAltNames.length > 0">
                  <ul>
                    <li v-for="(name, index) in certificateInfo.subjectAltNames" :key="index">
                      {{ name.value }}
                    </li>
                  </ul>
                </span>
                <span v-else>No SANs found</span>
              </p>
            </div>
            <div v-if="error" style="color: red;">
              <p>Error: {{ error }}</p>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>


<style lang="css" scoped>
/* Ensure the parent row takes full screen height on large screens */
.parent-row {
  min-height: 75vh;
  /* Full screen height */
}

/* Toolbox column will take 100% height on large screens */
.toolbox-column,
.data-column {
  height: auto;
  /* Default height for small/medium screens */
}

/* For large screens only */
@media (min-width: 992px) {

  .toolbox-column,
  .data-column {
    height: 75vh;
    /* Full height on large screens */
  }
}
</style>
