<template>
  <header class="header">
    <h1>Nomad Map</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
.header {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  height: 60px; /* 高さを固定 */
  box-sizing: border-box; /* パディングを含めた高さを計算 */
}
.header nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.header nav ul li a {
  text-decoration: none;
  color: #007bff;
}
</style>