<script setup>
import { RouterLink } from 'vue-router'
import { AppSidebarNav } from '@/components/AppSidebarNav.js'
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()
</script>

<template>
  <CSidebar
    class="border-end"
    colorScheme="dark"
    position="fixed"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => sidebar.toggleVisible(value)"
  >
    <CSidebarHeader class="border-bottom">
      <RouterLink custom to="/" v-slot="{ href, navigate }">
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate" clas="sidebar-brand">
          <div class="brand-content">
            <img src="@/assets/brand/osikh-light.png" alt="Logo" :height="32" />
            <span>Online Tools</span>
          </div>
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="sidebar.toggleVisible()" />
    </CSidebarHeader>
    <AppSidebarNav />
    <CSidebarFooter class="border-top d-none d-lg-flex">
      <CSidebarToggler @click="sidebar.toggleUnfoldable()" />
    </CSidebarFooter>
  </CSidebar>
</template>

<style scoped>
.sidebar-brand {
  display: flex;
  align-items: flex-end; /* Ensure content is aligned at the bottom */
  height: 100%; /* Allow the sidebar brand to take full height of its parent */
}

.brand-content {
  display: inline-block;
  height: 100%; /* Ensure this container takes full height */
}

img {
  margin-bottom: 4px; /* Optional: spacing between the logo and the text */
}

span {
  margin-bottom: 0; /* Optional: adjust space between text and bottom */
  margin-left: 6px;
  font-weight: bold;
}
</style>
