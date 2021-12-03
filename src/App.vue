<template>
  <div
    id="app"
    style="height: 100%"
  >
    <section
      class="filter pr-pages"
      style="height: 100%"
    >
      <div class="container">
        <div class="filter__block">
          <div class="filter__wrap">
            <LocationTypes />
            <RoomsCount />
            <div class="filter__ranges indent-block">
              <keep-alive>
                <LocationPrice
                  :min-price="filterData.minPrice"
                  :max-price="filterData.maxPrice"
                />
              </keep-alive>
              <keep-alive>
                <LocationArea
                  :min-area="filterData.minArea"
                  :max-area="filterData.maxArea"
                />
              </keep-alive>
            </div>
            <div class="filter__controls indent-block">
              <LocationDistrict
                :districts="[...filterData.districts]"
                @selectDistrict="selectDistrict($event)"
              />
              <LocationProject
                ref="projects"
                :projects="[...filterProjectList]"
              />
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
import LocationProject from "./components/LocationProject.vue";
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
        LocationProject,
        ControlButtons,
    },
    data: () => ({
        selectedDistrict: null,
    }),
    computed: {
        filterData(){
            const filterData = this.$store.state.filterData;

            return {
                minArea:      filterData.min_area,
                maxArea:      filterData.max_area,
                minPrice:     filterData.min_price,
                maxPrice:     filterData.max_price,
                finishTypeRu: filterData.finish_types_kz,
                finishTypeKz: filterData.finish_types_ru,
                districts:    filterData.districts,
                projects:     filterData.projects
            }

        },
        filterProjectList () {
            const filterData = this.$store.state.filterData;
            let filteredData = [];
            const district = this.selectedDistrict;

            if (district === null) {
                return filterData.projects;
            }

            filteredData = [...filterData.projects].filter((project) => {
                return project.district == district
            });

            return filteredData;
        },
    },
    mounted: function () {
        this.$store.dispatch("getFilterData");
    },
    created: function () {
        this.$store.dispatch("getQueryData");
    },
    methods: {
        selectDistrict(obj) {
            this.selectedDistrict = obj ? obj.uuid : null;
            this.$refs.projects.clearSelected();
        }
    }
};
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";
@import url("https://exin.kz/styles/main.min.css?v=1638183416");
</style>
