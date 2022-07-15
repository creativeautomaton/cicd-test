<script lang="ts">
  import LogoHero from "$lib/logo-hero.svelte";
  import Colophon from "$lib/footer/colophon.svelte";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Paper, { Title, Subtitle, Content } from "@smui/paper";
  import Banner from "@smui/banner";

  import PillLogo from "$lib/svg-components/pill-logo.svelte";

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

<!--
<div class="paper-container">
  <Paper variant="unelevated">
    <Title>Unelevated Paper</Title>
    <Subtitle>This is an unelevated sheet of paper.</Subtitle>
    <Content />
  </Paper>
</div> -->

<div class="footer ">
  <LayoutGrid>
    <!-- <Cell span={1} /> -->
    <Cell span={12}>
      <LayoutGrid>
        <Cell span={2} class="center">
          <PillLogo --width="4em" />
          <small>CRIB © 2022</small>
        </Cell>
        <Cell span={3}>
          <h3>Menu</h3>
          <List>
            {#each nav_menu as todo}
              {#if todo.title === "Home"}
                <Item href="/" on:click={() => setActive(todo.title)}>
                  <a href="/" class="light">
                    <Text>{todo.title}</Text>
                  </a>
                </Item>
              {:else}
                <Item on:click={() => setActive(todo.title)}>
                  <a href="/{todo.slug}" class="light">
                    <Text>{todo.title}</Text>
                  </a>
                </Item>
              {/if}
            {/each}
          </List>
        </Cell>
        <Cell span={3}>
          <h3>About</h3>
        </Cell>
        <Cell span={2}>
          <h3>Research</h3>
        </Cell>
        <Cell span={2}>
          <h3>Contact</h3>
        </Cell>
      </LayoutGrid>
    </Cell>
    <!-- <Cell span={1} /> -->
  </LayoutGrid>

  <Colophon />
</div>

<style>
  .footer {
    min-height: 300px;
    background-color: var(--mdc-theme-secondary, #fff);
    color: #fff;
  }
  .mdc-deprecated-list-item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding: 0;
    padding-right: 0px;
    padding-left: 0px;
    padding-left: 0px;
    padding-right: 16px;
    height: 28px;
  }
</style>
