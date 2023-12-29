<script>
    export let type ='button';
    export let label = '';
    export let size = 'md';

</script>

<style lang="scss">
    @import "../../foundation/variables";

    .size-md {
      height: 2.2rem;
      width: 6rem;
    }

    .size-lg {
      height: 2.7rem;
      width: 8.5rem;
    }

    .button {
        margin: 0.25rem;
        background-color: $color-olive;
        border: none;
        border-radius: 5px;
        padding: $space-small;
        font-size: .85rem;
        font-family: Montserrat;
        font-weight: bold;
        color: $color-chocolate;
        cursor: pointer;
        box-shadow: 0.2rem 0.2rem 0.4rem rgba(0,0,0,45%);
      &:hover {
        background-color: $color-olive-light;
      }
      &:active {
        transform: translateY(1px) translateX(1px);
        box-shadow: 0.2rem 0.2rem 0.1rem rgba(0,0,0,55%);
      }
    }

</style>

<button class={`button size-${size}`} on:click {type}>{label}</button>
