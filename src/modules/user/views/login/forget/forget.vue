<template>
    <div class="m-login__login">
        <div class="m-login__login-title">
            <h1>
                忘记密码
            </h1>
        </div>

        <div class="m-login__login__form">
            <x-input type="tel"
                     placeholder="邮箱或手机号"
                     :max="11"
                     v-model="phoneNumber"
                     is-type="china-mobile">
            </x-input>
        </div>
        <div class="m-login__login__body">
            <x-button @click.native="onLogin" class="btn_base"
                      type="primary"> {{ $t('login.forget') }}
            </x-button>
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
