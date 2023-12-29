<script>
  import SectionHeading from "../Headings/SectionHeading/SectionHeading.svelte";
  import ImageBlock from "./ImageBlock/ImageBlock.svelte";
  import Margin from "../Layouts/Margin/Margin.svelte";

  export let caption;
  export let image="things_to_pack_preview.png"
</script>

<style>
    .content {
        width: 440px;
        padding: 1.2rem;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background: rgba(255,255,255,0.5);
        }
    }

    .body {
        display: flex;
        flex-direction: row;
        font-family: Montserrat, sans-serif;
        align-items: center;
    }
</style>

<div class="content" on:click>
    <SectionHeading caption={caption}></SectionHeading>
    <div class="body">
    <Margin>
        <ImageBlock src={image}></ImageBlock>
    </Margin>
    <div>
        <Margin>
         <slot></slot>
        </Margin>
    </div>
    </div>
</div>
