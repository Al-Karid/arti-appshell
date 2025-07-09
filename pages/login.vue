//Login.vue
<script setup lang="ts">
import type { Login } from "~/types/auth.type";

definePageMeta({
  layout: "login",
  public: true,
});

useHead({
  title: "Connexion",
  meta: [
    {
      name: "description",
      content: "Page de connexion pour l'application SGI de l'ARTI",
    },
  ],
});

const router = useRouter();
const { login } = useAuth();

const username = ref("");
const password = ref("");
const errorMessage = ref("");
const loading = ref(false);

const handleLogin = async () => {
  errorMessage.value = "";
  loading.value = true;

  if (username.value.includes("@")) {
    username.value = username.value.split("@")[0];
  }

  try {
    // Use the auth composable properly
    const user: Login = { username: username.value, password: password.value };
    await login(user);

    await nextTick(); // Wait for updates
    //await useMissionStore().fetchMissions();

    router.push("/");
  } catch (error) {
    errorMessage.value = "Nom d'utilisateur ou mot de passe incorrect";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <!-- <LoginLoadingSpinner /> -->
  <div
    class="flex items-center h-screen justify-center bg-gray-50 dark:bg-gray-900 relative"
  >
    <!-- Overlay -->
    <LoginLoadingSpinner v-if="loading" />

    <div
      class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img src="/logo.png" alt="Logo" class="w-32 h-16" />
      </div>

      <!-- Title -->
      <h2 class="text-2xl font-bold text-center text-gray-700 dark:text-white">
        Authentification
      </h2>
      <p class="text-sm text-center text-gray-600 dark:text-gray-400">
        Veuillez vous connecter pour continuer
      </p>

      <!-- Login Form -->
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nom d'utilisateur
        </label>
        <input
          id="email"
          v-model="username"
          class="block w-full px-4 py-2 text-sm text-gray-900 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="user.name@arti.ci"
          required
        />
      </div>

      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Mot de passe
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="block w-full px-4 py-2 text-sm text-gray-900 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="••••••••"
          required
        />
      </div>

      <p v-if="errorMessage" class="text-sm text-red-500">
        {{ errorMessage }}
      </p>

      <!-- Submit Button (Disabled when loading) -->
      <button
        @click="handleLogin"
        :disabled="loading"
        class="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 disabled:opacity-50"
      >
        Se connecter
      </button>

      <!-- Footer -->
      <div class="text-sm text-center text-gray-500 dark:text-gray-400">
        Vous avez des difficultés à vous connecter ?
        <a
          href="/register"
          class="text-blue-600 hover:underline dark:text-blue-400"
        >
          Signaler
        </a>
      </div>
    </div>
  </div>
</template>
