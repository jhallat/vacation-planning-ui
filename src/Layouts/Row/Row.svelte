<style lang="scss">
    @import "../../main";

    .row {
        max-width: $grid-width;
        display: flex;
        flex-direction: row;
        column-gap: $space-xsmall;
        align-items: center;
        margin: 0 auto;
        &:not(:last-child) {
          margin-bottom: $grid-gap-vertical;
        }
      @include clearfix;
    }
</style>

<div class="row">
    <slot></slot>
</div>
