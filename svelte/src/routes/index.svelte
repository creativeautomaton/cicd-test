<script lang="js">
  import LogoHero from "$lib/logo-hero.svelte";
  import AnimationTests from "$lib/animation-tests.svelte";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
</script>

<LogoHero />

<LayoutGrid>
  <Cell span={12} class="cell rounded mdc-elevation--z1">
    <Cell span={2} />
    <Cell span={4}>
      <div>
        <h1>Welcome to SvelteKit</h1>
      </div>
    </Cell>
    <Cell span={4}>
      <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
      </p>
    </Cell>
    <Cell span={2} />
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
