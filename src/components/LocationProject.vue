<template>
  <div class="filter__control-block">
    <vSelect
      v-model="selected"
      :placeholder="placeholder"
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
        selected:    null,
        placeholder: null,
    }),
    watch: {
        projects: function () {
            const selectedUuid = this.$store.state.queryData.project;

            if (selectedUuid) {
                this.projects.forEach((project) => {
                    if (project.uuid === selectedUuid) {
                        this.selected = project;
                    }
                });
            }
        }
    },
    mounted() {
        const lang = this.$store.state.lang;

        this.placeholder = this.$store.state.translater[lang].project
    },
    methods: {
        clearSelected() {
            this.selected = null;
        }
    },
};
</script>