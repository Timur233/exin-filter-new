import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filterData: {
            finish_types_kz: '',
            finish_types_ru: '',
            max_area:        '',
            max_price:       '',
            min_area:        '',
            min_price:       '',
            districts:       [],
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
        }`)
    },
    mutations: {
        setFilterData (state, payload) {
            state.filterData = {...this.filterData, ...payload.filterData};
        },
        setDistricts (state, payload) {
            state.filterData.districts = payload.districts;
        },
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
                    throw new Error("Ошибка получения списка городов: ".concat(err.message))
                });

            fetch(
                'https://exin.kz/api/district/filter-data', {
                    headers: {
                        accept:        "application/json",
                        Authorization: "Bearer ".concat("aAOI5zskZ1XBssXpH0FIOIv2SFtPJwKg")
                    }
                }
            )
                .then(res=>res.json())
                .then((res) => {
                    this.commit('setDistricts', { districts: res });
                })
                .catch((err) => {
                    throw new Error("Ошибка получения конфигов фильтра: ".concat(err.message))
                });
        },
    },
    modules: {
    },
});
