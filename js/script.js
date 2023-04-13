function sidebarChangeIcon() {
  $(".sidebar").hasClass("open")
    ? $("#btn-open-sidebar").removeClass("bi-list").addClass("bi-chevron-right")
    : $("#btn-open-sidebar")
        .removeClass("bi-chevron-right")
        .addClass("bi-list");
}

$("#btn-open-sidebar").on("click", () => {
  $(".sidebar").toggleClass("open");
  sidebarChangeIcon();
});

let checkTheme = localStorage.getItem("panel-theme");

const monthShams = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const dataChart = [0,90,0,90,0,90,0,90,0,90,0,90];

function makeChart(
  elem,
  type,
  title,
  xAxisCategories,
  yAxisTitle,
  seriesName,
  seriesData,
  backgroundColor,
  textColor
) {
  const chart = Highcharts.chart(elem, {
    chart: {
      type: type,
      scrollablePlotArea: {
        minWidth: 500,
        scrollPositionX: -1,
      },
      backgroundColor: backgroundColor,
      plotBorderColor: '#9E9E9E',
      plotBorderWidth: 2,
    },
    credits:{
      enabled:false
    },
    title: {
      text: title,
      style: {
        color: textColor,
      },
      labels:{
        style:{
          color:textColor
        }
      }
    },
    xAxis: {
      categories: xAxisCategories,
      labels: {
        style: {
          color: textColor,
        },
      },
    },
    yAxis: {
      title: {
        text: yAxisTitle,
        style:{
          color:textColor
        }
      },
      labels: {
        style: {
          color: textColor,
        },
      },
    },
    series: [
      {
        name: seriesName,
        data: seriesData,
        color: "#00acee",
        style: {
          color: textColor,
        },
        

      },
    ],
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (checkTheme === "dark") {
    $("body").addClass("theme-dark");
    $("#switch-theme").attr("checked", true);
  } else {
    $("body").removeClass("theme-dark");
    $("#switch-theme").attr("checked", false);
  }
  makeChart(
    "my-chart",
    "spline",
    "آمار فروش ماهیانه",
    monthShams,
    "درصد افزایش فروش",
    "درصد فروش",
    dataChart,
    checkTheme === "dark" ? "#2a2b2e" : "#fff",
    checkTheme === "dark" ? "#fff" : "#2a2b2e"
  );
  makeChart(
    "chart-review",
    "spline",
    "آمار بازدید ماهانه",
    monthShams,
    "تعداد بازدید",
    "تعداد بازدید",
    dataChart,
    checkTheme === "dark" ? "#2a2b2e" : "#fff",
    checkTheme === "dark" ? "#fff" : "#2a2b2e"
  );
});

if ($(".table-card").innerHeight() >= 400) {
  $(".table-card").css("overflow-y", "scroll");
} else {
  $(".table-card").css("overflow-y", "hidden");
}

$("#switch-theme").on("click", (e) => {
  if (e.target.checked) {
    $("body").addClass("theme-dark");
    localStorage.setItem("panel-theme", "dark");
    makeChart(
      "my-chart",
      "spline",
      "آمار فروش ماهیانه",
      monthShams,
      "درصد افزایش فروش",
      "درصد فروش",
      dataChart,
      "#2a2b2e",
      "#fff"
    );
    makeChart(
      "chart-review",
      "spline",
      "آمار بازدید ماهانه",
      monthShams,
      "تعداد بازدید",
      "تعداد بازدید",
      dataChart,
      "#2a2b2e",
      "#fff"
    );
  } else {
    $("body").removeClass("theme-dark");
    localStorage.setItem("panel-theme", "light");
    makeChart(
      "my-chart",
      "spline",
      "آمار فروش ماهیانه",
      monthShams,
      "درصد افزایش فروش",
      "درصد فروش",
      dataChart,
      "#fff",
      "#2a2b2e"
    );
    makeChart(
      "chart-review",
      "spline",
      "آمار بازدید ماهانه",
      monthShams,
      "تعداد بازدید",
      "تعداد بازدید",
      dataChart,
      "#fff",
      "#2a2b2e"
    );
  }
});
