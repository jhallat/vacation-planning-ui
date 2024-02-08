<script>
  import {createEventDispatcher} from "svelte";

  export let selected = false;
  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch('select');
  }
</script>

<style>
    .radio-button {
        cursor: pointer;
        height: 2.4rem;
        width: 2.4rem;
        min-height: 2.4rem;
        min-width: 2.4rem;
    }
</style>

<div class="radio-button" on:click={handleClick}>
    {#if selected}
        <img src="radio_button_checked.svg">
    {:else}
        <img src="radio_button_unchecked.svg">
    {/if}
</div>
