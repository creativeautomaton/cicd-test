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

<h1>Research Papers</h1>

<p>CRIB papers</p>
