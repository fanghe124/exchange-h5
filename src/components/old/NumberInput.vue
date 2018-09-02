<template>
    <div class="vnis">
        <input
            type="number"
            v-bind:value="numericValue"
            @keypress="validateInput"
            @input="numericValue = $event.target.value"
            :class="inputClass"
            :min="min"
            :max="max"
            debounce="500"
        />
        <button v-if="controls" @click.prevent="decreaseNumber" :class="buttonClass">-</button>
        <button v-if="controls" @click.prevent="increaseNumber" :class="buttonClass">+</button>
    </div>
</template>

<script>
    export default {
        name: 'NumberInput',
        data: function () {
            return {
                numericValue: this.value
            }
        },
        props: {
            controls: Boolean,
            disabled: Boolean,
            value: {
                type: Number,
                default: 0
            },
            min: {
                default: 0,
                type: Number
            },
            max: {
                default: 10,
                type: Number
            },
            step: {
                default: 1,
                type: Number
            },
            inputClass: {
                default: 'vnis__input',
                type: String
            },
            buttonClass: {
                default: 'vnis__button',
                type: String
            },
            integerOnly: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            increaseNumber () { this.numericValue += this.step },
            decreaseNumber () { this.numericValue -= this.step },
            isInteger (evt) {
//                evt = (evt) ? evt : window.event
                evt = evt || window.event
                let key = evt.keyCode || evt.which
                key = String.fromCharCode(key)
                const regex = /[0-9]/
                if (!regex.test(key)) {
                    evt.returnValue = false
                    if (evt.preventDefault) evt.preventDefault()
                }
            },
            isNumber (evt) {
//                evt = (evt) ? evt : window.event
                evt = evt || window.event
                let charCode = (evt.which) ? evt.which : evt.keyCode
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault()
                } else {
                    return true
                }
            },
            validateInput (evt) {
                if (this.integerOnly === true) {
                    this.isInteger(evt)
                } else {
                    this.isNumber(evt)
                }
            }
        },
        watch: {
            numericValue: function (val, oldVal) {
                if (val <= this.min) { this.numericValue = parseInt(this.min) }
                if (val >= this.max) { this.numericValue = parseInt(this.max) }
                if (val <= this.max && val >= this.min) {
                    this.$emit('input', val, oldVal)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    .vnis {
        &__input {
            -webkit-appearance: none;
            border: 1px solid #ebebeb;
            float: left;
            font-size: 16px;
            height: 35px;
            margin: 0;
            outline: none;
            text-align: center;
            width: calc(100% - 80px);
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }
        &__button {
            -webkit-appearance: none;
            transition: background .5s ease;
            /*background: #387e90;*/
            border: 0;
            color: #000;
            cursor: pointer;
            float: left;
            font-size: 20px;
            height: 35px;
            margin: 0;
            outline: none;
            width: 35px;
            &:hover {
                /*background: lighten(#387e90, 10%);*/
            }
        }
    }
</style>
