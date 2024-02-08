<script>
    export let caption;
</script>

<style lang="scss">
  @import '../../../style/abstracts/variables';
    h2 {
        font-family: Agbalumo;
        color: transparent;
        padding: 0rem;
        margin: 0;
        font-size: $fs-xxl;
        background-image: linear-gradient(to right, $color-plum, $color-plum-light);
        background-clip: text;
        display: inline-block;
    }

    div {
        border-top: solid 4px #8C5D73;
        border-bottom: solid 4px #8C5D73;
        padding: 0.5rem;
        background-color: #FFFDFA;
    }
</style>

<div>
    <h2>{caption}</h2>
</div>
