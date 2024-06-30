export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:craeted", () => {
    console.log("Hello from plugin");
  });
});
