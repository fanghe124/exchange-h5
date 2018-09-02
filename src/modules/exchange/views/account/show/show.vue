<template>
    <div class="m-accountshow">
        <x-header title="我的资产" :left-options="{backText: ''}">
        </x-header>

        <div class="m-accountshow__detail">
            <div class="m-accountshow__detail__head">
                <div class="m-accountshow__detail__head-icon">
                    <img src="~@/assets/img/currency/btc.png">
                </div>
                <div class="m-accountshow__detail__head-caption">
                    <span class="m-accountshow__detail__head-title">BTC</span>
                    <span class="m-accountshow__detail__head-desc">Bitcoin</span>
                </div>
            </div>
            <div class="m-accountshow__detail__body">
                <div class="m-accountshow__detail__body-item">
                    <div class="m-accountshow__detail__body-item-l">
                        总额
                    </div>
                    <div class="m-accountshow__detail__body-item-r">
                        1212
                    </div>
                </div>
                <div class="m-accountshow__detail__body-item">
                    <div class="m-accountshow__detail__body-item-l">
                        可用余额
                    </div>
                    <div class="m-accountshow__detail__body-item-r">
                        1
                    </div>
                </div>
                <div class="m-accountshow__detail__body-item">
                    <div class="m-accountshow__detail__body-item-l">
                        冻结资产
                    </div>
                    <div class="m-accountshow__detail__body-item-r">
                        0
                    </div>
                </div>
            </div>
            <div class="m-accountshow__detail__footer">
                <div class="m-accountshow__detail__footer-item">
                    <div class="m-accountshow__detail__footer-item-l">
                        固值(BTC)
                    </div>
                    <div class="m-accountshow__detail__footer-item-r">
                        0.0022331
                    </div>
                </div>
                <div class="m-accountshow__detail__footer-item">
                    <div class="m-accountshow__detail__footer-item-l">
                        固值(CNY)
                    </div>
                    <div class="m-accountshow__detail__footer-item-r">
                        110
                    </div>
                </div>
            </div>
        </div>

        <div class="m-accountshow__action">
            <div class="m-accountshow__action__r">
                <x-button class="btn_base btn_primary" link="/account/show/deposit">充币
                </x-button>
            </div>
            <div class="m-accountshow__action__r">
                <x-button class="btn_base btn_danger" link="/account/show/withdraw">提币
                </x-button>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-accountshow {

        .m-accountshow__detail {
            background-color: get-color(light, box);
            margin-bottom: $m--space;

            .m-accountshow__detail__head {
                display: table;
                width: 100%;
                min-height: 80px;
                table-layout: fixed;

                .m-accountshow__detail__head-icon {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: right;
                    padding-right: 10px;
                }

                .m-accountshow__detail__head-caption {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: left;
                    line-height: 1.4rem !important;

                }

                .m-accountshow__detail__head-title {
                    display: block;
                    font-size: get-font-size(regular, '+++');
                    font-weight: get-font-weight(bolder);
                }

                .m-accountshow__detail__head-desc {
                    display: block;
                    font-size: get-font-size(regular);
                    color: get-color(light, muted);
                }

            }

            .m-accountshow__detail__body {
                padding-bottom: $m--space;
                border-bottom: 1px solid get-color(light, panel);

                .m-accountshow__detail__body-item {
                    padding: 0 $m--space 10px $m--space;
                    display: table;
                    width: 100%;
                    font-size: get-font-size(regular, '++');

                    .m-accountshow__detail__body-item-l {
                        display: table-cell;
                        width: 60%;
                        text-align: left;
                    }

                    .m-accountshow__detail__body-item-r {
                        font-weight: get-font-weight(bolder);
                        display: table-cell;
                        text-align: right;
                    }
                }
            }

            .m-accountshow__detail__footer {
                padding-top: $m--space;
                padding-bottom: $m--space;
                /*border-bottom: 1px solid get-color(light, panel);*/

                .m-accountshow__detail__footer-item {
                    padding: 0 $m--space 10px $m--space;
                    display: table;
                    width: 100%;
                    font-size: get-font-size(regular, '++');

                    .m-accountshow__detail__footer-item-l {
                        display: table-cell;
                        width: 60%;
                        text-align: left;
                    }

                    .m-accountshow__detail__footer-item-r {
                        font-weight: get-font-weight(bolder);
                        display: table-cell;
                        text-align: right;
                    }
                }
            }
        }

        .m-accountshow__action {
            display: flex;
            padding: 0 $m--space;

            .m-accountshow__action__r{
                flex: 1;
            }
            .m-accountshow__action__l{
                flex: 1;
            }
        }

    }
</style>

<script>
    import { XHeader, Group, Cell, XButton } from 'vux'

    export default {
        name: 'User',
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
