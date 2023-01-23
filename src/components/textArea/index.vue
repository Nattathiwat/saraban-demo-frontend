<template>
  <div class="component-text-area">
    <Field  v-model="value"
            as="textarea"
            autocomplete="off"
            :style="this.style"
            :class="[this.class, 'form-control']"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :name="name+'text-area'"
            :disabled="disabled"
            :placeholder="placeholder"
            :rows="rows"
            @keydown="handleKeydown"
            :rules="rules"
            :validateOnBlur="true"
            :validateOnChange="true"
            :validateOnInput="true"
            ref="textArea"
            />
    <ErrorMessage :name="name+'text-area'" v-slot="{ message }">
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
  </div>

</template>

<script>
export default {
  name: 'component-text-area',
  data() {
    return {
      value: this.modelValue
    }
  },
  props: ['name', 'placeholder', 'modelValue', 'class', 'style', 'disabled', 'rules', 'rows', 'errorMessage'],
  methods: {
    handleKeydown(data) {
      let area = data.target;
      if (area.value) {
        setTimeout(function(){
          area.style.height = 'auto';
          area.style.padding = '8px 15px';
          area.style.height = area.scrollHeight + 'px';
        },0);
      }
    }
  },
  watch: {
    'modelValue'() {
      this.value = this.modelValue
    }
  }
}
</script>

<style scoped lang="scss">
.component-text-area {
  .form-control {
    resize: vertical;
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 16px;
    color: #212529;
    min-height: 45px;
  }

  .form-control:disabled, .form-control[readonly] {
    background-color: #ececec;
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
