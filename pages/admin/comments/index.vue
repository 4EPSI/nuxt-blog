<template>
  <commentTable 
    :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <template #tbody>
      <tbody>
        <tr v-for="comment in comments" :key="comment.id">
          <td><span>{{ comment.name }}</span></td>
          <td><span>{{ comment.text }}</span></td>
          <td>
            <span v-if="comment.status" class="status true">Publish</span>
            <span v-else class="status false">Hiden</span>
            <!-- <span :class="['status', comment.status ? 'true' : 'false']">
              {{ comment.status ? 'Publish' : 'Hidden' }}
            </span> -->
          </td>
          <td><span @click="changeComment(comment.id)" class="link">Change Status</span></td>
          <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
        </tr>
      </tbody>
    </template>
  </commentTable>
</template>

<script setup>
import commentTable from '@/components/Admin/CommentTable.vue'

const comments = ref([])

definePageMeta({
  layout: 'admin'
})

onMounted(() => {
  setTimeout(() => {
    comments.value = [
      { id: 1, name: 'Alex', text: 'Lorem ipsum dolor sit amet', status: true },
      { id: 2, name: 'Costa', text: 'Lorem ipsum dolor sit amet', status: false },
    ]
  }, 1000)
})

const changeComment = (id) => {
  console.log(`change comment id ${id}`)
}

const deleteComment = (id) => {
  console.log(`Delete comment id ${id}`)
}
</script>