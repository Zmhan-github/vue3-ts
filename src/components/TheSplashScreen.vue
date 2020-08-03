<template>
  <AnimationItem
    class="splash-screen"
  >
    <img
      src="../assets/favicon.png"
      alt="Some Icon"
    >
    <div>Экран заставки</div>
    <button @click="click">
      click
    </button>
  </AnimationItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    setup() {


      const click = () => {
        console.log("test")
      }


      return {
        click
      }
  }
});
</script>
