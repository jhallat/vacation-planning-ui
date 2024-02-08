<script>
   export let size='md';
</script>

<style lang="scss">
   @import "../../style/abstracts/variables";

    .margin--sm {
        margin: $space-small;
    }

    .margin--md {
      margin: $space-medium;
    }
</style>

<div class:margin--sm={size==='sm'} class:margin--md={size==='md'}>
   <slot />
</div>
