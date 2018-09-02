<template>
    <div class="m-user">
        <x-header title="安全中心" :left-options="{backText: ''}">
        </x-header>

        <group class="m-user__setting">
            <cell :title="$t('电话绑定')" is-link link="/">

            </cell>
            <cell :title="$t('邮箱绑定')" is-link link="/">

            </cell>
            <cell :title="$t('身份认证')" is-link>

            </cell>
        </group>

    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "src/assets/css/mc/config.scss";

    .m-user {
        .m-user__setting {
            margin-top: $m--space;

            .m-user__setting-icon {
                font-size: get-font-size(icon,'++');
                padding-right: 10px;
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
        methods: {},

        components: {
            Group,
            Cell,
            XHeader
        }
    }
</script>
