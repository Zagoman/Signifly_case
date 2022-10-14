<template>
  <div class="tab_content" v-show="title === selectedTitle">
    <slot />
  </div>
</template>
<script>
import { inject } from "vue";

export default {
  name: "TabForm",
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle");

    // console.log(title);
    return {
      selectedTitle,
    };
  },
};
</script>
<style scoped></style>
