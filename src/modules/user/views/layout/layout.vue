<template>
    <div class="m-content">
        <div class="m-container">
            <keep-alive>
                <router-view class="router-view"/>
            </keep-alive>
        </div>

        <tabbar class="m-tabbar" icon-class="vux-center" v-show="showTabbar" slot="bottom">
            <tabbar-item :link="{path:'/home'}" :selected="$route.path === '/home'" class="m-tabbar__item">
                <span class="m-tabbar__item_icon" slot="icon">
                    <i class="mcicon-home"></i>
                </span>
                <span class="m-tabbar__item_label" slot="label">首页</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/exchange'}" :selected="$route.path === '/exchange'" class="m-tabbar__item">
                <span class="m-tabbar__item_icon" slot="icon">
                    <i class="mcicon-hot"></i>
                </span>
                <span class="m-tabbar__item_label" slot="label">交易</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/account'}" :selected="$route.path === '/account'" class="m-tabbar__item">
                <span class="m-tabbar__item_icon" slot="icon">
                    <i class="mcicon-jewelry"></i>
                </span>
                <span class="m-tabbar__item_label" slot="label">资产</span>
            </tabbar-item>
            <tabbar-item :link="{path:'/user'}" :selected="$route.path === '/user'" class="m-tabbar__item">
                <span class="m-tabbar__item_icon" slot="icon">
                    <i class="mcicon-account"></i>
                </span>
                <span class="m-tabbar__item_label" slot="label">我的</span>
            </tabbar-item>

        </tabbar>
    </div>
</template>

<script>
    import {
        Tabbar,
        TabbarItem
    } from 'vux'

    export default {
        name: 'page',
        directives: {},
        data () {
            return {
                showMenu: false,
                showTabbar: true,
                menus: {}
            }
        },
        created () {},
        computed: {},
        methods: {},
        components: {
            Tabbar,
            TabbarItem
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/assets/css/mc/config.scss";

    .m-content{
        height:100%;
        .m-container{
            margin-bottom: 200px;
            height:100%;
        }

        .m-tabbar {
            position:fixed;
            .m-tabbar__item {
                .m-tabbar__item_icon {
                    font-size: 24px;
                    position: relative;
                    bottom: 3px;
                }
            }

            .weui-bar__item_on {
                .m-tabbar__item_icon {
                    color: array-get($m--state-colors, brand, base) !important;
                }
                .m-tabbar__item_label {
                    color: array-get($m--state-colors, brand, base) !important;
                }
            }
        }
    }

</style>
