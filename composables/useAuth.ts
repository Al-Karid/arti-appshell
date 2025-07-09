import type { Login, UserPermissions } from "@/types/auth.type";

export const useAuth = () => {

  const cookie = useCookie<UserPermissions | null>("appshell-auth", { default: () => null });
  const state = useState<UserPermissions | null>("appshell-auth", () => cookie.value);

  // Synchronise les modifications
  watch(state, (val) => { cookie.value = val });
  watch(cookie, (val) => { state.value = val });

  // Si le cookie est supprimé/expiré côté client → déconnexion automatique
  if (import.meta.client) {
    watchEffect(() => { if (!cookie.value && state.value) { state.value = null; } });
  }

  const isLoggedIn = computed(() => !!state.value);
  const user = computed(() => state.value?.user || null);
  const roles = computed(() => state.value?.roles || []);
  const permissions = computed(() => state.value?.roles || []);

  const login = async (data: Login) => {
    await $fetch("/api/auth/login", { method: "POST", body: data }).then((response) => {
      if (!response) { throw new Error("Login failed") }
      state.value = response as UserPermissions;
    });
  };

  const logout = () => {
    state.value = null;
    cookie.value = null;

    //TODO Clear all stores

    useRouter().push("/login");
  };

  return {
    auth: state,
    user,
    roles,
    permissions,
    isLoggedIn,
    login,
    logout,
  };
};
