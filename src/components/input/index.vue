<template>
  <div class="component-input">
    <div class="d-flex">
      <Field  v-model="value"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              :name="name+'Input'"
              :type="type" 
              :rules="rules"
              :class="['form-control', this.class]"
              :disabled="disabled"
              :placeholder="placeholder"
              :validateOnBlur="true"
              :validateOnChange="true"
              :validateOnInput="true"
              @keyup.enter="search(value)" />
      <button :disabled="disabled" v-show="searchFlag" @click="search(value)" class="button-search"><i class="bi bi-search icon-search"></i> ค้นหา</button>
    </div>
    <ErrorMessage :name="name+'Input'" v-slot="{ message }">
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
  </div>
</template>
<script>
export default {
  name: 'component-input',
  data() {
    return {
      value: this.modelValue,
    }
  },
  methods: {
    search(data) {
      if (this.searchFlag) {
        this.$emit('searchClick', data)
      }
    },
  },
  mounted () {
    if (this.modelValue) {
      this.$emit('update:modelValue', this.modelValue.toString())
    }
  },
  watch: {
    'modelValue'() {
      this.value = this.modelValue
    }
  },
  props: ['modelValue', 'rules', 'name', 'type', 'disabled', 'placeholder', 'class', 'errorMessage', 'searchFlag']
};
</script>

<style lang="scss">
.component-input {
  position: relative;
  width: 100%;

  .d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .form-control {
    color: #212529 ;
    border: 1px solid #ced4da;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    padding: 0 16px;
  }

  .button-search {
    background-color: #1a456b;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    min-width: 118px;
    max-width: 118px;
    height: 45px;
    border: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -5px;
  }

  .icon-search {
    width: 23px;
    height: 23px;
    margin-right: 15px;
  }

  .form-control:disabled, .form-control[readonly] {
    background-color: #ececec;
    opacity: 0.7;
  }
  
  .button-search:disabled {
    opacity: 0.7;
  }

  .form-control:focus {
    outline: none;
    box-shadow: 0px 0px;
  }

  ::-webkit-input-placeholder {
    font-size: 16px;
    color: #212529;
    opacity: 0.7;
    text-align: left;
    font-weight: 500;
    line-height: 60px;
  }

  :-ms-input-placeholder {
    font-size: 16px;
    color: #212529;
    opacity: 0.7;
    text-align: left;
    font-weight: 500;
    line-height: 60px;
  }

  ::placeholder {
    font-size: 16px;
    color: #212529;
    opacity: 0.7;
    text-align: left;
    font-weight: 500;
    line-height: 60px;
  }

  ::-webkit-input-placeholder { line-height: normal; }

}
</style>
