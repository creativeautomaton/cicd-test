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

  import BrandBanner from "$lib/header/brand-banner.svelte";
  import NavSubmenu from "$lib/header/nav-submenu.svelte";
  import PillLogo from "$lib/svg-components/pill-logo.svelte";

  let topAppBar: TopAppBarComponentDev;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function toggleMenu() {
    dispatch("message");
  }

  import { spring } from "svelte/motion";
  import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let visible = false;
  let y;

  function scrollCheck(y) {
    // console.log(y);
    // if y is larger than 600 than call function
    visible = y < 45 ? false : true;
  }
  $: scrollCheck(y);
</script>

<svelte:window bind:scrollY={y} />

{#if visible}
  <div transition:fly={{ y: 200, duration: 200 }} class="hid den">
    <TopAppBar bind:this={topAppBar} variant="fixed" color="secondary">
      <BrandBanner />
      <Row>
        <Section>
          <!-- <PillLogo --width="3em" /> -->
          <Button on:click={toggleMenu}>
            Menu
            <IconButton class="material-icons">menu</IconButton>
          </Button>
          <Title>Center for Research Innovation in Biotechnology</Title>
        </Section>
        <Section align="end" toolbar>
          <IconButton class="material-icons" aria-label="Download"
            >account_circle</IconButton
          >
          <!-- <div class="foreground">
          You have scrolled {y} pixels
        </div> -->
        </Section>
      </Row>
      <NavSubmenu />
    </TopAppBar>
    <div style="padding-bottom: 9em;" />
  </div>
{/if}

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
