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
        baseUrl:    null,
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
        },
        setBaseUrl (state, payload) {
            state.baseUrl = payload;
        }
    },
    actions: {
        getFilterData (getQueryData) {
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
                    this.dispatch('getQueryData');
                })
                .catch((err) => {
                    throw new Error("Ошибка получения конфигов фильтра: ".concat(err.message))
                });
        },
        getQueryData () {
            const link = new URL(document.URL);
            const baseUrl = link.href.split('?')[0];
            const query = {
                location_type: link.searchParams.get('location_type'),
                room_number:   link.searchParams.get('room_number'),
                max_area:      Number(link.searchParams.get('area_max') || this.state.filterData.max_area),
                max_price:     Number(link.searchParams.get('price_max') || this.state.filterData.max_price),
                min_area:      Number(link.searchParams.get('area_min') || this.state.filterData.min_area),
                min_price:     Number(link.searchParams.get('price_min') || this.state.filterData.min_price),
                district:      link.searchParams.get('district'),
                project:       link.searchParams.get('project'),
            }

            this.commit('setQueryData', query);
            this.commit('setBaseUrl', baseUrl)
        }
    },
    modules: {
    },
});
