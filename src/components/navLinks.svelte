<script lang="ts">
  import { clickOutside } from "@scripts/clickOutside";

  let showNav: Boolean = false;
</script>

<button
  aria-label="View Navigation"
  aria-selected={showNav}
  on:click={() => (showNav = !showNav)}
  use:clickOutside
  on:outclick={() => (showNav = false)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="36"
    width="36"
    viewBox="0 0 48 48"
    fill="white"
  >
    <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
  </svg>
</button>
<div class="slot" class:hide={!showNav}>
  <slot />
</div>

<style lang="scss">
  button {
    height: var(--header-height);
    width: var(--header-height);
    align-self: center;
    justify-content: center;
    align-items: center;
    display: none;
    background-color: transparent;
  }

  .slot {
    display: contents;
  }

  // Media query

  @media (max-width: 750px) {
    button {
      display: flex;
      &:hover {
        background-color: var(--theme-header-button-hover);
      }
      &:active {
        background-color: var(--theme-header-button-active);
      }
    }

    .hide {
      display: none;
    }
  }
</style>
