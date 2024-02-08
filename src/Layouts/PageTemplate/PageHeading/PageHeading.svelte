<script>
  import { onDestroy} from "svelte";
  import IconButton from "../../../components/IconButton/IconButton.svelte";
  import Margin from "../../Margin/Margin.svelte";
  import userStore from "../../../stores/user-store.js";
  import {goto} from "$app/navigation";
    export let caption;

    let currentUser;

    const unsubscribe = userStore.subscribe(user => {
       currentUser = user;
     });

    onDestroy(() => {
      if (unsubscribe) {
        unsubscribe();
      }
    })

   const handleLogout = () => {
      userStore.logout();
      goto("/");
   }

   const handleGoHome = () => {
      goto("/getting-started");
   }
</script>

<style lang="scss">
    @import '../../../style/abstracts/variables';

    h1 {
        font-family: Agbalumo;
        margin: 0;
        color: $color-neutral-1;
        padding: 0.9rem;
        font-size: $fs-xxxl;
        letter-spacing: 0.5rem;
    }

    .page-heading {
        background-image: linear-gradient(to right, $color-coffee, $color-coffee-light);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .page-heading__buttons {
        display: flex;
        flex-direction: row;
        width: fit-content;
    }

</style>

<div class="page-heading">
    <h1>{caption}</h1>
    <div class="page-heading__buttons">
    <Margin size="sm">
        <IconButton iconSrc="home.svg" on:click={handleGoHome}></IconButton>
    </Margin>
    {#if currentUser}
        <Margin size="sm">
            <IconButton iconSrc="logout.svg" on:click={handleLogout}></IconButton>
        </Margin>
    {/if}
    </div>
</div>
