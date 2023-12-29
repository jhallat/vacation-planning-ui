<script>
    import {fly} from 'svelte/transition';
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        background-color: #FFDED4;
        padding: 1.8rem;
        border-radius: 10px;
        box-shadow: 0.2rem 0.2rem 0.4rem rgba(0,0,0,55%);
    }
</style>

<div class="content">
    <slot></slot>
</div>
