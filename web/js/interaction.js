var mydata = [
    {name: '北京', value: 181}, {name: '天津', value: 41},
    {name: '上海', value: 156}, {name: '重庆', value: 258},
    {name: '河北', value: 109}, {name: '河南', value: 488},
    {name: '云南', value: 102}, {name: '辽宁', value: 63},
    {name: '黑龙江', value: 91}, {name: '湖南', value: 455},
    {name: '安徽', value: 335}, {name: '山东', value: 225},
    {name: '新疆', value: 21}, {name: '江苏', value: 230},
    {name: '浙江', value: 639}, {name: '江西', value: 324},
    {name: '湖北', value: 8601}, {name: '广西', value: 127},
    {name: '甘肃', value: 49}, {name: '山西', value: 55},
    {name: '内蒙古', value: 26}, {name: '陕西', value: 102},
    {name: '吉林', value: 22}, {name: '福建', value: 179},
    {name: '贵州', value: 44}, {name: '广东', value: 649},
    {name: '青海', value: 11}, {name: '西藏', value: 1},
    {name: '四川', value: 228}, {name: '宁夏', value: 28},
    {name: '海南', value: 64}, {name: '台湾', value: 89},
    {name: '香港', value: 44}, {name: '澳门', value: 32}
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
function past() {
    var mydata = [
        {name: '北京', value: 191}, {name: '天津', value: 50},
        {name: '上海', value: 167}, {name: '重庆', value: 262},
        {name: '河北', value: 69}, {name: '河南', value: 493},
        {name: '云南', value: 111}, {name: '辽宁', value: 68},
        {name: '黑龙江', value: 94}, {name: '湖南', value: 463},
        {name: '安徽', value: 339}, {name: '山东', value: 248},
        {name: '新疆', value: 24}, {name: '江苏', value: 236},
        {name: '浙江', value: 661}, {name: '江西', value: 334},
        {name: '湖北', value: 9074}, {name: '广西', value: 129},
        {name: '甘肃', value: 52}, {name: '山西', value: 63},
        {name: '内蒙古', value: 28}, {name: '陕西', value: 117},
        {name: '吉林', value: 16}, {name: '福建', value: 179},
        {name: '贵州', value: 69}, {name: '广东', value: 663},
        {name: '青海', value: 13}, {name: '西藏', value: 1},
        {name: '四川', value: 232}, {name: '宁夏', value: 30},
        {name: '海南', value: 45}, {name: '台湾', value: 89},
        {name: '香港', value: 44}, {name: '澳门', value: 32}
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