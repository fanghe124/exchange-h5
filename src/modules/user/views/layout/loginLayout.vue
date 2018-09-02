<template>
    <div class="m-login" @keyup.enter="onLogin">
        <x-header title="" :left-options="{backText: ''}">
            <!--<span class="m-exchange__tools" slot="overwrite-left"-->
            <!--@click="drawerVisibility = !drawerVisibility">-->
            <!--<span class="m-exchange__tools-icon" slot="icon">-->
            <!--<i class="mcicon-category"></i>-->
            <!--</span>-->
            <!--</span>-->
        </x-header>


        <div class="m-container">
            <keep-alive>
                <router-view class="router-view"/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import { XHeader } from 'vux'

    export default {
        name: 'LoginLayout',
        data () {
            return {}
        },
        created () {},
        methods: {},
        components: {
            XHeader
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-login {

        height: 100%;
        text-align: center;
        overflow: hidden;
        padding: 0 $m--space;
        background-color: white;

        a {
            color: $m--brand-color !important;
        }

        .weui-cell {
            border: 1px solid get-color(light, panel) !important;
            margin-bottom: 2rem;
            padding: 12px 15px !important;
            font-size: get-font-size(regular, '++');
        }

        .weui-cell:before {
            border: none !important;
        }

        .weui-cells {
            margin: 0 !important;
            font-size: 1.2rem !important;

            &:before {
                border-top: 0 !important;
            }

            &:after {
                border-bottom: 0 !important;
            }
        }

        .m-login__logo-wrap {
            margin: 2rem 0;

            .app-logo {
                width: 150px;
            }
            .app-name {
                font-size: 18px;
                color: get-color(light, muted);
                font-weight: normal;
                line-height: 25px;
            }
        }

        .m-login__login {
            .m-login__login-title {
                margin: 3rem 0;
            }
            .m-login__login__form {

            }
            .m-login__login__body {
                margin-top: 2.5rem;
                font-size: get-font-size(regular, '++');
                line-height: 2.5rem !important;

                .m-login__login__body__action {
                    margin-top: 2rem;
                    .m-login__login__body__action-forget {
                        display: block;
                    }
                    .m-login__login__body__action-reg {
                        display: block;
                    }
                }
            }
        }

    }

</style>
