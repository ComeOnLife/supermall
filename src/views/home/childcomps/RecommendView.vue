<template>
  <div class="recommend-view">
    <a :href="recommends.link" v-for = 'item in recommends' class="recommend-href">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
    export default {
        name: 'RecommendView',
        props: {
            recommends: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {

            };
        },
        components: {

        },
        mounted() {},
        methods: {}
    }
</script>

<style scoped>
    .recommend-view {
        display: flex;
        text-align: center;
        font-size: 12px;
        padding-bottom: 15px;
        border-bottom: 6px solid #eee;
    }
    
    .recommend-href {
        flex: 1;
    }
    
    .recommend-href img {
        width: 90%;
        margin: 10px 0 5px;
    }
</style>