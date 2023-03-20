<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
  let searchText = '';
  $: filteredSongs = data.songs.filter((song) => {
    if (searchText == '') return true;
    return (
      song.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      song.artist.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  });
</script>

<svelte:head>
  <title>Vokalisten er syk!</title>
</svelte:head>

<h1 class="heading">Vokalisten er syk!</h1>
<ul class="song-list">
  <input bind:value={searchText} placeholder="Søk" class="search-box" />
  {#each filteredSongs as song (song.slug)}
    <li class="song-list-item">
      <a href="/{song.slug}">{song.title}</a>
    </li>
  {/each}
</ul>
<img src="/img/logo.png" alt="" class="logo" />

<style>
  .heading {
    font-family: 'Unbounded';
    font-weight: 500;
    color: var(--primary-color);
    line-height: 1.2;
    margin-bottom: 1em;
  }

  .sub-heading {
    font-family: 'Unbounded';
    font-weight: 500;
    color: var(--primary-color);
    line-height: 1.2;
  }

  .search-box {
    font-size: 1.2rem;
    appearance: none;
    border: none;
    border-bottom: 2px solid var(--primary-color);
    padding: 4px;
    width: 100%;
    margin-bottom: 32px;
    font-family: 'Unbounded';
    font-weight: 300;
  }

  .search-box:focus {
    outline: none;
    color: var(--primary-color);
    font-weight: 450;
  }

  .song-list {
    list-style: none;
    padding: 0;
  }

  .song-list-item {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
  }

  a,
  a:visited {
    color: var(--primary-color);
  }

  a:focus {
    outline: none;
    text-decoration: underline;
  }

  .logo {
    display: block;
    max-width: min(95vw, 400px);
    margin: 128px auto 32px;
  }
</style>
