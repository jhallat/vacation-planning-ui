<script>
    export let error = false;
</script>

<style lang="scss">
  @import "../../style/abstracts/variables";

    .text {
        font-family: Montserrat, sans-serif;
        font-size: $fs-base;
        color: $color-chocolate;
    }

    .error {
      color: $color-red;
    }
</style>

<div class="text" class:error={error}>
    <slot></slot>
</div>
