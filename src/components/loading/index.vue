<template lang="">
<div class="loading" v-if="show">
  <div class="loading-bg"></div>
  <div class="loading-detail">
    <div class="donut"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'loading-index',
  data() {
    return {}
  },
  props: ['show'],
  watch: {
    'show' () {
      document.body.style.overflow = this.show ? 'hidden' : ''
    }
  }
}
</script>
<style lang="scss">
.loading {
  position: fixed !important;
  width: 100%;
  height: 100%;
  z-index: 999999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .loading-bg {
      width: 100%;
      height: 100%;
      background-color: #000000;
      opacity: 0.1;
  }
  
  .loading-detail {
    position: fixed;
    top: 43%;
    width: 100%;
    height: 100%;
    

    .donut {
      margin: auto;
      width: 50px;
      height: 50px;
      
      display: block;
      
      background: transparent;
      border-radius: 50%;
      border: 12px solid rgba(rgb(128, 128, 128), 0.2);
      border-left: 12px solid #0d6efd;
      
      animation: 1s rotate infinite linear;
    }
  }
}


@keyframes rotate {
  from {
    transform: rotate(0deg)
  }
  
  to {
    transform: rotate(360deg)
  }
}


</style>