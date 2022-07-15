<script lang="ts">
  import NavDrawer from "$lib/header/drawer.svelte";
  import Topbar from "$lib/header/topbar.svelte";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  let open;
</script>

<NavDrawer bind:open />
<Topbar on:message={() => (open = !open)} />

<h1>About CRIB</h1>

<!-- split layout -->
<LayoutGrid class=" center">
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
</style>
