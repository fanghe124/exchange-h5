import http from '@/utils/http'

export function test () {
    return http({
        url: '/api/env',
        method: 'get'
    })
}

export function loginByUsername(username, password) {
    const data = {
        username,
        password
    }
    return http({
        url: '/login/login',
        method: 'post',
        data
    })
}

export function getUserInfo(token) {
    return http({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}
