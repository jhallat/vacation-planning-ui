<script>
  import PageHeading from "./PageHeading/PageHeading.svelte";
  import PageSubHeading from "./PageSubHeading/PageSubHeading.svelte";

  export let name;
</script>

<style>
    .heading {
        position: relative;
        z-index: 2;
        height: fit-content;
    }
</style>

<div>
    <div class="heading">
    <PageHeading caption="Vacation Planning"></PageHeading>
    <PageSubHeading caption={name}></PageSubHeading>
    </div>
    <slot/>
</div>
