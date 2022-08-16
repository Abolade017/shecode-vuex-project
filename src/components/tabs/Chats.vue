<template>
  <div class="mt-20 pl-10 pr-20">
    <div v-for="chat in 10" :key="chat">
      <div class="flex items-center justify-between">
        <div class="flex space-x-6 items-center">
          <div class="rounded-full h-10 w-10">
            <img src="" alt="" class="rounded-full h-full w-full">
          </div>
          <div></div>
        </div>
        <div>10:20 AM</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chats: [{}],
    };
  },
};
</script>
