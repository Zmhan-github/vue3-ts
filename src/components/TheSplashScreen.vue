<template>
  <AnimationItem class="splash-screen">
    <TheSplashScreenLogo />
  </AnimationItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheSplashScreenLogo from './TheSplashScreenLogo.vue';



export default defineComponent({
  components: {
    TheSplashScreenLogo
  },
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
