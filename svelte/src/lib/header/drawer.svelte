<script lang="ts">
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim,
  } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import IconButton from "@smui/icon-button";

  export let open = false;
  export let active = "Inbox";

  function setActive(value) {
    active = value;
    open = false;
  }
  import Topbar from "$lib/header/topbar.svelte";
  import NavMenu from "$lib/header/nav-menu.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // scroll actions
  import ScrollActions from "$lib/scroll-actions.svelte";
</script>

<div class="drawer-container">
  <!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->
  <Drawer variant="modal" bind:open>
    <Header align="end">
      <Button on:click={() => (open = !open)}>
        close <IconButton class="material-icons">close</IconButton>
      </Button>
      <Title>CRIB</Title>
      <Subtitle>Center for Research Innovation in Biotechnology</Subtitle>
    </Header>
    <Content>
      <NavMenu on:message={() => (open = !open)} />
    </Content>
  </Drawer>

  <!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->
  <Scrim fixed={false} />
  <AppContent class="app-content">
    <main class="main-content">
      <!-- <Topbar on:message={() => (open = !open)} /> -->
    </main>
  </AppContent>
</div>

<style>
  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    position: absolute;
    display: flex;
    height: auto;
    overflow: hidden;
    /* z-index: 0; */
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    /* padding: 16px; */
    height: 100%;
    box-sizing: border-box;
  }
</style>
