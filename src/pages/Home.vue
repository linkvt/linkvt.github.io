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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
