<script lang="ts">
  import NavDrawer from "$lib/header/drawer.svelte";
  import Footer from "$lib/footer/footer.svelte";
  let nav_menu = ["Home", "About", "Research", "Contact"];

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function headerShow() {
    alert("test");
    // dispatch("message");
  }
</script>

<!-- Holds the topbar, and drawer navigation -->
<!-- <NavDrawer /> -->

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
