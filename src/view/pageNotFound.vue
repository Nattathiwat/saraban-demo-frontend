
<template>
  <div class="pageNotFound">
    <div class="head">404</div>
    <div class="detail">pageNotFound</div>
  </div>
</template>
<script>
export default {
  name: 'pageNotFound',
}
</script>
<style lang="scss">
  .pageNotFound {
    margin: auto;
    width: 80%;
    text-align: center;

    .head {
      font-size: 150px;
      font-weight: 800;
      margin-top: 100px;
      margin-bottom: 0px;
    }

    .detail {
      font-size: 80px;
    }
  }
</style>
