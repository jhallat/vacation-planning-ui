<script>
    export let amountType = 0;
    export let dayAmount = 0;
    export let extraAmount = 0;
</script>


{#if amountType === 0}
        1
{:else}
        {`${dayAmount} for each day with ${extraAmount} extra`}
{/if}
