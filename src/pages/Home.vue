<template>
  <div class="content">
    <Profile></Profile>
  </div>
</template>

<script>
import Profile from "../components/Profile";

export default {
  components: { Profile }
};
</script>

<style lang="scss">
.content {
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
