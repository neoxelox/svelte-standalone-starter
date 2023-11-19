import App from "./App.svelte";
import Error from "./Error.svelte";

export default {
  "/": App,
  /* The 404 page must be the last route */
  "*": Error,
};
