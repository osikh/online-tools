<script setup>
import { ref } from 'vue'

const toggleHMAC = ref(false)
</script>

<template>
  <div>
    <CRow>
      <CCol :xs="12" class="p-0">
        <CRow>
          <!-- Toolbox -->
          <CCol :lg="4" class="p-0">
            <CCard class="rounded-0">
              <CCardHeader>
                <CRow>
                  <CCol :sm="5">
                    <strong>Settings</strong>
                  </CCol>
                  <CCol :sm="7" class="d-none d-md-block">
                    <CButtonGroup
                      class="float-end"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <CButton color="secondary" size="sm" variant="outline">
                        <CIcon icon="cil-share-alt" />
                      </CButton>
                    </CButtonGroup>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <div class="mb-3">
                  <CFormSwitch
                    id="formSwitchCheckDefaultLg"
                    size="lg"
                    label="Auto Update"
                    checked
                  />
                  <CFormSwitch
                    id="formSwitchCheckDefaultLg"
                    size="lg"
                    label="Remember Input"
                  />
                  <div class="mb-3">
                    <CFormLabel for="exampleFormControlInput1"
                      >Input Encoding</CFormLabel
                    >
                    <CFormSelect size="sm" aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </div>
                  <div class="mb-3">
                    <CFormLabel for="exampleFormControlInput1"
                      >Output Encoding</CFormLabel
                    >
                    <CFormSelect size="sm" aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </div>
                  <CFormSwitch
                    id="formSwitchCheckDefaultLg"
                    size="lg"
                    label="HMAC"
                    @change="toggleHMAC = !toggleHMAC"
                  />
                  <CCollapse :visible="toggleHMAC">
                    <CCard class="mt-3">
                      <CCardBody>
                        <div class="mb-3">
                          <CFormLabel for="exampleFormControlInput1"
                            >Encoding</CFormLabel
                          >
                          <CFormSelect size="sm" aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </CFormSelect>
                        </div>
                        <CFormInput
                          type="text"
                          size="sm"
                          placeholder="Key"
                          aria-label="default input example"
                        />
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol :lg="8" class="p-0">
            <CCard class="rounded-0">
              <CCardHeader>
                <CRow>
                  <CCol :sm="5">
                    <strong>Input</strong> <small>Sizing</small>
                  </CCol>
                  <CCol :sm="7" class="d-none d-md-block">
                    <CButtonGroup
                      class="float-end"
                      role="group"
                      aria-label="Basic outlined example"
                    >
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
              <CCardBody>
                <p class="text-body-secondary small">
                  Set heights using <code>size</code> property like
                  <code>size=&#34;lg&#34;</code> and
                  <code>size=&#34;sm&#34;</code>.
                </p>
                <div class="mb-3">
                  <CFormLabel for="exampleFormControlTextarea1"
                    >Example textarea</CFormLabel
                  >
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></CFormTextarea>
                </div>
              </CCardBody>
            </CCard>

            <CCard class="rounded-0">
              <CCardHeader>
                <CRow>
                  <CCol :sm="5">
                    <strong>Output</strong> <small>Sizing</small>
                  </CCol>
                  <CCol :sm="7" class="d-none d-md-block">
                    <CButtonGroup
                      class="float-end"
                      role="group"
                      aria-label="Basic outlined example"
                    >
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
              <CCardBody>
                <p class="text-body-secondary small">
                  Set heights using <code>size</code> property like
                  <code>size=&#34;lg&#34;</code> and
                  <code>size=&#34;sm&#34;</code>.
                </p>
                <div class="mb-3">
                  <CFormLabel for="exampleFormControlTextarea1"
                    >Example textarea</CFormLabel
                  >
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></CFormTextarea>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader> Traffic &amp; Sales </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :sm="12" :lg="6">
                <CRow>
                  <CCol :xs="6">
                    <div
                      class="border-start border-start-4 border-start-info py-1 px-3 mb-3"
                    >
                      <div class="text-body-secondary small">New Clients</div>
                      <div class="fs-5 fw-semibold">9,123</div>
                    </div>
                  </CCol>
                  <CCol :xs="6">
                    <div
                      class="border-start border-start-4 border-start-danger py-1 px-3 mb-3"
                    >
                      <div class="text-body-secondary small">
                        Recurring Clients
                      </div>
                      <div class="fs-5 fw-semibold">22,643</div>
                    </div>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div
                  v-for="item in progressGroupExample1"
                  :key="item.title"
                  class="progress-group mb-4"
                >
                  <div class="progress-group-prepend">
                    <span class="text-body-secondary small">{{
                      item.title
                    }}</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin color="info" :value="item.value1" />
                    <CProgress thin color="danger" :value="item.value2" />
                  </div>
                </div>
              </CCol>
              <CCol :sm="12" :lg="6">
                <CRow>
                  <CCol :xs="6">
                    <div
                      class="border-start border-start-4 border-start-warning py-1 px-3 mb-3"
                    >
                      <div class="text-body-secondary small">Pageviews</div>
                      <div class="fs-5 fw-semibold">78,623</div>
                    </div>
                  </CCol>
                  <CCol :xs="6">
                    <div
                      class="border-start border-start-4 border-start-success py-1 px-3 mb-3"
                    >
                      <div class="text-body-secondary small">Organic</div>
                      <div class="fs-5 fw-semibold">49,123</div>
                    </div>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div
                  v-for="item in progressGroupExample2"
                  :key="item.title"
                  class="progress-group"
                >
                  <div class="progress-group-header">
                    <CIcon :icon="item.icon" class="me-2" size="lg" />
                    <span class="title">{{ item.title }}</span>
                    <span class="ms-auto fw-semibold">{{ item.value }}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="item.value" color="warning" />
                  </div>
                </div>

                <div class="mb-5"></div>

                <div
                  v-for="item in progressGroupExample3"
                  :key="item.title"
                  class="progress-group"
                >
                  <div class="progress-group-header">
                    <CIcon :icon="item.icon" class="me-2" size="lg" />
                    <span class="title">{{ item.title }}</span>
                    <span class="ms-auto fw-semibold">
                      {{ item.value }}
                      <span class="text-body-secondary small"
                        >({{ item.percent }}%)</span
                      >
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="item.percent" color="success" />
                  </div>
                </div>
              </CCol>
            </CRow>
            <br />
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead class="text-nowrap">
                <CTableRow>
                  <CTableHeaderCell class="bg-body-secondary text-center">
                    <CIcon name="cil-people" />
                  </CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary">
                    User
                  </CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary text-center">
                    Country
                  </CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary">
                    Usage
                  </CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary text-center">
                    Payment Method
                  </CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary">
                    Activity
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.name">
                  <CTableDataCell class="text-center">
                    <CAvatar
                      size="md"
                      :src="item.avatar.src"
                      :status="item.avatar.status"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{{ item.user.name }}</div>
                    <div class="small text-body-secondary text-nowrap">
                      <span>{{ item.user.new ? "New" : "Recurring" }}</span> |
                      {{ item.user.registered }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon
                      size="xl"
                      :name="item.country.flag"
                      :title="item.country.name"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div
                      class="d-flex justify-content-between align-items-baseline"
                    >
                      <div class="fw-semibold">{{ item.usage.value }}%</div>
                      <div class="text-nowrap text-body-secondary small ms-3">
                        {{ item.usage.period }}
                      </div>
                    </div>
                    <CProgress
                      thin
                      :color="item.usage.color"
                      :value="item.usage.value"
                    />
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon size="xl" :name="item.payment.icon" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="small text-body-secondary">Last login</div>
                    <div class="fw-semibold text-nowrap">
                      {{ item.activity }}
                    </div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
