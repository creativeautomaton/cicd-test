<script lang="ts">
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

  // scroll actions
  import ScrollActions from "$lib/scroll-actions.svelte";
  // import Topbar from "$lib/header/topbar.svelte";
  import NavMenu from "$lib/header/nav-menu.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function toggleMenu() {
    dispatch("message");
  }

  import { spring } from "svelte/motion";
  import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  // let visible = true;

  function setActive(value) {
    active = value;
  }
</script>

<div transition:fly={{ y: 200, duration: 0 }} class="hid den">
  <TopAppBar variant="fixed" color="secondary">
    <BrandBanner />
    <Row>
      <Section>
        <!-- <PillLogo --width="3em" /> -->
        <Button on:click={toggleMenu}>
          Menu
          <IconButton class="material-icons">menu</IconButton>
        </Button>
        <Title>
          <span class="desktop">
            Center for Research Innovation in Biotechnology
          </span>
          <span class="mobile">CRIB</span>
        </Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download"
          >account_circle</IconButton
        >
      </Section>
    </Row>
    <div class="desktop">
      <NavSubmenu />
    </div>
  </TopAppBar>
  <div style="padding-bottom: 9em;" />
</div>

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
