<script lang="ts">
  import { searchTerm } from "./search-store";
  import { removeSpace } from "@scripts/slugGen";

  export let slug: string;
  slug = removeSpace(slug);

  let match: boolean = false;
  let exactMatch: boolean = false;

  $: {
    const s = $searchTerm;

    // Check if search exists
    if (s && s !== "?") {
      match = s.slice(0, s.length) === slug.slice(0, s.length);
      exactMatch = s === slug ? true : false;
    }
  }
</script>

<div class:hidden={!match && $searchTerm !== "?"}>
  <slot />
</div>

<style>
  .hidden {
    display: none;
  }
</style>
