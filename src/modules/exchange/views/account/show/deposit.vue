<template>
    <div class="m-deposit">
        <x-header title="充币" :left-options="{backText: ''}">
        </x-header>

        <div class="m-deposit__detail">
            <div class="m-deposit__detail__head">
                <div class="m-deposit__detail__head-icon">
                    <img src="~@/assets/img/currency/btc.png">
                </div>
                <div class="m-deposit__detail__head-caption">
                    <span class="m-deposit__detail__head-title">BTC</span>
                    <span class="m-deposit__detail__head-desc">Bitcoin</span>
                </div>
            </div>
            <div class="m-deposit__detail__body">
                <div class="m-deposit__detail__body-item">
                    <div class="m-deposit__detail__body-item-l">
                        BTC充币地址
                    </div>

                </div>
                <div class="m-deposit__detail__body-item">
                    <div class="m-deposit__detail__body-item-r" v-model="address">{{ address }}
                    </div>
                </div>
            </div>
            <div class="m-deposit__detail__footer">
                <div class="m-deposit__detail__footer-item">
                    <router-link to="" class="m-deposit__detail__footer-item-l">
                        <div class="" v-clipboard:copy='address' v-clipboard:success='clipboardSuccess'>
                            <!--<span class="m-deposit__detail__footer-item-icon">-->
                            <!--<i class="mcicon-copy" @click='handleCopy(address,$event)'></i>-->
                            <!--</span> -->
                            <span class="m-deposit__detail__footer-item-icon">
                                <i class="mcicon-copy"></i>
                            </span>
                            <span class="m-deposit__detail__footer-item-text">
                                复制
                            </span>
                        </div>
                    </router-link>

                    <router-link to="" class="m-deposit__detail__footer-item-r">
                        <span class="m-deposit__detail__footer-item-icon">
                            <i class="mcicon-qrcode"></i>
                        </span>
                        <span class="m-deposit__detail__footer-item-text">
                            二维码
                        </span>
                    </router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-deposit {
        .m-deposit__detail {
            background-color: get-color(light, box);
            margin-bottom: $m--space;
            padding: 0 $m--space;

            .m-deposit__detail__head {
                display: table;
                width: 100%;
                min-height: 80px;
                table-layout: fixed;

                .m-deposit__detail__head-icon {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: right;
                    padding-right: 10px;
                }

                .m-deposit__detail__head-caption {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: left;
                    line-height: 1.4rem !important;

                }

                .m-deposit__detail__head-title {
                    display: block;
                    font-size: get-font-size(regular, '+++');
                    font-weight: get-font-weight(bolder);
                }

                .m-deposit__detail__head-desc {
                    display: block;
                    font-size: get-font-size(regular);
                    color: get-color(light, muted);
                }

            }

            .m-deposit__detail__body {
                padding-bottom: $m--space;
                border-bottom: 1px solid get-color(light, panel);

                .m-deposit__detail__body-item {
                    padding-bottom: 10px;
                    display: table;
                    width: 100%;
                    font-size: get-font-size(regular, '++');

                    .m-deposit__detail__body-item-l {
                        display: table-cell;
                        text-align: left;
                        color: get-color(light, muted);
                    }

                    .m-deposit__detail__body-item-r {
                        font-weight: get-font-weight(bolder);
                        display: table-cell;
                        word-break: break-all;
                    }
                }
            }

            .m-deposit__detail__footer {
                padding-top: $m--space;
                padding-bottom: $m--space;
                /*border-bottom: 1px solid get-color(light, panel);*/

                .m-deposit__detail__footer-item {
                    display: table;
                    width: 100%;
                    font-size: get-font-size(regular, '++');
                    font-weight: get-font-weight(bolder);

                    .m-deposit__detail__footer-item-l {
                        display: table-cell;
                        width: 50%;
                        text-align: center;
                    }

                    .m-deposit__detail__footer-item-r {
                        display: table-cell;
                        text-align: center;
                        border-left: 1px solid get-color(light, panel);
                    }

                    .m-deposit__detail__footer-item-icon {
                        display: block;
                    }
                    .m-deposit__detail__footer-item-text {
                        display: block;
                    }

                    a {
                        color: $m--font-color;

                        &:hover {
                            color: $m--brand-color;
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    import { XHeader, Group, Cell, XButton } from 'vux'
    import clip from '@/utils/clipboard' // use clipboard directly
    import clipboard from '@/directive/clipboard/index.js'

    export default {
        name: 'User',
        directives: {
            clipboard
        },
        data () {
            return {
                address: '0x484D3194D84FaC4ee06474EAc043F72e1AA3900F'
            }
        },
        created () {
        },
        methods: {
            handleCopy (text, event) {
                clip(text, event)
            },
            clipboardSuccess () {
                this.$vux.toast.show({
                    text: '复制成功',
                    time: 2000
                })
            }
        },

        components: {
            Group,
            XHeader,
            Cell,
            XButton
        }
    }
</script>
