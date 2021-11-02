//會放三個結構 data/methods/mounted
Vue.createApp({
    data() {
        return {
            type: 'history',
            TList: TimeLine,


        }
    }, //data
    methods: {

    }, //methods
    computed: {
        filterTList: function filterList() {
            if (this.type == "history") { 
                return this.TList.filter((item) => item.tag == "history") 
            }
            else {
                return this.TList.filter((item) => item.tag == "town") 
            }

        }// filterList()
    }, //computed
    mounted: function () {
        console.log(this.type)
        // 適合初始化資料
    },
}).mount('.timeline')