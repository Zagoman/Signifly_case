<template>
  <section>
    <TabsWrapper>
      <Tab title="Add Team">
        <AddTeam />
      </Tab>
      <Tab title="Add Game">
        <AddGame />
      </Tab>
    </TabsWrapper>
  </section>
</template>
<script>
import AddTeam from "./AddTeam.vue";
import AddGame from "./AddGame.vue";
import Tab from "./Tab.vue";
import TabsWrapper from "./TabsWrapper.vue";

export default {
  name: "FormComponent",
  components: {
    AddTeam,
    TabsWrapper,
    Tab,
    AddGame,
  },
};
</script>
<style scoped>
section {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
}
</style>
