<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { defineComponent, onBeforeUnmount } from 'vue';



export default defineComponent({
  props: {
    subject: {
      type: Object as () => Subject<string>,
      required: true
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

    function animate(animation: string) {
      console.log(animation)
    }


  }
});

</script>