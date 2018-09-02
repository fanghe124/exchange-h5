<template>
    <div class="">
        <x-header title="当前订单" :left-options="{backText: ''}">
                <a @click="linkToHistoryOrder()" class="m-exchange__openorder__nav-link m-exchange__openorder__nav-link--icon" slot="right">
                    <i class="mcicon-form"></i>
                    <span class="">历史订单</span>
                </a>
        </x-header>

        <open-orders class="m--marginless"></open-orders>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-exchange__openorder {
        .weui-cell {
            padding: 15px 15px!important;
        }
    }

</style>

<script>
    import { XHeader, Group, Cell } from 'vux'
    import OpenOrders from '../components/OpenOrders/OpenOrders.vue'

    export default {
        name: 'openorders',
        data () {
            return {
                imgList: []
            }
        },
        created () {
        },
        methods: {
            linkToHistoryOrder() {
                this.$router.push({ path: '/exchange/historyorder' })
            }
        },

        components: {
            Group,
            XHeader,
            Cell,
            OpenOrders
        }
    }
</script>
