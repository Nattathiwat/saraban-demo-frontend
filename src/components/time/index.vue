<template>
  <div class="component-time">
    <Field v-slot="{ field }" v-model="data" type="text" :name="name+'Time'" :rules="rules">
      <input v-show="false" v-bind="field">
    </Field>
    <Datepicker :model-value="time"
                input-class-name="dp-custom-input"
                menu-class-name="dp-custom-menu"
                cancel-text="Reset" 
                :close-on-auto-apply="false" 
                :name="name+'Time'"
                select-text="Ok"
                locale="th" 
                time-picker
                :disabled="disabled"
                :enable-seconds="false"
                :placeholder="placeholder ? placeholder : ''"
                @update:model-value="setDate"
                :autoApply="true"
                :closeOnAutoApply="true"
                >
      <template #action-preview=""></template>
      <template #input-icon>
        <div class="group-image" :class="[disabled? 'none-pointer' : '']">
          <i class="bi bi-clock input-slot-image"></i>
          <div class="line-up"></div>
        </div>
      </template>
    </Datepicker>
    <ErrorMessage :name="name+'Time'" v-slot="{ message }"> 
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ComponentTime',
  props: ['name', 'modelValue', 'disabled', 'class', 'style', 'placeholder', 'rules', 'val', 'errorMessage'],
  emits: [
    'update:modelValue',
  ],
  setup(props, context) {
    const data = ref();
    const time = ref({ 
      hours: '', // new Date().getHours(),
      minutes: '', // new Date().getMinutes()
    });
    let first = true;
    const setDate = (value) => {
      time.value = value;
      if (value == null) {
        context.emit('update:modelValue', '');
        data.value = ''
      } else {
        context.emit('update:modelValue', (value.hours > 9 ? value.hours : '0' + value.hours) + ':' + (value.minutes > 9 ? value.minutes : '0' + value.minutes) + ':' + (value.seconds > 0 ? value.seconds : '0' + value.seconds));
        data.value = (value.hours > 9 ? value.hours : '0' + value.hours) + ':' + (value.minutes > 9 ? value.minutes : '0' + value.minutes) + ':' + (value.seconds > 0 ? value.seconds : '0' + value.seconds);
      }
    }
    return {
      time,
      setDate,
      data,
      first,
    }
  },
  watch: {
    'val'(newVal, oldVal) {
      if (!newVal) {
        this.time = '';
      } else {
        let newData = parseInt(newVal.split(':')[0]) + parseInt(newVal.split(':')[1]) + parseInt(newVal.split(':')[2])
        let oldData = parseInt(oldVal.split(':')[0]) + parseInt(oldVal.split(':')[1]) + parseInt(oldVal.split(':')[2])
        if (newData != oldData) {
          let array = newVal.split(':');
          let data = { "hours": parseInt(array[0]), "minutes": parseInt(array[1]), "seconds": parseInt(array[2]) };
          this.setDate(data);
        }
      }
    },
    'modelValue'(newVal, oldVal) {
      if (!this.modelValue) {
        this.time = ''
      } else {
        let newData = parseInt(newVal.split(':')[0]) + parseInt(newVal.split(':')[1]) + parseInt(newVal.split(':')[2])
        let oldData = parseInt(oldVal.split(':')[0]) + parseInt(oldVal.split(':')[1]) + parseInt(oldVal.split(':')[2])
        if (newData != oldData) {
          let array = this.modelValue.split(':');
          let data = { "hours": parseInt(array[0]), "minutes": parseInt(array[1]), "seconds": parseInt(array[2]) };
          this.setDate(data);
        }
      }
    },
  },
  mounted() {
    if (!this.modelValue) {
      this.time = '';
    } else {
      let array = this.modelValue.split(':');
      let data = { "hours": parseInt(array[0]), "minutes": parseInt(array[1]), "seconds": parseInt(array[2]) };
      this.setDate(data);
    }
  },
}
</script>
<style lang="scss" scoped>
.component-time {
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
</style>