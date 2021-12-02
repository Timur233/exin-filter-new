<template>
    <div class="filter__control-block">
        <vSelect placeholder="Район" v-model="selected" :options="['Canada', 'United States']"/>
    </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
    name: 'LocationArea',
    components: {
        vSelect
    },
};
</script>