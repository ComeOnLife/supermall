<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  components: {},
  mounted() {
    // setTimeout(() => {
      this.scroll = new BScroll(document.querySelector(".wrapper"), {
        click: true,
        probeType: this.probeType,
        pullUpLoad: true,
      }),
        this.scroll.on("scroll", (position) => {
          //  console.log(position);
          this.$emit("scroll", position);
        });
      this.scroll.on("pullingUp", () => {
        //  console.log('上拉加载更多');
        this.$emit("pullingUp");
      });
    // }, 500);
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style scoped>
</style>
