<script lang="ts">
  import Banner from "$lib/banner.svelte";
  import LogoHero from "$lib/logo-hero.svelte";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  // import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  // import NavMenu from "$lib/nav-menu.svelte";

  let nav_menu = [
    { slug: "home", title: "Home" },
    { slug: "about", title: "About" },
    { slug: "research", title: "Research" },
    { slug: "contact", title: "Contact" },
  ];

  export let active = "Home";

  function setActive(value: string) {
    active = value;
  }
</script>

<div class="footer-container">
  <LayoutGrid>
    <Cell span={4}>
      <h3 class="mdc-typography--headline1">Menu</h3>
      <List dense>
        {#each nav_menu as todo}
          {#if todo.title === "Home"}
            <Item
              href="/"
              on:click={() => setActive(todo.title)}
              activated={active === todo.title}
            >
              <a href="/">
                <Text>{todo.title}</Text>
              </a>
            </Item>
          {:else}
            <Item
              on:click={() => setActive(todo.title)}
              activated={active === todo.title}
            >
              <a href="/{todo.slug}">
                <Text>{todo.title}</Text>
              </a>
            </Item>
          {/if}
        {/each}
      </List>
    </Cell>
    <Cell span={4}>
      <h3>About</h3>
    </Cell>
    <Cell span={4}>
      <h3>Research</h3>
    </Cell>
    <Cell span={4}>
      <h3>Contact</h3>
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
    background-color: var(--mdc-theme-primary, #333);
    color: #fff;
  }
</style>
