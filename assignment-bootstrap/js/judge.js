//會放三個結構 data/methods/mounted
Vue.createApp({
    data() {
        return {
            suit: 'min',
            JudgeList: J_List,


        }
    }, //data
    methods: {

    }, //methods
    computed: {
        filterJList: function filterList() {
            if (this.suit == "min") { 
                return this.JudgeList.filter((item) => item.tag == "民事訴訟") 
            }
            else {
                return this.JudgeList.filter((item) => item.tag == "行政訴訟") 
            }

            return this.JudgeList
        }// filterList()
    }, //computed
    mounted: function () {
        console.log(this.text)
        // 適合初始化資料
    },
}).mount('.judge')