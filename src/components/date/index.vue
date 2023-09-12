<template>
  <div :style="this.style" :class="[this.class, 'component-date']">
    <Field v-model="data" type="text" :name="name" v-slot="{ field }" :rules="rules">
      <input v-bind="field"  v-show="false">
    </Field>
    <Datepicker :modelValue="date"
                @update:modelValue="setDate"
                ref="dp" 
                cancelText="Reset" 
                selectText="Ok"  
                :monthChangeOnScroll="false" 
                :enableTimePicker="false" 
                :format="format"
                locale="th" 
                :name="name+'Date'"
                monthNameFormat="long"
                :placeholder="placeholder ? placeholder : ''"
                inputClassName="dp-custom-input"
                calendarCellClassName="dp-custom-cell"
                menuClassName="dp-custom-menu"
                :disabled="disabled"
                :minDate="newMinDate"
                :maxDate="newMaxDate"
                calendarClassName="dp-custom-calendar"
                :autoApply="true"
                :closeOnAutoApply="true"
                >
      <template #action-preview=""></template>
      <template #year="{ year }">{{ year + 543 }}</template>
      <template #year-overlay-value="{ text }">{{ (+text + +543) }}</template>
      <template #input-icon>
        <div class="group-image" :class="[disabled? 'none-pointer' : '']">
          <i class="bi bi-calendar3 input-slot-image"></i>
          <div class="line-up"></div>
        </div>
      </template>
    </Datepicker>
    <ErrorMessage :name="name" v-slot="{ message }"> 
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'component-date',
  setup(props, context) {
    const data = ref();
    const date = ref();
    const dp = ref();
    const newMinDate = ref();
    const newMaxDate = ref();
    let first = true;
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() + 543;
      return `${day > 9 ? day : '0' + day}/${month > 9 ? month : '0' + month}/${year}`;
    }
    const setDate = (value) => {
      date.value = value;
      context.emit('update:modelValue', value ? format(value) : '')
      data.value = value ? format(value) : ''
    }
    const minMaxDate = (status, value) => {
      if (status == 'minDate') {
        newMinDate.value = value ? new Date(+value.split("/")[2] - 543, value.split("/")[1] - 1, value.split("/")[0]) : '';
      }
      if (status == 'maxDate') {
        newMaxDate.value = value ? new Date(+value.split("/")[2] - 543, value.split("/")[1] - 1, value.split("/")[0]) : ''
      }
    }
    return {
      date,
      dp,
      format,
      setDate,
      data,
      minMaxDate,
      newMinDate,
      newMaxDate,
      first
    };
  },
  props: ['name', 'placeholder', 'modelValue', 'disabled', 'rules', 'minDate', 'maxDate', 'class', 'style', 'errorMessage'],
  mounted() {
    if (this.modelValue) {
      this.setDate(this.modelValue ? (new Date(+this.modelValue.split("/")[2] - 543, this.modelValue.split("/")[1] - 1, this.modelValue.split("/")[0])) : '')
    }
    if (this.minDate) {
      this.minMaxDate('minDate', this.minDate)
    }

    if (this.maxDate) {
      this.minMaxDate('maxDate', this.maxDate)
    }
  },
  watch: {
    'minDate'() {
      this.minMaxDate('minDate', this.minDate)
    },
    'maxDate'() {
      this.minMaxDate('maxDate', this.maxDate)
    },
    'data'(newData, oldData) {
      if (newData || oldData) {
        this.$emit('change', newData)
      }
    },
    'modelValue'() {
      if (!this.modelValue) {
        this.date = ''
        this.data = ''
      } else {
        this.setDate(this.modelValue ? (new Date(+this.modelValue.split("/")[2] - 543, this.modelValue.split("/")[1] - 1, this.modelValue.split("/")[0])) : '')
      }
    }
  }
}
</script>

<style lang="scss">
.component-date {
  width: 100%;

  .group-image {
    display: flex;
    align-items: center;

    .input-slot-image {
      font-size: 22px;
      margin-left: -2px;
      margin-right: 10px;
      color: #212529;
    }

    .line-up {
      height: 44px;
      width: 1px;
      background: #ced4da;
    }
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
}
.dp-custom-input:disabled {
  background-color: #ececec;
  opacity: 0.7;
}

.dp-custom-menu {
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
}

.dp__month_year_row {
  margin-top: 10px;
}

.dp__calendar_wrapper {
  padding-right: 10px;
  padding-left: 10px;
}

.dp-custom-input {
  height: 45px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding-left: 54px;
  font-size: 16px;
  color: #212529;
}

.dp__input_icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
}

.dp__clear_icon {
  background-color: #ffffff;
  padding: 3px;
  right: 5px;
}

.dp__input:focus {
  outline: none;
  box-shadow: 0px 0px;
}

.dp__input:hover {
  outline: none;
  box-shadow: 0px 0px;
  border: 1px solid #ced4da;
}
</style>
