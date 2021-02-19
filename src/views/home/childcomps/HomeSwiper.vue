<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.length">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
    
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper'
    export default {
        name: 'HomeSwiper',
        props: {
            banners: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {
              counter: 1
            };
        },
        components: {
            Swiper,
            SwiperItem
        },
        mounted() {},
        methods: {
          swiperLoad() {
            if(this.counter >= 3) {
              // console.log('111');
              this.$emit('homeSwiperLoad')
            }
            this.counter++
          }
        }
    }
</script>

<style scoped>

</style>