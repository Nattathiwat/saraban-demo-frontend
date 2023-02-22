<template>
  <div :class="[this.class, 'component-radio']" :style="this.style">
    <label class="group-radio">
      <input  v-model="data"
              class="radio-control"
              @change="change()"
              :name="name+'radio'"
              :disabled="disabled"
              :value="value"
              type="radio"
              />
      <span class="checkmark"></span>
    </label>
    <div class="name-radio">{{label}}</div>
  </div>

</template>

<script>
export default {
  name: 'component-radio',
  data() {
    return {
      data: this.modelValue
    }
  },
  props: ['name', 'modelValue', 'disabled', 'class', 'style', 'value', 'label'],
  methods: {
    change() {
      this.$emit('update:modelValue', this.data)
    }
  },
  mounted () {
    if (this.modelValue) {
      this.$emit('update:modelValue', this.modelValue)
    }
  },
  watch: {
    'modelValue'() {
      this.data = this.modelValue
    }
  },
}
</script>

<style scoped lang="scss">
  .component-radio {
    display: flex;
    height: 26px;

    .name-radio {
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }

    input:disabled ~ .checkmark{
      background-color: #ececec;
      border-color: 1px solid #ececec;
      opacity: 0.7;
      cursor: default;
    } 

    .group-radio {
      display: block;
      position: relative;
      padding-left: 35px;
      cursor: pointer;
      font-size: 16px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .group-radio input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;border: 1px solid #ced4da;
      background-color: white;
      border-radius: 50%;
    }

    .group-radio input:checked ~ .checkmark {
      background-color: #ffffff;
      border: 3px solid #0f3a64;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .group-radio input:checked ~ .checkmark:after {
      display: block;
    }

    .group-radio .checkmark:after {
      // top: 3px;
      // left: 3px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #0f3a64;
    }
  }
</style>
