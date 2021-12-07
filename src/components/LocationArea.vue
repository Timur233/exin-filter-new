<template>
  <div
    v-show="isVisible"
    class="filter__range-block"
  >
    <p class="filter__range-label">
      {{ translate.area }}
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
          <span class="filter__range-span">
            {{ translate.before }} 
          </span>
          <input
            v-model.number="range[0]"
            class="filter__range-input"
            type="number"
            :min="minArea"
            :max="maxArea"
          >
        </div> 
        <div class="filter__range-val">
          <span class="filter__range-span">
            {{ translate.from }} 
          </span>
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
        minArea: {
            type:    Number,
            default: -1000000,
        },
        maxArea: {
            type:    Number,
            default: 1000000
        }
    },
    data: () => ({
        range:     [50, 98],
        isVisible: false,
        translate: {},
    }),
    mounted() {
        const translater = this.$store.state.translater;
        const lang = this.$store.state.lang;

        this.translate.area = translater[lang].area;
        this.translate.from = translater[lang].from;
        this.translate.before = translater[lang].before;

        setTimeout(()=>{
            this.range = [
                this.$store.state.queryData.min_area + 1,
                this.$store.state.queryData.max_area - 1
            ];
            this.isVisible = true;
        }, 200);
    },
    methods: {
        setRange(pos, event) {
            const val = event.target.value;

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
