<script>
  import SideImage from "./SideImage/SideImage.svelte";
  import SideNavigation from "./SideNavigation/SideNavigation.svelte";
</script>

<style>

    .page {
        position: absolute;
        top: 153px;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }


    .left-border {
    }

    .contents {
       padding: 5px;
       height: 100%;
        width: 100%;
    }
</style>

<div class="page">
<SideNavigation></SideNavigation>
<div class="contents">
    <slot></slot>
</div>
    <SideImage position="2"></SideImage>
</div>
