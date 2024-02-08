<script>
  import Button from "../../../../components/Button/Button.svelte";
</script>

<style lang="scss">
    @import '../../../../style/abstracts/variables';

    .content {
        display: flex;
        flex-direction: column;
        padding: $space-medium;
        gap: $space-small;
        background-color: $color-peach;
    }
</style>

<div class="content">
    <Button label="Things to Pack" size="lg"></Button>
    <Button label="Things to Do" size="lg"></Button>
    <Button label="Create Itinerary" size="lg"></Button>
    <Button label="Generate a Plan" size="lg"></Button>
</div>
