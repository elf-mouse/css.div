<template>
  <div class="container">
    <nav class="navigation">
      <my-menu></my-menu>
    </nav>
    <div class="content">
      <div :class="['element', className]" :id="elementId">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import MyMenu from '../components/my-menu';

const commonElements = ['cactus', 'raffle'];

export default {
  name: 'app',
  components: {
    MyMenu
  },
  data() {
    return {
      className: ''
    };
  },
  computed: {
    elementId() {
      let id = this.$route.path ? this.$route.path.replace('/', '') : false;

      for (let value of commonElements) {
        let re = new RegExp(value);

        if (re.test(id)) {
          this.className = value;
          break;
        }
      }

      return id;
    }
  }
};
</script>
