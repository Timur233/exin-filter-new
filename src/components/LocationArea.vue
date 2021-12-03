<template>
  <div class="filter__range-block">
    <p class="filter__range-label">
      Площадь, м²
    </p>
    <vue-slider
      v-model="range"
      :min="minArea"
      :max="maxArea"
      :enable-cross="false"
      :rail-style="{ backgroundColor: 'rgb(234, 234, 234)' }"
      :process-style="{ backgroundColor: 'rgb(126, 182, 33)' }"
      :style="{
        padding: '9px',
        width: 'auto',
        height: '5px',
      }"
      :dot-style="{
        width: '18px',
        height: '18px',
      }"
      :dot-size="18"
      :duration="0"
    />
    <template>
      <div class="filter__range-val-block">
        <div class="filter__range-val">
          от 
          <input
            v-model.number="range[0]"
            class="filter__range-input"
            type="number"
            :min="minArea"
            :max="maxArea"
          >
        </div> 
        <div class="filter__range-val">
          до 
          <input
            v-model.number="range[1]"
            class="filter__range-input"
            type="number"
            :min="minArea"
            :max="maxArea"
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
    name:       "LocationArea",
    components: {
        VueSlider,
    },
    props: {
        minArea: Number,
        maxArea: Number
    },
    data: () => ({
        range: [50, 98],
    }),
    mounted() {
        this.range = [
            this.$store.state.queryData.min_area,
            this.$store.state.queryData.max_area
        ]
    },
    methods: {
        setRange(pos, event) {
            const val = event.target.value;

            console.log(this.range);

            if (val <= this.min) {
                return (this.range[pos] = this.min);
            }

            if (val >= this.max) {
                return (this.range[pos] = this.max);
            }

            return (this.range[pos] = event.target.value * 1);
        },
    },
};
</script>
