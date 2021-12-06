<template>
  <div
    v-show="isVisible"
    class="filter__range-block"
  >
    <p class="filter__range-label">
      {{ translate.price }}
    </p>
    <vue-slider 
      v-model="range" 
      :min="minPrice"
      :max="maxPrice"
      :enable-cross="false"
      :rail-style="{backgroundColor: 'rgb(234, 234, 234)'}"
      :process-style="{backgroundColor: 'rgb(126, 182, 33)'}"
      :style="{
        padding: '9px',
        width: 'auto',
        height: '5px'
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
            {{ translate.after }} 
          </span>
          <input
            v-model.number="range[0]"
            class="filter__range-input"
            type="number"
            :min="minPrice"
            :max="maxPrice"
          >
        </div> 
        <div class="filter__range-val">
          <span class="filter__range-span">
            {{ translate.before }} 
          </span>
          <input
            v-model.number="range[1]"
            class="filter__range-input"
            type="number"
            :min="minPrice"
            :max="maxPrice"
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
    name:       'LocationPrice',
    components: {
        VueSlider
    },
    props: {
        minPrice: Number,
        maxPrice: Number
    },
    data: () => ({
        range:     [20, 100],
        isVisible: false,
        translate: {},
    }),
    mounted() {
        const translater = this.$store.state.translater;
        const lang = this.$store.state.lang;

        this.translate.price = translater[lang].price;
        this.translate.after = translater[lang].from;
        this.translate.before = translater[lang].before;

        setTimeout(()=>{
            this.range = [
                this.$store.state.queryData.min_price,
                this.$store.state.queryData.max_price
            ];
            this.isVisible = true;    
        }, 700);
    }


};
</script>