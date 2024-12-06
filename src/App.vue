<script setup></script>

<template>
  <div class="container_display">
    <div class="display">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.container_display {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--bg-color);
  padding: 25px;
}

.display {
  position: relative;
  background-color: #ffffff;
  border: 2px solid lightsalmon;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  max-width: 762px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
