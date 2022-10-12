<script lang="ts">
  import type { SearchItem } from "@scripts/searchTypes";
  import { removeSpace } from "@scripts/slugGen";
  import { onMount } from "svelte";
  import levenshtein from "js-levenshtein";

  // Auto focus on Desktop
  let searchbar: Element;
  function isTouchScreendevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }

  onMount(() => {
    if (!isTouchScreendevice()) {
      searchbar.focus();
    }
  });

  // Secret image on specific search query
  import amogus from "../assets/amogus.gif?url";
  import lappdumb from "../assets/lappdumb.png?url";
  import sheew from "../assets/sheew.webp?url";
  import blitzsmile from "../assets/blitzsmile.png?url";
  import bernard from "../assets/bernard.png?url";
  import rick from "../assets/code.png?url";

  const secrets = <any>{
    amogus: amogus,
    sussy: amogus,
    lappdumb: lappdumb,
    sheew: sheew,
    blitzsmile: blitzsmile,
    bernard: bernard,
    rick: rick,
  };

  export let operatorList: Array<SearchItem> = [];
  let operatorListFiltered: Array<SearchItem> = operatorList;
  let trueMatch: string = "";
  let linkToMatch: Element;

  let input: string = "";
  let selected: string = input;
  let showAll: boolean = false;

  $: {
    // Parse input (s for shorthand)
    selected = removeSpace(input);
    const s = selected;

    if (s) {
      operatorListFiltered = operatorList
        .filter(
          (item) => item.trueSlug.slice(0, s.length) === s.slice(0, s.length)
        )
        .sort((a, b) => levenshtein(s, a.trueSlug) - levenshtein(s, b.trueSlug))
        .sort((a, b) => b.rarity - a.rarity)
        .sort((a, b) => (a.trueSlug === s ? -1 : 1))
        .slice(0, showAll ? undefined : 10);
      trueMatch = operatorListFiltered[0]?.trueSlug ?? "";
    } else {
      operatorListFiltered = operatorList;
      trueMatch = "";
    }
    operatorListFiltered.sort();
  }

  async function handleKeydown(event) {
    if (event.key === "Enter" && trueMatch) {
      linkToMatch?.click();
    }
  }
</script>

<div class="container">
  <div class="input-container">
    <input
      type="text"
      placeholder="Search Operators"
      autocomplete="false"
      bind:value={input}
      on:keydown={handleKeydown}
      bind:this={searchbar}
    />
    <a
      href={`/arkdex/operators/${trueMatch}`}
      bind:this={linkToMatch}
      class="secret"
    >
      /arkdex/operators/{trueMatch}
    </a>
    <div class:secret={!(selected in secrets)}>
      <div class="secret-image">
        <img src={secrets[selected]} alt="oh no" />
      </div>
    </div>
  </div>
  <div class="grid-items">
    <ul class="operator-grid">
      {#each operatorListFiltered as operator}
        <li>
          <a
            href={`/arkdex/operators/${operator.slug}`}
            class:tiny-name={operator.name.length >= 12}
            class:small-name={12 > operator.name.length &&
              operator.name.length >= 8}
            class={`rarity-${operator.rarity + 1}`}
            class:exact-match={trueMatch === operator.trueSlug}
          >
            <picture class="image">
              {#each operator.image.sources as source}
                <source {...source} />
              {/each}
              <img {...operator.image.image} alt="" />
            </picture>
            <p class="operator-name">{operator.name}</p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  .container {
    > * + * {
      margin-top: 1rem;
    }
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

  input {
    font-size: 1.5em;
    width: clamp(14rem, 40%, 40rem);
    margin-inline: auto;
    padding: 0.25rem;
    text-align: center;
  }

  a,
  a:visited {
    text-decoration: none;
    color: var(--theme-text);
  }

  .image,
  img {
    width: 72px;
    height: 72px;
  }

  // Main Styles

  .input-container {
    margin-top: 1rem;
    display: flex;
    flex-flow: column wrap;
    gap: 0.5rem;
    place-content: center;
    justify-content: center;
    text-align: center;
  }

  .secret {
    display: none;
  }

  .secret-image {
    padding-top: 1rem;
    width: max(8rem, 25%);
    margin-inline: auto;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .operator-grid {
    --grid-width: 4.5rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, var(--grid-width));
    justify-content: center;
    gap: 0.25rem;
    align-content: center;
  }

  a {
    margin: 0;
    width: var(--grid-width);
    height: calc(var(--grid-width) + 1.5rem);
    text-align: center;
    word-wrap: break-word;
    border-radius: 0.25rem;
    overflow: hidden;
    color: var(--theme-text-dark);
    outline: 0 solid white;
    display: grid;
    place-items: center;
  }

  .small-name {
    font-size: 0.8rem;
  }
  .tiny-name {
    font-size: 0.5rem;
  }

  .exact-match {
    transition: box-shadow 150ms linear, outline 150ms linear;
    box-shadow: inset 0 0 4px white;
    outline: 2px solid white;
  }
</style>
