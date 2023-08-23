<script setup></script>

<template>
  <button
    class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
  >
  <router-link to="/">Go to Home</router-link>
  </button>
  <button
    class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
  >
  <router-link to="/about">Go to About</router-link>
  </button>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<style scoped></style>
