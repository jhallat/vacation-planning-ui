<script>
  import PageTemplate from "../../Layouts/PageTemplate/PageTemplate.svelte";
  import StepCard from "../../components/StepCard/StepCard.svelte";
  import Dialog from "../../Layouts/Dialog/Dialog.svelte";
  import Row from "../../Layouts/Row/Row.svelte";
  import {goto} from "$app/navigation";

  const handleStepOne = () => {
    goto("/things-to-pack");
  }
</script>

<style lang="scss">
    @import "../../style/abstracts/variables";

    .page {
        background-image: url("../../images/vacation-planning.jpeg");
        background-size: cover;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        position: absolute;
        font-size: $fs-base;
        color: $color-chocolate;
    }

    .page__dialog {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        animation-name: moveInLeft;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        backface-visibility: hidden;
        animation-delay: 0.5s;
        animation-fill-mode: backwards;
        /*  animation-iteration-count: 3
        */
    }

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-800px) translateY(-50%);
        }

        /*50% {
            transform: rotate(180deg);
        }*/

        80% {
            transform: translateX(-40%) translateY(-50%);
        }

        100% {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%);
        }
    }
</style>

<PageTemplate name="Let's Get Started !!!">
    <div class="page">
    <div class="page__dialog">
    <Dialog>
        <Row>
        <StepCard caption = "Step 1. Things to Pack"
                  image="things_to_pack_preview.png"
                  on:click={handleStepOne}>
            <p>Make a list of the things you usually take with you.</p>
        </StepCard>
        <StepCard caption = "Step 2. Things to Do"
                  image="things_to_do_preview.png">
            <p>Make a list of the things you need to do before you leave.</p>
        </StepCard>
        </Row>
        <Row>
            <StepCard caption = "Step 3. Create an Itinerary"
                      image="itenerary_preview.png">
               <div>Where are you going?</div>
               <div>When will you go?</div>
               <div>How will you get there?</div>
            </StepCard>
            <StepCard caption = "Step 4. Generate a Plan"
                      image="vacationplan_preview.png">
                <p>Generate your plan</p>
            </StepCard>
        </Row>
    </Dialog>
    </div>
    </div>
</PageTemplate>
