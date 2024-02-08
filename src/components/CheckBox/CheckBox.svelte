<script>
    import {createEventDispatcher} from "svelte";

    export let checked = false;
    export let value = {};
    export let disabled = false;

    const dispatch = createEventDispatcher();

    const handleToggle = () => {
      if (!disabled) {
        checked = !checked;
        dispatch('change', {checked, value})
      }
    }
</script>

<style lang="scss">
    .checkbox {
        cursor: pointer;
      &--disabled {
        opacity: 50%;
        cursor: default;
      }
    }
</style>

<div class="checkbox" class:checkbox--disabled={disabled} on:click={handleToggle}>
    {#if checked}
        <img src="check_box_checked.svg">
    {:else}
       <img src="check_box_unchecked.svg">
    {/if}
</div>
