<template>
    <div class="m-home">
        <swiper :aspect-ratio="340/640" loop auto dots-position="right" :duration="800">
            <swiper-item class="m-swiper__item"
                         v-for="(item, index) in imgList"
                         :key="index"
                         @click.native="linkToDetail(item.key_word)">
                <img :src="item.img.url" alt="image">
            </swiper-item>
        </swiper>

        <div class="m-card">
            <card>
                <div slot="content" class="m-card__content m--align-center no-gutters">

                    <div class="m-card__item">
                        <span class="m-card__item-currency">FBC / BTC</span>
                        <span class="m-card__item-price  m--font-success">0.0000067</span>
                        <span class="m-card__item-rate  m--font-success">6.18%</span>
                    </div>


                    <div class="m-card__item">
                        <span class="m-card__item-currency">FBC / ETH</span>
                        <span class="m-card__item-price m--font-danger">0.0000890</span>
                        <span class="m-card__item-rate m--font-danger">8.88%</span>

                    </div>

                    <div class="m-card__item">
                        <span class="m-card__item-currency">FBC / USDT</span>
                        <span class="m-card__item-price m--font-success">0.0507700</span>
                        <span class="m-card__item-rate m--font-success">9.18%</span>
                    </div>

                </div>
            </card>
        </div>

        <div class="m-ann">
            <group>
                <div class="m-ann__content">
                    <span class="m-ann__icon"><i class="mcicon-gonggao"></i></span>
                    <marquee class="m-ann__title">
                        <marquee-item :item-height="10" v-for="i in 5" :key="i" @click.native="onClick(i)">
                            关于ETC分叉暂停充值和提现的公告的公告 {{i}}
                        </marquee-item>
                    </marquee>
                </div>
            </group>
        </div>

        <div class="m-ticker">
            <div class="m-ticker__content">
                <tab :line-width=1 custom-bar-width="60px">
                    <tab-item :selected="nowTicker === item" v-for="(item, index) in tickerList"
                              @click="nowTicker = item" :key="index" @on-item-click="onItemClick">{{item}}
                    </tab-item>
                </tab>

                <div v-if="tab_index==0">
                    <div class="m-ticker__body">
                        <div class="m-ticker__item">
                            <div class="m-ticker__item-currency">
                                <span class="m-ticker__item-pair">FBC / ETH</span>
                                <span class="m-ticker__item-volume">24h 15636</span>
                            </div>
                            <div class="m-ticker__item-price">
                                <span class="m-ticker__item-price-v">0.0016314</span>
                                <span class="m-ticker__item-price-f">$12.34</span>
                            </div>
                            <div class="m-ticker__item-rate">
                                <x-button type="primary" class="custom-button m--bg-success ">-0.41%</x-button>
                            </div>
                        </div>

                        <div class="m-ticker__item">
                            <div class="m-ticker__item-currency">
                                <span class="m-ticker__item-pair"> FBC / BTC</span>
                                <span class="m-ticker__item-volume">24h 15636</span>
                            </div>
                            <div class="m-ticker__item-price">
                                <span class="m-ticker__item-price-v">0.076400</span>
                                <span class="m-ticker__item-price-f">$578.34</span>
                            </div>
                            <div class="m-ticker__item-rate">
                                <x-button type="primary" class="custom-button m--bg-success ">0.66%</x-button>
                            </div>
                        </div>

                        <div class="m-ticker__item">
                            <div class="m-ticker__item-currency">
                                <span class="m-ticker__item-pair"> FBC / USDT</span>
                                <span class="m-ticker__item-volume">24h 15636</span>
                            </div>
                            <div class="m-ticker__item-price">
                                <span class="m-ticker__item-price-v">0.076400</span>
                                <span class="m-ticker__item-price-f">$578.34</span>
                            </div>
                            <div class="m-ticker__item-rate">
                                <x-button type="primary" class="custom-button m--bg-success ">0.66%</x-button>
                            </div>
                        </div>

                        <div class="m-ticker__item">
                            <div class="m-ticker__item-currency">
                                <span class="m-ticker__item-pair"> ETH / BTC</span>
                                <span class="m-ticker__item-volume">24h 15636</span>
                            </div>
                            <div class="m-ticker__item-price">
                                <span class="m-ticker__item-price-v">0.076400</span>
                                <span class="m-ticker__item-price-f">$578.34</span>
                            </div>
                            <div class="m-ticker__item-rate">
                                <x-button type="primary" class="custom-button m--bg-success ">0.66%</x-button>
                            </div>
                        </div>

                    </div>
                    <div class="m-ticker__footer">

                    </div>
                </div>


            </div>


        </div>
    </div>
