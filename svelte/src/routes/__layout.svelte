<script lang="ts">
  import Footer from "$lib/footer/footer.svelte";
  // let nav_menu = ["Home", "About", "Research", "Contact"];

  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  // function headerShow() {
  //   dispatch("message");
  // }
  // import { setEnvironment } from "$houdini";
  // setEnvironment(env: houdiniClient)
</script>

<slot />

<Footer />

<style>
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>
