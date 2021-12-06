<template>
  <div class="filter__control-block filter__buttons">
    <button
      class="btn"
      @click="searchFilter"
    >
      {{ translate.find }}
    </button>
    <button
      class="btn discharge"
      @click="clearFilter"
    >
      {{ translate.clear }}
    </button>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
    name: "ControlButtons",
    data: () => ({
        translate: {}
    }),
    created() {
        const lang = this.$store.state.lang;

        this.translate.find = this.$store.state.translater[lang].find;
        this.translate.clear = this.$store.state.translater[lang].clear;
    },
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