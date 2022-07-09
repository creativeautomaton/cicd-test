<script lang="ts">
  import Banner from "$lib/banner.svelte";
  import LogoHero from "$lib/logo-hero.svelte";
  import IconButton from "@smui/icon-button";
  import NavDrawer from "$lib/drawer.svelte";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  // import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  // import NavMenu from "$lib/nav-menu.svelte";

  export let active = "Home";

  function setActive(value: string) {
    active = value;
  }
</script>

<div class="footer-container">
  <LayoutGrid>
    <Cell span={3}>
      <h1>Menu</h1>
      <List dense>
        <Item
          href="/"
          on:click={() => setActive("Home")}
          activated={active === "Home"}
        >
          <Text>Home</Text>
        </Item>
        <Item
          href="/about"
          on:click={() => setActive("About")}
          activated={active === "About"}
        >
          <Text>About CRIB</Text>
        </Item>
        <Item
          href="/research"
          on:click={() => setActive("Research")}
          activated={active === "Research"}
        >
          <Text>Research</Text>
        </Item>
        <Item
          href="/contact"
          on:click={() => setActive("Contact")}
          activated={active === "Contact"}
        >
          <Text>Contact</Text>
        </Item>

        <Separator />
        <Subheader component={H6}>Labels</Subheader>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive("Family")}
          activated={active === "Family"}
        >
          <Text>Family</Text>
        </Item>
      </List>
    </Cell>
    <Cell span={3}>
      <h1>About</h1>
    </Cell>
    <Cell span={3}>
      <h1>Research</h1>
    </Cell>
    <Cell span={3}>
      <h1>Contact</h1>
    </Cell>
  </LayoutGrid>
</div>

<style>
  /* * :global(.demo-list) {
    max-width: 300px;
  } */
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    background-color: #333;
    color: #fff;
  }
</style>
