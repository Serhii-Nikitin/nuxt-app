// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.css"],
  nitro: {
    preset: "node-server",
  },
  modules: ["nuxt-bootstrap-icons"],
  // Optionally, customize the way of rendering icons
  bootstrapIcons: {
    renderType: "component", // or 'inline' (which is the default)
  },
});
