<script>
  import { form, button } from "./styles.js";

  const movies = [
    { name: "Avengers", availables: 8, quantity: 0 },
    { name: "Terminator", availables: 2, quantity: 0 },
    { name: "Avatar", availables: 3, quantity: 0 },
    { name: "Terminator 2", availables: 10, quantity: 0 }
  ];
</script>

{#each movies as movie}
  <form
    class="{form}"
    on:mouseenter={(e)=>window.document.body.classList.add('movie')}
    on:mouseleave={(e)=>window.document.body.classList.remove('movie')}>
    <h3>{movie.name}</h3>
    <button
    class="{button}"
      type="button"
      on:click={ () => movie.quantity -= 1 }
      disabled={ movie.quantity === 0}
      >-</button>
    {movie.quantity}
    <button
    class="{button}"
      type="button"
      on:click={ () => movie.quantity += 1 }
      disabled={ movie.quantity === movie.availables}
      >-</button>
  </form>
{/each}

<style>
</style>