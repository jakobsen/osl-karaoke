<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
  let searchText = '';
  $: filteredSongs = data.songs.filter((song) => {
    if (song.hide) return false;
    if (searchText == '') return true;
    return (
      song.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      song.artist.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  });
</script>

<svelte:head>
  <meta property="og:url" content="https://osloschlagerlag.no" />
  <meta property="og:title" content="Vokalisten er syk | Oslo Schlagerlag" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Live-karaoke med Oslo Schalgerlag på Salt" />
  <meta
    property="og:image"
    content="https://osloschlagerlag.no/img/vokalisten-er-syk-20240413.jpeg"
  />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="2000" />
  <meta property="og:image:height" content="1050" />

  <title>Vokalisten er syk!</title>
</svelte:head>
<h1 class="heading">Vokalisten er syk!</h1>

<div class="qr-code-wrapper">
  {@html data.qrCodeString}
</div>
<a href={data.signupLink} class="sign-up">Påmelding</a>

<h2 class="heading">Låter</h2>
<input bind:value={searchText} placeholder="Søk etter låttittel eller artist" class="search-box" />
<ul class="song-list">
  {#each filteredSongs as song (song.slug)}
    <li class="song-list-item">
      <a href="/{song.slug}">{song.title}</a>
    </li>
  {/each}
</ul>

<h2 class="heading">Kontakt og booking</h2>
<div class="contact-links-wrapper">
  <a
    class="social-link"
    href="https://instagram.com/osloschlagerlag"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/img/instagram.svg" alt="Instagram" class="contact-link-img" />
    Instagram
  </a>
  <a
    class="social-link"
    href="https://facebook.com/osloschlagerlag"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/img/facebook.svg" alt="Facebook" class="contact-link-img" />
    Facebook
  </a>
  <a class="social-link" href="mailto:oslo.schlagerlag@gmail.com">
    <img src="/img/mail.svg" alt="E-post" class="contact-link-img" />
    E-post
  </a>
</div>

<img src="/img/logo.png" alt="" class="logo" />

<style>
  .heading {
    font-family: 'Unbounded';
    font-weight: 500;
    color: var(--primary-color);
    line-height: 1.2;
    margin-bottom: 1em;
  }

  .sign-up {
    text-decoration: underline;
    font-size: 1.44rem;
    margin-top: -1rem;
    margin-bottom: 3rem;
    display: block;
    margin-inline: auto;
    width: max-content;

    &:hover {
      text-decoration: none;
    }
  }

  .qr-code-wrapper {
    width: 300px;
    margin-inline: auto;
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
    margin-bottom: 4rem;
  }

  .song-list-item {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .contact-links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-items: center;
    height: 2rem;
    color: var(--primary-color);
  }

  .contact-link-img {
    display: block;
    color: inherit;
    height: 100%;
    max-height: 100%;
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
    max-width: min(75vw, 400px);
    margin: 128px auto 32px;
  }
</style>
