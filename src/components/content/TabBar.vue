<template>
    <div id="tab-bar">
         <tab-bar-item id="tab-bar-item" path = '/home' >
            <img slot = 'imgbar' src="~assets/img/tabbar/home.svg" alt="">    
            <img slot = 'imgbar-btn' src="~assets/img/tabbar/home_active.svg" alt="">   
            <div slot="textbar">首页</div>
         </tab-bar-item>
         <tab-bar-item id="tab-bar-item" path = '/category'>
            <img slot = 'imgbar' src="~assets/img/tabbar/category.svg" alt="">  
            <img slot = 'imgbar-btn' src="~assets/img/tabbar/category_active.svg" alt="">    
            <div slot="textbar">分类</div>
         </tab-bar-item>
         <tab-bar-item id="tab-bar-item" path = '/cart'>
            <img slot = 'imgbar' src="~assets/img/tabbar/cart.svg" alt="">   
            <img slot = 'imgbar-btn' src="~assets/img/tabbar/cart_active.svg" alt=""> 
            <div slot="textbar">购物车</div>
         </tab-bar-item>
         <tab-bar-item id="tab-bar-item" path = '/profile'>
            <img slot = 'imgbar' src="~assets/img/tabbar/profile.svg" alt="">  
            <img slot = 'imgbar-btn' src="~assets/img/tabbar/profile_active.svg" alt="">  
            <div slot="textbar">我的</div>
         </tab-bar-item>
    </div>
</template>

<script>
    import TabBarItem from "components/common/tabbar/TabBarItem.vue"
    export default {
        name: 'TabBar',
        data() {
            return {

            };
        },
        components: {
            TabBarItem
        },
        mounted() {},
        methods: {}
    }
</script>

<style scoped>
    #tab-bar {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #a59e9e27;
        box-shadow: 0, -1px, 1px, rgba(100, 100, 100, .1);
        z-index: 10;
        background-color: #fff;
    }
    
    #tab-bar-item {
        flex: 1;
        font-size: 16px;
        text-align: center;
        font-weight: 600;
        color: black;
    }
    
    #tab-bar-item img {
        width: 32px;
        height: 32px;
    }
</style>