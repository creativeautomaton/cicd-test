<script lang="ts">
  import type { TopAppBarComponentDev } from "@smui/top-app-bar";
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";

  let topAppBar: TopAppBarComponentDev;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function toggleMenu() {
    dispatch("message");
  }
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
  <Row>
    <Section>
      <Button on:click={toggleMenu}>
        <IconButton class="material-icons">menu</IconButton>
      </Button>

      <Title>CRIB - Center for Research Innovation in Biotechnology</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"
        >file_download</IconButton
      >
      <IconButton class="material-icons" aria-label="Print this page"
        >print</IconButton
      >
      <IconButton class="material-icons" aria-label="Bookmark this page"
        >bookmark</IconButton
      >
    </Section>
  </Row>
</TopAppBar>

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
