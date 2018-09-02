import Vue from 'vue'
import Clipboard from 'clipboard'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

function clipboardSuccess () {
    this.$vux.toast.show({
        text: '复制成功',
        time: 10
    })
}

function clipboardError () {
    this.$vux.toast.show({
        text: '复制失败',
        time: 10
    })
}

export default function handleClipboard (text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        clipboardError()
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
    })
    clipboard.onClick(event)
}
