<script lang="js">
  import LogoHero from "$lib/logo-hero.svelte";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
</script>

<LogoHero />

<LayoutGrid>
  <Cell span={12}>
    <div class="demo-cell">
      <h1>Welcome to SvelteKit</h1>
      <br />
      <br />
      <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
      </p>
    </div>
  </Cell>
</LayoutGrid>

<style>
  .demo-cell {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: var(--mdc-theme-secondary, #333);
    color: var(--mdc-theme-on-secondary, #fff); */
  }
</style>
