<template>
    <div class="m-login__login">
        <div class="m-login__login-title">
            <h1>
                手机注册
            </h1>
        </div>

        <div class="m-login__login__form">
            <x-input type="tel"
                     placeholder="手机号注册"
                     :max="11"
                     v-model="phoneNumber"
                     is-type="china-mobile">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>

            <x-input type="password"
                     placeholder="密码"

            >
            </x-input>
            <x-input type="number"
                     placeholder="验证码"

            >
            </x-input>
        </div>
        <div class="m-login__login__body">
            <x-button @click.native="onLogin" class="btn_base"
                      type="primary"> {{ $t('login.signUpMobile') }}
            </x-button>

            <div class="m-login__login__body__action">
                <span class="m-login__login__body__action-forget">
                    <router-link to="/login/signin">
                        登陆
                    </router-link>

                </span>
                <span class="m-login__login__body__action-reg">
                    还没有帐号？<router-link to="/login/signup_email">邮箱注册</router-link>
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
