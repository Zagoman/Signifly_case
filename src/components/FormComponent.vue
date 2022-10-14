<template>
  <section>
    <TabsFormWrapper>
      <TabForm title="Add Team">
        <AddTeam />
      </TabForm>
      <TabForm title="Add Game">
        <AddGame />
      </TabForm>
    </TabsFormWrapper>
  </section>
</template>
<script>
import AddTeam from "./AddTeam.vue";
import AddGame from "./AddGame.vue";
import TabForm from "./TabForm.vue";
import TabsFormWrapper from "./TabsFormWrapper.vue";

export default {
  name: "FormComponent",
  components: {
    AddTeam,
    TabsFormWrapper,
    TabForm,
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
