<template>
  <section>
    <TabsWrapper>
      <Tab title="Score Board">
        <ScoreBoard />
      </Tab>
      <Tab title="Leader Board">
        <LeaderBoard />
      </Tab>
    </TabsWrapper>
  </section>
</template>
<script>
import TabsWrapper from "./TabsWrapper.vue";
import Tab from "./Tab.vue";
import ScoreBoard from "./ScoreBoard.vue";
import LeaderBoard from "./LeaderBoard.vue";
import AddTeam from "./AddTeam.vue";
export default {
  name: "MainBoard",
  components: { TabsWrapper, Tab, ScoreBoard, LeaderBoard, AddTeam },
  props: ["games", "teams"],
};
</script>
<style scoped>
section {
  background-color: #fff;
  border-radius: 16px;
  grid-row: 1/3;
  /* overflow: hidden; */
  overflow-y: scroll;
}
</style>
