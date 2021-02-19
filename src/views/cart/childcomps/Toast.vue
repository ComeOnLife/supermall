<template>
  <div class="toast">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgba(0, 0 ,0, .8);
  transform: translate(-50%, -50%);
  padding: 8px;
  color: #fff;
}
</style>