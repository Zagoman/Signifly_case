<template>
  <section>
    <div class="title">Add Team</div>
    <AddTeam />
  </section>
</template>
<script>
import AddTeam from "./AddTeam.vue";
import Tab from "./Tab.vue";
import TabsWrapper from "./TabsWrapper.vue";

export default {
  name: "FormComponent",
  components: {
    AddTeam,
    TabsWrapper,
    Tab,
  },
};
</script>
<style scoped>
section {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
}
.title {
  background-color: #fff;
  padding: 1.5rem;
  font-weight: 700;
}
</style>
