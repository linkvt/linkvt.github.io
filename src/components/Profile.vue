<template>
  <section class="profile">
    <img
      class="profile-picture"
      src="../assets/profile.jpg"
    />
    <div class="name">
      Vincent Link
    </div>
    <div class="title">
      IT Architect & Software Engineer
    </div>
    <Links class="links"></Links>
  </section>
</template>

<script>
import Links from "./Links";

export default {
  components: { Links }
};
</script>

<style lang="scss" scoped>
.profile {
  display: grid;
  justify-items: center;

  .profile-picture {
    height: 15em;
    border-radius: 10em;
    margin: 1.5em 0;
  }

  .name {
    font-size: 3em;
    font-weight: bold;
  }

  .title {
    font-size: 1.5em;
  }

  .links {
    margin: 2em 0;
  }
}
</style>
