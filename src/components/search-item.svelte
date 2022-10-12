<script lang="ts">
  import { searchTerm } from "./search-store";
  import { removeSpace } from "@scripts/slugGen";

  type Operator = {
    name: string;
    slug: string;
    imageLink: string;
    rarity: number;
  };

  export let operator: Operator;
  const url = `/arkdex/operators/${operator.slug}`;
  const trueSlug = removeSpace(operator.name);
  const nameLength = trueSlug.length;

  let match: boolean = false;
  let exactMatch: boolean = false;

  $: {
    const s = $searchTerm;

    // Check if search exists

    if (s && s !== "?") {
      match = s.slice(0, s.length) === trueSlug.slice(0, s.length);
    }
    exactMatch = s === trueSlug ? true : false;
  }
</script>

<div
  class:hidden={!match && $searchTerm !== "?"}
  class:exact-match={exactMatch}
>
  <li
    class:tiny-name={nameLength >= 12}
    class:small-name={12 > nameLength && nameLength >= 8}
    class={`rarity-${operator.rarity + 1}`}
  >
    <a href={url}>
      <slot />
      <p class="operator-name">{operator.name}</p>
    </a>
  </li>
</div>

<style lang="scss">
  .hidden {
    display: none;
  }

  // CSS Variables

  :root {
    // Arkinghts Rarities

    --color-rarity-1: linear-gradient(
      0deg,
      rgb(148, 148, 148) 0%,
      hsl(66, 0%, 74%) 80%,
      hsl(63, 0%, 67%) 100%
    );
    --color-rarity-2: linear-gradient(
      0deg,
      hsl(63, 62%, 55%) 0%,
      hsl(66, 74%, 74%) 80%,
      hsl(63, 88%, 67%) 100%
    );
    --color-rarity-3: linear-gradient(
      0deg,
      hsl(195, 62%, 55%) 0%,
      hsl(198, 74%, 74%) 80%,
      hsl(195, 88%, 67%) 100%
    );
    --color-rarity-4: linear-gradient(
      0deg,
      hsl(287, 39%, 76%) 0%,
      hsl(256, 47%, 81%) 80%,
      hsl(268, 53%, 86%) 100%
    );
    --color-rarity-5: linear-gradient(
      0deg,
      hsl(51, 81%, 55%) 0%,
      hsl(46, 67%, 75%) 80%,
      hsl(59, 68%, 60%) 100%
    );
    --color-rarity-6: linear-gradient(
      0deg,
      hsl(27, 76%, 63%) 0%,
      hsl(40, 82%, 67%) 72%,
      hsl(38, 84%, 65%) 100%
    );
  }

  @for $rarity from 1 through 6 {
    .rarity-#{$rarity} {
      background: var(--color-rarity-#{$rarity});
    }
  }

  // General Styles

  a,
  a:visited {
    text-decoration: none;
    color: var(--theme-text);
  }

  // Main Styles

  li {
    margin: 0;
    width: var(--grid-width);
    text-align: center;
    word-wrap: break-word;
    border-radius: 0.25rem;
    overflow: hidden;
    color: var(--theme-text-dark);
    outline: 0 solid white;

    a {
      width: var(--grid-width);
      height: calc(var(--grid-width) + 1.5rem);

      display: grid;
      place-items: center;
    }
  }

  .small-name {
    font-size: 0.8rem;
  }
  .tiny-name {
    font-size: 0.5rem;
  }

  .exact-match {
    order: -1;

    li {
      transition: box-shadow 150ms linear, outline 150ms linear;
      box-shadow: inset 0 0 4px white;
      outline: 2px solid white;
    }
  }
</style>
