var mydata = [
    {name: '北京', value: 181,index: 1}, {name: '天津', value: 41,index: 2},
    {name: '上海', value: 156,index: 3}, {name: '重庆', value: 258,index: 4},
    {name: '河北', value: 109,index: 5}, {name: '河南', value: 488,index: 6},
    {name: '云南', value: 102,index: 7}, {name: '辽宁', value: 63,index: 8},
    {name: '黑龙江', value: 91,index: 9}, {name: '湖南', value: 455,index: 10},
    {name: '安徽', value: 335,index: 11}, {name: '山东', value: 225,index: 12},
    {name: '新疆', value: 21,index: 13}, {name: '江苏', value: 230,index: 14},
    {name: '浙江', value: 639,index: 15}, {name: '江西', value: 324,index: 16},
    {name: '湖北', value: 8601,index: 17}, {name: '广西', value: 127,index: 18},
    {name: '甘肃', value: 49,index: 19}, {name: '山西', value: 55,index: 20},
    {name: '内蒙古', value: 26,index: 21}, {name: '陕西', value: 102,index: 22},
    {name: '吉林', value: 22,index: 23}, {name: '福建', value: 179,index: 24},
    {name: '贵州', value: 44,index: 25}, {name: '广东', value: 649,index: 26},
    {name: '青海', value: 11,index: 27}, {name: '西藏', value: 1,index: 28},
    {name: '四川', value: 228,index: 29}, {name: '宁夏', value: 28,index: 30},
    {name: '海南', value: 64,index: 31}, {name: '台湾', value: 89,index: 32},
    {name: '香港', value: 44,index: 33}, {name: '澳门', value: 32,index: 34}
];
var myChart = echarts.init(document.getElementById('maps'));
var optionMap = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '现有确诊',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        //trigger: 'item',
        //triggerOn: 'click',
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'center',
        splitList: [
            {start: 10000}, {start: 1000, end: 9999},
            {start: 100, end: 999}, {start: 10, end: 99},
            {start: 1, end: 9}, {start: 0, end: 0},
        ],
        color: ['#611931', '#A40D14', '#D30910', '#F99C48', '#FFC4A7', '#FFFFFF']
    },

    //配置属性
    series: [{
        name: '确诊人数：',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
            normal: {
                show: true  //省份名称
            },
            emphasis: {
                show: true
            }
        },
        data: mydata  //数据
    }]
};
myChart.setOption(optionMap);
myChart.on('click',function(params)
{
    window.location.href="detail.html?province="+params.data.index;
});
function past() {
    var mydata = [
        {name: '北京', value: 191,index: 1}, {name: '天津', value: 50,index: 2},
        {name: '上海', value: 167,index: 3}, {name: '重庆', value: 262,index: 4},
        {name: '河北', value: 69,index: 5}, {name: '河南', value: 493,index: 6},
        {name: '云南', value: 111,index: 7}, {name: '辽宁', value: 68,index: 8},
        {name: '黑龙江', value: 94,index: 9}, {name: '湖南', value: 463,index: 10},
        {name: '安徽', value: 339,index: 11}, {name: '山东', value: 248,index: 12},
        {name: '新疆', value: 24,index: 13}, {name: '江苏', value: 236,index: 14},
        {name: '浙江', value: 661,index: 15}, {name: '江西', value: 334,index: 16},
        {name: '湖北', value: 9074,index: 17}, {name: '广西', value: 129,index: 18},
        {name: '甘肃', value: 52,index: 19}, {name: '山西', value: 63,index: 20},
        {name: '内蒙古', value: 28,index: 21}, {name: '陕西', value: 117,index: 22},
        {name: '吉林', value: 16,index: 23}, {name: '福建', value: 179,index: 24},
        {name: '贵州', value: 69,index: 25}, {name: '广东', value: 663,index: 26},
        {name: '青海', value: 13,index: 27}, {name: '西藏', value: 1,index: 28},
        {name: '四川', value: 232,index: 29}, {name: '宁夏', value: 30,index: 30},
        {name: '海南', value: 45,index: 31}, {name: '台湾', value: 89,index: 32},
        {name: '香港', value: 44,index: 33}, {name: '澳门', value: 32,index: 34}
    ];
    var myChart = echarts.init(document.getElementById('maps'));
    var optionMap = {
        //配置属性
        title: {
            text: '累计确诊',
            subtext: '',
            x: 'center'
        },
        series: [{
            name: '确诊人数：',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
                normal: {
                    show: true  //省份名称
                },
                emphasis: {
                    show: true
                }
            },
            data: mydata  //数据
        }]
    };
    myChart.setOption(optionMap);
}
function current() {
    myChart.setOption(optionMap);
}