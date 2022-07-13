<script lang="js">
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";

  // custom svg components
  import BlueTriangles from "$lib/svg-components/blue-triangles.svelte";
  import BlueSwoop from "$lib/svg-components/blue-swoop.svelte";
  import PillLogo from "$lib/svg-components/pill-logo.svelte";

  // scroll actions
  import ScrollActions from "$lib/scroll-actions.svelte";

  import { spring } from "svelte/motion";
  import { fade, blur, fly, slide, scale, crossfade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let visible = false;
</script>

<!-- <ScrollActions let:y={visible}> -->
<!-- <BlueTriangles /> -->
<!-- {#if !visible}
    <div transition:fly={{ y: -500, duration: 1000 }}> -->
<BlueSwoop />
<!-- </div>
  {/if}
</ScrollActions> -->
<ScrollActions let:y={visible}>
  {#if visible}
    <div
      transition:fly={{ y: 0, duration: 0 }}
      style="display: block; height: 500px; width: 100%;"
    />
  {/if}
</ScrollActions>
<div class="container ">
  <LayoutGrid>
    <Cell span={5}>
      <ScrollActions let:y={visible}>
        {#if !visible}
          <div class="demo-cell" transition:fly={{ x: -500, duration: 1000 }}>
            <PillLogo --width="30em" />
          </div>
        {/if}
      </ScrollActions>
    </Cell>
    <Cell span={7}>
      <div class="demo-cell">
        <ScrollActions let:y={visible}>
          {#if !visible}
            <div transition:fly={{ x: 500, duration: 1000 }}>
              <h1 class="bold headline light">CRIB</h1>
              <p class="lead light">
                Center for Research Innovation in Biotechnology (<strong
                  style="font-size: 1em;">CRIB</strong
                >) aggregates and analyzes the sources of scientific, medical
                and business innovations in therapeutics &amp; vaccines.
                <br />
                <br />
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
              </p>
            </div>
          {/if}
        </ScrollActions>
      </div>
    </Cell>
  </LayoutGrid>
</div>
<ScrollActions let:y={visible}>
  {#if !visible}
    <div transition:fly={{ y: 500, duration: 1000 }}>
      <LayoutGrid>
        <Cell span={12} class="center">
          <Button
            href="#"
            variant="raised"
            class="mdc-elevation--z12 mdc-layout-grid__cell--align-middle"
            color="primary"
            align="center"
          >
            <Label>Scroll Down</Label>
            <IconButton class="material-icons">south</IconButton>
          </Button>
        </Cell>
      </LayoutGrid>
    </div>
  {/if}
</ScrollActions>

<style>
  .container {
    padding: 2em 0em 0em 0em;
  }
  .lead {
    max-width: 650px;
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.2;
    display: block;
    padding: 1em 0em;
  }
</style>
