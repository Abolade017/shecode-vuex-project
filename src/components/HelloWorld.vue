<template>
  <div>
    <div class="hello px-10 py-10">
      <div class="flex items-center justify-between ">
        <div class="text-2xl font-bold text-blue-400">logo</div>
        <div class="flex space-x-6 items-center">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="selected = tab"
            class="text-lg font-bold border-gray-300 rounded-md h-12 w-48"
            :class="['tab-btn', { active: selected === tab }]"
          >
            {{ tab }}
          </button>
        </div>
      </div>
    </div>
    <component :is="selected"></component>
  </div>
</template>

<script>
import Home from "./tabs/Home.vue";
import About from "./tabs/About.vue";
export default {
  name: "HelloWorld",
  components: {
    Home,
    About
  },
  data() {
    return {
      selected: "Home",
      tabs: ["Home", "About"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  border-bottom: 3px solid blue;
  background-color: #fcfcfc;
}
</style>
