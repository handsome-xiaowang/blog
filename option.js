let option = {
  backgroundColor: "transparent",
  title: { text: "100个点的四象限划分", subtext: "原点(0,20) · 分界线 x=0、y=20 · y=20线上25个点为边界点按x符号归入一/二象限", left: "center", textStyle: { color: "#1A1B1C", fontSize: 15, fontWeight: 600 } },
  tooltip: {
    trigger: "item", triggerOn: "click", renderMode: "richText", confine: true,
    textStyle: { fontSize: 11, lineHeight: 45 }, padding: [8, 8],
    formatter: function(params) {
      if (!params || !params[0]) { return ""; }
      var s = params[0];
      var v = s.value;
      if (s.seriesType !== "scatter" || !v || v.length < 3) { return ""; }
      var nl = String.fromCharCode(10);
      return "编号 " + v[2] + nl + "x=" + v[0] + " cm" + nl + "y=" + v[1] + " cm";
    }
  },
  legend: { top: 66, itemWidth: 14, itemHeight: 8, textStyle: { color: "#6B7280", fontSize: 11 }, data: ["一象限", "二象限", "三象限", "四象限", "原点"] },
  grid: { left: 44, right: 24, top: 86, bottom: 36, containLabel: true },
  xAxis: { type: "value", name: "x/cm", min: -17.5, max: 6, axisLabel: { color: "#555", fontSize: 11 } },
  yAxis: { type: "value", name: "y/cm", min: 14, max: 30.5, axisLabel: { color: "#555", fontSize: 11 } },
  series: [
    {
      name: "一象限", type: "scatter", symbolSize: 8, itemStyle: { color: "#6FA8DC" },
      markLine: {
        silent: true, symbol: "none",
        lineStyle: { color: "#EF4444", type: "dashed", width: 1 },
        label: { show: false },
        data: [{ xAxis: 0 }, { yAxis: 20 }]
      },
      markArea: {
        silent: true,
        data: [
          [{ name: "一象限", xAxis: 0, yAxis: 20, itemStyle: { color: "rgba(111,168,220,0.10)" }, label: { show: true, position: "insideTopRight", color: "#6FA8DC", fontSize: 12, fontWeight: 600 } }, { xAxis: 6, yAxis: 30.5 }],
          [{ name: "二象限", xAxis: -17.5, yAxis: 20, itemStyle: { color: "rgba(230,162,60,0.10)" }, label: { show: true, position: "insideTopLeft", color: "#E6A23C", fontSize: 12, fontWeight: 600 } }, { xAxis: 0, yAxis: 30.5 }],
          [{ name: "三象限", xAxis: -17.5, yAxis: 14, itemStyle: { color: "rgba(103,194,58,0.10)" }, label: { show: true, position: "insideBottomLeft", color: "#67C23A", fontSize: 12, fontWeight: 600 } }, { xAxis: 0, yAxis: 20 }],
          [{ name: "四象限(无点)", xAxis: 0, yAxis: 14, itemStyle: { color: "rgba(180,138,224,0.10)" }, label: { show: true, position: "insideBottomRight", color: "#B48AE0", fontSize: 12, fontWeight: 600 } }, { xAxis: 6, yAxis: 20 }]
        ]
      },
      data: [[1.45, 20, 1], [1.81, 20, 6], [2.17, 20, 11], [2.54, 20, 16], [2.9, 20, 21], [0.25, 24.5, 76], [0.75, 23.5, 77], [1.25, 22.5, 78], [1.75, 21.5, 79], [2.25, 20.5, 80], [0.31, 25.62, 81], [0.94, 24.38, 82], [1.56, 23.12, 83], [2.19, 21.88, 84], [2.81, 20.62, 85], [0.38, 26.75, 86], [1.12, 25.25, 87], [1.88, 23.75, 88], [2.62, 22.25, 89], [3.38, 20.75, 90], [0.44, 27.88, 91], [1.31, 26.12, 92], [2.19, 24.38, 93], [3.06, 22.62, 94], [3.94, 20.88, 95], [0.5, 29, 96], [1.5, 27, 97], [2.5, 25, 98], [3.5, 23, 99], [4.5, 21, 100]]
    },
    { name: "二象限", type: "scatter", symbolSize: 8, itemStyle: { color: "#E6A23C" }, data: [[-0.65, 20, 2], [-2.75, 20, 3], [-4.85, 20, 4], [-6.95, 20, 5], [-0.81, 20, 7], [-3.44, 20, 8], [-6.06, 20, 9], [-8.69, 20, 10], [-0.97, 20, 12], [-4.12, 20, 13], [-7.27, 20, 14], [-10.43, 20, 15], [-1.14, 20, 17], [-4.81, 20, 18], [-8.49, 20, 19], [-12.16, 20, 20], [-1.3, 20, 22], [-5.5, 20, 23], [-9.7, 20, 24], [-13.9, 20, 25], [-3.75, 21.25, 53], [-2.25, 22.75, 54], [-0.75, 24.25, 55], [-4.69, 21.56, 58], [-2.81, 23.44, 59], [-0.94, 25.31, 60], [-5.62, 21.88, 63], [-3.38, 24.12, 64], [-1.12, 26.38, 65], [-6.56, 22.19, 68], [-3.94, 24.81, 69], [-1.31, 27.44, 70], [-7.5, 22.5, 73], [-4.5, 25.5, 74], [-1.5, 28.5, 75]] },
    { name: "三象限", type: "scatter", symbolSize: 7, itemStyle: { color: "#67C23A" }, data: [[-7.95, 19.75, 26], [-7.85, 19.25, 27], [-7.75, 18.75, 28], [-7.65, 18.25, 29], [-7.55, 17.75, 30], [-9.94, 19.69, 31], [-9.81, 19.06, 32], [-9.69, 18.44, 33], [-9.56, 17.81, 34], [-9.44, 17.19, 35], [-11.93, 19.62, 36], [-11.77, 18.88, 37], [-11.62, 18.12, 38], [-11.48, 17.38, 39], [-11.32, 16.62, 40], [-13.91, 19.56, 41], [-13.74, 18.69, 42], [-13.56, 17.81, 43], [-13.39, 16.94, 44], [-13.21, 16.06, 45], [-15.9, 19.5, 46], [-15.7, 18.5, 47], [-15.5, 17.5, 48], [-15.3, 16.5, 49], [-15.1, 15.5, 50], [-6.75, 18.25, 51], [-5.25, 19.75, 52], [-8.44, 17.81, 56], [-6.56, 19.69, 57], [-10.12, 17.38, 61], [-7.88, 19.62, 62], [-11.81, 16.94, 66], [-9.19, 19.56, 67], [-13.5, 16.5, 71], [-10.5, 19.5, 72]] },
    { name: "四象限", type: "scatter", symbolSize: 8, itemStyle: { color: "#B48AE0" }, data: [] },
    { name: "原点", type: "scatter", symbol: "star", symbolSize: 20, itemStyle: { color: "#374151" }, label: { show: true, position: "left", color: "#6B7280", fontSize: 11 }, data: [[0, 20]] }
  ]
}
var myChart = echarts.init(document.getElementById('main'));



 myChart.setOption(option);


 window.addEventListener("resize", function() {
   myChart.resize();
 });




