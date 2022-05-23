<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header> 
  <h2 class="text-2xl font-semibold">Vuex Store</h2>
  <p class="text-red-500">{{ $store.state.app.name }}</p>
  </header>
  <RouterView />
  <div class="text-blue-500 space-x-2">

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style>
@import "@/assets/tailwind.css";
</style>
