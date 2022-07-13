<script lang="js">
  import NavDrawer from "$lib/header/drawer.svelte";
  // custom svg components
  import BlueTriangles from "$lib/svg-components/blue-triangles.svelte";
  import BlueSwoop from "$lib/svg-components/blue-swoop.svelte";
  import PillLogo from "$lib/svg-components/pill-logo.svelte";

  // scroll actions
  import ScrollActions from "$lib/scroll-actions.svelte";

  import { spring } from "svelte/motion";
  import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  // let visible = false;

  // import LogoHero from "$lib/logo-hero.svelte";
  import Button, { Label } from "@smui/button";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";

  // let y;
  // let visible;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function headerShow(visible) {
    // console.log(visible);
    dispatch("message");
  }
</script>

<ScrollActions let:visible>
  {#if visible}
    <NavDrawer />
  {/if}
</ScrollActions>
<!-- <LogoHero /> -->

<ScrollActions let:visible>
  <!-- <BlueTriangles /> -->
  {#if !visible}
    <div transition:fly={{ y: -500, duration: 1000 }}>
      <BlueSwoop />
    </div>
  {/if}
</ScrollActions>
<ScrollActions let:visible>
  {#if visible}
    <div
      transition:fly={{ y: 0, duration: 0 }}
      style="display: block; height: 300px; width: 100%;"
    />
  {/if}
</ScrollActions>
<div class="container ">
  <LayoutGrid>
    <Cell span={5}>
      <ScrollActions let:visible>
        {#if !visible}
          <div
            class="demo-cell pill-logo-container"
            transition:fly={{ x: -500, duration: 1000 }}
          >
            <PillLogo --width="100%" class="pill-logo-container" />
          </div>
        {/if}
      </ScrollActions>
    </Cell>
    <Cell span={7}>
      <div class="demo-cell">
        <ScrollActions let:visible>
          {#if !visible}
            <div transition:fly={{ x: 500, duration: 1000 }}>
              <h1 class="bold headline light">CRIB</h1>
              <p class="lead light">
                Center for Research Innovation in Biotechnology (<strong
                  style="font-size: 1em;">CRIB</strong
                >) aggregates and analyzes the sources of scientific, medical
                and business innovations in therapeutics &amp; vaccines.
              </p>

              <Button
                color="secondary"
                href="http://cdek.liu.edu/"
                target="_blank"
                variant="raised"
                class="mdc-elevation--z12"
              >
                <Label>Browse CDEK Data</Label>
                <IconButton class="material-icons">link</IconButton>
              </Button>
              <div class="mobile">
                <br />
              </div>
              <Button
                color="primary"
                href="#scroll-down"
                variant="raised"
                class="mdc-elevation--z12"
              >
                <Label>Discover More</Label>
                <IconButton class="material-icons">south</IconButton>
              </Button>

              <br />
              <br />
            </div>
          {/if}
        </ScrollActions>
      </div>
    </Cell>
  </LayoutGrid>
  <div id="scroll-down" style="display: block; height: 150px; width: 100%;" />
</div>
<!-- <ScrollActions let:visible>
  {#if !visible}
    <div transition:fly={{ y: 500, duration: 1000 }}>
      <LayoutGrid>
        <Cell span={12} class="center">
          <Button
            href="#scroll-down"
            variant="raised"
            class="mdc-elevation--z12"
            color="primary"
          >
            <Label>See More</Label>
            <IconButton class="material-icons">south</IconButton>
          </Button>
        </Cell>
      </LayoutGrid>
    </div>
  {/if}
</ScrollActions> -->

<!-- split layout -->
<LayoutGrid class="center">
  <Cell span={6} class="cell rounded mdc-elevation--z1 center">
    <div>
      <h1>Welcome to SvelteKit</h1>
    </div>
  </Cell>
  <Cell span={6} class="cell rounded mdc-elevation--z1 center">
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
  </Cell>
</LayoutGrid>

<!-- Tri-layout -->
<LayoutGrid class="center">
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <div>
      <h1>Welcome to SvelteKit</h1>
    </div>
  </Cell>
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <div>
      <img src="https://placeholder.pics/svg/100vwx100vh/DEDEDE/555555/test" />
    </div>
  </Cell>
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
  </Cell>
</LayoutGrid>

<!-- 1/3rds-layout -->
<LayoutGrid class="center">
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <div>
      <h1>Welcome to SvelteKit</h1>
    </div>
  </Cell>
  <Cell span={8} class="cell rounded mdc-elevation--z1 center">
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
  </Cell>
</LayoutGrid>

<!-- Reverse 1/3rds-layout -->
<LayoutGrid class="center">
  <Cell span={8} class="cell rounded mdc-elevation--z1 center">
    <div>
      <h1>Welcome to SvelteKit</h1>
    </div>
  </Cell>
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
  </Cell>
</LayoutGrid>

<style>
  .cell {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
  }
  @media (max-width: 599px) {
    .pill-logo-container {
      max-width: 100px;
    }
  }
  @media (min-width: 600px) and (max-width: 839px) {
    .pill-logo-container {
      max-width: 100px;
    }
  }
</style>
