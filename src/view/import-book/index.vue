
<template>
  <div class="form-controls">
    <h2 class="name mb-4">Input</h2>
    <div class="group-input">
      <div class="name">Text Value: {{input1}}</div>
      <cpn-input  v-model="input1"
                  name="input1"
                  class=""
                  style=""
                  type="text"
                  :disabled="input11"
                  @keyup="keyup"
                  @keypress="keypress"
                  @keydown="keydown"
                  @focusin="focusin"
                  @focusout="focusout"
                  placeholder="Text" />
    </div>
    <div class="group-input">
      <div class="name">Search Value: {{input12}}</div>
      <cpn-input  v-model="input12"
                  name="input12"
                  class=""
                  style=""
                  type="text"
                  :searchFlag="true"
                  :disabled="input11"
                  @keyup="keyup"
                  @keypress="keypress"
                  @keydown="keydown"
                  @focusin="focusin"
                  @focusout="focusout"
                  @searchClick="search"
                  placeholder="Text" />
    </div>
    <div class="group-input">
      <div class="name">Select Value: {{input2}}</div>
      <cpn-select v-model="input2"
                  name="input2"
                  class=""
                  style=""
                  :disabled="input11"
                  :firstSelect="firstSelect"
                  @change="change"
                  :optionSelect="optionSelect"
                  placeholder="Select" />
    </div>
    <div class="group-input">
      <div class="name">Auto complete Value: {{input3}}</div>
      <cpn-autoComplete v-model="input3"
                        name="input3"
                        class=""
                        style=""
                        type="text"
                        :disabled="input11"
                        :firstSelect="firstSelect"
                        :optionSelect="optionSelect2"
                        @change="change"
                        @keyupData="keyupData"
                        @keypress="keypress"
                        @keydown="keydown"
                        @focusin="focusin"
                        @focusout="focusout"
                        placeholder="Auto Complete" />
    </div>
    <div class="group-input">
      <div class="name">Text Area Value: {{input4}}</div>
      <cpn-textArea v-model="input4"
                    name="input4"
                    class=""
                    style=""
                    rows="5"
                    :disabled="input11"
                    @keyup="keyup"
                    @keypress="keypress"
                    @keydown="keydown"
                    @focusin="focusin"
                    @focusout="focusout"
                    placeholder="Text Area"  />
    </div>
    <div class="group-input">
      <div class="name">Checkbox Value: {{input5}}</div>
      <cpn-checkbox v-model="input5"
                    name="input5"
                    class=""
                    style=""
                    label="checbox click!!!"
                    :disabled="input11"
                    @change="change"/>
    </div>
    <div class="group-input">
      <div class="name">Radio Value: {{input6}}</div>
      <cpn-radio  v-model="input6"
                  name="input6"
                  class=""
                  style=""
                  value="one"
                  :disabled="input11"
                  @change="change"/>
              
      <cpn-radio  v-model="input6"
                  name="input6"
                  class="mt-2"
                  style=""
                  value="two"
                  :disabled="input11"
                  @change="change"/>
    </div>
    <a href="https://vue3datepicker.com/" target="_blank">Vue datepicker</a>
    <div class="group-input">
      <div class="name">Datepicker Value: {{input7}} {{input7 && input8 ? '-' : ''}} {{input8}}</div>
      <div class="d-flex w-100">
        <cpn-datepicker v-model="input7"
                        name="input7"
                        class=""
                        style=""
                        :minDate="input8"
                        @change="change"
                        :disabled="input11"
                        placeholder="date start" />

        <cpn-datepicker v-model="input8"
                        name="input8"
                        class="ms-2"
                        style=""
                        @change="change"
                        :disabled="input11"
                        placeholder="date end" />
      </div>
    </div>
    <div class="group-input">
      <div class="name">Datepicker Range Value: {{input9}}</div>
      <cpn-datepickerRange  v-model="input9"
                            name="input9"
                            class=""
                            style=""
                            @change="change"
                            :disabled="input11"
                            placeholder="date range" />
    </div>
    <div class="group-input">
      <div class="name">Time Value: {{input10}}</div>
      <cpn-time v-model="input10"
                name="input10"
                class=""
                style=""
                @change="change"
                :disabled="input11"
                placeholder="time" />
    </div>
    <div class="group-input">
      <div class="name">ToggleSwitch Value: {{input11}}</div>
      <cpn-toggleSwitch v-model="input11"
                        name="input11"
                        class=""
                        style=""
                        :disabled="false"
                        @change="change" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'form-controls',
  data() {
    return {
      input1: '',
      input2: '',
      firstSelect: { show: true,name: 'none' },
      optionSelect: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
      input3: '',
      optionSelect2: [{ name: 'select1', value: '1' },{ name: 'select2', value: '2' },{ name: 'select3', value: '3' }],
      input4: '',
      input5: true,
      input6: 'one',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: false,
      input12: '',
    }
  },
  methods: {
    keyupData(data) {
      this.optionSelect2 = [{ name: 'select1', value: '1' },{ name: 'select2', value: '2' },{ name: 'select3', value: '3' }]
      this.optionSelect2 = this.optionSelect2.filter(row => {
        return (row.name.toString().toLowerCase().indexOf(data.toLowerCase()) > -1)
      })
    },
    change(data) {
      console.log('change', data)
    },  
    keyup(data) {
      console.log('keyup', data.key)
    },
    keydown(data) {
      console.log('keydown', data.key)
    },
    keypress(data) {
      console.log('keypress', data.key)
    },
    focusin(data) {
      console.log('focusin', data)
    },
    focusout(data) {
      console.log('focusout', data)
    },
    search(data) {
      console.log('search', data)
    }
  }
}
</script>
<style lang="scss">
  .form-controls {
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
