<template>
  <div class="filter__control-block filter__buttons">
    <button
      class="btn"
      @click="searchFilter"
    >
      Найти
    </button>
    <button
      class="btn discharge"
      @click="clearFilter"
    >
      Сбросить
    </button>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
    name:    "ControlButtons",
    methods: {
        clearFilter() {
            const baseUrl = this.$store.state.baseUrl;

            document.location.href = baseUrl;
        },
        searchFilter() {
            this.$emit('searchLocations');
        }
    },
};
</script>