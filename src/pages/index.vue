<template>
  <div>
    <nav :class="$style.nav">
      <h1 :class="$style.title">Amon Sawamura</h1>
      <ul :class="$style.link_list">
        <li :class="$style.link_item">
          <a :class="$style.link_link" href="https://twitter.com/amotarao"><FaIcon :icon="['fab', 'twitter']" /></a>
        </li>
        <li :class="$style.link_item">
          <a :class="$style.link_link" href="https://github.com/amotarao"><FaIcon :icon="['fab', 'github']" /></a>
        </li>
      </ul>
    </nav>
    <section :class="$style.section">
      <div :class="$style.board">ここになにか置きたい</div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" module>
$bg-line-color: #eee;
$bg-line-size: 24px;

.nav {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-areas: 'title link_list';
  grid-template-rows: auto;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  width: 100%;
  padding: 2rem 1rem;

  @include pc {
    gap: 2rem;
    padding: 2rem 4rem;
  }
}

.title {
  grid-area: title;
  align-self: flex-end;
  padding: 0.5rem 0;
  font-family: $urbanist;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.08em;

  @include pc {
    padding: 0.75rem 0;
    font-size: 2.5rem;
  }
}

.link_list {
  display: flex;
  grid-area: link_list;
  gap: 0.5rem;
  align-self: flex-end;
  justify-self: flex-end;
  list-style: none;

  @include pc {
    gap: 0.5rem;
  }
}

.link_item {
  //
}

.link_link {
  display: block;
  padding: 0.5rem;

  @include pc {
    padding: 0.75rem;
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    vertical-align: bottom;

    @include pc {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}

.section {
  display: grid;
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-image: repeating-linear-gradient(
      to right,
      $bg-line-color 0px,
      $bg-line-color 1px,
      transparent 1px,
      transparent $bg-line-size
    ),
    repeating-linear-gradient(
      to bottom,
      $bg-line-color 0px,
      $bg-line-color 1px,
      transparent 1px,
      transparent $bg-line-size
    );

  @include pc {
    padding: 2rem 4rem;
  }
}

.board {
  display: grid;
  place-items: center;
  align-self: stretch;
  justify-self: stretch;
  height: 100%;
  font-family: $zen-kaku-gothic-new;
  font-size: 0.8rem;
  color: #999;
  letter-spacing: 0.12em;
}
</style>
