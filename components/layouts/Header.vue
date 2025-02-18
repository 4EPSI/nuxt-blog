<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <nuxt-link class="logo" to="/">Nuxt</nuxt-link>
          <ul class="navbar-list">
            <li v-for="link in links" :key="link.name" class="navbar-item">
              <nuxt-link class="navbar-link" :to="link.path">{{ link.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' }
]
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>