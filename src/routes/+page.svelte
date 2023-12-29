<script>
  import PageHeading from "../components/Layouts/PageTemplate/PageHeading/PageHeading.svelte";
  import PageSubHeading from "../components/Layouts/PageTemplate/PageSubHeading/PageSubHeading.svelte";
  import LogonDialog from "../components/LogonDialog.svelte";
  import {goto} from "$app/navigation";
  import PageTemplate from "../components/Layouts/PageTemplate/PageTemplate.svelte";


  //$: uppercaseName = name.toUpperCase();

    //$: console.log(name);

    // $: if (name === 'John') {
    //   message = ' is a ray of sunshine'
    // }

    // function changeName() {
    //   console.log('Name changed');
    //   name = 'John';
    // }

    function nameInput(event) {
      const enteredValue = event.target.value;
      name = enteredValue;
    }

    const signOn = (event) => {
      goto('/getting-started');
    }
</script>

<style>
    .content {
        background-image: url("../images/vacation-planning.jpeg");
        background-size: cover;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        position: absolute;
    }

    .dialog {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        animation-name: moveInLeft;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        backface-visibility: hidden;
        z-index: 2;
        /* animation-delay: 0.5s;
        animation-fill-mode: backwards;
        animation-iteration-count: 3
        */
    }

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-800px) translateY(-50%);
        }

        /*50% {
            transform: rotate(180deg);
        }*/

        80% {
            transform: translateX(-40%) translateY(-50%);
        }

        100% {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%);
        }
    }
</style>

<PageTemplate name="Welcome">
<div class="content">
    <div class="dialog" >
        <LogonDialog on:sign-on={signOn}></LogonDialog>
    </div>
</div>
</PageTemplate>
<!-- <h1 class="heading" class:heading-good={name==='John'}>Welcome {uppercaseName} {message}</h1> -->
<!--<input type="text" value={name} on:input={nameInput}/> -->
<!--<input type="text" bind:value={name} />
<button on:click|preventDefault={changeName}>Change Name</button>
<PackingCard heading="What {name} Needs to Bring"></PackingCard> -->
<!-- <p>{@html descpription}</p> Will render as html -->
<!-- {#if name==="John"}
    <p>Yeah John!!!</p> -->
<!-- can also use :else if -->
<!-- {:else}
    <p>Where's John?</p>
{/if} -->
<!-- Looping
{#each someList as someItem, index (someItem.id)}
    <div>{someItem}</div>
{:else}
    <div>No items in list</div>
{/each}
-->
