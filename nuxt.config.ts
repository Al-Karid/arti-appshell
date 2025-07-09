// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    appshellCoockieName: "appshell-auth",
    appshellAuthStateName: "appshell-auth",
    appshellAuthBaseUrl: "http://se.arti.local:4000",
    appshellAuthUrl: "/api/auth/login"
  }
})
