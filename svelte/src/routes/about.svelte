<script context="module">
  let pageQuery = `{
    pages {
      id
      title
      slug
      content
      status
      template
      author {
        id
        firstName
        lastName
      }
    }
    pagesMeta {
      pageId {
        id
      }
      title
      description
      image
    }
  }`;
</script>

<script lang="ts" type="module">
  import NavDrawer from "$lib/header/drawer.svelte";
  import Topbar from "$lib/header/topbar.svelte";
  import IconButton from "@smui/icon-button";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import { H6 } from "@smui/common/elements";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  let open;

  //
  // let pages = [
  //   {
  //     title: "tewer",
  //     content: "sdfsdfsdfasdf",
  //   },
  // ];

  // let pageQuery = `{
  //     pages {
  //       id
  //       title
  //       slug
  //       content
  //       status
  //       template
  //       author {
  //         id
  //         firstName
  //         lastName
  //       }
  //     }
  //     pagesMeta {
  //       pageId {
  //         id
  //       }
  //       title
  //       description
  //       image
  //     }
  //   }`;
  //
  // import { query, graphql } from "$houdini";
  //
  // const { data } = query(
  //   graphql`
  //     ${pageQuery}
  //   `
  // );
  let url = "http://localhost:8000/graphql/";
</script>

<NavDrawer bind:open />
<Topbar on:message={() => (open = !open)} />

<!-- about layout -->
<LayoutGrid>
  <Cell span={12} class="cell left">
    <div>
      <h1 class="thin uppercase">About CRIB</h1>
    </div>
  </Cell>
  <Cell span={12} class="cell  center">
    <!-- {#if _data}
      {#each _data as page}
        <h1>{page.title}</h1>
        <p>{page.content}</p>
      {/each}
    {/if}  -->
  </Cell>
</LayoutGrid>

<style>
  .cell {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
  }
</style>
