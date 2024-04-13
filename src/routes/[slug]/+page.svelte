<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  $: song = data.song;
</script>

<svelte:head>
  <meta property="og:title" content="{song.title} | Vokalisten er syk" />
  <meta property="og:url" content="https://osloschlagerlag.no/{data.slug}" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Live-karaoke med Oslo Schalgerlag på Salt" />
  <meta
    property="og:image"
    content="https://osloschlagerlag.no/img/vokalisten-er-syk-20240413.jpeg"
  />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="2000" />
  <meta property="og:image:height" content="1050" />

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
    font-family: 'Unbounded';
  }

  .lyrics {
    font-size: 1.2rem;
  }

  .link {
    color: inherit;
    font-family: 'Unbounded';
    color: var(--primary-color);
  }

  .link:visited {
    color: inherit;
    color: var(--primary-color);
  }
</style>
