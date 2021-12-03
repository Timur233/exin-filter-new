import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filterData: {
            finish_types_kz: null,
            finish_types_ru: null,
            max_area:        null,
            max_price:       null,
            min_area:        null,
            min_price:       null,
            districts:       null,
            projects:        null,
        },
        queryData: {
            location_type: null,
            room_number:   null,
            max_area:      null,
            max_price:     null,
            min_area:      null,
            min_price:     null,
            district:      null,
            project:       null,
        },
        translater: JSON.parse(`{
          "ru":{
              "price":"Стоимость, млн. тг",
              "area":"Площадь, м²",
              "floor":"Этаж",
              "rooms":"комн.",
              "district":"Район",
              "finishing":"Отделка",
              "from":"от",
              "before":"до",
              "collapseFilter":"Свернуть фильтр",
              "expandFilter":"Развернуть фильтр",
              "find":"Найти",
              "clear":"Сбросить"
            },
            "kz":{
                "price":"Құны, млн тг",
                "area":"Шаршы, м²",
                "floor":"Қабат",
                "rooms":"бөлм",
                "district":"Ауданы",
                "finishing":"Әрлеу",
                "from":"бастап",
                "before":"дейін",
                "collapseFilter":"Сүзгіні жию",
                "expandFilter":"Кеңейту сүзгісі",
                "find":"Табу",
                "clear":"Шығарып тастау"
            }
        }`),
    },
    mutations: {
        setFilterData (state, payload) {
            state.filterData = {...state.filterData, ...payload.filterData};
        },
        setQueryData (state, payload) {
            state.queryData = payload;
        }
    },
    actions: {
        getFilterData () {
            fetch(
                'https://exin.kz/api/locations/filter-data', {
                    headers: {
                        accept:        "application/json",
                        Authorization: "Bearer ".concat("aAOI5zskZ1XBssXpH0FIOIv2SFtPJwKg")
                    }
                }
            )
                .then(res=>res.json())
                .then((res) => {
                    this.commit('setFilterData', { filterData: res });
                })
                .catch((err) => {
                    throw new Error("Ошибка получения конфигов фильтра: ".concat(err.message))
                });
        },
        getQueryData () {
            const link = new URL(document.URL);
            const query = {
                location_type: link.searchParams.get('location_type'),
                room_number:   link.searchParams.get('room_number'),
                max_area:      link.searchParams.get('area_max'),
                max_price:     link.searchParams.get('price_max'),
                min_area:      link.searchParams.get('area_min'),
                min_price:     link.searchParams.get('price_min'),
                district:      link.searchParams.get('district'),
                project:       link.searchParams.get('project'),
            }

            this.commit('setQueryData', query);
        }
    },
    modules: {
    },
});
