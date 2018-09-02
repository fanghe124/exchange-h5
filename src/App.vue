<template>
    <div id="app" class="m-body">
        <div v-transfer-dom>
            <loading v-model="isLoading"></loading>
        </div>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    @import '~vux/src/styles/tap.less';

    body {
        background-color: #fbf9fe;
        overflow-x: hidden;
    }
    .m-body {
        height:100%;
    }

</style>

<script>
    import { Loading, TransferDom } from 'vux'
    import { mapState } from 'vuex'
    export default {
        name: 'app',
        directives: {
            TransferDom
        },
        computed: {
            ...mapState({
                isLoading: state => state.isLoading
            })
        },
        components: {
            Loading,
            TransferDom
        }
    }
</script>
