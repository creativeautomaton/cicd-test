<script lang="js">
  export let open = false;

  import NavDrawer from "$lib/header/drawer.svelte";
  import Topbar from "$lib/header/topbar.svelte";
  import NavMenu from "$lib/header/nav-menu.svelte";

  // Background Components
  import BackgroundImage from "$lib/svg-components/background-images.svelte";

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
  import Card, { Content } from "@smui/card";

  // let y;
  // let visible;
  let drawervisible = false;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function toggleMenu() {
    console.log("toggleMenu");
    dispatch("message");
  }
</script>

<ScrollActions let:visible>
  {#if visible}
    <NavDrawer bind:open />
    <Topbar on:message={() => (open = !open)} />
  {/if}
</ScrollActions>

<ScrollActions let:visible>
  {#if !visible}
    <NavDrawer bind:open />
  {/if}
</ScrollActions>

<!-- <LogoHero /> -->

<ScrollActions let:visible>
  <!-- <BlueTriangles /> -->
  {#if !visible}
    <div transition:fly={{ y: -500, duration: 400 }}>
      <BlueSwoop />
    </div>
  {/if}
</ScrollActions>
<ScrollActions let:visible>
  {#if visible}
    <div
      transition:fly={{ y: 0, duration: 0 }}
      style="display: block; height: 200px; width: 100%;"
    />
  {/if}
</ScrollActions>
<div class="container">
  <LayoutGrid>
    <ScrollActions let:visible>
      {#if !visible}
        <Cell span={12} class="right">
          <Button class="light" on:click={() => (open = !open)}>
            Menu
            {#if !drawervisible}
              <IconButton class="material-icons">menu</IconButton>
            {/if}
            {#if drawervisible}
              <IconButton class="material-icons">close</IconButton>
            {/if}
          </Button>
          <div class="mobile">
            <Button class="light" on:click={() => (open = !open)}>
              <PillLogo --width="3em" />
            </Button>
          </div>
          <IconButton class="material-icons light" aria-label="Download"
            >account_circle</IconButton
          >
        </Cell>
      {/if}
    </ScrollActions>
  </LayoutGrid>
  <LayoutGrid>
    <Cell span={5}>
      <ScrollActions let:visible>
        {#if !visible}
          <div
            class="pill-logo-container desktop"
            transition:fly={{ x: -500, duration: 500 }}
          >
            <PillLogo --width="20em" />
          </div>
        {/if}
      </ScrollActions>
    </Cell>
    <Cell span={7}>
      <div class="demo-cell">
        <ScrollActions let:visible>
          {#if !visible}
            <div transition:fly={{ x: 500, duration: 500 }}>
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

<!-- about section tri-layout -->
<LayoutGrid class="center" style="margin: 5em 0em; overflow: hidden;">
  <BackgroundImage
    src="/images/covid-data-bg.jpg"
    variant="fixed"
    class="desktop"
  />
  <Cell span={2} />
  <Cell span={6} class="cell center">
    <Card variant="outlined" padded class="cell rounded mdc-elevation--z1">
      <PillLogo --width="8em" />
      <h1 class="thin">Powerful Insights of Clinical Trials Data</h1>
      <p class="mono">
        C.R.I.B. brings together expertise, skills & knowledge in the
        Pharmacology, Data Science, Clinic Trials research sectors and provides
        clean, collected, and updated data on FDA Approved Drugs, Pharmacology
        Organizations, Drug pricing, and medical indications(MeSH).
      </p>
      <br />
      <Button
        color="secondary"
        href="/about"
        variant="outlined"
        class=" rou snded"
      >
        <Label>Learn About CRIB</Label>
      </Button>
      <br />
      <br />
    </Card>
  </Cell>

  <br />
  <br />
  <br />
  <br />
  <p />
</LayoutGrid>

<LayoutGrid class="center">
  <Cell span={12} class=" center">
    <span class="dark-grey">
      <IconButton class="material-icons " --font-size="8em"
        >newspaper</IconButton
      >
    </span>
    <br />
    <h1 class="thin">Peer Revied Research into Clinical Trials</h1>
  </Cell>
  <Cell span={4} class="  center">
    <span class="medium-blue">
      <IconButton class="material-icons " --font-size="4em">
        compare_arrows
      </IconButton>
    </span>
    <h3>Source Comparisions</h3>
    <p>Cleaning clinical trials data from multiple sources.</p>
  </Cell>
  <Cell span={4} class="cell center">
    <span class="medium-blue">
      <IconButton class="material-icons " --font-size="4em">done_all</IconButton
      >
    </span>
    <h3>Data Correction</h3>
    <p>Programatic filtering, ML modeling, and hands-on Trial data.</p>
  </Cell>
  <Cell span={4} class="cell center ">
    <span class="medium-blue">
      <IconButton class="material-icons" --font-size="4em">auto_mode</IconButton
      >
    </span>
    <h3>Data Synchronization</h3>
    <p>Daily, Weekly, Yearly data source updates and review of Trial data</p>
  </Cell>
  <Cell span={4} class="cell center primary hidden">
    <span class="medium-blue">
      <IconButton class="material-icons" --font-size="4em">analytics</IconButton
      >
    </span>
    <h3>Peer Reviewed</h3>
    <p>Published research and interactive data vizualizations.</p>
  </Cell>
  <Cell span={12}>
    <br />
    <Button
      color="secondary"
      href="/research"
      variant="outlined"
      class=" rou snded"
    >
      <Label>View Research Papers</Label>
    </Button>
    <br />
    <br />
  </Cell>
</LayoutGrid>

<!-- split layout
<LayoutGrid class="center">
  <Cell span={6} class="cell center">
    <div>
      <h1
        align=" middle"
        class="bold "
        style="font-size: 4em;text-transform: uppercase;"
      >
        Biologics Data
      </h1>
      <p>
        Curated Medical and Business innovations in therapeutic Biologic
        combination drugs.
      </p>
    </div>
  </Cell>
  <Cell span={6} class="cell  center">
    <img
      height="600px"
      width="100%"
      src="https://images.pexels.com/photos/5726666/pexels-photo-5726666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
  </Cell>
  <Cell span={6} class="cell center">
    <img
      height="600px"
      width="100%"
      src="https://images.pexels.com/photos/5726666/pexels-photo-5726666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
  </Cell>
  <Cell span={6} class="cell  center">
    <div>
      <h1
        align=" middle"
        class="bold "
        style="font-size: 4em;text-transform: uppercase;"
      >
        Pharmacology Startups
      </h1>
      <p>
        Curated Business innovations in therapeutic clinical trials for
        combination drugs.
      </p>
    </div>
  </Cell>
  <Cell span={6} class="cell center">
    <div>
      <h1
        align=" middle"
        class="bold "
        style="font-size: 4em;text-transform: uppercase;"
      >
        Clinical Trial Trends
      </h1>
      <p>Curated Medical trial trends and historic data ineractions.</p>
    </div>
  </Cell>
  <Cell span={6} class="cell  center">
    <img
      height="600px"
      width="100%"
      src="https://images.pexels.com/photos/5726666/pexels-photo-5726666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
  </Cell>
</LayoutGrid>
 -->
<!-- Tri-layout
<LayoutGrid class="center">
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <div>
      <h1>Active Pharma Ingredients</h1>
      <p>
        <IconButton
          class="material-icons dark btn-lg"
          aria-label="vaccines"
          --font-size="10em"
        >
          vaccines
        </IconButton>
      </p>
    </div>
  </Cell>
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <div>
      <h1>Organizations</h1>
      <p>
        <IconButton
          inline="true"
          class="material-icons dark "
          aria-label="groups"
          --font-size="10em"
        >
          groups
        </IconButton>
      </p>
    </div>
  </Cell>
  <Cell span={4} class="cell rounded mdc-elevation--z1 center">
    <h1>Clinical Trials</h1>

    <IconButton
      class="material-icons dark "
      aria-label="biotech"
      --font-size="10em"
    >
      biotech
    </IconButton>
  </Cell>
</LayoutGrid>
-->
<!-- 1/3rds-layout
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
-->

<!-- Reverse 1/3rds-layout
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
 -->
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
      max-width: 200px;
    }
  }
  @media (min-width: 839px) {
    .pill-logo-container {
      max-width: 400px;
    }
  }
</style>
