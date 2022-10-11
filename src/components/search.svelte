<script lang="ts">
  import { searchTerm } from "@components/search-store";
  import { removeSpace } from "@scripts/slugGen";

  import amogus from "../assets/amogus.gif?url";
  import lappdumb from "../assets/lappdumb.png?url";
  import sheew from "../assets/sheew.webp?url";
  import blitzsmile from "../assets/blitzsmile.png?url";
  import bernard from "../assets/bernard.png?url";
  import rick from "../assets/code.png?url";

  let linkToMatch: Element;

  const secrets = <any>{
    amogus: amogus,
    sussy: amogus,
    lappdumb: lappdumb,
    sheew: sheew,
    blitzsmile: blitzsmile,
    bernard: bernard,
    rick: rick,
  };

  type OperatorSearch = {
    slug: string;
    trueSlug: string;
  };

  export let operatorList: Array<OperatorSearch>;
  let trueMatch: string = "";
  let input: string;

  $: {
    if (input) {
      const cleanInput = removeSpace(input);
      searchTerm.set(cleanInput);
      if (
        operatorList.some((item) => {
          return item.trueSlug === cleanInput;
        })
      ) {
        const i = operatorList.findIndex(
          (item) => item.trueSlug === cleanInput
        );
        trueMatch = operatorList[i].slug;
      } else {
        trueMatch = "";
      }
    } else {
      searchTerm.set("?");
    }
  }

  async function handleKeydown(event) {
    if (event.key !== "Enter") return;
    if (trueMatch) {
      console.log(trueMatch);
      linkToMatch?.click();
    }
  }
</script>

<div class="container">
  <input
    type="text"
    placeholder="Search Operators"
    autocomplete="false"
    bind:value={input}
    on:keydown={handleKeydown}
  />
  <a
    href={`/arkdex/operators/${trueMatch}`}
    bind:this={linkToMatch}
    class="secret"
  />
  <div class:secret={!($searchTerm in secrets)}>
    <div class="image">
      <img src={secrets[$searchTerm]} alt="oh no" />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .secret {
    display: none;
  }
  .image {
    padding-top: 1rem;
    width: max(8rem, 25%);
    margin-inline: auto;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  input {
    font-size: 1.5em;
    width: clamp(14rem, 40%, 40rem);
    padding: 0.25rem;
    text-align: center;
  }
</style>
