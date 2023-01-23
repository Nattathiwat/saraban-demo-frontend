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
    <div class="name-radio">{{value}}</div>
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
  props: ['name', 'modelValue', 'disabled', 'class', 'style', 'value'],
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
      font-size: 22px;
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
      border: 3px solid #0d6efd;
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
      top: 3px;
      left: 3px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #0d6efd;
    }
  }
</style>
