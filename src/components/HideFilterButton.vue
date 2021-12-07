<template>
  <div class="filter__hide-block">
    <button
      class="filter__hide-btn"
      :class="{hidden: isCollapse}"
      @click="toggleFilter"
    >
      <span>{{ buttonLabel }}</span>
    </button>
  </div>
</template>

<script>
export default {
    name: "HideFilterButton",
    data: () => ({
        translate:  {},
        isCollapse: false,
    }),
    computed: {
        buttonLabel() {
            return this.isCollapse ? this.translate.expandFilter : this.translate.collapseFilter
        }
    },
    created() {
        const lang = this.$store.state.lang;

        this.translate.collapseFilter = this.$store.state.translater[lang].collapseFilter;
        this.translate.expandFilter = this.$store.state.translater[lang].expandFilter;
    },
    methods: {
        toggleFilter() {
            this.isCollapse = !this.isCollapse;
            this.$emit('toggleFilter');
        },
    },
};
</script>