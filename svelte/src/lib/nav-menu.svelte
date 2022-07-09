<script lang="ts">
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import IconButton from "@smui/icon-button";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function toggleMenu() {
    dispatch("message");
  }

  export let active = "Home";

  function setActive(value: string) {
    active = value;
  }
</script>

<div class="nav-container">
  <List>
    <Item
      href="/"
      on:click={() => setActive("Home")}
      on:click={toggleMenu}
      activated={active === "Home"}
    >
      <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
      <Text>Home</Text>
    </Item>
    <Item
      href="/about"
      on:click={() => setActive("About")}
      on:click={toggleMenu}
      activated={active === "About"}
    >
      <Graphic class="material-icons" aria-hidden="true">star</Graphic>
      <Text>About CRIB</Text>
    </Item>
    <Item
      href="/research"
      on:click={() => setActive("Research")}
      on:click={toggleMenu}
      activated={active === "Research"}
    >
      <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
      <Text>Research</Text>
    </Item>
    <Item
      href="/contact"
      on:click={() => setActive("Contact")}
      on:click={toggleMenu}
      activated={active === "Contact"}
    >
      <Graphic class="material-icons" aria-hidden="true">send</Graphic>
      <Text>Contact</Text>
    </Item>

    <Separator />
    <Subheader component={H6}>Labels</Subheader>
    <Item
      href="javascript:void(0)"
      on:click={() => setActive("Family")}
      on:click={toggleMenu}
      activated={active === "Family"}
    >
      <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
      <Text>Family</Text>
    </Item>
    <Item
      href="javascript:void(0)"
      on:click={() => setActive("Friends")}
      on:click={toggleMenu}
      activated={active === "Friends"}
    >
      <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
      <Text>Friends</Text>
    </Item>
    <Item
      href="javascript:void(0)"
      on:click={() => setActive("Work")}
      on:click={toggleMenu}
      activated={active === "Work"}
    >
      <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
      <Text>Work</Text>
    </Item>
  </List>
</div>

<style>
  .nav-container {
    position: relative;
    display: flex;
    height: auto;
    overflow: hidden;
    z-index: 0;
  }
</style>
