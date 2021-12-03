<template>
  <div class="filter__control-block">
    <vSelect
      v-model="selected"
      placeholder="Жилой комплекс"
      label="name"
      :options="projects"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
    name:       'LocationProject',
    components: {
        vSelect
    },
    props: {
        projects: Array
    },
    data: () => ({
        selected: null
    }),
    methods: {
        clearSelected() {
            this.selected = null;
        }
    }
};
</script>