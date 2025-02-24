<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="">
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.descr">Descr:</AppInput>
        <AppInput v-model="post.img">Img Link:</AppInput>
        <ClientOnly >
          <AppTextArea v-model="post.content">Content:</AppTextArea>
        </ClientOnly>

        <div class="controls">
          <AppButton @click="cancel" class="btnDanger">Cancel</AppButton>
          <AppButton @click="onSubmit">Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const router = useRouter()
const emit = defineEmits(['submit'])

const props = defineProps({
  postEdit: {
    type: Object,
    required: false,
    default: () => null
  }
})

const post = ref(props.postEdit ? props.postEdit : {
  title: '',
  descr: '',
  img: '',
  content: ''
})

const onSubmit = () => {
  emit('submit', post.value)
}

const cancel = () => {
  router.push('/admin')
}
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
  .btnDanger {
    margin-right: 12px;
  }
}
</style>