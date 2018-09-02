<template>
    <div class="m-finance__list">
        <x-header title="充值记录" :left-options="{backText: ''}">
        </x-header>

        <div class="m-finance__list__body">
            <router-link to="/finance/show">
                <div class="m-finance__list__body-item">
                <div class="m-finance__list__body-item-1">

                    <span class="m-finance__list__body-item-side m--font-success">转入
                    </span>
                    <span class="m-finance__list__body-item-desc">直充
                    </span>
                </div>
                <div class="m-finance__list__body-item-2">
                    <span class="m-finance__list__body-item-pair">
                        FBC/BTC
                    </span>
                    <span class="m-finance__list__body-item-amount">
                        2000
                     </span>
                </div>
                <div class="m-finance__list__body-item-3">

                    <span class="m-finance__list__body-item-status">
                        成交
                    </span>
                    <span class="m-finance__list__body-item-date">
                            2018-06-08 10:00:00
                    </span>
                </div>
            </div>
            </router-link>
            <router-link to="/finance/show">
                <div class="m-finance__list__body-item">
                <div class="m-finance__list__body-item-1">

                    <span class="m-finance__list__body-item-side m--font-success">转入
                    </span>
                    <span class="m-finance__list__body-item-desc">直充
                    </span>
                </div>
                <div class="m-finance__list__body-item-2">
                    <span class="m-finance__list__body-item-pair">
                        FBC/BTC
                    </span>
                    <span class="m-finance__list__body-item-amount">
                        2000
                     </span>
                </div>
                <div class="m-finance__list__body-item-3">

                    <span class="m-finance__list__body-item-status">
                        成交
                    </span>
                    <span class="m-finance__list__body-item-date">
                            2018-06-08 10:00:00
                    </span>
                </div>
            </div>
            </router-link>
            <router-link to="/finance/show">
                <div class="m-finance__list__body-item">
                <div class="m-finance__list__body-item-1">

                    <span class="m-finance__list__body-item-side m--font-danger">提币
                    </span>
                    <span class="m-finance__list__body-item-desc">直充
                    </span>
                </div>
                <div class="m-finance__list__body-item-2">
                    <span class="m-finance__list__body-item-pair">
                        FBC/BTC
                    </span>
                    <span class="m-finance__list__body-item-amount">
                        2000
                     </span>
                </div>
                <div class="m-finance__list__body-item-3">

                    <span class="m-finance__list__body-item-status">
                        成交
                    </span>
                    <span class="m-finance__list__body-item-date">
                            2018-06-08 10:00:00
                    </span>
                </div>
            </div>
            </router-link>

        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-finance__list {
        .m-finance__list__body {
            padding: 0 $m--space;
            background: white;
            font-size: get-font-size(regular, '+');

            .m-finance__list__body-item {
                color: $m--font-color;
                display: table;
                width: 100%;
                //padding-bottom: $m--space ;
                padding: $m--space 0px;
                border-bottom: 1px solid get-color(light, panel);

                .m-finance__list__body-item-1 {
                    display: table-cell;
                    width: 35%;
                    vertical-align: top;
                }

                .m-finance__list__body-item-2 {
                    width: 25%;
                    display: table-cell;
                    vertical-align: top;
                }

                .m-finance__list__body-item-3 {
                    display: table-cell;
                    vertical-align: top;
                    text-align: right;
                }



                .m-finance__list__body-item-pair {
                    /*font-weight: get-font-weight(bolder);*/
                    display: inline-block;
                }

                .m-finance__list__body-item-amount {
                    /*color: get-color(light, muted);*/
                    display: block;
                }

                .m-finance__list__body-item-side {
                    /*font-weight: get-font-weight(bolder);*/
                    display: block;
                }

                .m-finance__list__body-item-desc {
                    /*font-weight: get-font-weight(bolder);*/
                    display: block;
                    color: get-color(light, muted);
                }

                .m-finance__list__body-item-status {
                    /*color: get-color(light, muted);*/
                    display: inline-block;
                }


                .m-finance__list__body-item-date {
                    /*color: get-color(light, muted);*/
                    display: block;
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
