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

<!-- contact layout -->
<LayoutGrid>
  <Cell span={12} class="cell left">
    <div>
      <h1 class="thin uppercase">Contact</h1>
    </div>
  </Cell>
  <Cell span={12} class="cell  center">
    <p />
  </Cell>
</LayoutGrid>

<style>
</style>
