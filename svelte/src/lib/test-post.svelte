<!-- <script type="module">
  import { query, graphql } from "$houdini";

  const { data } = query(graphql`
    query PagesQuery {
  pages {
    nodes {
      content
    }
  }
}
  `);
</script> -->
<script>
  import { onMount } from "svelte";
  let country;
  let pages;
  let pageArray = [];
  let query = `{
    pageBySlug(slug: "about-crib"){
        id
        title
        slug
        content
        }
      }
  `;
  onMount(async () => {
    let response = await fetch("https://crib.local/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((result) => (pages = result))
      .catch((error) => console.log("error", error));

    console.log(pages);
    pageArray = [pages.data.pageBySlug];
    console.log(pageArray);
  });
</script>

<div>
  {#if pages}
    {#each pageArray as page}
      <a href={page.slug}>
        <h2>{page.title}</h2>
      </a>
      <p>
        {@html page.content}
      </p>
    {/each}
  {:else}
    <p>loading content...</p>
  {/if}
</div>

<div>
  <ul>
    <!-- {#each $GQL_PagesQuery.data.pages ?? [] as page}
  <li> {page.title} </li>
{/each} -->
    <!-- {#each pages ?? [] as page}
  <li> {page.title} </li>
{/each} -->
  </ul>
</div>

<style>
</style>
