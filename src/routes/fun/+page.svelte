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
    flex-direction: row;
    img {
      margin: 0 1rem;
    }
  }

  @media (max-width: 600px) {
    .content {
      flex-direction: column;
      align-items: center;
      img {
        margin: 1rem 0;
        width: 300px;
      }
    }
  }
</style>
