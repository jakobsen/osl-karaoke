<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  $: song = data.song;
</script>

<svelte:head>
  <title>{song.title} | Vokalisten er syk</title>
</svelte:head>

<h1 class="title">{song.title}</h1>
<h2 class="artist">{song.artist}</h2>
<div class="lyrics">{@html song.content}</div>
<a href="/" class="link">Tilbake til oversikten</a>

<style>
  .title {
    font-weight: 400;
    font-size: 3rem;
    margin: 0;
    margin-bottom: 4px;
  }
  .artist {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 16px;
  }

  .lyrics {
    font-size: 1.2rem;
  }

  .link {
    color: inherit;
  }

  .link:visited {
    color: inherit;
  }
</style>
