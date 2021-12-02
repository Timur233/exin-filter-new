<template>
  <div id="app">
    <section class="filter pr-pages">
      <div class="container">
        <div class="filter__block">
          <div class="filter__wrap">
            <LocationTypes />
            <RoomsCount />
            <div class="filter__ranges indent-block">
              <LocationPrice />
              <LocationArea />
            </div>
            <div class="filter__controls indent-block">
              <LocationDistrict />
              <LocationDistrict />
              <ControlButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RoomsCount from "./components/RoomsCount.vue";
import LocationTypes from "./components/LocationTypes.vue";
import LocationPrice from "./components/LocationPrice.vue";
import LocationArea from "./components/LocationArea.vue";
import LocationDistrict from "./components/LocationDistrict.vue";
import ControlButtons from "./components/ControlButtons.vue";
import "vue-slider-component/theme/default.css";

export default {
    name:       "App",
    components: {
        RoomsCount,
        LocationTypes,
        LocationPrice,
        LocationArea,
        LocationDistrict,
        ControlButtons,
    },
    data:    () => ({}),
    created: function () {
        this.$store.dispatch("getFilterData");
        this.$store.dispatch("getDistricts");

        console.log(this.$store.state.translater);
    },
};
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";
@import url("https://exin.kz/styles/main.min.css?v=1638183416");
</style>
