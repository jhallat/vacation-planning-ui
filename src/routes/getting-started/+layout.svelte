<script>
    import userStore from "../../stores/user-store.js";
    import {goto} from "$app/navigation";
    import {browser} from "$app/environment";

    $: if (!userStore.authenticated() && browser) {
      goto("/");
    }

</script>

<slot/>
