window.scrollTo(0, 0);

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

const dataChart = [0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90];

const costumers = [
  { id: 1, name: "غلام", email: "gholam@gmail.com", phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"
},
  {
    id: 2,
    name: "غلامرضا",
    email: "gholamreza@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 3,
    name: "غلام حسین",
    email: "gholamhossein@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 4,
    name: "غلام حسن",
    email: "gholamhasan@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 5,
    name: "نعیم مولایی",
    email: "naeemmolaei@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 6,
    name: "نریمان غلامی",
    email: "narimangholami@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 7,
    name: "رضا پروانه",
    email: "rezaparvane@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 8,
    name: "ساحل مولایی",
    email: "sahelmolaei@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 9,
    name: "محب مشکات",
    email: "mohebmeshkat@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
  {
    id: 10,
    name: "منصور باجلان",
    email: "mansorbajelan@gmail.com",
    phoneNumber: "0930-441-9522",
avatar:"assets/images/profile.jpeg"

  },
];

function showCostumers(costumersData){
  let costumer_template = "";

  costumersData.forEach((costumer) => {
    costumer_template = `
  <div class="costumer-item">
     <div style="display: flex;align-items: center;">
       <div class="costumer-img">
         <img src=${costumer.avatar} alt="" />
       </div>
       <div class="costumer-details">
         <span class="costumer-name">${costumer.name}</span>
         <span class="costumer-email">${costumer.email}</span>
       </div>
     </div>
     <div>
       <a class="costumer-call" href="tel:${costumer.phoneNumber}">
         <i class="bi-telephone"></i>
       </a>
     </div>
   </div>
  `;
  $(".table-items").append(costumer_template)
  });
}



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
      plotBorderColor: "#9E9E9E",
      plotBorderWidth: 2,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: title,
      style: {
        color: textColor,
      },
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
        style: {
          color: textColor,
        },
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
    legend: {
      itemStyle: {
        color: textColor,
        fontWeight: 100,
      },
    },
  });
}

if (checkTheme === "dark") {
  $("body").addClass("theme-dark");
  $("#switch-theme").attr("checked", true);
} else {
  $("body").removeClass("theme-dark");
  $("#switch-theme").attr("checked", false);
}

document.addEventListener("DOMContentLoaded", () => {
  showCostumers(costumers)
  setTimeout(() => {
    $(".loading-container").addClass("hide-loading");
    if ($(".loading-container").hasClass("hide-loading")) {
      $("body").css("overflow-y", "scroll");
    }
  }, 2000);

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

if ($(".table-items").innerHeight() >= 351) {
  $(".table-items").css("overflow-y", "scroll");
} else {
  $(".table-items").css("overflow-y", "hidden");
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
