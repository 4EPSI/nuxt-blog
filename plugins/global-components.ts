export default defineNuxtPlugin((nuxtApp) => {
  // UI
  nuxtApp.vueApp.component('Message', defineAsyncComponent(() => import('@/components/UI/Message.vue')))
  nuxtApp.vueApp.component('Intro', defineAsyncComponent(() => import('@/components/UI/Intro.vue')))
  nuxtApp.vueApp.component('PostsList', defineAsyncComponent(() => import('@/components/Blog/PostsList.vue')))
  
  // Controls
  nuxtApp.vueApp.component('AppButton', defineAsyncComponent(() => import('@/components/UI/Controls/Button.vue')))
  nuxtApp.vueApp.component('AppInput', defineAsyncComponent(() => import('@/components/UI/Controls/Input.vue')))
  nuxtApp.vueApp.component('AppTextArea', defineAsyncComponent(() => import('@/components/UI/Controls/TextArea.vue')))
})