<template>
  <div class=""/>
</template>

<script>
export default {
  layout: 'blank',
  // 没有用户交互的行为去做这个事情，让它到达这个页面的时候自动执行，利用middleware触发这个接口
  middleware: async (ctx) => {
    let {status, data} = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    } else {

    }
  }
}
</script>

<style lang="scss">

</style>
