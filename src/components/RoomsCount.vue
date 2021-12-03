<template>
  <div class="filter__checkboxes filter__rooms">
    <div
      v-for="room in rooms"
      :key="room.value"
      class="filter__checkbox"
    >
      <input
        v-model="activeRoom"
        type="radio"
        :value="room.value"
      >
      <label
        :for="room.value"
        @click="selectRoom(room.value)"
      >{{ room.number }}</label>
    </div>
  </div>
</template>

<script>
export default {
    name: 'RoomsCount',

    data: () => ({
        activeRoom: null,
        rooms:      [
            { number: '1', value: '1' },
            { number: '1-2', value: '1-2' },
            { number: '2', value: '2' },
            { number: '2-3', value: '2-3' },
            { number: '3', value: '3' },
            { number: '3-4', value: '3-4' },
            { number: '4', value: '4' },
            { number: '5+', value: '5' }
        ]
    }),
    mounted() {
        this.activeRoom = this.$store.state.queryData.room_number
    },
    methods: {
        selectRoom: function (room) {
            this.activeRoom = room;
        }
    }


};
</script>