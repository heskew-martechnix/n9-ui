<template>
  <MdCard class="md-card-nav-tabs">
    <MdCardContent>
      <slot name="content" />
    </MdCardContent>
  </MdCard>
</template>

<script>
export default {
  name: "NavTabsCard"
};
</script>
