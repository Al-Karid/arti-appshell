<script setup lang="ts">
import { initDropdowns } from "flowbite";

const { user, logout } = useAuth();

onMounted(() => {
  useFlowbite(() => {
    initDropdowns();
  });
});
</script>
<template>
  <div class="flex items-center lg:order-2">
    <button
      type="button"
      class="flex mx-3 text-sm border-none items-center rounded-full md:mr-0 focus:ring-0 focus:ring-gray-300 dark:focus:ring-gray-600"
      id="user-menu-button"
      data-dropdown-toggle="dropdown"
    >
      <span class="sr-only">Open user menu</span>
      <img
        class="w-8 h-8 mx-2 rounded-full"
        src="/public/user.png"
        alt="user photo"
      />
      <span class="hidden md:inline text-gray-900 dark:text-white mr-1">{{
        user?.username ? user.fullname : "Utilisateur"
      }}</span>
      <Icon
        name="tabler:chevron-down"
        class="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      />
    </button>
    <!-- Dropdown menu -->
    <div
      class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      id="dropdown"
    >
      <div class="py-3 px-4">
        <span
          class="block text-sm font-semibold text-gray-900 dark:text-white"
          >{{ user?.fullname }}</span
        >
        <span class="block text-sm text-gray-900 truncate dark:text-white"
          >{{ user?.username }}@arti.ci</span
        >
      </div>

      <!-- <ul class="py-1 text-gray-700 dark:text-gray-300">
        <li>
          <a href="#"
            class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
            Direction: {{ user.department }}</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Role:
            {{ getAuthorityLabel(user.role[0]) }}</a>
        </li>
      </ul> -->

      <!-- <ul v-if="user.isApprover" class="py-1 text-gray-700 dark:text-gray-300">
        <li v-if="!userIsRealApprover(user)">
          <a href="#"
            class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
            Intérimaire : Oui</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
            Etape validation : {{ approverStore.getApproverByDelegate(user.username)?.title }}</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
            Valide pour : {{ approverStore.getApproverByDelegate(user.username)?.fullname }}</a>
        </li>
      </ul> -->

      <ul
        class="py-1 text-gray-700 bg-red-100 hover:bg-red-200 dark:text-gray-300"
      >
        <li>
          <a
            @click="logout"
            class="block bg-red-100 py-2 px-4 text-sm cursor-default hover:bg-red-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >Déconnexion</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