</template>


<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";
    .m-home {

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

        .m-card {
            line-height: 1.4 !important;

            .m-card__content {
                padding: $m--space 0;
                display: table;
                width:100%;
                table-layout: fixed;

                .weui-cell__ft {
                    text-align: right !important;
                    color: get-color(light, muted);
                }
            }
            .m-card__item {
                font-size: get-font-size(regular);
                border-right: 1px solid get-color(light, panel);
                display: table-cell;

                .m-card__item-currency {
                    display: block;
                }
                .m-card__item-price {
                    font-size: get-font-size(regular, '+++');
                    font-weight: get-font-weight(boldest);
                    display: block;
                }
                .m-card__item-rate {
                    color: get-color(light, muted);
                }
            }
        }

        .m-ann {
            padding: 0 $m--space;
            overflow: hidden;
            background-color: white;
            .m-ann__content {
                padding-bottom: 10px;
                font-size: get-font-size(regular);
                display: table;
                width: 100%;
            }

            .m-ann__icon {
                display: table-cell;
                padding-right: 10px;
            }

            .m-ann__title {
            }
        }

        .m-ticker {
            background-color: white;
            position: relative;
            margin-top: $m--space;
            height: 100%;
            display: block;
            line-height: 1.4 !important;
            /*overflow: hidden;*/

            .m-ticker__content {
            }

            .m-ticker__item {
                display: table;
                width: 100%;
                padding: 10px 0;
                /*border-bottom: .07rem solid #ebedf2;*/

                .m-ticker__item-currency {
                    display: table-cell;
                    width: 40%;
                    vertical-align: top;
                    font-size: get-font-size(regular, '++');
                }

                .m-ticker__item-pair {
                    display: block;
                    font-weight: get-font-weight(bolder);
                }

                .m-ticker__item-volume {
                    display: inline-block;
                    font-size: get-font-size(regular);
                    color: get-color(light, muted);
                }

                .m-ticker__item-price {
                    display: table-cell;
                    vertical-align: middle;
                }
                .m-ticker__item-price-v {
                    font-size: get-font-size(regular, '+++');
                    font-weight: get-font-weight(bolder);
                    display: block;
                }
                .m-ticker__item-price-f {
                    font-size: 1rem;
                    color: get-color(light, muted);
                }

                .m-ticker__item-rate {
                    display: table-cell;
                    vertical-align: middle;
                }
            }
            .m-ticker__head {
                color: get-color(light, muted);
                padding: 0 $m--space;
                font-size: get-font-size(regular);
            }
            .m-ticker__body {
                padding: 0 $m--space;
            }
            .m-ticker__footer {

            }

            .custom-button {
                width: 100%;
                line-height: 2.2;
                padding: 0;
                box-sizing: border-box;
                font-size: get-font-size(regular, '++');
                font-weight: get-font-weight(bolder);
                &:active {
                    background-color: transparent;
                }
            }
        }
    }
</style>


<script>
    import { XButton, Marquee, MarqueeItem, Group, Swiper, SwiperItem, Card, Tab, TabItem } from 'vux'

    export default {
        name: 'Home',
        data () {
            return {
                imgList: [],
                tickerList: ['涨幅榜', '新币榜'],
                nowTicker: '涨幅榜',
                tab_index: 0
            }
        },
        created () {
            this.getBanner()
        },
        methods: {
            getBanner () {
                this.imgList = [
                    {
                        'key_word': '6',
                        'type': 1,
                        'img': {
                            'url': 'https://huobi-1253283450.file.myqcloud.com/bit/banner/670040a2-ace6-4d95-81f6-a600e803e6db.png'
                        }
                    }
                ]
            },
            onItemClick (index) {
                if (this.tab_index === index) return
                console.log(index)
                this.tab_index = index
            }
        },

        components: {
            XButton,
            Marquee,
            MarqueeItem,
            Group,
            Swiper,
            SwiperItem,
            Card,
            Tab,
            TabItem
        }
    }
</script>
