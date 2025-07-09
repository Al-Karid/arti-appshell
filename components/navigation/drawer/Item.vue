<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const isActive = computed(() => {
  return props.item.link === useRoute().fullPath;
});
</script>
<template>
  <li v-if="!item.collapsible">
    <NuxtLink :to="props.item.link"
      class="flex items-center p-2 text-base font-medium rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      :class="isActive ? 'text-blue-600' : 'hover:text-blue-600'">
      <Icon v-if="item.icon" :name="props.item.icon" :size="item.iconSize || 24"
        class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      <span class="flex-1 ml-3">{{ props.item.title }}</span>
      <span v-if="item.badge"
        class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-blue-300 dark:bg-primary-200 dark:text-primary-800">
        {{ item.badge }}
      </span>
    </NuxtLink>
  </li>
</template>