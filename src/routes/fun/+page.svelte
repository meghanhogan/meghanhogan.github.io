<script lang="ts">
  import frances from "$lib/images/frances.jpeg";
  import kiki from "$lib/images/kiki.jpg";
</script>

<div class="content">
  <img width="400" src={frances} alt="frances" />
  <img width="400" src={kiki} alt="kiki" />
</div>

<style lang="scss">
  .content {
    padding: 1rem;
    display: flex;
    justify-content: center;
    img {
      margin: 0 1rem;
    }
  }
</style>
