<script>
    import {createEventDispatcher} from "svelte";

    export let type ='button';
    export let label = '';
    export let size = 'md';
    export let key='';

    const dispatch = createEventDispatcher();

    const handleClick = () => {
      dispatch('click', key);
    }

</script>

<style lang="scss">
    @import "../../style/abstracts/variables";

    .button {
        border: none;
        padding: $space-small;
        font-size: $fs-base;
        font-family: Montserrat;
        font-weight: bold;
        cursor: pointer;
      transform: translateY(1px) translateX(1px);
        &--standard {
          background-color: $color-olive;
          border-radius: 0.5rem;
          color: $color-chocolate;
          box-shadow: $shadow;
          &:hover {
            background-color: $color-olive-light;
          }
          &:active {
            box-shadow: 0.2rem 0.2rem 0.1rem rgba(0,0,0,55%);
            transform: translateY(2px) translateX(2px);
          }
        }
        &--link {
          background: none;
          color: $color-olive;
          text-decoration: underline;
          width: fit-content;
          height: fit-content;
          padding: 0;
          &:hover {
            color: $color-olive-light;
          }
          &:active {
            transform: translateY(2px) translateX(2px);
          }
        }
        &--size-md {
          height: 3.5rem;
          width: 10rem;
        }
        &--size-lg {
        height: 4.5rem;
        width: 15.5rem;
      }

    }

</style>

<button class={`button button--size-${size}`}
        class:button--standard={type==='button'}
        class:button--link={type==='link'}
        class:button--size-md={type !== 'link' && size=='md'}
        class:button--size-lg={type !== 'link' && size=='lg'}
        on:click={handleClick} {type}>{label}</button>
