<script lang="js">
  let y;
  let visible;
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  // function headerShow(visible) {
  //   // console.log(visible);
  //   dispatch("message");
  // }
  function scrollCheck(y) {
    // console.log(y);
    // if y is larger than 600 than call function
    visible = y < 50 ? false : true;
    // headerShow(visible);
  }
  $: scrollCheck(y);
</script>

<svelte:window bind:scrollY={y} />
<slot {visible} />

<style></style>
