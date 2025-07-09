<template>
  <NavigationNavbar />
  <NavigationSidebar />
  <div class="antialiased bg-gray-100 dark:bg-gray-900">
    <main class="p-0 lg:ml-64 h-auto pt-20">
      
      <slot />
    </main>
  </div>
</template>
<script setup>
onMounted(() => {
  useFlowbite(() => {
    initDrawers()
  });
});
</script>