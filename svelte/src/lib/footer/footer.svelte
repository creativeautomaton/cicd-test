<script lang="ts">
  import LogoHero from "$lib/logo-hero.svelte";
  import Colophon from "$lib/footer/colophon.svelte";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import List, {
    Item,
    Text,
    Graphic,
    Separator,
    Subheader,
    PrimaryText,
    SecondaryText,
  } from "@smui/list";

  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  // import Paper, { Title, Subtitle, Content } from "@smui/paper";
  import Banner from "@smui/banner";
  import Card, { Content } from "@smui/card";

  import PillLogo from "$lib/svg-components/pill-logo.svelte";

  let nav_menu = [
    { slug: "home", title: "Home" },
    { slug: "about", title: "About" },
    { slug: "research", title: "Research" },
    { slug: "contact", title: "Contact" },
  ];

  export let active = "Home";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text";

  // let focused = false;
  // let emailvalue: string | null = null;
  // let dirty = false;
  // let invalid = false;
  // $: disabled = focused || !emailvalue || !dirty || invalid;
  //
  // function clickHandler() {
  //   alert(`Sending to ${emailvalue}!`);
  //   emailvalue = null;
  //   dirty = false;
  // }
  //
  // function setActive(value: string) {
  //   active = value;
  // }
</script>

<div class="footer ">
  <div class="container">
    <LayoutGrid>
      <Cell span={3} class="center">
        <Cell span={6} class="center"><h1>CRIB</h1></Cell>
        <Cell span={6} class="center"><PillLogo --width="6em" /></Cell>
        <!-- <small> © 2022</small> -->
      </Cell>
      <Cell span={3} class="center">
        <h3 class="thin uppercase">Quick Links</h3>
        <div>
          <List oneLine>
            {#each nav_menu as todo}
              {#if todo.title === "Home"}
                <a href="/" on:click={() => setActive(todo.title)}>
                  <Item class="center light">
                    <Text>
                      <PrimaryText>{todo.title}</PrimaryText>
                    </Text>
                  </Item>
                </a>
              {:else}
                <a href="/{todo.slug}" on:click={() => setActive(todo.title)}>
                  <Item class="center light">
                    <Text>
                      <PrimaryText>{todo.title}</PrimaryText>
                    </Text>
                  </Item>
                </a>
              {/if}
            {/each}
          </List>
        </div>
      </Cell>

      <Cell span={3} class="center">
        <h3 class="thin uppercase">Latest Research</h3>
        <div>
          <List oneLine>
            <a href="#">
              <Item class="center">
                <Text>
                  <PrimaryText>FruitPhone Pro</PrimaryText>
                  <SecondaryText
                    >A beautiful phone with good specs.</SecondaryText
                  >
                </Text>
              </Item>
            </a>
            <a href="#">
              <Item class="center">
                <Text>
                  <PrimaryText>Robot Phone Max</PrimaryText>
                  <SecondaryText
                    title="Pretty much the same phone, but a different brand name and OS. It spies on you more, too."
                    >Pretty much the same phone, but a different brand name and
                    OS. It spies on you more, too.</SecondaryText
                  >
                </Text>
              </Item>
            </a>
            <a href="#">
              <Item class="center">
                <Text>
                  <PrimaryText>Penguin Phone</PrimaryText>
                  <SecondaryText
                    title="A very weak phone that you can install literally anything on. Compile your own kernel, you nerd. :D"
                    >A very weak phone that you can install literally anything
                    on. Compile your own kernel, you nerd. :D</SecondaryText
                  >
                </Text>
              </Item>
            </a>
          </List>
        </div>
      </Cell>

      <Cell span={3} class="center hidden">
        <h3 class="thin uppercase">Newsletter</h3>
        <Card variant="outlined" padded>
          <div class="margins dark">
            <!--
    Note: when you bind to `invalid`, but you only want to
    monitor it instead of updating it yourself, you also
    should include `updateInvalid`.
  -->
            <!-- <Textfield
              type="email"
              bind:dirty
              bind:invalid
              updateInvalid
              bind:emailvalue
              label="Enter Your Email"
              style="min-width: 250px;"
              input$autocomplete="email"
              on:focus={() => (focused = true)}
              on:blur={() => (focused = false)}
              withTrailingIcon={!disabled}
            > -->
            <!--
      Since this icon is conditional, it needs to be wrapped
      in a fragment, and we need to provide withTrailingIcon.
    -->
            <!-- <svelte:fragment slot="trailingIcon">
                {#if !disabled}
                  <Icon
                    class="material-icons"
                    role="button"
                    on:click={clickHandler}>send</Icon
                  >
                {/if}
              </svelte:fragment> -->
            <!-- <HelperText validationMsg slot="helper">
                That's not a valid email address.
              </HelperText>
            </Textfield> -->
            <!-- <pre class="status hidden">
            Focused: {focused},
            Dirty: {dirty},
            Invalid: {invalid},
            Value: {emailvalue}</pre> -->
          </div>
        </Card>
      </Cell>
    </LayoutGrid>
  </div>
  <Colophon />
</div>

<style>
  .footer {
    min-height: 300px;
    background-color: var(--mdc-theme-secondary, #fff);
    color: #fff;
    overflow: hidden;
  }
  .mdc-deprecated-list-item {
    height: 40px !important;
  }
</style>
