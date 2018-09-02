<template>
    <div class="m-exchange__historyorder">
        <x-header title="历史订单" :left-options="{backText: ''}">
        </x-header>

        <div class="m-exchange__historyorder__body">
            <router-link to="/exchange/historyorder/show">
            <div class="m-exchange__historyorder__body-item">
                <div class="m-exchange__historyorder__body-item-1">
                    <span class="m-exchange__historyorder__body-item-side m-badge m-badge--danger m-badge--wide">卖出
                    </span>
                    <span class="m-exchange__historyorder__body-item-pair">
                        FBC/BTC
                    </span>
                    <span class="m-exchange__historyorder__body-item-status">
                        成交
                    </span>
                    <span class="m-exchange__historyorder__body-item-date">
                            2018-06-08 10:00:00
                    </span>
                </div>
                <div class="m-exchange__historyorder__body-item-2">

                    <span class="m-exchange__historyorder__body-item-filled">
                            2000
                    </span>
                    <span class="m-exchange__historyorder__body-item-amount">
                            2000
                     </span>
                </div>
                <div class="m-exchange__historyorder__body-item-3">
                    <span class="m-exchange__historyorder__body-item-dealprice">
                            0.000400
                    </span>
                    <span class="m-exchange__historyorder__body-item-price">
                            0.000400
                    </span>
                </div>
            </div>
            </router-link>

            <div class="m-exchange__historyorder__body-item">
                <div class="m-exchange__historyorder__body-item-1">
                    <span class="m-exchange__historyorder__body-item-side m-badge m-badge--success m-badge--wide">买入
                    </span>
                    <span class="m-exchange__historyorder__body-item-pair">
                        FBC/BTC
                    </span>
                    <span class="m-exchange__historyorder__body-item-status m--font-warning">
                        撤销
                    </span>
                    <span class="m-exchange__historyorder__body-item-date">
                            2018-06-08 10:00:00
                    </span>
                </div>
                <div class="m-exchange__historyorder__body-item-2">

                    <span class="m-exchange__historyorder__body-item-filled">
                            2000
                    </span>
                    <span class="m-exchange__historyorder__body-item-amount">
                            2000
                     </span>
                </div>
                <div class="m-exchange__historyorder__body-item-3">
                    <span class="m-exchange__historyorder__body-item-dealprice">
                            0.000400
                    </span>
                    <span class="m-exchange__historyorder__body-item-price">
                            0.000400
                    </span>
                </div>
            </div>

            <div class="m-exchange__historyorder__body-item">
                <div class="m-exchange__historyorder__body-item-1">
                    <span class="m-exchange__historyorder__body-item-side m-badge m-badge--success m-badge--wide">买入
                    </span>
                    <span class="m-exchange__historyorder__body-item-pair">
                        FBC/BTC
                    </span>
                    <span class="m-exchange__historyorder__body-item-status">
                        成交
                    </span>
                    <span class="m-exchange__historyorder__body-item-date">
                            2018-06-08 10:00:00
                    </span>
                </div>
                <div class="m-exchange__historyorder__body-item-2">

                    <span class="m-exchange__historyorder__body-item-filled">
                            2000
                    </span>
                    <span class="m-exchange__historyorder__body-item-amount">
                            2000
                     </span>
                </div>
                <div class="m-exchange__historyorder__body-item-3">
                    <span class="m-exchange__historyorder__body-item-dealprice">
                            0.000400
                    </span>
                    <span class="m-exchange__historyorder__body-item-price">
                            0.000400
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-exchange__historyorder {
        .m-exchange__historyorder__body {
            padding: 0 $m--space;
            background: white;
            font-size: get-font-size(regular, '+');

            .m-exchange__historyorder__body-item {
                color: $m--font-color;
                display: table;
                width: 100%;
                //padding-bottom: $m--space ;
                padding: $m--space 0px;
                border-bottom: 1px solid get-color(light, panel);

                .m-exchange__historyorder__body-item-1 {
                    display: table-cell;
                    width: 55%;
                    vertical-align: top;
                }

                .m-exchange__historyorder__body-item-2 {
                    width: 35%;
                    display: table-cell;
                    vertical-align: top;
                }

                .m-exchange__historyorder__body-item-3 {
                    display: table-cell;
                    vertical-align: top;
                    text-align: right;
                }

                .m-exchange__historyorder__body-item-side {
                    /*font-weight: get-font-weight(bolder);*/
                }

                .m-exchange__historyorder__body-item-pair {
                    /*font-weight: get-font-weight(bolder);*/
                    display: inline-block;
                }

                .m-exchange__historyorder__body-item-status {
                    color: get-color(light, muted);
                    display: inline-block;
                }

                .m-exchange__historyorder__body-item-filled {
                    display: block;
                    /*font-weight: get-font-weight(bolder);*/
                }

                .m-exchange__historyorder__body-item-date {
                    color: get-color(light, muted);
                    display: block;
                }

                .m-exchange__historyorder__body-item-amount {
                    color: get-color(light, muted);
                    display: block;
                }

                .m-exchange__historyorder__body-item-dealprice {
                    display: block;
                    /*font-weight: get-font-weight(bolder);*/
                }

                .m-exchange__historyorder__body-item-price {
                    display: block;
                    color: get-color(light, muted);
                }

            }
        }

        .m-badge.m-badge--wide {
            letter-spacing: 0.6px;
            padding: 1px 10px;
        }

        .m-badge {
            line-height: 16px !important;
            min-height: 16px !important;
            min-width: 16px !important;
        }

        background-color: array-get($m--state-colors, light, base);
        border-color: array-get($m--state-colors, light, base);
    }

</style>

<script>
    import { XHeader, Group, Cell } from 'vux'

    export default {
        name: 'historyorders',
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
            Cell
        }
    }
</script>
