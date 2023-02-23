<template>
  <div class="subministry-work-inex">
    <div class="topnav">
      <div @click="$router.push({name: 'subministry-work.booking-receive'})" :class="$route.name == 'subministry-work.booking-receive' || $route.name == 'subministry-work.booking-receive-edit' || $route.name == 'subministry-work.booking-receive-create' ? 'active' : ''">หนังสือรับเข้า</div>
      <div @click="$router.push({name: 'subministry-work.record-receive'})" :class="$route.name == 'subministry-work.record-receive' || $route.name == 'subministry-work.record-receive-edit' || $route.name == 'subministry-work.record-receive-create' ? 'active' : ''">บันทึกรับเข้า</div>
      <div @click="$router.push({name: 'subministry-work.booking-out'})" :class="$route.name == 'subministry-work.booking-out' || $route.name == 'subministry-work.booking-out-edit' || $route.name == 'subministry-work.booking-out-create' ? 'active' : ''">หนังสือส่งออก</div>
      <div @click="$router.push({name: 'subministry-work.record-out'})" :class="$route.name == 'subministry-work.record-out' || $route.name == 'subministry-work.record-out-edit' || $route.name == 'subministry-work.record-out-create' ? 'active' : ''">บันทึกส่งออก</div>
    </div>
    <div class="detail" :class="$route.name == 'subministry-work.booking-receive' ? 'active' : ''">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'subministry-work-inex',
  data() {
    return {}
  },
}

</script>
<style lang="scss">
  .subministry-work-inex {
    .topnav {
      overflow: hidden;
      background-color: #f5f5f5;
      display: flex;
    }

    .topnav div {
      float: left;
      color: #1a456b;
      text-align: center;
      padding: 15px 25px 5px;
      text-decoration: none;
      font-size: 18px;
      cursor: pointer;
    }

    .topnav .active {
      background-color: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .detail {
      width: 100%;
      height: 100%;
      min-width: 1550px;
      min-height: 200px;
      border-radius: 15px;
      background-color: #fff;
      border: 0px;
    }

    .active {
      border-top-left-radius: 0px;
    }
  }
</style>