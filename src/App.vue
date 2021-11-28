<template>
<div>
  <LikeHeader></LikeHeader>
  <h2>{{ number }}</h2>
  <!-- 子コンポーネントにデータ（props)を渡す -->
  <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
  <LikeNumber :total-number="number"></LikeNumber>
</div>
</template>

<script>
// ローカル登録する場合は以下のようmain.jsにimportして、コンポーネント登録をする
import LikeHeader from "./assets/components/LikeHeader.vue";

export default {
   data() {
     return {
       number: 10
       };
   },
    components: {
       LikeHeader
    },
    method: {
      incrementNumber(value) {
        this.number = value
      }
    }
}
</script>

<style scoped>
div {
  border:  1px solid red;
}
</style>

