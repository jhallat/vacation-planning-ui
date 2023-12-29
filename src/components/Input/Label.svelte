<script>
    export let value;
    export let id;
    export let error = false;

</script>

<style lang="scss">
    @import "../../foundation/variables";

    .label {
        font-size: .85rem;
        font-family: $ff-base;
        font-weight: bold;
        color: $color-chocolate;
        padding: 0.2rem;
    }

    .label-error {
        color: $color-red;
        @include notify;
    }
</style>

<label class="label" for={id} class:label-error={error}>{value}</label>
