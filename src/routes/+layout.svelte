<script lang="ts">
  import "../app.scss";
  let viewing: "home" | "fun" | "contact" = "home";
</script>

<div>
  <div>
    <a href="/">Hello</a> 🦐
    <a href="/contact" class:active={viewing === "contact"}>Contact</a
    >
    🫒
    <a href="/fun" class:active={viewing === "fun"}>pix</a> 🔮
  </div>
  <div class="divider" />
</div>

<slot />

<style lang="scss">
  a {
    font-size: 20px;
  }
  .divider {
    border-bottom: 2px solid #2b4141;
    margin: 1rem 0;
  }
</style>
