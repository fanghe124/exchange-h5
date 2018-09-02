<template>
    <div style="height:100%;">
        <drawer
            :show.sync="drawerVisibility"
            :show-mode="showModeValue"
            :placement="showPlacementValue"
            :drawer-style="{ width: '280px' }">

            <div slot="drawer">
                <exchange-drawer></exchange-drawer>
            </div>

            <div>
                <div class="m-exchange">
                    <x-header class="m-exchange__header" title="" :left-options="{backText: ''}">
                     <span class="m-exchange__tools" slot="overwrite-left"
                           @click="drawerVisibility = !drawerVisibility">
                          <span class="m-exchange__tools-icon" slot="icon">
                              <i class="mcicon-category"></i>
                          </span>
                         <span class="m-exchange__tools-text">
                             FBC/USDT
                         </span>
                         <span class="m-exchange__tools-desc">
                             切换
                         </span>
                      </span>
                    </x-header>
                    <div class="m-exchange__trade">
                        <div class="m-exchange__orderbook-ticker">
                            <h1 class="m-exchange__orderbook-ticker-price m--font-success">
                                1.2000
                            </h1>
                            <span class="m-exchange__orderbook-ticker-rmb">
                        ≈40881.18CNY
                    </span>
                        </div>
                        <div class="m-exchange__orderbook">
                            <div class="m-exchange__orderbook-buy">
                                <div class="m-exchange__orderbook-header">
                                    <span class="m-exchange__orderbook-hand">买</span>
                                    <span class="m-exchange__orderbook-amount">数量</span>
                                    <span class="m-exchange__orderbook-price">价格</span>
                                </div>
                                <div class="m-exchange__orderbook-depth">
                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-hand">1</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 18.88303652198117%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-hand">2</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 60%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-hand">3</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 41.8%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-hand">4</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 0%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-hand">5</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 12%"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="m-exchange__orderbook-sell">
                                <div class="m-exchange__orderbook-header">
                                    <span class="m-exchange__orderbook-price">价格</span>
                                    <span class="m-exchange__orderbook-amount">数量</span>
                                    <span class="m-exchange__orderbook-hand">卖</span>
                                </div>
                                <div class="m-exchange__orderbook-depth">
                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-hand">1</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 8.88303652198117%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-hand">2</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 48.88303652198117%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-hand">3</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 28.88303652198117%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-hand">4</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 88.88303652198117%"></span>
                                    </div>

                                    <div class="m-exchange__orderbook-depth-item">
                                        <span class="m-exchange__orderbook-price">539.59</span>
                                        <span class="m-exchange__orderbook-amount">5.4232</span>
                                        <span class="m-exchange__orderbook-hand">5</span>
                                        <span class="m-exchange__orderbook-bg" style="width: 28.88303652198117%"></span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="m-exchange__tradepanel">
                            <div class="m-exchange__tradepanel-tab">
                                <tab :line-width=0 custom-bar-width="0px">
                                    <tab-item :selected="selected === item" v-for="(item, index) in exchangeMenu"
                                              @click="selected = item" :key="index"
                                              :active-class="'m-exchange__tradepanel-tab-title'+tab_index"
                                              @on-item-click="onItemClick">
                                        {{item}}
                                    </tab-item>
                                </tab>
                            </div>

                            <NumberInput
                                :min="0"
                                :max="10"
                                :controls=0
                                :integerOnly="true"
                            />

                            <NumberInput
                                :min="0"
                                :max="10"
                                :controls=1
                                :integerOnly="true"
                            />

                            <div class="m-exchange__tradepanel-available">
                        <span class="m-exchange__tradepanel-available-text">
                            可用
                        </span>
                                <span class="m-exchange__tradepanel-available-value">
                            1 BTC
                        </span>
                            </div>

                            <div class="m-exchange__tradepanel-total">
                        <span class="m-exchange__tradepanel-total-text">
                            交易额
                        </span>
                                <span class="m-exchange__tradepanel-total-value">
                            10000.00000 USDT
                        </span>
                            </div>

                            <x-button class="btn_base"
                                      :class="{ btn_primary : tab_index===0, btn_danger : tab_index===1 }" link="##">买入FBC
                            </x-button>
                        </div>
                    </div>
                    <open-orders disabled></open-orders>
                </div>
            </div>

        </drawer>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-exchange {
        .vux-tab .vux-tab-item {
            background-size: 100% 0px !important;
        }

        .m-exchange__header {
            .vux-header-left {
                top: 10px !important;
            }

            .m-exchange__tools {
                color: $m--font-color !important;
                .m-exchange__tools-icon {
                    font-size: get-font-size(icon, '++++') !important;
                    font-weight: get-font-weight(boldest) !important;
                    vertical-align: middle;
                }

                .m-exchange__tools-text {
                    font-size: get-font-size(regular, '++++');
                    vertical-align: middle;
                    font-weight: get-font-weight(bolder) !important;
                    padding-left: 8.5rem;
                }

                .m-exchange__tools-desc {
                    color: get-color(light, muted) !important;
                    font-size: get-font-size(regular, '-');
                    vertical-align: middle;
                }
            }
        }

        .m-exchange__trade {
            padding: $m--space;
            display: table;
            width: 100%;
            /*table-layout: fixed;*/
            background: white;
            /*font-size: 1rem;*/

            .m-exchange__orderbook-ticker {
                .m-exchange__orderbook-ticker-price {
                    display: inline-block;
                    vertical-align: middle;
                }

                .m-exchange__orderbook-ticker-rmb {
                    font-size: get-font-size(regular, '+');
                    color: get-color(light, muted);
                    padding-left: 5px;
                    display: inline-block;
                    vertical-align: middle;
                }
            }

            .m-exchange__orderbook {
                display: table;
                width: 100%;
                table-layout: fixed;
                font-size: get-font-size(regular);

                .m-exchange__orderbook-buy {
                    display: table-cell;
                    color: get-color(light, muted);

                    .m-exchange__orderbook-header, .m-exchange__orderbook-depth-item {
                        display: table;
                        width: 100%;
                        position: relative;
                        padding: 5px;

                        .m-exchange__orderbook-hand {
                            display: table-cell;
                            text-align: left;
                            width: 34%;
                        }

                        .m-exchange__orderbook-amount {
                            display: table-cell;
                            text-align: left;
                            width: 33%;
                        }

                        .m-exchange__orderbook-price {
                            display: table-cell;
                            padding-right: 5px;
                            text-align: right;
                            width: 33%;
                            color: array-get($m--state-colors, success, base);
                        }

                        .m-exchange__orderbook-bg {
                            position: absolute;
                            top: 0;
                            right: 0;
                            opacity: .1;
                            height: 100%;
                            max-width: 100%;
                            background-color: array-get($m--state-colors, success, base);
                        }

                    }
                    .m-exchange__orderbook-header {
                        .m-exchange__orderbook-price {
                            color: get-color(light, muted) !important;
                        }
                    }
                }

                .m-exchange__orderbook-sell {
                    display: table-cell;

                    .m-exchange__orderbook-header, .m-exchange__orderbook-depth-item {
                        display: table;
                        width: 100%;
                        color: get-color(light, muted);
                        position: relative;
                        padding: 5px;

                        .m-exchange__orderbook-price {
                            display: table-cell;
                            padding-left: 5px;
                            text-align: left;
                            width: 33%;
                            color: array-get($m--state-colors, danger, base);
                        }

                        .m-exchange__orderbook-amount {
                            display: table-cell;
                            text-align: right;
                            width: 33%;
                        }

                        .m-exchange__orderbook-hand {
                            display: table-cell;
                            text-align: right;
                            width: 34%;
                        }

                        .m-exchange__orderbook-bg {
                            position: absolute;
                            top: 0;
                            left: 0;
                            opacity: .1;
                            height: 100%;
                            max-width: 100%;
                            background-color: array-get($m--state-colors, danger, base);
                        }

                    }

                    .m-exchange__orderbook-header {
                        .m-exchange__orderbook-price {
                            color: get-color(light, muted) !important;
                        }
                    }

                }

            }

            .m-exchange__tradepanel {
                display: block;

                .m-exchange__tradepanel-tab {
                    padding: $m--space 0;
                    .m-exchange__tradepanel-tab-title0 {
                        color: array-get($m--state-colors, success, base) !important;
                        border-bottom: 3px solid array-get($m--state-colors, success, base) !important;
                        font-size: get-font-size(regular, '++++') !important;
                    }
                    .m-exchange__tradepanel-tab-title1 {
                        color: array-get($m--state-colors, danger, base) !important;
                        border-bottom: 3px solid array-get($m--state-colors, danger, base) !important;
                        font-size: get-font-size(regular, '++++') !important;
                    }
                }
                .m-exchange__tradepanel-fee {
                    display: block;
                }

                .m-exchange__tradepanel-available {
                    font-size: get-font-size(regular, '+');
                    display: table;
                    width: 100%;

                    .m-exchange__tradepanel-available-text {
                        color: get-color(light, muted);
                        display: table-cell;
                    }

                    .m-exchange__tradepanel-available-value {
                        font-weight: get-font-weight(bolder);
                        text-align: right;
                        display: table-cell;
                    }
                }

                .m-exchange__tradepanel-total {
                    font-size: get-font-size(regular, '+');
                    display: table;
                    width: 100%;
                    margin-bottom: $m--space;

                    .m-exchange__tradepanel-total-text {
                        color: get-color(light, muted);
                        display: table-cell;
                    }

                    .m-exchange__tradepanel-total-value {
                        font-weight: get-font-weight(bolder);
                        text-align: right;
                        display: table-cell;
                    }
                }



            }

        }
    }
</style>

<script>
    import { TransferDom, XHeader, XButton, Group, Cell, Tab, TabItem, Drawer } from 'vux'
    import NumberInput from '@/components/NumberInput/NumberInput'
    import OpenOrders from './components/OpenOrders/OpenOrders.vue'
    import ExchangeDrawer from './components/ExchangeDrawer/ExchangeDrawer.vue'

    export default {
        name: 'Home',
        data () {
            return {
                tab_index: 0,
                exchangeMenu: ['买入', '卖出'],
                selected: '买入',
                drawerVisibility: false,
                showMode: 'overlay',
                showModeValue: 'overlay',
                showPlacement: 'left',
                showPlacementValue: 'left'
            }
        },
        created () {
        },
        methods: {
            onItemClick (index) {
                if (this.tab_index === index) return
                this.tab_index = index
                console.log(index)
            }
        },
        directives: {
            TransferDom
        },
        components: {
            XButton,
            Group,
            Cell,
            Tab,
            TabItem,
            NumberInput,
            XHeader,
            Drawer,
            OpenOrders,
            ExchangeDrawer
        }
    }
</script>
