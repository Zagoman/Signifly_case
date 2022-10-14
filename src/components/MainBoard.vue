<template>
  <section>
    <TabsWrapper>
      <Tab title="Score Board">
        <ScoreBoard :games="games" />
      </Tab>
      <Tab title="Leader Board">
        <LeaderBoard :teams="teams" />
      </Tab>
    </TabsWrapper>
  </section>
</template>
<script>
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
import ScoreBoard from "./ScoreBoard.vue";
import LeaderBoard from "./LeaderBoard.vue";
export default {
  name: "MainBoard",
  components: { TabsWrapper, Tab, ScoreBoard, LeaderBoard },
  props: ["games", "teams"],
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
