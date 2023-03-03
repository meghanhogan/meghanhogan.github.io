<script lang="ts">
  import polaroid1 from "$lib/images/polaroid1.jpg";
  import polaroid2 from "$lib/images/polaroid2.jpg";
  import polaroid3 from "$lib/images/polaroid3.jpg";
  import polaroid4 from "$lib/images/polaroid4.jpg";
  import flowers from "$lib/images/flowers.png";

  $: photostack = [
    { src: flowers, alt: "flowers", width: 600 },
    { src: polaroid1, alt: "me" },
    { src: polaroid4, alt: "neon sign" },
    { src: polaroid2, alt: "me sideways" },
    { src: polaroid3, alt: "me side" },
  ];

  const onNextPhoto = () => {
    // @ts-ignore
    photostack.push(photostack.shift());
    photostack = photostack;
  };
</script>

<div class="content">
  <div class="text">
    My name is Meghan. I'm an engineer living in New York.
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="photo-stack" on:click={onNextPhoto}>
    {#each photostack as photo}
      <img
        class="stack"
        width={photo.width || 300}
        src={photo.src}
        alt={photo.alt}
        style={`
          transform: rotate(${(Math.random() - 0.5) * 20}deg);
          z-index: ${photostack.length - photostack.indexOf(photo)};
        `}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .content {
    padding: 1rem;
    .photo-stack {
      margin: auto;
      position: relative;
      display: flex;
      justify-content: center;
      cursor: pointer;
      img {
        margin-top: 3rem;
        &.stack {
          position: absolute;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .content {
      .photo-stack {
        margin-top: 1em;
        img {
          margin: 1rem 0;
          width: 300px;
        }
      }
    }
  }
</style>
