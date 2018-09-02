<template>

    <div class="m-exchange__drawer">
        <div class="m-exchange__drawer__head">
            <div class="m-exchange__drawer__head-caption">
                <h2 class="m-exchange__drawer__head-title">
                    市场
                </h2>
            </div>
            <div class="m-exchange__drawer__head-tools">
                <ul class="m-exchange__drawer__head__nav">
                    <li class="m-exchange__drawer__head__nav-item">
                        <span class="m-exchange__drawer__head__nav-link m-exchange__drawer__head__nav-link-icon">
                            <i class="mcicon-category"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="m-exchange__drawer__body">
            <tab :line-width=1 custom-bar-width="60px" class="m-exchange__drawer__tab">
                <tab-item :selected="nowTicker === item" v-for="(item, index) in tickerList"
                          @click="nowTicker = item" :key="index" @on-item-click="onItemClick">{{item}}
                </tab-item>
            </tab>

            <div class="m-exchange__drawer__body-item">
                <div class="m-exchange__drawer__body-item-pair">
                    FBC/USDT
                </div>
                <div class="m-exchange__drawer__body-item-price m--font-success">
                    0.0001
                </div>
                <div class="m-exchange__drawer__body-item-rate m--font-success">
                    +1.88
                </div>
            </div>

            <div class="m-exchange__drawer__body-item">
                <div class="m-exchange__drawer__body-item-pair">
                    FBC/ETH
                </div>
                <div class="m-exchange__drawer__body-item-price m--font-danger">
                    0.0002
                </div>
                <div class="m-exchange__drawer__body-item-rate m--font-danger">
                    -2.88
                </div>
            </div>

        </div>

    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-exchange__drawer {
        margin-top: $m--space;
        margin-bottom: $m--space;

        .m-exchange__drawer__head {
            display: flex;
            width: 100%;
            padding: 0 $m--space;
            height: 3.5rem;
            background-color: get-color(light, box);

            border-color: array-get($m--state-colors, light, base);
            border-bottom: 1px solid get-color(light, panel);

            .m-exchange__drawer__head-caption {
                flex: 2;
                vertical-align: middle;
                text-align: left;

                .m-exchange__drawer__head-title {
                    height: 100%;
                    font-size: get-font-size(regular, '+++') !important;
                    vertical-align: middle;
                    padding-top: 5px;
                }
            }

            .m-exchange__drawer__head-tools {
                text-align: right;
                flex: 1;
                vertical-align: middle;
                font-size: get-font-size(icon, '+++');
                .m-exchange__drawer__head__nav {

                    display: flex;
                    text-align: right;
                    float: right;
                    padding: 0;
                    margin: 0;
                    height: 100%;
                    list-style: none;

                    .m-exchange__drawer__head__nav-item {
                        height: 100%;
                        flex: 1;
                        text-align: center;
                        padding: 0 5px;

                        &.m-exchange__drawer__head__nav-item--last {
                            padding-right: 0;
                        }

                        .m-exchange__drawer__head__nav-link {
                            display: inline-block;
                            color: get-color(light, regular);

                            &.m-exchange__drawer__head__nav-link--icon {
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

                    }
                }
            }
        }

        .m-exchange__drawer__body {
            padding: 0 $m--space;
            background: white;
            font-size: get-font-size(regular, '+');

            .vux-tab .vux-tab-item.vux-tab-selected {
                color: get-color(light, muted) !important;
            }

            .m-exchange__drawer__tab {
                color: get-color(light, muted) !important;
                font-size: get-font-size(regular) !important;
            }

            .m-exchange__drawer__body-item {
                display: flex;
                width: 100%;
                //padding-bottom: $m--space ;
                padding: $m--space 0px;
                border-bottom: 1px solid get-color(light, panel);

                .m-exchange__drawer__body-item-pair {
                    font-weight: get-font-weight(bolder);
                    flex: 1;
                }

                .m-exchange__drawer__body-item-price {
                    flex: 1;
                    text-align: right;
                }

                .m-exchange__drawer__body-item-rate {
                    /*font-weight: get-font-weight(bolder);*/
                    /*color: get-color(light, muted);*/
                    flex: 1;
                    text-align: right;

                }

            }
        }

    }

</style>

<script>
    import { Tab, TabItem } from 'vux'

    export default {
        name: 'exchange-drawer',
        props: {
            disabled: Boolean
        },

        data () {
            return {
                demo1: 1,
                tickerList: ['FBC'],
                nowTicker: 'FBC',
                tab_index: 0
            }
        },
        created () {
        },
        methods: {
            onItemClick (index) {
            }
        },

        components: {
            Tab,
            TabItem
        }
    }
</script>
