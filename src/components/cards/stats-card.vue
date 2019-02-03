<template>
  <MdCard class="md-card-stats">
    <MdCardHeader :data-background-color="dataBackgroundColor">
      <slot name="header" />
    </MdCardHeader>

    <MdCardContent>
      <slot name="content" />
    </MdCardContent>

    <MdCardActions md-alignment="left">
      <slot name="footer" />
    </MdCardActions>
  </MdCard>
</template>
<script>
export default {
  name: "StatsCard",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
