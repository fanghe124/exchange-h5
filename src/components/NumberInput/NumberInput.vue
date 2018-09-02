<template>
    <div class="m-numberinput">
        <div class="m-numberinput__area">
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
            <span class="m-numberinput__area-text">USDT</span>
        </div>

        <div v-if="controls===0" class="m-numberinput__control">
            <a @click.prevent="decreaseNumber" :class="buttonClass">-</a>
            <a @click.prevent="increaseNumber" :class="buttonClass">+</a>
        </div>

        <div v-if="controls===1" class="m-numberinput__control">
            <a @click.prevent="decreaseNumber" :class="buttonTextClass">1/4</a>
            <a @click.prevent="increaseNumber" :class="buttonTextClass">1/2</a>
            <a @click.prevent="increaseNumber" :class="buttonTextClass">全部</a>
        </div>

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
            controls: {
                type: Number
            },
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
                default: 'm-numberinput__area-input',
                type: String
            },
            buttonClass: {
                default: 'm-numberinput__control-button',
                type: String
            },
            buttonTextClass: {
                default: 'm-numberinput__control-button m-numberinput__control-button-text',
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
    @import "src/assets/css/mc/config.scss";

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    .m-numberinput {
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: $m--space;
        color: get-color(light, muted);

        .m-numberinput__area {
            flex: 1;
            position: relative;

            .m-numberinput__area-input {
                width: 100%;
                padding: 1rem 1.5rem;
                font-size: get-font-size(regular, '++');
                outline: none;
                border-radius: 0;
                border: 1px solid get-color(light, panel);

                -webkit-appearance: none;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }

                &:focus {
                    //border-color: array-get($m--state-colors, brand, base);
                }
            }

            .m-numberinput__area-text {
                position: absolute;
                right: 5%;
                top: 50%;
                transform: translateY(-50%);
                padding: 0 .15rem;
                font-size: get-font-size(regular, '++');
            }

        }

        .m-numberinput__control {
            /*display: flex;*/
            border: 1px solid get-color(light, panel);
            border-left: none;
            border-radius: 0;
            padding: 5px 0;
            font-size: get-font-size(regular, '+++++');

            .m-numberinput__control-button {
                text-align: center;
                -webkit-appearance: none;
                cursor: pointer;
                outline: none;

                &:hover {
                    /*background: lighten(#387e90, 10%);*/
                }
            }

            .m-numberinput__control-button-text {
                font-size: get-font-size(regular, '++') !important;
            }

            a {
                padding: 0 $m--space;
                &:not(:first-child) {
                    border-left: 1px solid get-color(light, panel);
                }
            }

        }
    }
</style>
