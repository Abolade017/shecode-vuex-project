<template>
  <div class="mt-20 pl-10 pr-20">
    <div v-for="chat in 10" :key="chat">
      <div class="flex items-center justify-between py-4">
        <div class="flex space-x-6">
          <div class=" h-10 w-10">
            <img src="../../assets/logo.png" alt="" class=" rounded-full h-full w-full">
          </div>
          <div>
            <p class="text-lg text-gray-700">good morning</p>
          </div>
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
