<script>
    import Label from "../Label/Label.svelte";
    import {createEventDispatcher} from "svelte";
    export let label = '';
    export let value = '';
    export let id = '';
    export let error = false;
    export let size = 'md';
    export let mask = false;
    export let disabled = false;

    const dispatch = createEventDispatcher();

    const handleInput = (event) => {
      value = event.target.value;
    }

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        dispatch('enter-clicked');
      }
    }
</script>

<style lang="scss">
    @import "../../style/abstracts/variables";

    .input {
        display: flex;
        flex-direction: column;
        margin: 0.25rem;
        &--xxxsmall {
           width: calc((100% - #{$grid-gap-vertical}) / 12);
         }
         &--xxsmall {
           width: calc((100% - #{$grid-gap-vertical}) / 6);
         }
    }

    .input__box {
        font-size: $fs-base;
        font-family: $ff-base;
        height: 1.75rem;
        border-radius: 0.7rem;
        color: #261914;
        border: solid 1px $color-chocolate;
        outline: none;
        padding: $space-small;
      &:active {
        outline: solid 0.2rem $color-olive-light;
        border: solid 0.1rem $color-olive;
      }
      &:focus {
        outline: solid 2px $color-olive-light;
        border: solid 1px $color-olive;
      }
      &--disabled {
        opacity: 50%;
        user-select: none;
        &:focus {
          outline: none;
          border: solid 1px $color-chocolate;
        }
      }
    }

    .input--xsmall {
      width: calc((100% - #{$grid-gap-vertical}) / 4);
    }

    .input--small {
      width: calc((100% - #{$grid-gap-vertical}) / 3);
    }

    .input--medium {
      width: calc((100% - #{$grid-gap-vertical}) / 2);
    }

    .input-large {
      width: 100%;
    }

    .input__box--error {
      color: $color-red;
      outline: none;
      border: solid 1px $color-red;
      @include notify;
      &:focus {
        outline: solid 2px $color-red;
      }
    }

</style>

<div class="input"
     class:input--xxxsmall={size === 'xxxs'}
     class:input--xxsmall={size === 'xxs'}
     class:input--xsmall={size === 'xs'}
     class:input--small={size === 'sm'}
     class:input--medium={size === 'md'}
     class:input--large={size === 'lg'}
     >
    <Label {id} value={label} error={error}></Label>
    <input type={mask ? 'password' : 'text'}
           {id}
           class="input__box"
           class:input__box--error={error}
           class:input__box--disabled={disabled}
           readonly={disabled}
           value={value}
           on:input={handleInput}
           on:keypress={handleKeyPress}>
</div>
