<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<main>
  <!-- QR Code SVG generated by server -->
  <div class="main-wrapper">
    <h1>Se låtene du kan velge:</h1>
    <div class="svg-wrapper">
      {@html data.qrCodeString}
      <code>osloschlagerlag.no</code>
    </div>

    <ol>
      <li>Meld dere på i døren</li>
      <li>Vær klar når det er deres tur</li>
      <li>Maks 3 på scenen</li>
    </ol>
  </div>
</main>

<style>
  h1 {
    font-size: 3rem;
    text-align: center;
    font-family: 'Unbounded', sans-serif;
  }

  .main-wrapper {
    margin-top: 2rem;
    color: var(--primary-color);
  }

  .svg-wrapper {
    text-align: center;
    font-size: 2rem;
    font-family: 'Monaco', monospace;
  }

  :global(svg) {
    display: block;
    width: 100%;
  }

  ol {
    font-size: 2rem;
    font-family: 'Unbounded', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-inline: center;
    width: max-content;
  }
</style>
