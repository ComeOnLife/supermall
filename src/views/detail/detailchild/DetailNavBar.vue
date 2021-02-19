<template>
  <div>
    <nav-bar class="navbar">
      <div slot="left" class="left">
        <div>
          <img src="~assets/img/common/back.svg" alt="" @click = backClick>
        </div>
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in title"
         class="title" :key="index" 
         :class="{active: currentIndex === index}" 
         @click = titleClick(index)>{{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  mounted () {},
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('navBarClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .center {
    display: flex;
    font-size: 13px;
  }
  .title {
    flex: 1;
  }
  .active {
    color: red;
  }
  .left img{
    margin: 10px 15px 10px;
  }
</style>