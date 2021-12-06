<template>
  <div class="filter__checkboxes filter__types">
    <div
      v-for="type in types"
      :key="type.value"
      class="filter__checkbox"
    >
      <input
        :id="type.value"
        v-model="activeType"
        type="radio"
        :value="type.value"
      >
      <label
        :for="type.value"
        @click="selectType(type.value)"
      >{{ type.label[lang] }}</label>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LocationTypes',
    data: () => ({
        activeType: null,
        types:      [
            { label: {ru: 'Квартира', kk: 'Пәтер'}, value: '67a05dac-7e15-4fdd-848e-a36765fcac51' },
            { label: {ru: 'Коммерция', kk: 'Коммерция'}, value: '444a52f4-c677-4c63-8700-6461b1a52db4' },
        ],
        lang: 'ru',
    }),
    mounted() {
        this.activeType = this.$store.state.queryData.location_type;
        this.lang = this.$store.state.lang;
    },
    methods: {
        selectType: function (type) {
            this.activeType = type;
        }
    }


};
</script>