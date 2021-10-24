<template>
  <div>
    <section :class="$style.section">
      <h1 :class="$style.title">Amon Sawamura</h1>
      <div :class="$style.image">ここになにか置きたい</div>
      <ul :class="$style.link_list">
        <li :class="$style.link_item">
          <a :class="$style.link_link" href="https://twitter.com/amotarao"><FaIcon :icon="['fab', 'twitter']" /></a>
        </li>
        <li :class="$style.link_item">
          <a :class="$style.link_link" href="http://github.com/amotarao"><FaIcon :icon="['fab', 'github']" /></a>
        </li>
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
  grid-template-areas:
    'image image'
    'title link_list';
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
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

.image {
  display: grid;
  grid-area: image;
  place-items: center;
  align-self: stretch;
  justify-self: stretch;
  font-family: $zen-kaku-gothic-new;
  font-size: 0.8rem;
  color: #999;
  letter-spacing: 0.12em;
  border: dashed 2px #999;
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

.link_itrem {
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
</style>
