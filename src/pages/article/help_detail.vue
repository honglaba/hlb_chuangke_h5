<template>
  <div class="app">
    <my-header @left-action="routeBack" :Title="'帮助详情'"></my-header>
    <div class="main2">
      <div class="content">
        <div class="help_content">
          <h2>退货</h2>
          <p>积分达到一定程度或消费次数符合升级标准的将在次日自动升级金星、铂星、五星会员。 在12个日历月后不符合保级标准的将自动降级，按当年的消费情况结合保级标准重新判定所属层级。 </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    this.$printf(this.$route)
    console.log(this)
  },
  components: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.help_content {
  padding: .2rem;
}
</style>
