<script lang="ts">
  import Picture from "./picture.svelte";
  import type { OperatorTypes } from "@scripts/operatorTypes";
  import type { CharEvolve, FilteredSkins } from "@scripts/skinTypes";
  import type { GetPictureResult } from "@astrojs/image/dist/lib/get-picture";
  import { each } from "svelte/internal";
  import type { Images, PictureObjects } from "@scripts/pagePropTypes";
  import { fly } from "svelte/transition";

  export let technicalName: string;
  export let operator: OperatorTypes;
  export let elites: PictureObjects;
  export let skins: FilteredSkins;
  export let images: Images;

  const operatorPhaseCount = operator.phases.length - 1;
  const operatorImg = `https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/${technicalName}_1.png`;

  let shownSkin: String = "0";
  let modalActive: Boolean = false;
  let modalName: String = "";

  function openFullPortrait(e: Event) {
    e.preventDefault();
    modalActive = true;
    modalName = "full image";
  }

  async function handleKeydown(event) {
    if (event.key === "Escape") {
      modalActive = false;
    }
  }
</script>

<section>
  <a href="/arkdex/operators" class="back" title="Go back to Operators">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      fill="white"
      class="shadow"
    >
      <path
        d="M24 40.65 7.4 24 24 7.4l2.6 2.6-12.2 12.2h26.25v3.65H14.4l12.2 12.2Z"
      />
    </svg>
  </a>
  <div class="column-image" data-elite={shownSkin}>
    <div class="image-toolbar">
      <ul class="elite-icons">
        {#each Object.entries(elites).reverse() as [elite, picture], i}
          <li>
            <button
              on:click={() => (shownSkin = elite)}
              class="elite-icon"
              aria-selected={shownSkin === elite}
              title={`Switch to elite ${elite}`}
            >
              <Picture {picture} />
            </button>
          </li>
        {/each}
      </ul>
      <ul>
        <li class="section-top">
          <button title="View full image" on:click={openFullPortrait}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              width="36"
              viewBox="0 0 48 48"
            >
              <path
                d="m40.05 42.6-13.2-13.2q-1.55 1.3-3.65 2-2.1.7-4.35.7-5.7 0-9.6-3.9-3.9-3.9-3.9-9.5t3.9-9.5q3.9-3.9 9.5-3.9t9.5 3.9q3.9 3.9 3.9 9.5 0 2.2-.675 4.225Q30.8 24.95 29.4 26.75l13.3 13.2ZM18.8 28.45q4.05 0 6.875-2.85t2.825-6.9q0-4.05-2.825-6.9Q22.85 8.95 18.8 8.95q-4.15 0-6.975 2.85Q9 14.65 9 18.7q0 4.05 2.825 6.9 2.825 2.85 6.975 2.85Zm-1.9-3.8v-4.2h-4.2V16.8h4.2v-4.15h3.65v4.15h4.15v3.65h-4.15v4.2Z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <div class="operator-image" on:contextmenu={openFullPortrait}>
      {#each Object.keys(images.character) as character}
        <div class:hidden={character !== shownSkin}>
          <Picture picture={images.character[character].optimal} />
        </div>
      {/each}
    </div>
    <div class="backdrop" />
    <div class="faction-image">
      {#if images.faction}
        <Picture picture={images.faction} />
      {/if}
    </div>
  </div>
  <div class="column-stats">
    <h1>{operator.name}</h1>
    <p>{technicalName}</p>
    <p>{modalActive}</p>
    <p>showing skin: {shownSkin}</p>
    {#each Object.entries(images) as [key, image]}
      <p>{key}: {image}</p>
    {/each}
    <ul class="tag-list">
      {#each operator.tagList as tag}
        <li class="tag">{tag}</li>
      {/each}
    </ul>
    <ul />
    {#each Object.entries(skins) as [skinId, skin]}
      <p>{skinId} {skin.avatarId}</p>
    {/each}
    <p>Max elite: {operatorPhaseCount}</p>
    <p>
      <span class="key-label">Attack at e0 max:</span>
      {operator.phases[0].attributesKeyFrames[1].data.atk}
    </p>
  </div>
</section>

{#if modalActive}
  <div class="modals">
    {#if modalName === "full image"}
      <div class="full-image" in:fly={{ y: 10, duration: 200 }}>
        <img src={images.character[shownSkin].original} alt="Full Character" />
      </div>
    {/if}
    <div
      class="modal-background"
      on:click={() => (modalActive = false)}
      on:keydown={handleKeydown}
    />
  </div>
{/if}

<svelte:body on:keydown={handleKeydown} />

<style lang="scss">
  // General Styles

  section {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--header-height) - 1px);

    > div {
      width: 100%;
      min-width: 300px;
    }
  }

  h1 {
    text-align: center;
    font-size: 2em;
  }

  button {
    border-radius: 0;
  }

  :global(picture) {
    pointer-events: none;
    user-select: none;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  // Utility Styles

  .hidden {
    display: none;
  }

  // Main Styles

  a.back {
    z-index: 4;
    position: absolute;

    svg {
      display: block;
      fill: var(--theme-button);
    }

    &:hover svg {
      fill: var(--theme-button-hover);
    }

    &:active svg {
      fill: var(--theme-button-active);
    }
  }

  .column-image {
    position: relative;
    display: grid;
    max-height: 100%;
    place-self: center;
    place-items: center;

    background-image: radial-gradient(var(--theme-dots) 10%, transparent 10%);
    background-size: 2.5vmin 2.5vmin;
    background-position-x: 50%;
    background-position-y: 50%;
    transition: background-position 250ms ease;

    @for $elite from 0 through 2 {
      &[data-elite="#{$elite}"] {
        background-position-y: calc(50% + (-5% * #{$elite}));
        background-position-x: calc(50% + (-1% * #{$elite}));
      }
    }

    .image-toolbar {
      grid-area: 1 / 1;
      z-index: 2;
      justify-self: left;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      ul {
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: var(--theme-button-gap);
      }

      li {
        display: flex;
      }

      button {
        display: flex;
        place-items: center;
        cursor: pointer;
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        transition: background-color 150ms ease, background-size 250ms ease-out;
        background-color: var(--theme-button);
        background-image: linear-gradient(var(--theme-card) 0 0);
        background-repeat: no-repeat;
        background-size: 0% 2px;
        background-position: 0% calc(100% - 2px);

        &.elite-icon {
          height: 2rem;
          width: 3rem;
          padding: 0rem 0.5rem;
        }

        &:hover {
          background-color: var(--theme-button-hover);
        }
        &:active {
          background-color: var(--theme-button-active);
        }
        &[aria-selected="true"] {
          background-size: 30% 2px;
        }
      }
    }

    .operator-image {
      grid-area: 1 / 1;
      z-index: 1;
      width: 100%;
      max-width: 600px;
      object-fit: contain;
    }

    .faction-image {
      grid-area: 1 / 1;
      z-index: 0;
      position: relative;
      place-self: flex-start;
      left: 1.5rem;
      top: 1rem;
      width: 30%;
      -webkit-filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.7));
      filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.7));
      object-fit: contain;
    }

    .backdrop {
      grid-area: 1 / 1;
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
    }
  }

  .column-stats {
    padding: 1rem;
    background-color: var(--theme-card);

    .tag-list {
      list-style: none;
      display: flex;
      gap: 0.25rem;

      li.tag {
        display: inline-block;
        padding: 0.15rem 0.35rem;
        border-radius: 0.25rem;
        background-color: var(--theme-tag);
        color: var(--theme-tag-text);
      }
    }

    > * + * {
      margin-top: 1rem;
    }
  }

  .key-label {
    color: var(--theme-text-accent);
  }

  .modals {
    z-index: 10;
    position: absolute;
    display: grid;
    inset: 0;

    .full-image {
      grid-area: 1 / 1;
      z-index: 1;
      width: 100vmin;
      aspect-ratio: 1 / 1;
      background-color: var(--theme-modal);
      margin: auto;
      padding: 1rem;
      display: flex;
      place-items: center;
    }

    .modal-background {
      grid-area: 1 / 1;
      z-index: 0;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }

  // Media query for Desktop

  @media (min-width: 750px) {
    section {
      flex-direction: row;

      > div {
        width: 50%;
        height: var(--body-height);
      }
    }

    .column-image,
    .column-stats {
      height: var(--body-height);
      overflow-y: auto;
    }

    :global(.operator-image div) {
      height: var(--body-height);
    }

    .modals .full-image {
      width: min(75vw, 75vh, 100vmin);
    }

    .backdrop {
      display: none;
    }
  }
</style>
