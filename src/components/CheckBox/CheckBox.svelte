<script>
    export let checked = false;

    const handleToggle = () => {
      checked = !checked;
    }
</script>

<style>
    .content {
        cursor: pointer;
    }
</style>

<div class="content" on:click={handleToggle}>
    {#if checked}
        <img src="check_box_checked.svg">
    {:else}
       <img src="check_box_unchecked.svg">
    {/if}
</div>
