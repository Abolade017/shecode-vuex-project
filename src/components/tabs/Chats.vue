<template>
  <div class="mt-6 px-4 md:pl-10 md:pr-20 ">
    <div v-for="chat in 10" :key="chat">
      <div class="flex  justify-between py-4">
        <div class="flex space-x-2 md:space-x-6">
          <div class=" h-10 w-10">
            <img src="../../assets/logo.png" alt="" class=" rounded-full h-full w-full">
          </div>
          <div>
            <p class="text-sm md:text-lg text-gray-700">good morning</p>
          </div>
        </div>
        <div class="text-sm md:text-lg text-gray-700">10:20 AM</div>
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
