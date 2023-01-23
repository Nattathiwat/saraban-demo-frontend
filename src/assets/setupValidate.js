import { Field, Form, ErrorMessage, defineRule, FieldArray } from 'vee-validate'; /* eslint-disable */
import { confirmed, required } from '@vee-validate/rules'; /* eslint-disable */

export function setupValidate (app) {
  app.component('Field', Field);
  app.component('Form', Form);
  app.component('FieldArray', FieldArray);
  app.component('ErrorMessage', ErrorMessage);
  
  let messageError = '*กรุณากรอกข้อมูล'
  // defineRule('confirmed', confirmed);
  defineRule("confirmed", (value, [other]) => {
    if (value !== other) {
      return `กรุณากรอกรหัสผ่านให้ตรงกัน`;
    }
    return true;
  });

  defineRule("required", (value) => {
    if (!value || !value.length) {
      return messageError;
    }
    return true;
  });

  defineRule("email", (value) => {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      return '*กรุณากรอกอีเมลที่ถูกต้อง';
    }
    return true;
  });

  defineRule("password", (value) => {
    if (!value.match('^(?=.*[0-9])(?=.*[A-Za-z]).{8,}$')) {
      return '*กรุณากรอก a-z, 0-9 รวม8ตัว';
    }
    return true;
  });

  app.config.globalProperties.defaultMessageError = messageError
  app.config.globalProperties.onInvalidSubmit = ({errors}) => {
    const firstError = Object.keys(errors)[0];
    document.querySelector(`[name="${firstError}"]`).focus()
    
    if (document.querySelector(`[name="${firstError + 'Select'}"]`)) {
      document.querySelector(`[name="${firstError + 'Select'}"]`).focus()
    }
    if (document.querySelector(`[name="${firstError + 'Date'}"]`)) {
      document.querySelector(`[name="${firstError + 'Date'}"]`).scrollIntoView({block: "center"})
    }
    if (document.querySelector(`[name="${firstError + 'Time'}"]`)) {
      document.querySelector(`[name="${firstError + 'Time'}"]`).scrollIntoView({block: "center"})
    }
  }
}
