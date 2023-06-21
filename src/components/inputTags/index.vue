<template>
  <div class="component-input-tags" ref="dropdownInputTags">
    <Field v-model="data" type="text" :name="name+'InputTags'" v-slot="{ field }" :rules="rules">
      <input v-bind="field"  v-show="false">
    </Field>
    <div class="group-input-tags">
      <div class="tags-box" v-for="(item, index) in data" :key="index">{{item.name}} <i class="bi bi-x-lg icon-close pointer" @click="data.splice(index,1)"></i></div>
      <input  v-model="value"
              :style="this.style"
              :class="this.class"
              :name="name+'InputTags'"
              autocomplete="off"
              :disabled="disabled"
              :placeholder="placeholder"
              v-on:keyup="onKeyup($event.target.value)"
              @keydown="onKeydown"
              @focusout="handleFocusout"
              />
    </div>
    <ErrorMessage :name="name+'InputTags'" v-slot="{ message }">
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
    <div class="dropdown-content" :style="dropdown ? 'display: block; overflow: auto;' : 'display: none;'">
      <div v-for="(item, index) in optionSelect" :key="index">
        <div class="line" v-show="index != 0"></div>
        <div class="dropdown-list" @click="select(item)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component-input-tags',
  data() {
    return {
      dropdown: false,
      data: [],
      value: ''
    }
  },
  props: ['name', 'placeholder', 'modelValue', 'class', 'style', 'disabled', 'rules', 'errorMessage', 'optionSelect', 'flagSearch'],
  methods: {
    handleFocusout(e) {
      if (this.flagSearch) {
        this.value = ''
      } else {
        if (e.target.value) {
          if (!this.data.some(el => el.name === e.target.value)) {
            this.data.push({name: e.target.value, value: ''})
            this.$emit('update:modelValue', this.data)
          }
          this.value = ''
        }
        e.stopPropagation();
        e.preventDefault();  
        e.returnValue = false;
        e.cancelBubble = true;
        return false
      }
    },
    onKeyup(data) {
      this.$emit('keyupData', data)
      if (this.flagSearch) {
        this.dropdown = true
        if (!data) {
          this.dropdown = false
          this.value = ''
        }
      }
    },
    onKeydown(e) {
      if (this.flagSearch) {
        if (e.key === 'Enter' || e.keyCode === 13) {
          this.value = ''
          e.stopPropagation();
          e.preventDefault();  
          e.returnValue = false;
          e.cancelBubble = true;
          return false
        }
      } else {
        if (e.key === 'Enter' || e.keyCode === 13) {
          if (e.target.value) {
            if (!this.data.some(el => el.name === e.target.value)) {
              this.data.push({name: e.target.value, value: ''})
              this.$emit('update:modelValue', this.data)
            }
            this.value = ''
          }
          e.stopPropagation();
          e.preventDefault();  
          e.returnValue = false;
          e.cancelBubble = true;
          return false
        }
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    focusoutBtn (e) {
      if (this.$refs.dropdownInputTags) {
        let target = e.target
        if ((this.$refs.dropdownInputTags !== target) && !this.$refs.dropdownInputTags.contains(target)) {
          if (this.dropdown) {
            let check = true
            this.optionSelect.filter(row => {
              if (row.name == this.value && this.value) {
                check = false
                this.value = ''
                if (!this.data.some(el => el.name === row.name)) {
                  this.data.push(row)
                  this.$emit('update:modelValue', this.data)
                }
              }
            })
            if (check) {
              this.value = ''
            }
          }
          this.dropdown = false
        }
      }
    },
    select(data) {
      if (!this.data.some(el => el.name === data.name)) {
        this.data.push(data)
        this.$emit('update:modelValue', this.data)
      }
      this.value = ''
      this.dropdown = false
    }
  },
  mounted () {
    document.addEventListener('click', this.focusoutBtn)
    if (this.modelValue) {
      this.data = this.modelValue
    }
  },
  watch: {
    'modelValue'() {
      if (!this.modelValue) {
        this.data = []
      } else {
        this.data = this.modelValue
      }
    },
  },
}
</script>
<style scoped lang="scss">
.component-input-tags {
  position: relative;
  display: inline-block;
  width: 100%;

  .group-input-tags {
    display: flex;
    flex-wrap: wrap;
    min-height: 45px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ced4da;
    background-color: #ffffff;
    position: relative;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 6px;

    .tags-box {
      background: rgba(0, 0, 0, 0.1);
      padding-left: 8px;
      padding-right: 5px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      height: 30px;
      margin-right: 10px;
      margin-top: 6px;
      
      .icon-close {
        margin-left: 8px;
        font-size: 14px;
      }
    }

    input {
      border: 0px;
      flex: 1;
    }
  }

  input:focus {
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

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 198px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.16);
    text-align: left;
    z-index: 2;
    color: #0A1629;
    font-size: 16px;
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
      display: flex;
      align-items: center;
      min-height: 45px;
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
</style>