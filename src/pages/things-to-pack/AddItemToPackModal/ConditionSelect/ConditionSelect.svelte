<script>
    import CheckBox from "../../../../components/CheckBox/CheckBox.svelte";
    import Label from "../../../../components/Label/Label.svelte";
    import Button from "../../../../components/Button/Button.svelte";
    import Input from "../../../../components/Input/Input.svelte";
    import {createEventDispatcher} from "svelte";
    import Row from "../../../../Layouts/Row/Row.svelte";

    const dispatch = createEventDispatcher();

    export let conditions = [];
    export let selectedConditions = [];
    export let disabled = false;
    let displayNewCondition = false;
    let newConditon = '';

    const handleNewConditionClick = () => {
      displayNewCondition = true;
    }

    const handleAddCondition = () => {
      dispatch('condition-created', newConditon);
      displayNewCondition = false;
    }

    const handleConditionChange = (event) => {
      const {checked, value} = event.detail;
      if (checked) {
        selectedConditions = [...selectedConditions, value];
      } else {
        selectedConditions = selectedConditions.filter(item => item.id !== value.id);
        console.log(selectedConditions);
      }
      dispatch('change', selectedConditions);
    }

    const isSelected = (value) => {
      console.log(selectedConditions);
      console.log(value);
      return selectedConditions.find(item => item.description === value.description) !== undefined;
    }
</script>

<style lang="scss">
    @import '../../../../main';

    .condition-select {
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      background-color: $color-neutral-1;
      border: 1px solid $color-chocolate;
      border-radius: 0.5rem;
      min-height: 10rem;
      gap: $space-small;
      padding: $space-small;
      &__input {
        animation-name: slide-in;
        animation-duration: 0.5s;
        transform-origin: top;
      }
      &__item {
        display: flex;
        flex-direction: row;
      }
      &--disabled {
        opacity: 50%;
      }
    }

    @keyframes slide-in {
        0% {
          transform: scaleY(0);
        }
        100% {
          transform: scaleY(100%);
        }
    }
</style>

<div class="condition-select" class:condition-select--disabled = {disabled}>
    {#each conditions as condition (condition.id)}
        <div class="condition-select__item">
            <CheckBox on:change={handleConditionChange}
                      value={condition}
                      checked={isSelected(condition)}
                      disabled={disabled}/>
            <Label value={condition.description}/>
        </div>
    {/each}
    {#if displayNewCondition}
        <div class="condition-select__input">
            <Input bind:value={newConditon} on:enter-clicked={handleAddCondition}/>
        </div>
    {/if}
    {#if !disabled}
        <Button label="Add New Condition" type='link' size='md' on:click={handleNewConditionClick}/>
    {/if}
</div>
