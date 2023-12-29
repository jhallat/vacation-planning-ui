<script>
    export let error = false;
</script>

<style lang="scss">
  @import "../../foundation/_variables.scss";

    .content {
        font-family: Montserrat, sans-serif;
        font-size: $fs-base;
        color: $color-chocolate;
    }

    .error {
      color: $color-red;
    }
</style>

<div class="content" class:error={error}>
    <slot></slot>
</div>
