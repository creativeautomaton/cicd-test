<script lang="ts">
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  // import LoremIpsum from '$lib/LoremIpsum.svelte'
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import LayoutGrid, { Cell } from "@smui/layout-grid";

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

<TopAppBar variant="static" dense color="secondary">
  <Row>
    <Section align="start" toolbar />
    <Section align="start" toolbar>
      {#each nav_menu as todo}
        {#if todo.title === "Home"}
          <Button
            href="/"
            on:click={() => setActive(todo.title)}
            activated={active === todo.title}
            class="nav-{todo.slug}"
          >
            <Label>{todo.title}</Label>
          </Button>
        {:else}
          <Button
            href="/{todo.slug}"
            on:click={() => setActive(todo.title)}
            activated={active === todo.title}
            class="nav-{todo.slug}"
          >
            <Label>{todo.title}</Label>
          </Button>
        {/if}
      {/each}
    </Section>
  </Row>
</TopAppBar>

<style>
  .top-app-bar-container {
    max-width: 480px;
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);
    overflow: auto;
    display: inline-block;
  }

  @media (max-width: 480px) {
    .top-app-bar-container {
      margin-right: 0;
    }
  }

  .flexy {
    display: flex;
    flex-wrap: wrap;
  }

  .flexor {
    display: inline-flex;
    flex-direction: column;
  }

  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }
</style>
