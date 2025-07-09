//LoginLoadingSpinner.vue
<template>
  <div
    class="absolute inset-0 flex items-center justify-center w-screen h-screen bg-blue-600 bg-opacity-50 dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
  >
    <div role="status">
      <Icon name="tabler:loader" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
