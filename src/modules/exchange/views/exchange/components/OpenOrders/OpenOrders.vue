<template>
    <div class="m-exchange__openorder">
        <div v-if="disabled" class="m-exchange__openorder__head">
            <div class="m-exchange__openorder__head-caption">
                <div class="m-exchange__openorder__head-title">
                    <h2 class="m-exchange__openorder__head-text">
                        当前委托
                    </h2>
                </div>
            </div>

            <div class="m-exchange__openorder__head-tools">
                <ul class="m-exchange__openorder__head__nav">
                    <li class="m-exchange__openorder__head__nav-item">
                        <router-link to="/exchange/openorder">
                            <span class="m-exchange__openorder__nav-link m-exchange__openorder__nav-link--icon">
                                <i class="mcicon-form"></i>
                                <span class="">全部</span>
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="m-exchange__openorder__body">
            <div class="m-exchange__openorder__body-item">
                <div class="m-exchange__openorder__body-item-1">
                        <span class="m-exchange__openorder__body-item-side m--font-danger">
                            卖出
                        </span>
                    <span class="m-exchange__openorder__body-item-pair">
                            FBC/BTC
                        </span>
                    <span class="m-exchange__openorder__body-item-name">
                            成交
                        </span>
                    <span class="m-exchange__openorder__body-item-filled">
                            2000
                        </span>
                </div>
                <div class="m-exchange__openorder__body-item-2">
                        <span class="m-exchange__openorder__body-item-date">
                            18-06-08 10:00:00
                        </span>
                    <span class="m-exchange__openorder__body-item-name">
                            数量
                        </span>
                    <span class="m-exchange__openorder__body-item-amount">
                            2000
                        </span>
                </div>
                <div class="m-exchange__openorder__body-item-3">
                        <span class="m-exchange__openorder__body-item-action">
                             <x-button mini plain type="primary" link="/">撤销</x-button>
                        </span>

                    <span class="m-exchange__openorder__body-item-name">
                            价格
                        </span>
                    <span class="m-exchange__openorder__body-item-price">
                            0.000400
                        </span>
                </div>
            </div>

            <div class="m-exchange__openorder__body-item">
                <div class="m-exchange__openorder__body-item-1">
                        <span class="m-exchange__openorder__body-item-side m--font-success">
                            买入
                        </span>
                    <span class="m-exchange__openorder__body-item-pair">
                            FBC/BTC
                        </span>
                    <span class="m-exchange__openorder__body-item-name">
                            成交
                        </span>
                    <span class="m-exchange__openorder__body-item-filled">
                            2000
                        </span>
                </div>
                <div class="m-exchange__openorder__body-item-2">
                        <span class="m-exchange__openorder__body-item-date">
                            18-06-08 10:00:00
                        </span>
                    <span class="m-exchange__openorder__body-item-name">
                            数量
                        </span>
                    <span class="m-exchange__openorder__body-item-amount">
                            2000
                        </span>
                </div>
                <div class="m-exchange__openorder__body-item-3">
                        <span class="m-exchange__openorder__body-item-action">
                             <x-button mini plain type="primary" link="/">撤销</x-button>
                        </span>

                    <span class="m-exchange__openorder__body-item-name">
                            价格
                        </span>
                    <span class="m-exchange__openorder__body-item-price">
                            0.000400
                        </span>
                </div>
            </div>

            <div class="m-exchange__openorder__body-item">
                <div class="m-exchange__openorder__body-item-1">
                        <span class="m-exchange__openorder__body-item-side m--font-danger">
                            卖出
                        </span>
                    <span class="m-exchange__openorder__body-item-pair">
                            FBC/BTC
                        </span>

                    <span class="m-exchange__openorder__body-item-name">
                            成交
                        </span>
                    <span class="m-exchange__openorder__body-item-filled">
                            2000
                        </span>
                </div>
                <div class="m-exchange__openorder__body-item-2">
                        <span class="m-exchange__openorder__body-item-date">
                            18-06-08 10:00:00
                        </span>
                    <span class="m-exchange__openorder__body-item-name">
                            数量
                        </span>
                    <span class="m-exchange__openorder__body-item-amount">
                            2000
                        </span>
                </div>
                <div class="m-exchange__openorder__body-item-3">
                        <span class="m-exchange__openorder__body-item-action">
                             <x-button mini plain type="primary" link="/">撤销</x-button>
                        </span>
                    <span class="m-exchange__openorder__body-item-name">
                            价格
                        </span>
                    <span class="m-exchange__openorder__body-item-price">
                            0.000400
                        </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-exchange__openorder {
        margin-top: $m--space;
        margin-bottom: $m--space;

        &__head {
            display: table;
            width: 100%;
            padding: 0 $m--space;
            height: 3.5rem;
            background-color: get-color(light, box);

            .m-exchange__openorder__head-caption {
                display: table-cell;
                vertical-align: middle;
                text-align: left;

                .m-exchange__openorder__head-title {
                    display: table;
                    table-layout: fixed;
                    height: 100%;

                    .m-exchange__openorder__head-icon {
                        display: table-cell;
                        vertical-align: middle;
                        line-height: 0;
                        padding: 0 13px 0 0;
                        color: get-color(light, icon, '++');

                        @include icons-attr(font-size, (fontawesome: 1.4rem, lineawesome: 1.6rem, metronic: 1.8rem));

                        i {
                            vertical-align: middle;
                            line-height: 0;
                            display: inline-block;
                            //margin-right: 0.5rem;
                        }
                    }

                    .m-exchange__openorder__head-text {
                        display: table-cell;
                        vertical-align: middle;
                        font-size: get-font-size(regular, '+++');
                        font-weight: get-font-weight(bolder);

                        small {
                            display: inline-block;
                            padding-left: 5px;
                            font-size: get-font-size(regular, '-');
                            font-weight: get-font-weight(normal);
                            color: get-color(light, muted);
                        }

                        .m-portlet__head-desc {
                            margin-top: 0.4rem;
                            display: block;
                            font-size: get-font-size(regular, '-');
                            font-weight: get-font-weight(normal);
                            color: get-color(light, muted);
                        }
                    }
                }
            }

            .m-exchange__openorder__head-tools {
                text-align: right;
                display: table-cell;
                vertical-align: middle;
                font-size: get-font-size(regular, '+');
                // portlet nac
                .m-exchange__openorder__head__nav {
                    display: table;
                    text-align: right;
                    float: right;
                    padding: 0;
                    margin: 0;
                    height: 100%;
                    list-style: none;

                    .m-exchange__openorder__head__nav-item {
                        height: 100%;
                        display: table-cell;
                        vertical-align: middle;
                        text-align: center;
                        padding: 0 5px;

                        &.m-exchange__openorder__head-item--last {
                            padding-right: 0;
                        }

                        .m-exchange__openorder__nav-link {
                            display: inline-block;
                            vertical-align: middle;
                            color: get-color(light, regular);

                            &.m-exchange__openorder__nav-link--icon {
                                padding: 0 2px;
                                i {
                                    vertical-align: middle;
                                    line-height: 0;
                                    display: inline-block;
                                    //margin-right: 0.5rem;
                                }

                                &:hover {
                                    i {
                                        color: get-brand-color()
                                    }
                                }
                            }

                            &:hover {
                                text-decoration: none;
                            }
                        }

                        &:first-child {
                            .m-portlet__nav-item {
                                padding-right: 0;
                            }
                        }
                    }
                }

                .nav.nav-tabs,
                .nav.nav-pills {
                    margin: 0;
                }

                .nav.nav-pills {
                    &.m-nav-pills--align-right {
                        float: right;
                    }
                }
            }

            border-color: array-get($m--state-colors, light, base);
            border-bottom: 1px solid get-color(light, panel);
        }

        .m-exchange__openorder__body {
            padding: 0 $m--space;
            background: white;
            font-size: get-font-size(regular, '+');

            .m-exchange__openorder__body-item {
                display: table;
                width: 100%;
                //padding-bottom: $m--space ;
                padding: $m--space 0px;
                border-bottom: 1px solid get-color(light, panel);

                .m-exchange__openorder__body-item-1 {
                    display: table-cell;
                    width: 40%;
                    vertical-align: top;
                }

                .m-exchange__openorder__body-item-2 {
                    width: 35%;
                    display: table-cell;
                    vertical-align: top;
                }

                .m-exchange__openorder__body-item-3 {
                    display: table-cell;
                    vertical-align: top;
                    text-align: right;
                }

                .m-exchange__openorder__body-item-name {
                    color: get-color(light, muted);
                    display: block;
                }

                .m-exchange__openorder__body-item-side {
                    /*font-weight: get-font-weight(bolder);*/
                }

                .m-exchange__openorder__body-item-pair {
                    /*font-weight: get-font-weight(bolder);*/
                    /*color: get-color(light, muted);*/
                    display: inline-block;
                }

                .m-exchange__openorder__body-item-price {
                    display: block;
                    font-weight: get-font-weight(bolder);
                }

                .m-exchange__openorder__body-item-date {
                    /*font-weight: get-font-weight(bolder);*/
                    /*color: get-color(light, muted);*/
                    display: block;
                }

                .m-exchange__openorder__body-item-amount {
                    display: block;
                    font-weight: get-font-weight(bolder);
                }

                .m-exchange__openorder__body-item-action {
                    display: block;
                }

                .m-exchange__openorder__body-item-filled {
                    display: block;
                    font-weight: get-font-weight(bolder);
                }

                .weui-btn {
                    padding-left: 15px;
                    padding-right: 15px;
                    font-size: get-font-size(regular);
                    line-height: 1.4;
                    border-radius: 0px;
                }

                .weui-btn_plain-primary {
                    color: array-get($m--state-colors, danger, base) !important;
                    border: 1px solid array-get($m--state-colors, danger, base) !important;
                }
            }
        }

        background-color: array-get($m--state-colors, light, base);
        border-color: array-get($m--state-colors, light, base);
    }

</style>

<script>
    import { XButton } from 'vux'

    export default {
        name: 'open-orders',
        props: {
            disabled: Boolean
        },

        data () {
            return {
                demo1: 1
            }
        },
        created () {
        },
        methods: {
            onItemClick (index) {
            }
        },

        components: {
            XButton
        }
    }
</script>
