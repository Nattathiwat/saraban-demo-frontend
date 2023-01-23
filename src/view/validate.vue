
<template>
  <div class="form">
    <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
      <h2 class="name">Form Submit</h2>
      <div class="group-input">
        <div class="name">text</div>
        <cpn-input  v-model="input1"
                    name="input1"
                    type="text"
                    placeholder="required"
                    rules="required" />
      </div>
      <div class="group-input">
        <div class="name">email</div>
        <cpn-input  v-model="input2"
                    name="input2"
                    type="text"
                    placeholder="required email"
                    errorMessage="required email"
                    rules="required|email" />
      </div>
      <div class="group-input">
        <div class="name">password</div>
        <cpn-input  v-model="input3"
                    name="input3"
                    type="password"
                    placeholder="required"
                    rules="required|password" />
      </div>
      <div class="group-input">
        <div class="name">confirm password</div>
        <cpn-input  v-model="input4"
                    name="input4" 
                    type="password"
                    placeholder="required"
                    :rules="`required|confirmed:${input3}`" />
      </div>
      <div class="group-input">
        <div class="name">select</div>
        <cpn-select v-model="input5"
                    name="input5"
                    :optionSelect="optionSelect"
                    placeholder="required"
                    rules="required" />
      </div>
      <div class="group-input">
        <div class="name">date</div>
        <cpn-datepicker v-model="input6"
                        name="input6"
                        placeholder="required"
                        rules="required" />
      </div>
      <div class="group-input">
        <div class="name">time</div>
        <cpn-time v-model="input7"
                  name="input7"
                  placeholder="required"
                  rules="required"/>
      </div>
      <div class="group-input">
        <div class="name">autoComplete</div>
        <cpn-autoComplete v-model="input8"
                          name="input8"
                          :optionSelect="optionSelect"
                          placeholder="required"
                          rules="required"/>
      </div>
      <div class="group-input">
        <div class="name">textArea</div>
        <cpn-textArea v-model="input9"
                      name="input9"
                      placeholder="required"
                      rules="required"/>
      </div>
      <a href="https://vee-validate.logaretm.com/v4/guide/global-validators#Available%20Rules" target="_blank">เงื่อนไข validate (rules)</a>
      <br>
      <button type="reset" @click="reset" class="btn btn-danger me-3 mt-3">Clear</button>
      <button type="submit" class="btn btn-primary mt-3">Save</button>
      <!-- errorMessage default ที่ไฟล์ assets/setupValidate.js -->
    </Form>
  </div>
</template>
<script>
export default {
  name: 'validate',
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      optionSelect: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
      input6:'',
      input7:'',
      input8:'',
      input9:'',
    }
  },
  methods: {
    reset() {
      this.input1 = ''
      this.input2 = ''
      this.input3 = ''
      this.input4 = ''
      this.input5 = ''
      this.input6 = ''
      this.input7 = ''
      this.input8 = ''
      this.input9 = ''
    },
    onSubmit() {
      alert('Form Submit')
    }
  }
}
</script>
<style lang="scss">
  .form {
    width: 100%;
    height: 100%;
    min-width: 800px;
    min-height: 200px;
    border-radius: 15px;
    box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
    background-color: #fff;
    border: 0px;
    padding: 22px 29px;
    
    .group-input {
      margin-bottom: 22px;

      .name {
        margin-bottom: 5px;
      }
    }
  }
</style>
