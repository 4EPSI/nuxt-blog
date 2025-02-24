export default defineNuxtRouteMiddleware((to, from) => {
  if (to.matched.length === 0) {
    return { path: '/404', statusCode: 404 }
  }
})