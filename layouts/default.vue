<script setup>
useFlowbiteDrawers();
</script>
<template>
  <NavigationNavbar />
  <NavigationSidebar />
  <div class="antialiased bg-gray-100 dark:bg-gray-900">
    <main class="p-4 lg:ml-64 h-auto pt-20">
      <div class="w-full px-4 py-6 border-2 border-dashed border-blue-200">

        <slot />
      </div>
    </main>
  </div>
</template>