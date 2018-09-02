<template>
    <div class="m-account">
        <x-header title="我的资产" :left-options="{backText: ''}">
            <a @click="linkFinance()" class="m-exchange__openorder__nav-link m-exchange__openorder__nav-link--icon"
               slot="right">
                <i class="mcicon-form"></i>
                <span class="">充值记录</span>
            </a>
        </x-header>

        <group class="m-account__info">
            <div class="m-account__info-c">
                <span class="m-account__info-title">
                    估值（BTC)
                </span>
                <span class="m-account__info-balance">
                    2.10888555
                </span>
                <span class="m-account__info-balance-local">
                    ≈120088 CNY
                </span>
            </div>
        </group>

        <group class="m-account__list">
            <cell is-link link="/account/show">
                <div slot="title">
                    <span class="m-account__list_code">FBC</span>
                    <span class="m-account__list-name">(Fortune Coin)</span>
                </div>
                <span slot="icon" class="m-account__list-icon">
                    <img src="~@/assets/img/currency/fbc.png">
                </span>
                <span class="m-account__list-total">
                    1800000.00
                </span>
            </cell>

            <cell is-link>
                <div slot="title">
                    <span class="m-account__list_code">BTC</span>
                    <span class="m-account__list-name">(Bitcoin)</span>
                </div>
                <span slot="icon" class="m-account__list-icon">
                    <img src="~@/assets/img/currency/btc.png">
                </span>
                <span class="m-account__list-total">
                    1.500000
                </span>
            </cell>

            <cell is-link>
                <div slot="title">
                    <span class="m-account__list_code">ETH</span>
                    <span class="m-account__list-name">(Ethereum)</span>
                </div>
                <span slot="icon" class="m-account__list-icon">
                    <img src="~@/assets/img/currency/eth.png">
                </span>
                <span class="m-account__list-total">
                    0
                </span>
            </cell>

            <!--<cell is-link>-->
                <!--<div slot="title">-->
                    <!--<span class="m-account__list_code">EOS</span>-->
                    <!--<span class="m-account__list-name">(Eos)</span>-->
                <!--</div>-->
                <!--<span slot="icon" class="m-account__list-icon">-->
                    <!--<img src="~@/assets/img/currency/eos.png">-->
                <!--</span>-->
                <!--<span class="m-account__list-total">-->
                    <!--0-->
                <!--</span>-->
            <!--</cell>-->

            <cell is-link>
                <div slot="title">
                    <span class="m-account__list_code">USDT</span>
                    <span class="m-account__list-name">(TetherUS)</span>
                </div>
                <span slot="icon" class="m-account__list-icon">
                    <img src="~@/assets/img/currency/usdt.png">
                </span>
                <span class="m-account__list-total">
                    0
                </span>
            </cell>
        </group>

    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-account {

        .weui-cell {
            padding: 15px 15px!important;
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

        .m-account__info {
            display: table;
            width: 100%;

            .m-account__info-c {
                vertical-align: middle;
                width: 100%;
                /*line-height: 0;*/
                padding: $m--space;
                background: get-color(light, panel,'-');
            }

            .m-account__info-title{
                font-size: get-font-size(regular);
                color: get-color(light, muted);
                display: block;
            }

            .m-account__info-balance {
                font-size: 2.2rem;
                font-weight: get-font-weight(boldest);
                display: block;
            }

            .m-account__info-balance-local {
                font-size: get-font-size(regular);
                display: inline-block;
            }

        }

        .m-account__list {
            margin-top: 1.1rem;

            .m-account__list-name {
                /*font-size: 1rem;*/
                /*display: table-cell;*/
                /*vertical-align: middle;*/
                color: get-color(light, muted);
            }

            .m-account__list-icon {
                font-size: get-font-size(regular, '++');
                width: 100%;
                padding-right: 10px;
            }

            .m-account__list-icon img {
                vertical-align: middle;
                width: 20px;
            }

            .m-account__list-total {
                color: $m--font-color;
                font-weight: get-font-weight(bolder);
            }

        }

    }
</style>

<script>
    import { XHeader, Group, Cell } from 'vux'

    export default {
        name: 'User',
        data () {
            return {
                imgList: []
            }
        },
        created () {
        },
        methods: {
            linkFinance() {
                this.$router.push({ path: '/finance' })
            }
        },

        components: {
            Group,
            XHeader,
            Cell
        }
    }
</script>
