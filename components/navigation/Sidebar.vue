<script setup lang="ts">

const { can, isAdmin, hasRole } = useAbility();

const navigation = computed(() => ({
  create: [
    {
      title: "Nouvelle demande",
      link: "/form",
      icon: "tabler:edit",
      badge: null,
      collapsible: false,
    },
  ],
  userSpace: [
    {
      title: "Suivi des demandes",
      link: "/users/listing",
      icon: "tabler:list",
      badge: null,
      collapsible: true,
      children: [
        {
          title: "Demandes en cours",
          link: "/missions?listing=requested",
          icon: "tabler:chevron-right",
          badge: 0,
          collapsible: false,
        },
        {
          title: "Demandes différées",
          link: "/missions?listing=returned",
          icon: "tabler:chevron-right",
          badge: 0,
          collapsible: false,
        },
        {
          title: "Historique",
          link: "/missions?listing=requested-history",
          icon: "tabler:chevron-right",
          badge: 0,
          collapsible: false,
        },
      ],
    },
  ],
  editSpace: [
    {
      title: "Espace d'édition",
      link: "/admin/assets",
      icon: "tabler:edit",
      collapsible: true,
      children: [
        {
          title: "Fiches de mission",
          link: "/missions?listing=approved",
          icon: "tabler:chevron-right",
          collapsible: false,
        },
      ],
    },
  ],
  adminSpace: [
    {
      title: "Espace admin",
      link: "/admin/locations",
      icon: "tabler:lock",
      collapsible: true,
      children: [
        {
          title: "Localités",
          link: "/admin/locations",
          icon: "tabler:chevron-right",
          collapsible: false,
        },
      ],
    },
  ],
}));
</script>

<template>
  <ClientOnly>
    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      id="drawer-navigation">
      <div class="overflow-y-auto px-3 h-full bg-white dark:bg-gray-800">
        <!-- Menu items -->
        <ul v-if="isAdmin || can('manage', 'missions')" class="mt-5 space-y-2">
          <DrawerItem v-for="item in navigation.create" :key="item.title" :item="item" />
        </ul>
        <ul v-if="isAdmin || can('manage', 'missions')"
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <DrawerItemCollapsible v-for="item in navigation.userSpace" :key="item.link" :item="item" />
        </ul>
        <ul v-if="isAdmin || can('manage', 'missions') || can('manage', 'members')"
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <DrawerItemCollapsible v-for="item in navigation.editSpace" :key="item.link" :item="item" />
        </ul>
        <ul v-if="isAdmin"
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <DrawerItemCollapsible v-for="item in navigation.adminSpace" :key="item.link" :item="item" />
        </ul>
      </div>

      <div
        class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-red dark:bg-gray-800 z-20">
        <h2>Fournitures ARTI ™</h2>
      </div>
    </aside>
  </ClientOnly>
</template>
