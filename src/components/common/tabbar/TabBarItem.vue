<template>
    <div id="tab-bar-item" @click = 'btnClick'>
        <div v-if = "!active"><slot name = 'imgbar'></slot></div>
        <div v-else><slot name = 'imgbar-btn'></slot></div>
        <div :style = 'styleColor'><slot name = 'textbar'></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: '',
            textColor: {
                type: String,
                default: 'red',
            }
        },
        data() {
            return {
                // active: true
            };
        },
        components: {

        },
        computed: {
            active() {
                return this.$route.path.indexOf(this.path) !== -1
                    // return true
            },
            styleColor() {
                return this.active ? {
                    color: this.textColor
                } : {}
            }
        },
        mounted() {},
        methods: {
            btnClick() {
                this.$router.push(this.path).catch(err => {})
            },
        }
    }
</script>

<style scoped>

</style>