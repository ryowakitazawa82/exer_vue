<template>
<div>
  <LikeHeader></LikeHeader>
  <LikeNumber></LikeNumber>
</div>
</template>

<script>
// ローカル登録する場合は以下のようmain.jsにimportして、コンポーネント登録をする
import LikeHeader from "./LikeHeader.vue";

export default {
    components: {
       LikeHeader
    }
}
</script>



