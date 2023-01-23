<template>
  <div :class="[this.class, 'group-checkbox-component']">
    <label class="component-checkbox" v-bind:class="disabled ? 'disabled' : ''">
      <input  v-model="value"
              @change="change()"
              :name="name+'checkbox'"
              :disabled="disabled"
              type="checkbox"
              />
      <span class="checkmark" :style="this.style"/>
    </label>
    <div class="name-checkbox">{{label}}</div>
  </div>

</template>

<script>
export default {
  name: 'component-checkbox',
  data() {
    return {
      value: this.modelValue
    }
  },
  props: ['name', 'modelValue', 'disabled', 'class', 'style', 'label'],
  methods: {
    change() {
      this.$emit('update:modelValue', this.value)
    }
  },
  mounted () {
    if (this.modelValue) {
      this.$emit('update:modelValue', this.modelValue)
    }
  },
  watch: {
    'modelValue'() {
      this.value = this.modelValue
    }
  },
}
</script>

<style scoped lang="scss">
  .group-checkbox-component {
    display: flex;

    .name-checkbox {
      margin-left: 15px;
      margin-top: 2px;
    }

    .component-checkbox {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-radius: 5px;
      border: solid 1px #ced4da;
      background-color: #ffffff;
      width: 26px;
      height: 26px;
    }

    .component-checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: -2px;
      left: -2px;
      width: 26px;
      height: 26px;
      border: 0px;
      background-color: transparent;
    }
    
    .disabled {
      background-color: #ececec;
      opacity: 0.7;
      cursor: default;

    }

    .component-checkbox input:checked ~ .checkmark {
      background-color: #0d6efd;
      width: 26px;
      height: 26px;
      border-radius: 5px;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .component-checkbox input:checked ~ .checkmark:after {
      display: block;
    }

    .component-checkbox .checkmark:after {
      left: 10px;
      top: 5px;
      width: 6px;
      height: 13px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
</style>
