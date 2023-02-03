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
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 4px;
    color: var(--primary-color);
  }
  .artist {
    font-weight: 200;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 16px;
  }

  .title,
  .artist {
    font-family: 'Unbounded', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .lyrics {
    font-size: 1.2rem;
  }

  .link {
    color: inherit;
    font-family: 'Unbounded', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--primary-color);
  }

  .link:visited {
    color: inherit;
    color: var(--primary-color);
  }
</style>
