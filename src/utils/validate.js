/**
 */

export function isWscnEmail (str) {
    const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wz\.com$/i
    return reg.test(str.trim())
}

export function validateURL (textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}

export function validateLowerCase (str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

// export function validateKey(str) {
//     var reg = /^[a-z_\-:]+$/;
//     return reg.test(str);
// }

export function validateUpperCase (str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

export function validatAlphabets (str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}
