<template>
  <div
    class="animatable"
    :class="cssClass"
    :style="{ animationDuration: duration }"
    @animationend="animationEnd"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { defineComponent, onBeforeUnmount, ref, computed } from 'vue';



export default defineComponent({
  props: {
    subject: {
      type: Object as () => Subject<string>,
      required: true
    },
    duration: {
      type: String,
      default: '200ms'
    }
  },

  setup(props) {
    const unsubscribe = new Subject<void>();

    props.subject
      .asObservable()
      .pipe(takeUntil(unsubscribe))
      .subscribe(animate)

    onBeforeUnmount(() => {
      unsubscribe.next();
      unsubscribe.complete();
    })

    const beforeCssClass = ref<string>('');
    const activeCssClass = ref<string>('');
    const afterCssClass  = ref<string>('');

    const cssClass = computed<string>(() => {
      return `${beforeCssClass.value} ${activeCssClass.value} ${afterCssClass.value}`;
    })

    function animate(animation: string) {
      beforeCssClass.value = "fade-out-before";

      requestAnimationFrame(() => {
        activeCssClass.value = "fade-out-active";

        requestAnimationFrame(() => {
          beforeCssClass.value = "";
        });
      })
    }

    function animationEnd() {
      afterCssClass.value = "fade-out-after";

      requestAnimationFrame(() => {
        activeCssClass.value = "";
      });
    }

    return {
      cssClass,
      animationEnd
    }


  }
});

</script>