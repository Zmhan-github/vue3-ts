<template>
  <AnimationItem
    :subject="animationSubject"
    class="splash-screen"
  >
    <TheSplashScreenLogo />
  </AnimationItem>
</template>

<script lang="ts">
import { Subject } from 'rxjs';
import { defineComponent, onBeforeUnmount } from 'vue';

import TheSplashScreenLogo from './TheSplashScreenLogo.vue';



export default defineComponent({
  components: {
    TheSplashScreenLogo
  },
  setup() {
    const animationSubject = new Subject<string>()

    setTimeout(() => {
      animationSubject.next('Animate');
    }, 2000)

    onBeforeUnmount(() => {
      animationSubject.complete()
    });

    return {
      animationSubject
    }
  }
});
</script>
