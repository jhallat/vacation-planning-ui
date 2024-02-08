<script>
  import PageTemplate from "../../Layouts/PageTemplate/PageTemplate.svelte";
  import BorderedTemplate from "../../Layouts/PageTemplate/BorderedTemplate/BorderedTemplate.svelte";
    import Button from "../../components/Button/Button.svelte";
  import {onMount} from "svelte";
  import CheckBox from "../../components/CheckBox/CheckBox.svelte";
  import ThingToPackModal from "./AddItemToPackModal/ThingToPackModal.svelte";
  import Amount from "./Amount/Amount.svelte";
  import Frequency from "./Frequency/Frequency.svelte";

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
    fetch("http://localhost:3000/api/v1/things-to-pack")
      .then(res => {
        if (!res.ok) {
          throw new Error("GET things-to-pack failed.")
        }
        return res.json();
      })
      .then(({data}) => {
        thingsToPack = data.thingsToPack;
        console.log(thingsToPack);
        isLoading = false;
      })
      .catch(err => {
        isLoading = false;
        console.log(err);
      })
    fetch("http://localhost:3000/api/v1/conditions")
      .then(res => {
        if (!res.ok) {
          throw new Error("GET conditions failed.")
        }
        return res.json();
      })
      .then(({data}) => {
        conditions = data.conditions;
        isLoading = false;
      })
      .catch(err => {
        isLoading = false;
        console.log(err);
      })
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

  const handleConditionCreated = (event) => {
    fetch('http://localhost:3000/api/v1/conditions', {
      method: 'POST',
      body: JSON.stringify({description : event.detail}),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      if (!res.ok) {
        throw new Error('Failed to put conditions')
      }
      return res.json();
    })
      .then(({data}) => {
        console.log(data);
        conditions = [...conditions, data.condition]
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleAddNewItem = (event) => {
    if (isNewItem) {
      fetch("http://localhost:3000/api/v1/things-to-pack", {
        method: 'POST',
        body: JSON.stringify(event.detail),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          throw new Error('Failed to put things-to-pack')
        }
        return res.json();
      })
        .then(({data}) => {
          thingsToPack = [...thingsToPack, data.thingsToPack];
        })
        .catch(err => {
            console.log(err);
          }
        );
    } else {
      fetch(`http://localhost:3000/api/v1/things-to-pack/${event.detail.id}`, {
        method: 'PUT',
        body: JSON.stringify(event.detail),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          throw new Error('Failed to put things-to-pack')
        }
        const  updated = [...thingsToPack];
        const index = updated.findIndex(item => item.id === event.detail.id);
        updated[index] = event.detail;
        thingsToPack = updated;
      })
        .catch(err => {
            console.log(err);
          }
        );
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
            <tr>
                <th></th>
                <th>What to Bring</th>
                <th>How Many to Bring</th>
                <th>When to Bring</th>
            </tr>
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
