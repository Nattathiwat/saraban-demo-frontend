<template>
  <div class="component-select" ref="dropdownSelect">
    <Field v-model="data" type="text" :name="name+'Select'" v-slot="{ field }" :rules="rules">
      <input v-bind="field"  v-show="false">
    </Field>
    
    <button @click="toggleDropdown()" 
            type="button" 
            :style="this.style"
            :class="[this.class, 'flex-right-dropdown', (data ? 'colorBlack' : '')]"
            :name="name+'Select'"
            :disabled="disabled"
            >
      <div class="name-dropdown">{{data ? data : placeholder}}</div>
      <i class="bi bi-chevron-down" :class="[disabled? 'disabled' : 'pointer']"></i>
    </button>
    <ErrorMessage :name="name+'Select'" v-slot="{ message }">
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
    <div class="dropdown-content" :style="dropdown ? 'display: block; overflow: auto;' : 'display: none;'">
      <div>
        <div class="dropdown-List firstSelect" v-show="firstSelect?.show" @click="select({value: '', name: ''})">{{firstSelect?.name}}</div>
      </div>
      <div v-for="(item, index)  in optionSelect" :key="index">
        <div class="line" v-show="index != 0 || firstSelect?.show"></div>
        <div class="dropdown-List" @click="select(item)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component-select',
  data() {
    return {
      dropdown: false,
      data: ''
    }
  },
  props: ['name', 'placeholder', 'modelValue', 'class', 'style', 'disabled', 'rules', 'optionSelect', 'firstSelect', 'errorMessage'],
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    focusoutBtn (e) {
      if (this.$refs.dropdownSelect) {
        let target = e.target
        if ((this.$refs.dropdownSelect !== target) && !this.$refs.dropdownSelect.contains(target)) {
          this.dropdown = false
        }
      }
    },
    select(data) {
      this.$emit('update:modelValue', data.value)
      this.dropdown = false
      this.data = data.name
    },
    setDataValue() {
      this.optionSelect.filter(row => {
        if (row.value == this.modelValue) {
          this.data = row.name
          this.$emit('update:modelValue', row.value)
          this.$emit('change', row.value)
        }
      })
    }
  },
  mounted () {
    document.addEventListener('click', this.focusoutBtn)
    if (this.modelValue) {
      this.setDataValue()
    }
  },
  watch: {
    'modelValue'() {
      if (!this.modelValue) {
        this.data = ''
        this.$emit('change', '')
      } else {
        this.setDataValue()
      }
    },
    'optionSelect'() {
      if (this.modelValue) {
        this.setDataValue()
      }
    }
  },
}
</script>
<style scoped lang="scss">
.component-select {
  position: relative;
  display: inline-block;
  width: 100%;

  .flex-right-dropdown:disabled, .flex-right-dropdown[readonly] {
    background-color: #ececec;
    opacity: 0.7;
  }

  .flex-right-dropdown {
    display: flex;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ced4da;
    background-color: #ffffff;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;

    .name-dropdown {
      color: #212529;
      padding-right: 10px;
      font-size: 16px ;
      opacity: 0.7 ;
      text-align: left ;
      font-weight: 500 ;
    }
  }

  .colorBlack .name-dropdown {
    padding-right: 10px;
    opacity: 1;
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

    .dropdown-List {
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

  .pointer {
    font-size: 18px;
    margin-top: 5px;
  }
}
</style>