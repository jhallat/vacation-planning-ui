<script>
    export let caption;
</script>

<style lang="scss">
    @import '../../../style/abstracts/variables';

    .heading {
        font-family: Agbalumo;
        font-size: $fs-lg;
        color: $color-plum;
        margin: 0;
        padding: 0;
    }

    .heading__underline {
      border-bottom: 1px solid $color-plum;
    }
</style>

<div class="heading__underline">
<h3 class="heading">{caption}</h3>
</div>
