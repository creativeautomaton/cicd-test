<script>
  import { spring } from "svelte/motion";
  import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const fadeSpring = spring(1, { stiffness: 0.1, damping: 0.5 });
  const transformSpring = spring(0, { stiffness: 0.2, damping: 0.1 });

  // const toggleFade = () => fadeSpring.update((val) => (val ? 0 : 1));
  //
  // const toggleTransform = () =>
  //   transformSpring.update((val) => (val ? 0 : 500));
  // const snapTransform = () =>
  //   transformSpring.update((val) => val, { hard: true });

  let visible = false;
  let y;

  function scrollCheck(y) {
    // console.log(y);
    // if y is larger than 600 than call function
    visible = y < 600 ? true : false;
    // y < 600 ? fadeSpring.update((val) => 1) : fadeSpring.update((val) => 0);
    // y < 700
    //   ? transformSpring.update((val) => 500)
    //   : transformSpring.update((val) => 0);
  }
  $: scrollCheck(y);
</script>

<svelte:window bind:scrollY={y} />

<p>scrolly is {y}</p>
{#if visible}
  <p transition:fly={{ x: 200, duration: 2000 }}>Flies in and out</p>
{/if}
<div style="opacity: {$fadeSpring}">Content to fade</div>
<!-- <br />
<button on:click={toggleFade}>Fade Toggle</button>

<hr /> -->

<div class="box" style="transform: translateX({$transformSpring}px)">
  I'm a box.
</div>
<!-- <br /> -->
<!-- <button on:click={toggleTransform}>Move it!</button> -->
<!-- <button on:click={snapTransform}>Snap into place</button> -->
