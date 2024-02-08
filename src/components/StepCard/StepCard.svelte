<script>
  import SectionHeading from "../Headings/SectionHeading/SectionHeading.svelte";
  import ImageBlock from "./ImageBlock/ImageBlock.svelte";
  import Margin from "../../Layouts/Margin/Margin.svelte";

  export let caption;
  export let image="things_to_pack_preview.png"
</script>

<style lang="scss">
    @import '../../style/abstracts/variables';

    .step-card {
        width: 440px;
        padding: 1.2rem;
        cursor: pointer;
        border-radius: 0.5rem;
        &:hover {
            backdrop-filter: brightness(105%);
            box-shadow: $shadow;
        }
        &__body {
          display: flex;
          flex-direction: row;
          font-family: Montserrat, sans-serif;
          align-items: center;
        }
    }
</style>

<div class="step-card" on:click>
    <SectionHeading caption={caption}></SectionHeading>
    <div class="step-card__body">
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
