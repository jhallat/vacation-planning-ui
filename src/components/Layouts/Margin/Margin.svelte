<script>
   export let size='md';
</script>

<style lang="scss">
   @import "../../../foundation/variables";

    .content-sm {
        margin: $space-small;
    }

    .content-md {
      margin: $space-medium;
    }
</style>

<div class:content-sm={size==='sm'} class:content-md={size==='md'}>
   <slot />
</div>
