<script>
  import { onDestroy} from "svelte";
  import IconButton from "../../../IconButton/IconButton.svelte";
  import Margin from "../../Margin/Margin.svelte";
  import userStore from "../../../../stores/user-store.js";
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

</script>

<style lang="scss">
    @import '../../../../foundation/variables';

    h1 {
        font-family: Agbalumo;
        margin: 0;
        color: #FFFDFA;
        padding: 0.9rem;
        font-size: 2.7rem;
        letter-spacing: 0.5rem;
    }

    .content {
        background-color: #735645;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        width: fit-content;
    }

</style>

<div class="content">
    <h1>{caption}</h1>
    <div class="buttons">
    <Margin size="sm">
        <IconButton iconSrc="home.svg"></IconButton>
    </Margin>
    {#if currentUser}
        <Margin size="sm">
            <IconButton iconSrc="logout.svg" on:click={handleLogout}></IconButton>
        </Margin>
    {/if}
    </div>
</div>
