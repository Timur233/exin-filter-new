<template>
    <div class="filter__checkboxes filter__types">
        <div v-for="type in types" :key="type.value" class="filter__checkbox">
            <input :id="type.value" type="radio" :value="type.value" v-model="activeType">
            <label :for="type.value" @click="selectType(type.value)">{{ type.label }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LocationTypes',
    data: () => ({
        activeType: '',
        types: [
            { label: 'Квартира', value: '67a05dac-7e15-4fdd-848e-a36765fcac51' },
            { label: 'Коммерция', value: '444a52f4-c677-4c63-8700-6461b1a52db4' },
        ]
    }),
    methods: {
      selectType: function (type) {
        this.activeType = type;
      }
    }


};
</script>