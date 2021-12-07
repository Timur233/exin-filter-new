<template>
  <div class="filter__collapse">
    <div class="filter__collapse-item">
      <p>Квартира</p> <button class="filter__collapse-btn" />
    </div>
  </div>
</template>

<script>
export default {
    name: "MobileFastFilter",
    data: () => ({
    }),
    methods: {
        toggleFilter() {
            this.isCollapse = !this.isCollapse;
            this.$emit('toggleFilter');
        },
    },
};
</script>