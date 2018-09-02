
const Test = r => require.ensure([], () => r(require('@/modules/user/views/home/test')), 'test')
const Layout = r => require.ensure([], () => r(require('@/modules/user/views/layout/layout')), 'layout')
const LoginLayout = r => require.ensure([], () => r(require('@/modules/user/views/layout/loginLayout')), 'loginLayout')
const HomeIndex = r => require.ensure([], () => r(require('@/modules/user/views/home/index')), 'home')
const UserIndex = r => require.ensure([], () => r(require('@/modules/user/views/user/index')), 'user')
const UserSecurityIndex = r => require.ensure([], () => r(require('@/modules/user/views/user/security/index')), 'userSecurity')
const SignIn = r => require.ensure([], () => r(require('@/modules/user/views/login/signin/signin')), 'signIn')
const SignUpMobile = r => require.ensure([], () => r(require('@/modules/user/views/login/signup_mobile/signup_mobile')), 'signUpMobile')
const SignUpEmail = r => require.ensure([], () => r(require('@/modules/user/views/login/signup_email/signup_email')), 'signUpEmail')
const Forget = r => require.ensure([], () => r(require('@/modules/user/views/login/forget/forget')), 'signIn')

const ExchangeIndex = r => require.ensure([], () => r(require('@/modules/exchange/views/exchange/index')), 'user')
const ExchangeOpenOrder = r => require.ensure([], () => r(require('@/modules/exchange/views/exchange/openorder/index')), 'exchangeOpenOrder')
const ExchangeHistoryOrder = r => require.ensure([], () => r(require('@/modules/exchange/views/exchange/historyorder/index')), 'exchangeHistoryOrder')
const ExchangeHistoryOrderShow = r => require.ensure([], () => r(require('@/modules/exchange/views/exchange/historyorder/show/show')), 'exchangeHistoryOrderShow')
const AccountIndex = r => require.ensure([], () => r(require('@/modules/exchange/views/account/index')), 'account')
const AccountTransfer = r => require.ensure([], () => r(require('@/modules/exchange/views/account/transfer/transfer')), 'accountTransfer')
const AccountShow = r => require.ensure([], () => r(require('@/modules/exchange/views/account/show/show')), 'accountShow')
const AccountShowDeposit = r => require.ensure([], () => r(require('@/modules/exchange/views/account/show/deposit')), 'accountShowDeposit')
const AccountShowWithdraw = r => require.ensure([], () => r(require('@/modules/exchange/views/account/show/withdraw')), 'accountShowWithdraw')
const FinanceIndex = r => require.ensure([], () => r(require('@/modules/exchange/views/finance/index')), 'finance')
const FinanceShow = r => require.ensure([], () => r(require('@/modules/exchange/views/finance/show/show')), 'financeShow')

const routes = [
    {
        path: '/test',
        name: 'test',
        component: Test,
        meta: {
            title: 'test'
        }
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                redirect: '/home'
            },
            {
                path: 'home',
                name: 'homeIndex',
                meta: {
                    title: '主页'
                },
                component: HomeIndex
            },
            {
                path: 'exchange',
                name: 'exchangeIndex',
                meta: {
                    title: '交易'
                },
                component: ExchangeIndex
            },
            {
                path: 'exchange/openorder',
                name: 'exchangeOpenOrder',
                meta: {
                    title: '当前订单'
                },
                component: ExchangeOpenOrder
            },
            {
                path: 'exchange/historyorder',
                name: 'exchangeHistoryOrder',
                meta: {
                    title: '历史订单'
                },
                component: ExchangeHistoryOrder
            },
            {
                path: 'exchange/historyorder/show',
                name: 'exchangeHistoryOrderShow',
                meta: {
                    title: '订单详情'
                },
                component: ExchangeHistoryOrderShow
            },
            {
                path: 'account',
                name: 'accountIndex',
                meta: {
                    title: '我的资产'
                },
                component: AccountIndex
            },
            {
                path: '/account/transfer',
                name: 'accountTransfer',
                meta: {
                    title: '资产划转'
                },
                component: AccountTransfer
            },
            {
                path: '/account/show',
                name: 'accountShow',
                meta: {
                    title: '显示资产'
                },
                component: AccountShow
            },
            {
                path: '/account/show/deposit',
                name: 'accountShowDeposit',
                meta: {
                    title: '充币'
                },
                component: AccountShowDeposit
            }, {
                path: '/account/show/withdraw',
                name: 'accountShowWithdraw',
                meta: {
                    title: '提币'
                },
                component: AccountShowWithdraw
            },
            {
                path: 'finance',
                name: 'financeIndex',
                meta: {
                    title: '财务记录',
                    requireAuth: true
                },
                component: FinanceIndex
            },
            {
                path: 'finance/show',
                name: 'financeShow',
                meta: {
                    title: '财务记录',
                    requireAuth: true
                },
                component: FinanceShow
            },
            {
                path: 'user',
                name: 'userIndex',
                meta: {
                    title: '我的',
                    requireAuth: true
                },
                component: UserIndex
            },
            {
                path: 'user/security',
                name: 'userSecurityIndex',
                meta: {
                    title: '安全',
                    requireAuth: true
                },
                component: UserSecurityIndex
            }
        ]
    },
    {
        path: '/login',
        component: LoginLayout,
        children: [
            {
                path: '/login',
                redirect: 'signin'
            },
            {
                path: 'signin',
                name: 'signIn',
                meta: {
                    title: '登陆'
                },
                component: SignIn
            },
            {
                path: 'signup_mobile',
                name: 'signUpMobile',
                meta: {
                    title: '手机注册'
                },
                component: SignUpMobile
            },
            {
                path: 'signup_email',
                name: 'signUpEmail',
                meta: {
                    title: '邮箱注册'
                },
                component: SignUpEmail
            },
            {
                path: 'forget',
                name: 'forget',
                meta: {
                    title: '找回密码'
                },
                component: Forget
            }
        ]
    },
    {path: '*', component: HomeIndex}
]

export default routes
