<script>
    export let frequencyType = 0;

    export let conditions = [];
</script>

{#if frequencyType === 0}
    Always
{:else}
    {conditions.map(condition => condition.description).join(', ')}
{/if}
