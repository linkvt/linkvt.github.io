<template>
  <div class="links">
    <Link
      :icon="['fab', 'github']"
      name="Github"
      link="https://github.com/linkvt"
    />
    <Link
      :icon="['fab', 'linkedin']"
      name="LinkedIn"
      link="https://www.linkedin.com/in/vincent-link-72936a134/"
    />
    <Link
      :icon="['fab', 'xing']"
      name="Xing"
      link="https://www.xing.com/profile/Vincent_Link/"
    />
    <Link
      :icon="['far', 'envelope']"
      name="Mail"
      link="mailto:mail@linkvt.de"
    />
  </div>
</template>

<script>
import Link from "./Link";

export default {
  components: { Link }
};
</script>

<style lang="scss" scoped>
.links {
  display: flex;

  margin: 1em 0;
}
</style>
