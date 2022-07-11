<script lang="ts">
  import NavDrawer from "$lib/drawer.svelte";
  import Footer from "$lib/footer.svelte";
  let nav_menu = ["Home", "About", "Research", "Contact"];
</script>

<!-- Holds the topbar, and drawer navigation -->
<NavDrawer />

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
