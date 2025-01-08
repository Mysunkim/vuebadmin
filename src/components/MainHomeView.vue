<template>
    <div>
      <MenuNavBar/>
      <h1>MainHomepage</h1>
      <img :src="mainImage" />
    </div>
  </template>
  
  <script setup lang="ts">
  import MenuNavBar from './MenuNavBar.vue';
  import mainImage from '@/assets/image/mainpagebg.png';
  </script>
  
  <style scoped>
  </style>