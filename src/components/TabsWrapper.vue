<template>
  <div>
    <ul>
      <li v-for="title in tabTitles" :key="title" @click="selectedTitle = title" :class="{ active: title === selectedTitle }">
        {{ title }}
      </li>
    </ul>

    <slot />
  </div>
</template>
<script>
import { ref, provide } from "vue";
export default {
  name: "TabsFormWrapper",
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);
    provide("selectedTitle", selectedTitle);
    return { tabTitles, selectedTitle };
  },
};
</script>
<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  list-style: none;
  padding: 0;
}
li {
  padding: 1.5rem;
  background-color: #eee;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-weight: 700;
  font-size: 1.33rem;
}
li.active {
  background-color: #fff;
}

@media only screen and (max-width: 800px) {
  li {
    padding: 0.8rem;
    font-size: 1rem;
  }
}
</style>
