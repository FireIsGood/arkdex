<script lang="ts">
  import { searchTerm } from "@components/search-store";
  import { removeSpace } from "@scripts/slugGen";

  let input: string;

  $: {
    if (input) {
      searchTerm.set(removeSpace(input));
    } else {
      searchTerm.set("?");
    }
  }
</script>

<div class="container">
  <div class="search">
    <input type="text" placeholder="Search Operators" bind:value={input} />
  </div>
  <div>
    <slot />
  </div>
</div>

<style lang="scss">
  .container {
    & > * + * {
      margin-top: 1rem;
    }
  }

  .search {
    display: flex;
    justify-content: center;
  }

  input {
    font-size: 1.5em;
    width: clamp(14rem, 40%, 40rem);
    padding: 0.25rem;
    text-align: center;
  }
</style>
