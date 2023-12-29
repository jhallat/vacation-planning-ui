<script>
    import Label from "./Label.svelte";
    export let label = '';
    export let value = '';
    export let id = '';
    export let error = false;

    export let mask = false;

    const handleInput = (event) => {
      value = event.target.value;
    }
</script>

<style lang="scss">
    @import "../../foundation/variables";

    .content {
        display: flex;
        flex-direction: column;
        margin: 0.25rem;
    }

    .input {
        font-size: $fs-base;
        font-family: $ff-base;
        height: 1.5rem;
        width: 15rem;
        border-radius: 7px;
        color: #261914;
        border: solid 1px $color-chocolate;
        outline: none;
        padding: $space-small;
      &:active {
        outline: solid 2px $color-olive-light;
        border: solid 1px $color-olive;
      }
    }

    .input:focus {
      outline: solid 2px $color-olive-light;
      border: solid 1px $color-olive;
    }

    .input-error {
      color: $color-red;
      outline: none;
      border: solid 1px $color-red;
      @include notify;
      &:focus {
        outline: solid 2px $color-red;
      }
    }

</style>

<div class="content">
    <Label {id} value={label} error={error}></Label>
    <input type={mask ? 'password' : 'text'}
           {id}
           class="input"
           class:input-error={error}
           value={value}
           on:input={handleInput}>
</div>
