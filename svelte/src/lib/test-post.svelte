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
<script lang="js">
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "csrftoken=XwuNairbexHLxVDI0Khuvrr9wPRKi8IjJpKy8SVLRwymOsuFBPHb72GMg7rbJvNG"
  );

  var graphql = JSON.stringify({
    query:
      "{\n  pages {\n    id\n    title\n    slug\n    content\n    status\n    template\n    author {\n      id\n      firstName\n      lastName\n    }\n  }\n  pagesMeta {\n    pageId {\n      id\n    }\n    title\n    description\n    image\n  }\n}\n",
    variables: {},
  });
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: graphql,
    redirect: "follow",
  };

  export let pages = [];

  fetch("https://crib.local/graphql/", requestOptions)
    .then((response) => response.text())
    .then((result) => () => {
      pages = result;
      console.log(result);
    })
    .catch((error) => console.log("error", error));
</script>

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
