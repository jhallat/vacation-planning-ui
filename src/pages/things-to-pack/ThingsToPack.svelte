<script>
  import PageTemplate from "../../Layouts/PageTemplate/PageTemplate.svelte";
  import BorderedTemplate from "../../Layouts/PageTemplate/BorderedTemplate/BorderedTemplate.svelte";
    import Button from "../../components/Button/Button.svelte";
  import {onMount} from "svelte";
  import CheckBox from "../../components/CheckBox/CheckBox.svelte";
  import ThingToPackModal from "./AddItemToPackModal/ThingToPackModal.svelte";
  import Amount from "./Amount/Amount.svelte";
  import Frequency from "./Frequency/Frequency.svelte";
  import {getThingsToPack, createThingToPack, updateThingToPack} from "../../services/ThingsToPackService.js";
  import {getConditions, createCondition} from "../../services/ConditionService.js";

  let thingsToPack = [];
  let conditions = [];
  let isLoading = false;
  let displayDialog = false;
  let isNewItem = true;
  let currentThingToPack = {
    id: '',
    description: '',
    amountType: 0,
    dayAmount: 0,
    extraAmount: 0,
    frequencyType: 0
  }

  isLoading = true;

  onMount(() => {
    isLoading = true;
    getThingsToPack().then((thingsToPackData) => {
      console.log(thingsToPackData);
      thingsToPack = thingsToPackData;
      getConditions().then((conditionsData) => {
        conditions = conditionsData;
      }).catch((err) => {
        isLoading = false;
        console.log(err);
      });
      isLoading = false;
    }).catch((err) => {
      isLoading = false;
      console.log(err);
    });
  });

  const handleNewItem = () => {
    isNewItem = true;
    displayDialog = true;
  }

  const handleCancel = () => {
    displayDialog = false;
  }

  const handleEditItem = (event) => {
    currentThingToPack = thingsToPack.find(item => item.id === event.detail);
    isNewItem = false;
    displayDialog = true;
  }

  const handleConditionCreated = ({detail}) => {
    createCondition({description : detail}).then((newCondtion) => {
      conditions = [...conditions, newCondtion];
    }).catch(err => {
      console.log(err);
    });
  }

  const handleAddNewItem = ({detail}) => {
    if (isNewItem) {
      createThingToPack(detail).then(newThingToPack => {
        thingsToPack = [...thingsToPack, newThingToPack];
        console.log(thingsToPack);
      }).catch(err => {
        console.log(err);
      });
    } else {
      updateThingToPack(detail.id, detail).then(updatedThingToPack => {
        const updated = [...thingsToPack];
        const index = updated.findIndex(item => item.id === detail.id);
        updated[index] = updatedThingToPack;
        thingsToPack = updated;
      }).catch(err => {
        console.log(err);
      });
    }

    displayDialog = false;

  }


</script>

<style lang="scss">
  @import "../../style/abstracts/variables";

  .things-to-pack__button-bar {
    display: flex;
    flex-direction: row;
    gap: $space-medium;
    padding: $space-medium;
  }

  table {
    font-family: $ff-base;
    font-size: $fs-base;
    border-collapse: collapse;
  }

  thead {
    display: block;
  }
  tbody {
    display: block;
    overflow-y: scroll;
    height: 70vh;
    width: 50vw;
  }

  th {
    padding: $space-medium;
  }

  td {
    padding: $space-medium;
    cursor: default;
  }

  td:first-child {
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
  }

  td:last-child {
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }

  tbody tr {
    &:hover {
      background-color: $color-peach;
    }
  }
</style>

<PageTemplate name="Things to Pack">
    <BorderedTemplate>
        {#if displayDialog}
            <ThingToPackModal
                    conditions={conditions}
                    thingToPack={currentThingToPack}
                    isNewItem={isNewItem}
                    on:cancel={handleCancel}
                    on:add-item={handleAddNewItem}
                    on:condition-created={handleConditionCreated}></ThingToPackModal>
        {/if}
        <div class="things-to-pack__button-bar">
            <Button label="Create New Item" size="lg" on:click={handleNewItem}/>
            <Button label="Delete Selected" size="lg"/>
        </div>
        {#if isLoading}
            <p>...Loading</p>
        {:else}
        <table>
            <thead>
            <tr>
                <th></th>
                <th>What to Bring</th>
                <th>How Many to Bring</th>
                <th>When to Bring</th>
            </tr>
            </thead>
            <tbody>
            {#each thingsToPack as thingToPack (thingToPack.id)}
                <tr>
                    <td><CheckBox/></td>
                    <td><Button type="link"
                                label={thingToPack.description}
                                key={thingToPack.id}
                                on:click={handleEditItem}/></td>
                    <td>
                    <Amount
                        amountType={thingToPack.amountType}
                        dayAmount={thingToPack.dayAmount}
                        extraAmount={thingToPack.extraAmount}
                    ></Amount>
                    </td>
                    <td>
                        <Frequency
                            frequencyType={thingToPack.frequencyType}
                            conditions={thingToPack.conditions}>
                        </Frequency>
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
        {/if}
    </BorderedTemplate>
</PageTemplate>
