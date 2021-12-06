<template>
  <div class="filter__block">
    <div class="filter__wrap">
      <LocationTypes ref="LocationTypes" />
      <RoomsCount ref="RoomsCount" />
      <div class="filter__ranges indent-block">
        <keep-alive>
          <LocationPrice
            ref="LocationPrice"
            :min-price="filterData.minPrice"
            :max-price="filterData.maxPrice"
          />
        </keep-alive>
        <keep-alive>
          <LocationArea
            ref="LocationArea"
            :min-area="filterData.minArea"
            :max-area="filterData.maxArea"
          />
        </keep-alive>
      </div>
      <div class="filter__controls indent-block">
        <LocationDistrict
          ref="LocationDistrict"
          :districts="[...filterData.districts]"
          @selectDistrict="selectDistrict($event)"
        />
        <LocationProject
          ref="LocationProject"
          :projects="[...filterProjectList]"
        />
        <ControlButtons @searchLocations="searchLocations" />
      </div>
    </div>
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
    created: function () {
        this.$store.dispatch('getQueryData');
        this.$store.dispatch("getFilterData");
    },
    mounted() {
        console.log(this.$refs.LocationTypes.activeType);
    },
    methods: {
        selectDistrict(obj) {
            this.selectedDistrict = obj ? obj.uuid : null;
            this.$refs.LocationProject.clearSelected();
        },
        searchLocations() {
            const filterParams = {
                location_type: this.$refs.LocationTypes.activeType || null,
                room_number:   this.$refs.RoomsCount.activeRoom || null,
                area_min:      this.$refs.LocationArea.range[0],
                area_max:      this.$refs.LocationArea.range[1],
                price_min:     this.$refs.LocationPrice.range[0],
                price_max:     this.$refs.LocationPrice.range[1],
                district:      this.$refs.LocationDistrict.selected ? this.$refs.LocationDistrict.selected.uuid : null,
                project:       this.$refs.LocationProject.selected ? this.$refs.LocationProject.selected.uuid : null,
            }
            const baseUrl = this.$store.state.baseUrl;
            const link = new URL(baseUrl);

            Object.keys(filterParams).forEach((key) => {
                if (filterParams[key]) {
                    link.searchParams.set(key, filterParams[key])
                }
            });

            document.location.href = link.href;
        }
    }
};
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";
@import url("https://exin.kz/styles/main.min.css?v=1638183416");
</style>
