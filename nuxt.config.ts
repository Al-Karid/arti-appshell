export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    appshellCoockieName: "appshell-auth",
    appshellAuthStateName: "appshell-auth",
    appshellAuthBaseUrl: "http://se.arti.local:4000",
    appshellAuthUrl: "/api/auth/login-dev"
  }
})
