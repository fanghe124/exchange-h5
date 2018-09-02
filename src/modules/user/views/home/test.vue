<template>
    <div>
        test
    </div>
</template>

<script>
    import { test } from '@/modules/user/api/test'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'test13',
        data () {
            return {}
        },
        created () {
            this.getData()
        },
        computed: {
            ...mapGetters(['user'])
        },
        methods: {
            ...mapMutations(['SET_USER']),
            getData () {
                test().then(response => {
                    console.log(this.user)
//                    this.SET_USER(response.data)
//                    console.log(this.user)
                    console.log(response)
                })
            }
        }
    }
</script>


