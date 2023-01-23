<template>
  <div :class="[this.class, 'component-switch']" :style="this.style">
    <label class="switch">
      <input  v-model="value"
              @change="change()"
              :name="name+'switch'"
              :disabled="disabled"
              type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'component-switch',
  data() {
    return {
      value: this.modelValue
    }
  },
  props: ['name', 'modelValue', 'disabled', 'class', 'style'],
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
.component-switch {
  width: 100%;

  .switch {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 39px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;
    background-color: #ffffff;
    border: 1px solid #ced4da;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border: 1px solid #ced4da;
  }

  input:checked + .slider {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(40px);
    -ms-transform: translateX(40px);
    transform: translateX(40px);
    border-color: #ffffff;
  }

  .slider.round {
    border-radius: 50px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  input[readonly] + .slider {
    background-color: #ececec;
    border-color: #ced4da;
    opacity: 0.7;
    cursor: default;
  }

  input:disabled + .slider {
    background-color: #ececec;
    border-color: #ced4da;
    opacity: 0.7;
    cursor: default;
  }
  input:checked, input:disabled + .slider {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
}
</style>
