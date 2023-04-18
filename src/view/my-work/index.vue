<template>
  <div class="my-work-inex">
    <div class="topnav">
      <div @click="$router.push({name: 'my-work.waiting-booking-receive'})" :class="$route.name == 'my-work.waiting-booking-receive' || $route.name == 'my-work.waiting-booking-receive-edit' || $route.name == 'my-work.waiting-booking-receive-create' ? 'active' : ''">หนังสือรอรับเข้า</div>
      <div @click="$router.push({name: 'my-work.booking-receive'})" :class="$route.name == 'my-work.booking-receive' || $route.name == 'my-work.booking-receive-edit' || $route.name == 'my-work.booking-receive-create' ? 'active' : ''">หนังสือรับเข้า</div>
      <div @click="$router.push({name: 'my-work.booking-out'})" :class="$route.name == 'my-work.booking-out' || $route.name == 'my-work.booking-out-edit' || $route.name == 'my-work.booking-out-create' ? 'active' : ''">หนังสือส่งออก</div>
    </div>
    <div class="detail" :class="$route.name == 'my-work.waiting-booking-receive' ? 'active' : ''">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-work-inex',
  data() {
    return {}
  },
}

</script>
<style lang="scss">
  .my-work-inex {
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
      // background-color: #fff;
      border: 0px;
    }

    .active {
      border-top-left-radius: 0px;
    }
  }
</style>