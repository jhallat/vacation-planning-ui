<script>
  import { createEventDispatcher } from 'svelte';
  import Input from "../../components/Input/Input.svelte";
  import Button from "../../components/Button/Button.svelte";
  import Margin from "../../Layouts/Margin/Margin.svelte";
  import Dialog from "../../Layouts/Dialog/Dialog.svelte";
  import { isNotEmpty } from "../../utilities/validation.js";
  import userStore from "../../stores/user-store.js";
  import {authenticate} from "../../utilities/authentication.js";
  import Text from "../../components/Text/Text.svelte";

  let username = '';
  let password = '';
  let validPassword = true;
  let validUsername = true;
  let validSignOn = true;

  $: if (isNotEmpty(password)) {
    validPassword = true;
  }

  $: if (isNotEmpty(username)) {
    validUsername = true;
  }

  const dispatch = createEventDispatcher();
  const signOn = () => {
    validPassword = isNotEmpty(password);
    validUsername = isNotEmpty(username);
    //userStore.update(user => {
    //
    //});
    if (authenticate(username, password)) {
      userStore.login(username);
      validSignOn = true;
      dispatch('sign-on')
    } else {
      validSignOn = false;
    }
  }
</script>

<style>

</style>

<Dialog>
    <form on:submit|preventDefault={signOn}>
        <Margin size="sm">
            <Input id="username"
                   label="Username"
                   size="lg"
                   bind:value={username}
                   error={!validUsername}/>
        </Margin>
        <Margin size="sm">
            <Input id="password"
                   label="Password"
                   size="lg"
                   bind:value={password}
                   error={!validPassword}
                   mask=true/>
        </Margin>
        <Margin size="md">
            <Button label="Sign In" on:click={signOn}/>
        </Margin>
        {#if !validSignOn}
            <Text error={true}>Invalid credentials</Text>
        {/if}
    </form>
</Dialog>
