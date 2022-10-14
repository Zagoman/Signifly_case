<template>
  <section>
    <TabsWrapper>
      <Tab title="Score Board">
        <ScoreBoard />
      </Tab>
      <Tab title="Leader Board"> </Tab>
    </TabsWrapper>
  </section>
</template>
<script>
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
import ScoreBoard from "./ScoreBoard.vue";
export default {
  name: "MainBoard",
  components: { TabsWrapper, Tab, ScoreBoard },
};
</script>
<style scoped>
section {
  background-color: #fff;
  border-radius: 16px;
  overflow-y: scroll;
  grid-row: 1/3;
}
</style>
