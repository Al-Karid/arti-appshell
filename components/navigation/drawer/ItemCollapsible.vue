<script setup>
import { ref, computed } from "vue";

const uniqueId = ref("");
const isOpen = ref(false); // 🔥 Gère l'état d'ouverture/fermeture

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const item = computed(() => props.item);

onMounted(() => {
  uniqueId.value =
    Date.now().toString(36) + Math.random().toString(36).substr(2);
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <li v-if="item.collapsible">
    <button type="button"
      class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      @click="toggleDropdown">
      <Icon :name="item.icon"
        :size="item.iconSize || 24"
        class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
      <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ item.title }}</span>
      <Icon name="tabler:chevron-down" class="w-6 h-6" 
        :class="{ 'rotate-180': isOpen }" /> <!-- 🔄 Rotation de l'icône si ouvert -->
    </button>
    
    <ul v-show="isOpen" class="py-2 space-y-2"> <!-- 🔥 `v-show` au lieu de `hidden` -->
      <!-- <li v-for="subItem in item.children" :key="subItem.title">
        <NuxtLink :to="subItem.link"
          class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-all duration-300">
          {{ subItem.title }}
        </NuxtLink>
      </li> -->
      <NavigationDrawerItem v-for="subItem in item.children" :key="subItem.title" :item="subItem" />
    </ul>
  </li>
</template>
