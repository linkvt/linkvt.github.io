<template>
  <a
    class="link"
    :href="link"
  >
    <font-awesome-icon
      class="icon"
      :icon="icon"
      size="lg"
    > </font-awesome-icon>
    <span class="icon-name">
      {{ name }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    icon: [String, Array],
    link: String,
    name: String
  }
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;

  margin: 0 0.2em;
  padding: 0.5em;

  border-radius: 2px;

  text-decoration: none;
  color: #222;

  &:hover {
    $bg-grey: 0;
    color: black;
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.icon {
  padding-right: 0.2em;
}
</style>
