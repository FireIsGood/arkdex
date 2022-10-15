<script lang="ts">
  import type { GetPictureResult } from "@astrojs/image/dist/lib/get-picture";

  export let picture: GetPictureResult;
</script>

<picture>
  {#each picture.sources as source}
    <source srcset={source.srcset} />
  {/each}
  <img {...picture.image} alt="" />
</picture>

<style lang="scss">
  picture {
    > * {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
