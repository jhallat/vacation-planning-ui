<script>
  import Button from "../Button/Button.svelte";
  import Dialog from "../../Layouts/Dialog/Dialog.svelte";
  import {createEventDispatcher} from "svelte";

  export let actionLabel;
  const dispatch = createEventDispatcher();

  const handleAction = () => {
    dispatch('action');
  }

  const handleCancel = () => {
    dispatch('cancel');
  }
</script>

<style lang="scss">
    @import '../../main';

    .modal {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        backdrop-filter: blur(0.12rem) grayscale(20%) brightness(80%) contrast(80%);
        animation-name: darkenBackground;
        animation-duration: .25s;
        &__dialog {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            animation-name: moveInLeft;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
            backface-visibility: hidden;
            animation-fill-mode: backwards;
            /*  animation-iteration-count: 3
            */
        }
        &__button-bar {
            display: flex;
            flex-direction: row;
            gap: $space-medium;
        }
    }



    @keyframes darkenBackground {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-800px) translateY(-50%) skewX(-20deg);
        }

        80% {
            transform: translateX(-40%) translateY(-50%) skewX(5deg);
        }

        100% {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%) skewX(0deg);
        }
    }

</style>

<div class="modal">
    <div class="modal__dialog">
    <Dialog>
        <div>
            <slot/>
        </div>
        <div class="modal__button-bar">
        <Button primary label={actionLabel} on:click={handleAction}/>
        <Button label="Cancel" on:click={handleCancel}/>
        </div>
    </Dialog>
    </div>
</div>
