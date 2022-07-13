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
    <Cell span={2} />
    <Cell span={8}>
      <LayoutGrid>
        <Cell span={3}>
          <h3>Menu</h3>
          <List>
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
        <Cell span={3}>
          <h3>About</h3>
        </Cell>
        <Cell span={3}>
          <h3>Research</h3>
        </Cell>
        <Cell span={3}>
          <h3>Contact</h3>
        </Cell>
      </LayoutGrid>
    </Cell>
    <Cell span={2} />
  </LayoutGrid>

  <Colophon />
</div>

<style>
  .footer {
    min-height: 300px;
    background-color: var(--mdc-theme-secondary, #fff);
    color: #fff;
  }
</style>
