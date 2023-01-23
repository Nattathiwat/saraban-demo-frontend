<template>
  <div class="component-auto-complete">
    <div class="component-input" ref="dropdownAutoComplete">
      <Field  :class="[this.class, 'form-control']"
              :style="this.style"
              v-model="value"
              :name="name+'auto-complete'"
              autocomplete="off"
              v-on:keyup="onKeyup($event.target.value)"
              :validateOnBlur="true"
              :validateOnChange="true"
              :validateOnInput="true"
              :placeholder="placeholder"
              :disabled="disabled"
              :maxlength="maxlength"
              :rules="rules"
              :type="type" />
      <i class="bi bi-chevron-down image-select"  @click="disabled ? '' : toggleDropdown()" :class="[disabled? 'disabled' : 'pointer']"></i>
      <ErrorMessage :name="name+'auto-complete'" v-slot="{ message }">
        <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
      </ErrorMessage>
      <div class="dropdown-content" :style="dropdown ? 'display: block; overflow: auto;' : 'display: none;'">
        <div>
          <div class="dropdown-list firstSelect" v-show="firstSelect?.show" @click="select({value: '', name: ''})">{{firstSelect?.name}}</div>
        </div>
        <div v-for="(item, index)  in optionSelect" :key="index">
          <div class="line" v-show="index != 0 || firstSelect?.show"></div>
          <div class="dropdown-list" @click="select(item)">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'component-auto-complete',
  data() {
    return {
      dropdown: false,
      value: this.modelValue
    }
  },
  props: ['name', 'placeholder', 'modelValue', 'type', 'class', 'style', 'disabled', 'maxlength', 'rules', 'optionSelect', 'iconN', 'firstSelect', 'errorMessage'],
  methods: {
    onKeyup(data) {
      this.$emit('keyupData', data)
      this.dropdown = true
      if (!data) {
        this.dropdown = false
        this.$emit('update:modelValue', '')
        this.$emit('change', '')
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    focusoutBtn (e) {
      if (this.$refs.dropdownAutoComplete) {
        let target = e.target
        if ((this.$refs.dropdownAutoComplete !== target) && !this.$refs.dropdownAutoComplete.contains(target)) {
          if (this.dropdown) {
            let check = true
            this.optionSelect.filter(row => {
              if (row.name == this.value && this.value) {
                check = false
                this.$emit('update:modelValue', row.value)
                this.$emit('change', row.value)
              }
            })
            if (check) {
              this.$emit('update:modelValue', '')
              this.$emit('change', '')
              this.value = ''
              this.$emit('keyupData', '')
            }
          }
          this.dropdown = false
        }
      }
    },
    select(data) {
      this.$emit('update:modelValue', data.value)
      this.$emit('change', data.value)
    
      this.dropdown = false
    }
  },
  mounted () {
    document.addEventListener('click', this.focusoutBtn)
    if (this.modelValue) {
      this.$emit('update:modelValue', this.modelValue.toString())
    }
  },
  beforeUnmount () {
    document.removeEventListener('click',this.focusoutBtn)
  },
  watch: {
    'modelValue'() {
      this.value = this.optionSelect.filter(row=>row.value == this.modelValue)[0]?.name || ''
    }
  },
}
</script>

<style scoped lang="scss">
.component-auto-complete {
  width: 100%;

  .data-select {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .content-data-select {
      height: 25px;
      background-color: #EAEAEE;
      border-radius: 12.5px;
      padding: 2px 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 13px;

      .icon {
        width: 12px;
        height: 12px;
      }
    }
  }

  .component-input {
    position: relative;
    width: 100%;

  
    .form-control {
      color: #212529 ;
      border: 1px solid #ced4da;
      border-radius: 5px;
      width: 100%;
      height: 45px;
      padding: 0 16px;
    }

    .form-control:disabled, .form-control[readonly] {
      background-color: #ececec;
      opacity: 0.7;
    }

    .disabled {
      color: rgba(16, 16, 16, 0.3);
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

    .image-select {
      position: absolute;
      right: 17px;
      top: 11px;
      font-size: 18px;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #ffffff;
      min-width: 198px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.16);
      text-align: left;
      z-index: 2;
      color: #0A1629;
      font-size: 20px;
      font-weight: 400;
      border-radius: 10px;
      left: 0;
      right: 0;
      margin-top: 8px;
      overflow:hidden;
      max-height: 420px;
      
      .firstSelect {
        opacity: 0.7;
      }

      .dropdown-list {
        padding-left: 22px;
        padding-right: 22px;
        padding-top: 15px;
        padding-bottom: 15px;
        min-height: 58px;
        width: 100%;
        cursor: pointer;
      }

      .line {
        border-bottom: 1px solid #D8D8D8;
        height: 0px !important;
        opacity: 1 !important;
        margin: 0px !important;
        padding: 0px !important;
      }
    }
  }
}
</style>
