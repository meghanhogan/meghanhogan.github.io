<script lang="ts">
  import "../app.scss";
  let viewing: "home" | "fun" | "contact" = "home";
</script>

<h1>Hello 🦐</h1>
<div class="divider" />
<div class="tabs">
  <a href="/" class:active={viewing === "home"}>Home</a>
  <a href="/contact" class:active={viewing === "contact"}>Contact</a>
  <a href="/fun" class:active={viewing === "fun"}>🔮</a>
</div>

<slot />

<style lang="scss">
  .divider {
    border-bottom: 2px solid #2b4141;
    margin: 1rem 0;
  }
</style>
