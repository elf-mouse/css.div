<template>
  <div class="container">
    <nav class="navigation">
      <my-menu></my-menu>
    </nav>
    <div class="content">
      <div class="element" :id="elementId">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import MyMenu from '../components/my-menu';

export default {
  name: 'app',
  components: {
    MyMenu
  },
  computed: {
    elementId() {
      return this.$route.path ? this.$route.path.replace('/', '') : false;
    }
  }
};
</script>
