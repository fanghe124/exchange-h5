<template>
    <div class="">
        提币
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";
</style>

<script>
    import { XHeader, Group, Cell, XButton } from 'vux'

    export default {
        name: 'Withdraw',
        data () {
            return {
                imgList: []
            }
        },
        created () {
        },
        methods: {},

        components: {
            Group,
            XHeader,
            Cell,
            XButton
        }
    }
</script>
