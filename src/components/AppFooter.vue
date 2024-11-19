<template>
  <CFooter class="px-4">
    <div class="footer-brand-content">
      <span class="ms-1">Copyright &copy; {{ new Date().getFullYear() }}</span>
    </div>
    <div class="ms-auto">
      <span class="me-1" target="_blank"></span>
      <a href="https://github.com/osikh" target="_blank">
        <img src="@/assets/brand/osikh-dark.png" alt="Logo" :height="24" />
      </a>
    </div>
  </CFooter>
</template>

<style scoped>
.footer-brand-content {
  display: inline-block;
  height: 100%; /* Ensure this container takes full height */
}

img {
  margin-bottom: 4px; /* Optional: spacing between the logo and the text */
}

span {
  margin-bottom: 0; /* Optional: adjust space between text and bottom */
  margin-left: 6px;
  font-weight: 600;
}
</style>
