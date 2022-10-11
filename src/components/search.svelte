<script lang="ts">
  import { searchTerm } from "@components/search-store";
  import { removeSpace } from "@scripts/slugGen";

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
  <input type="text" placeholder="Search Operators" bind:value={input} />
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
