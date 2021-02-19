<template>
  <div class="goods-list">
    <goods-list-item v-for = "item in goods" :goods-item="item" :key='item.page'/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      
    };
  },
  components: {GoodsListItem},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 3px;
}
</style>