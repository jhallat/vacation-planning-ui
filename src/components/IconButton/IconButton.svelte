<script>
    export let iconSrc;
</script>

<style>
    .content img{
        width: 3rem;
        height: 3rem;
        border-radius: 10px;
      &:hover {
          background-color: rgba(255,255,255,0.4);
      }
      &:active {
          transform: translateX(1px) translateY(1px);
      }
    }

</style>

<div class="content">
    <img src={iconSrc} alt="home" on:click>
</div>
