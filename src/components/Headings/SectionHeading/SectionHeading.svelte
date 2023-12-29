<script>
    export let caption;
</script>

<style lang="scss">
    @import '../../../foundation/_variables.scss';

    .heading {
        font-family: Agbalumo;
        font-size: $fs-lg;
        color: $color-plum;
        margin: 0;
        padding: 0;
    }

    .underline {
      border-bottom: 1px solid $color-plum;
    }
</style>

<div class="underline">
<h3 class="heading">{caption}</h3>
</div>
