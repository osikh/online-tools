<script>
import { CFormRange, CFormSwitch } from '@coreui/vue';

export default {
  components: {
    CFormSwitch,
    CFormRange
  },
  data() {
    return {
      generatedPassword: false,
      outputString: "",
      passwordLength: 16,
      hasLower: true,
      hasUpper: true,
      hasNumber: true,
      hasSpecial: false,
      disableUpper: false,
      disableLower: false,
      disableNumber: false,
      disableSpecial: false,
      randomFunc: {
        lower: this.getRandomLower,
        upper: this.getRandomUpper,
        number: this.getRandomNumber,
        symbol: this.getRandomSymbol,
      }
    }
  },
  watch: {
    // Watch the state of the switches to check when to disable the last switch
    hasUpper() {
      this.disableOnlyCheckbox();
    },
    hasLower() {
      this.disableOnlyCheckbox();
    },
    hasNumber() {
      this.disableOnlyCheckbox();
    },
    hasSpecial() {
      this.disableOnlyCheckbox();
    }
  },
  methods: {
    secureMathRandom() {
      return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
    },
    // Generator Functions
    // All the functions that are responsible to return a random value taht we will use to create password.
    getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    getRandomNumber() {
      return String.fromCharCode(Math.floor(this.secureMathRandom() * 10) + 48);
    },
    getRandomSymbol() {
      const symbols = '~!@#$%^&*()_+{}":?><;.,';
      return symbols[Math.floor(Math.random() * symbols.length)];
    },
    generatePassword(length, lower, upper, number, symbol) {
      let generatedPassword = "";
      const typesCount = lower + upper + number + symbol;
      const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
      if (typesCount === 0) {
        return "";
      }
      for (let i = 0; i < length; i++) {
        typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          generatedPassword += this.randomFunc[funcName]();
        });
      }
      return generatedPassword.slice(0, length)
        .split('').sort(() => Math.random() - 0.5)
        .join('');
    },
    generate() {
      this.generatedPassword = true;
      this.outputString = this.generatePassword(this.passwordLength, this.hasLower, this.hasUpper, this.hasNumber, this.hasSpecial)
    },
    // Method to check if three switches are unchecked and disable the fourth
    disableOnlyCheckbox() {
      // Count the number of checked switches
      const checkedCount = [this.hasUpper, this.hasLower, this.hasNumber, this.hasSpecial].filter(Boolean).length;

      // If 3 switches are unchecked, disable the 4th switch
      this.disableUpper = checkedCount == 1 && this.hasUpper;
      this.disableLower = checkedCount == 1 && this.hasLower;
      this.disableNumber = checkedCount == 1 && this.hasNumber;
      this.disableSpecial = checkedCount == 1 && this.hasSpecial;

      this.generate()
    }
  }
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
            <div class="mb-2 border-bottom border-1">
              <CFormSwitch id="settingSwitchAutoUpdate" size="lg" label="Auto Update" checked />
            </div>
            <div class="mb-2 border-bottom border-1">
              <div class="">
                <CFormLabel for="exampleFormControlInput1">Password Length: <strong>{{ passwordLength }}</strong>
                </CFormLabel>
                <CFormRange @input="(e) => { passwordLength = e.target.value; this.generate(); }" :min="4" :max="32" value="16" />
              </div>
              <CFormSwitch v-model="hasUpper" size="lg" label="Include Uppercase" @change="generate" :disabled="disableUpper" />
              <CFormSwitch v-model="hasLower" size="lg" label="Include Lowercase" @change="generate" :disabled="disableLower" />
              <CFormSwitch v-model="hasNumber" size="lg" label="Include Numbers" @change="generate" :disabled="disableNumber" />
              <CFormSwitch v-model="hasSpecial" size="lg" label="Include Special Chars" @change="generate" :disabled="disableSpecial" />
            </div>
            <CButton color="primary" class="w-100" shape="rounded-0" variant="outline" @click="generate">
              Generate
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
            <CFormTextarea id="outputTextArea" class="h-100 rounded-0 border-0">{{ outputString }}</CFormTextarea>
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
