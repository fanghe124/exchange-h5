<template>
    <div class="m-accountshow">
        <x-header title="资金划转" :left-options="{backText: ''}">
        </x-header>

        <div class="m-accounttransfer__detail">
            <div class="m-accounttransfer__detail__head">
                <div class="m-accounttransfer__detail__head-caption">
                    <span class="m-accounttransfer__detail__head-title">我的钱包</span>
                </div>
                <div class="m-accounttransfer__detail__head-icon">
                     <i class="mcicon-huilvhuansuan"></i>
                </div>
                <div class="m-accounttransfer__detail__head-caption">
                    <span class="m-accounttransfer__detail__head-title m-accounttransfer__detail__head-title-c">币存帐号</span>
                    <!--<span class="m-accounttransfer__detail__head-desc">Bitcoin</span>-->
                </div>
            </div>
        </div>

        <div class="m-accounttransfer__detail">
            <group title="">
                <x-input title="转划数量" type="text" placeholder="" v-model="password" :min="1" :max="6" @on-change="change"></x-input>
                <popup-picker title="币种选择" :data="list" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" :placeholder="$t('选择')"></popup-picker>
            </group>
        </div>

        <div class="m-accounttransfer__action">
            <div class="m-accounttransfer__action__r">
                <x-button class="btn_base btn_primary" link="/account/show/deposit">划转
                </x-button>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-accountshow {

        .m-accounttransfer__detail {
            background-color: get-color(light, box);
            margin-bottom: $m--space;

            .m-accounttransfer__detail__head {
                display: table;
                width: 100%;
                min-height: 80px;
                table-layout: fixed;

                .m-accounttransfer__detail__head-icon {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    padding-right: 10px;
                    font-size: get-font-size(icon, '+++++');
                    color: $m--danger-color;
                }

                .m-accounttransfer__detail__head-caption {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    line-height: 1.4rem !important;

                }

                .m-accounttransfer__detail__head-title {
                    display: block;
                    font-size: get-font-size(regular, '+++');
                    font-weight: get-font-weight(bolder);
                }

                .m-accounttransfer__detail__head-title-c {
                    color: $m--danger-color;
                }

                .m-accounttransfer__detail__head-desc {
                    display: block;
                    font-size: get-font-size(regular);
                    color: get-color(light, muted);
                }

            }

            .m-accounttransfer__detail__body {
                padding-bottom: $m--space;
                border-bottom: 1px solid get-color(light, panel);

                .m-accounttransfer__detail__body-item {
                    padding: 0 $m--space 10px $m--space;
                    display: table;
                    width: 100%;
                    font-size: get-font-size(regular, '++');

                    .m-accounttransfer__detail__body-item-l {
                        display: table-cell;
                        width: 60%;
                        text-align: left;
                    }

                    .m-accounttransfer__detail__body-item-r {
                        font-weight: get-font-weight(bolder);
                        display: table-cell;
                        text-align: right;
                    }
                }
            }

            .m-accounttransfer__detail__footer {
                padding-top: $m--space;
                padding-bottom: $m--space;
                /*border-bottom: 1px solid get-color(light, panel);*/

                .m-accounttransfer__detail__footer-item {
                    padding: 0 $m--space 10px $m--space;
                    display: table;
                    width: 100%;
                    font-size: get-font-size(regular, '++');

                    .m-accounttransfer__detail__footer-item-l {
                        display: table-cell;
                        width: 60%;
                        text-align: left;
                    }

                    .m-accounttransfer__detail__footer-item-r {
                        font-weight: get-font-weight(bolder);
                        display: table-cell;
                        text-align: right;
                    }
                }
            }
        }

        .m-accounttransfer__action {
            display: flex;
            padding: 0 $m--space;

            .m-accounttransfer__action__r{
                flex: 1;
            }
            .m-accounttransfer__action__l{
                flex: 1;
            }
        }

    }
</style>

<script>
    import { XHeader, Group, Cell, XButton, XInput, PopupPicker } from 'vux'

    export default {
        name: 'accountTransfer',
        data () {
            return {
                list: [['ETH', 'USDT', 'BTC']]
            }
        },
        created () {
        },
        methods: {},

        components: {
            Group,
            XHeader,
            Cell,
            XButton,
            XInput,
            PopupPicker
        }
    }
</script>
