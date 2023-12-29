<script>
  import PageTemplate from "../../components/Layouts/PageTemplate/PageTemplate.svelte";
  import BorderedTemplate from "../../components/Layouts/PageTemplate/BorderedTemplate/BorderedTemplate.svelte";
  import Row from "../../components/Layouts/Row/Row.svelte";
  import Button from "../../components/Button/Button.svelte";
  import { getThingsToPack } from "../../utilities/packing.js";
  import {onMount} from "svelte";
  import CheckBox from "../../components/CheckBox/CheckBox.svelte";
  import Modal from "../../components/Modal/Modal.svelte";

  let thingsToPack = [];
  let displayAddDialog = false;
  onMount(() => {
    thingsToPack = getThingsToPack();
  })

  const handleNewItem = () => {
    displayAddDialog = true;
  }

  const handleCancel = () => {
    displayAddDialog = false;
  }
</script>

<style lang="scss">
  @import "../../foundation/variables";

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
    {#if displayAddDialog}
        <Modal actionLabel="Add Item" on:cancel={handleCancel}></Modal>
    {/if}
    <Row>
        <Button label="Create New Item" size="lg" on:click={handleNewItem}/>
        <Button label="Delete Selected" size="lg"/>
    </Row>
    <table>
        <tr>
            <th></th>
            <th>What to Bring</th>
            <th>How Many to Bring</th>
            <th>When to Bring</th>
        </tr>
        <tbody>
        {#each thingsToPack as thingToPack}
            <tr>
                <td><CheckBox/></td>
                <td>{thingToPack.whatToBring}</td>
                <td>{thingToPack.howManyToBring}</td>
                <td>{thingToPack.whenToBring}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</BorderedTemplate>
</PageTemplate>
