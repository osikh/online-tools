<script setup>
import { ref } from 'vue'

const visibleHMAC = ref(false)
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
                    Share With Others <CIcon icon="cil-share-alt" />
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <div class="mb-3">
              <CFormSwitch id="settingSwitchAutoUpdate" size="lg" label="Auto Update" checked />
              <CFormSwitch id="settingSwitchRememberInput" size="lg" label="Remember Input" />
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput1">Input Encoding</CFormLabel>
                <CFormSelect size="sm" aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput1">Output Encoding</CFormLabel>
                <CFormSelect size="sm" aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
              <CFormSwitch id="formSwitchHMAC" size="lg" label="HMAC"
                @change="(e) => { visibleHMAC = e.target.checked }" />
              <CCollapse :visible="visibleHMAC">
                <CCard class="mt-3">
                  <CCardBody>
                    <div class="mb-3">
                      <CFormLabel for="exampleFormControlInput1">Encoding</CFormLabel>
                      <CFormSelect size="sm" aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </CFormSelect>
                    </div>
                    <CFormInput type="text" size="sm" placeholder="Key" aria-label="default input example" />
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :lg="8" :sm="12" class="p-0 order-lg-2 order-1 data-column">
        <CCard class="rounded-0 h-50">
          <CCardHeader>
            <CRow>
              <CCol :sm="5">
                <strong>Input</strong> <small>Sizing</small>
              </CCol>
              <CCol :sm="7" class="d-none d-md-block">
                <CButtonGroup class="float-end" role="group" aria-label="Basic outlined example">
                  <CButton color="primary" size="sm" variant="outline">
                    <CIcon icon="cil-copy" />
                  </CButton>
                  <CButton color="primary" size="sm" variant="outline">
                    <CIcon icon="cil-fullscreen" />
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody class="p-0 m-0">
            <CFormTextarea id="exampleFormControlTextarea1" class="h-100 rounded-0 border-0"></CFormTextarea>
          </CCardBody>
        </CCard>

        <CCard class="rounded-0 h-50">
          <CCardHeader>
            <CRow>
              <CCol :sm="5">
                <strong>Output</strong> <small>Sizing</small>
              </CCol>
              <CCol :sm="7" class="d-none d-md-block">
                <CButtonGroup class="float-end" role="group" aria-label="Basic outlined example">
                  <CButton color="secondary" size="sm" variant="outline">
                    <CIcon icon="cil-copy" />
                  </CButton>
                  <CButton color="secondary" size="sm" variant="outline">
                    <CIcon icon="cil-fullscreen" />
                  </CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody class="p-0 m-0">
            <CFormTextarea id="exampleFormControlTextarea1" class="h-100 rounded-0 border-0"></CFormTextarea>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>


<style lang="css" scoped>
/* Ensure the parent row takes full screen height on large screens */
.parent-row {
  min-height: 75vh; /* Full screen height */
}

/* Toolbox column will take 100% height on large screens */
.toolbox-column, .data-column {
  height: auto; /* Default height for small/medium screens */
}

/* For large screens only */
@media (min-width: 992px) {
  .toolbox-column, .data-column {
    height: 75vh; /* Full height on large screens */
  }
}
</style>
