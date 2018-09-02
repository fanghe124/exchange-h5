<template>
    <div class="m-login__login">
        <div class="m-login__logo-wrap">
            <img src="~@/assets/img/logo.png"
                 class="app-logo">
        </div>

        <div class="m-login__login__form">
            <x-input type="tel"
                     placeholder="邮箱或手机号"
                     :max="11"
                     v-model="phoneNumber"
                     is-type="china-mobile">
            </x-input>

            <x-input type="password"
                     placeholder="密码"

            >
            </x-input>
        </div>
        <div class="m-login__login__body">
            <x-button @click.native="onLogin" class="btn_base"
                      type="primary"> {{ $t('login.signIn') }}
            </x-button>

            <div class="m-login__login__body__action">
                <span class="m-login__login__body__action-forget">
                    <router-link to="/login/forget">
                        忘记密码
                    </router-link>

                </span>
                <span class="m-login__login__body__action-reg">
                    还没有帐号？<router-link to="/login/signup_mobile">点击注册</router-link>
                </span>
            </div>

        </div>
    </div>

</template>

<script>
    import { XInput, Group, XButton, Cell, Toast } from 'vux'

    export default {
        name: 'Signin',
        data () {
            return {
                btnText: '发送验证码',
                disabled: false,
                time: 0,
                phoneNumber: '',
                verifyCode: '',
                smsCode: ''
            }
        },
        created () {},
        methods: {},
        components: {
            XInput,
            XButton,
            Group,
            Cell,
            Toast
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
