import { HoudiniClient } from "$houdini/runtime";

async function fetchQuery({ fetch, session, text = "", variables = {} }) {
  const result = await fetch("http://localhost:8000/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  return await result.json();
}

export default new HoudiniClient(fetchQuery);
