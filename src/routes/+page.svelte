<script>
  import PageHeading from "../Layouts/PageTemplate/PageHeading/PageHeading.svelte";
  import PageSubHeading from "../Layouts/PageTemplate/PageSubHeading/PageSubHeading.svelte";
  import LogonDialog from "../pages/Logon/LogonDialog.svelte";
  import {goto} from "$app/navigation";
  import PageTemplate from "../Layouts/PageTemplate/PageTemplate.svelte";


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

