<script lang="ts">
  export let src;
  export let variant;
  export let animation;
</script>

<div class="bg-holder">
  <span
    class="background-image"
    style="background: url({src});
    background-position: 50% -21px;
    background-attachment: {variant};
    background-size: cover;
    "
  />
</div>

<style>
  .bg-holder {
    position: relative;
    top: 0;
    left: 0;
  }
  .background-image {
    position: absolute;
    width: 100vw;
    height: 100%;
    min-height: 700px;
    margin: 0;
    padding: 0;
    left: -20%;
    z-index: -1;
    top: -3em;
    padding: 3em 0em;
    animation: scale 30s linear infinite;
  }
  /* animation: loading 1.3s linear infinite; */
  /* } */

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes scale {
    0% {
      /* transform: scale(2, 2); */
      transform: skew(0deg, 0deg) scale(1.25, 1.25);
    }
    50% {
      /* transform: scale(2, 2); */
      transform: skew(8deg, 6deg) scale(1.15, 1.15);
    }
    100% {
      /* transform: scale(2, 2); */
      transform: skew(0deg, 0deg) scale(1.25, 1.25);
    }
  }
</style>
