<script>
  import Form from "./Form.svelte";
  import { title } from "./styles.js";
</script>

<main>
  <h2 class="{title}">Películas</h2>
  <Form/>
</main>

<style>
  :global(body) {
    --bg: #ffe9c5;
    --color-1: #e54b00;
    --color-2: #512613;
    background-color: var(--bg);
    color: var(--color-1);
    margin: 0;
    font-family: sans-serif;
  }
  :global(body.movie) {
    --bg: #ccffc5;
    --color-1: #35e500;
    --color-2: #1a5113;
  }
</style>