<template>
  <ul>
    <li v-for="item in menu" :key="item">
      <router-link activeClass="active" :to="item">{{ item }}</router-link>
    </li>
  </ul>
</template>

<script>
import menu from '@/data/menu.json';

export default {
  name: 'my-menu',
  data() {
    return {
      menu
    };
  }
};
</script>
