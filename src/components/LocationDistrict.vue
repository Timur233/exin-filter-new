<template>
  <div class="filter__control-block">
    <vSelect
      v-model="selected"
      placeholder="Район"
      label="name"
      :options="districts"
      @input="changeDistrict"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
    name:       'LocationArea',
    components: {
        vSelect
    },
    props: {
        districts: Array
    },
    data: () => ({
        selected: null
    }),
    watch: {
        districts: function () {
            const selectedUuid = this.$store.state.queryData.district;

            if (selectedUuid) {
                this.districts.forEach((district) => {
                    if (district.uuid === selectedUuid) {
                        this.selected = district;
                    }
                });
            }
        }
    },
    methods: {
        changeDistrict(val) {
            this.$emit('selectDistrict', val)
        }
    }
};
</script>