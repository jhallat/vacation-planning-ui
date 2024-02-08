<script>
import Input from "../../../components/Input/Input.svelte";
import Modal from "../../../components/Modal/Modal.svelte";
import {createEventDispatcher} from "svelte";
import RadioButton from "../../../components/RadioButton/RadioButton.svelte";
import Label from "../../../components/Label/Label.svelte";
import Row from "../../../Layouts/Row/Row.svelte";
import Section from "../../../Layouts/Section/Section.svelte";
import ConditionSelect from "./ConditionSelect/ConditionSelect.svelte";

export let isNewItem = true;
export let conditions = [];
export let thingToPack = {
  id: '',
  description: '',
  amountType: 0,
  dayAmount: 0,
  extraAmount: 0,
  frequencyType: 0
}
const dispatch = createEventDispatcher();

const handleAddItem = () => {
  dispatch('add-item', thingToPack)
}

const handleSingleItemSelect = () => {
  thingToPack.amountType = 0;
}

const handleMultipleItemSelect = () => {
  thingToPack.amountType = 1;
}

const handleAlwaysSelect = () => {
  thingToPack.frequencyType = 0;
}

const handleConditionSelect = () => {
  thingToPack.frequencyType = 1;
}

const handleConditionCreated = (event) => {
  dispatch('condition-created', event.detail)
}

const handleConditionChange = (event) => {
  thingToPack.conditions = event.detail;
}

</script>
<Modal actionLabel={isNewItem ? "Add" : "Update"} on:cancel on:action={handleAddItem}>
    <Section heading="What to Bring">
        <Input label="Description" size='lg' bind:value={thingToPack.description}></Input>
    </Section>
    <Section heading="How Many to Bring">
        <Row>
            <RadioButton selected={thingToPack.amountType === 0} on:select={handleSingleItemSelect}/><Label value="Single Item"/>
        </Row>
        <Row>
            <RadioButton selected={thingToPack.amountType === 1} on:select={handleMultipleItemSelect}/>
            <Input size="xxxs" bind:value={thingToPack.dayAmount} disabled={thingToPack.amountType != 1}/>
            <Label value="For Each Day with" disabled={thingToPack.amountType != 1}/>
            <Input size="xxxs" bind:value={thingToPack.extraAmount} disabled={thingToPack.amountType != 1}/>
            <Label value="Extra" disabled={thingToPack.amountType != 1}/>
        </Row>
    </Section>
    <Section heading="When to Bring">
        <Row>
            <RadioButton selected={thingToPack.frequencyType === 0} on:select={handleAlwaysSelect}/>
            <Label value="Always Bring"/>
        </Row>
        <Row>
            <RadioButton selected={thingToPack.frequencyType === 1} on:select={handleConditionSelect}/>
            <Label value="Bring When"/>
        </Row>
        <ConditionSelect on:condition-created={handleConditionCreated}
                         on:change={handleConditionChange}
                         disabled={thingToPack.frequencyType !== 1}
                         conditions={conditions}
                         selectedConditions={thingToPack.conditions}/>
    </Section>
</Modal>
