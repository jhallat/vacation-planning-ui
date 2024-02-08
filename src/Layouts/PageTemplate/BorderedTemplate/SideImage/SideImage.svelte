<script>
    export let position = 0;

    $: idName = `image-${position}`;

</script>

<style lang="scss">

    .content img {
        width: 200px;
        object-fit: cover;
        height: 100%;
    }

    @for $i from 0 to 20 {
      #image-#{$i} {
         object-position: $i * 5%;
    }
    }
</style>

<div class="content">
    <img id={idName} src="vacation-planning.jpeg">
</div>

