<template>
  <div>
    <div class="hello px-10 py-10">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-blue-400">MessageChat</div>
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
import Chats from "./tabs/Chats.vue";
import Status from "./tabs/Status.vue";
import Calls from "./tabs/Calls.vue";
export default {
  name: "HelloWorld",
  components: {
    Chats,
    Status,
    Calls,
  },
  data() {
    return {
      selected: "Chats",
      tabs: ["Chats", "Status", "calls"],
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
