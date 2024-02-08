<script>
    export let value;
    export let id;
    export let error = false;
    export let disabled = false;
</script>

<style lang="scss">
    @import "../../style/abstracts/variables";

    .label {
        font-size: $fs-sm;
        font-family: $ff-base;
        font-weight: bold;
        color: $color-chocolate;
        padding: 0.2rem;
        display: flex;
        align-items: center;
      &--error {
        color: $color-red;
        @include notify;
      }
      &--disabled {
        opacity: 50%;
      }
    }


</style>

<label class="label" for={id} class:label--error={error} class:label--disabled={disabled}>{value}</label>
