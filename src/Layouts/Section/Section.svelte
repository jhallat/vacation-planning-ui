<script>
  import SectionHeading from "../../components/Headings/SectionHeading/SectionHeading.svelte";
  import Margin from "../Margin/Margin.svelte";

  export let heading;
</script>

<style lang="scss">
    @import '../../style/abstracts/variables';

    .section {
      margin: $space-medium;
    }

    .section__heading {
      margin-bottom: $space-medium;
    }
</style>

<div class="section">
    <div class="section__heading">
        <SectionHeading caption={heading}/>
    </div>
    <slot/>
</div>
