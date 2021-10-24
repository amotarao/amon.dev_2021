<template>
  <div>
    <section :class="$style.section">
      <h1 :class="$style.title">Amon Sawamura</h1>
      <ul :class="$style.link_list">
        <li><a href="https://twitter.com/amotarao">Twitter</a></li>
        <li><a href="http://github.com/amotarao">GitHub</a></li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" module>
.section {
  display: grid;
  grid-template-areas: 'title link_list';
  width: 100vw;
  height: 100vh;
  padding: 1em;

  @include pc {
    padding: 2em 4em;
  }
}

.title {
  grid-area: title;
  align-self: flex-end;
  font-family: $urbanist;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.08em;
}

.link_list {
  grid-area: link_list;
  align-self: flex-end;
  justify-self: flex-end;
  list-style: none;
}
</style>
