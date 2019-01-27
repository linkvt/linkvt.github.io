<template>
  <Home></Home>
</template>

<script>
import Home from "./pages/Home";

export default {
  components: { Home }
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

html,
body,
body > * {
  height: 100%;
}

body {
  background: linear-gradient(to right top, #5cbdaa 0%, #1b98e0 100%);
}
</style>
