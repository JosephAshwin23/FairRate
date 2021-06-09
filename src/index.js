import "./styles/styles.scss";
require("jquery");
require("jquery-ui-bundle");

let resultData = [
  {
    pic: "http://www.merixfinancial.com/wp-content/themes/merix/images/logo.png",
    nmsl: "7707",
    intrest: "3.6% APR",
    month: "March 10",
    rate: "3.500% Rate",
    point: "1 Point",
    price: "$898.09",
    phone: "(887) 407 - 37123",
  },
  {
    pic: "https://www.nrmlaonline.org/wp-content/uploads/2018/05/Equitable-Bank-logo.png",
    nmsl: "707",
    intrest: "4.6% APR",
    month: "March 10",
    rate: "4.500% Rate",
    point: "1 Point",
    price: "$898.09",
    phone: "(887) 407 - 37123",
  },
  {
    pic: "https://www.mortgageforless.com/wp-content/uploads/2018/01/CMLS-Financial-logo.png",
    nmsl: "7707",
    intrest: "3.8% APR",
    month: "March 10",
    rate: "6.500% Rate",
    point: "1 Point",
    price: "$898.09",
    phone: "(887) 407 - 37123",
  },
  {
    pic: "https://kingstonmortgagesolutions.com/wp-content/uploads/2016/12/B2B-Bank.png",
    nmsl: "7707",
    intrest: "3.9% APR",
    month: "March 10",
    rate: "3.500% Rate",
    point: "1 Point",
    price: "$898.09",
    phone: "(887) 407 - 37123",
  },
  {
    pic: "https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/740416-national-bank-of-canada-banking-microsoft365-blog/resources/1e9981b7-bfc3-47ee-8a47-b8aa5b643408/1134397030684923025_1134397030684923025",
    nmsl: "7707",
    intrest: "6.0% APR",
    month: "March 10",
    rate: "2.500% Rate",
    point: "1 Point",
    price: "$898.09",
    phone: "(887) 407 - 37123",
  },
  {
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Healthline_logo.svg/1200px-Healthline_logo.svg.png",
    nmsl: "7707",
    intrest: "3.1% APR",
    month: "March 10",
    rate: "3.500% Rate",
    point: "1 Point",
    price: "$898.09",
    phone: "(887) 407 - 37123",
  },
  {
    pic: "https://toppng.com/uploads/preview/rbs-logo-royal-bank-of-scotland-logo-11563385696idzaj9wbdz.png",
    nmsl: "7707",
    intrest: "2.6% APR",
    month: "March 10",
    rate: "3.500% Rate",
    point: "1 Point",
    price: "$898.09",
    phone: "(887) 407 - 37123",
  },
];

let rateData = [
  {
    rate: "15 Years",
    fairRate: "4.250%",
    type: "fixed",
    apr: "5.125%",
    points: "1,532",
    permonth: "3,120",
    color: "green",
  },
  {
    rate: "20 Years",
    fairRate: "4.650%",
    type: "fixed",
    apr: "5.125%",
    points: "625",
    permonth: "2,585",
    color: "light-blue",
  },
  {
    rate: "30 Years",
    fairRate: "4.870%",
    type: "fixed",
    apr: "4.875%",
    points: "1,625",
    permonth: "2,072",
    color: "navy-blue",
  },
  {
    rate: "10/1 ",
    fairRate: "4.870%",
    type: "Adjustable",
    apr: "5.125%",
    points: "154",
    permonth: "2,072",
    color: "purple",
  },
  {
    rate: "7/1",
    fairRate: "4.750%",
    type: "Adjustable",
    apr: "5.125%",
    points: "154",
    permonth: "2,072",
    color: "violet",
  },
  {
    rate: "5/1",
    fairRate: "4.750%",
    type: "Adjustable",
    apr: "5.125%",
    points: "154",
    permonth: "2072",
    color: "red",
  },
];

const nameInputs = document.querySelectorAll(".choose-name input");
const navbarLink = document.querySelectorAll(".navbar .top li");
const loginName = document.querySelector(".user-login p");
const secondNavbar = document.getElementById("second-navbar");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const welcomeMessage = document.querySelector(".dashboard h1");
const uploadTab = document.querySelectorAll(".upload-tab a");
const resultTable = document.getElementById("result-table");
const ratesTable = document.getElementById("rates-table");
const sections = document.querySelectorAll("section");
const nextButton = document.querySelectorAll(".btn-primary");
const prevButton = document.querySelectorAll(".btn-secondary");
const nextDarkButton = document.querySelectorAll(".btn-dark");
const getStartedBlue = document.querySelector(".btn-tertiary");
const getStartedOutline = document.querySelector(
  ".dashboard .btn-tertiary-outline"
);
const fileInput = document.getElementById("file-upload");
const uploadFiles = document.getElementById("upload-files");
const logo = document.querySelector(".logo");
const identification = document.querySelector(".identification");
const dateInput = document.getElementById("datepicker");
const applicationEdit = document.getElementById("application-edit");


// functions


const dropDown = (id) => {
  document.querySelector(`#dropdown-${id}`).addEventListener("click", () => {
    document
      .querySelector(`#dropdown-${id} .dropdown-list`)
      .classList.toggle("show");
  });

  document.querySelectorAll(`#dropdown-${id} li`).forEach((li) => {
    li.addEventListener("click", () => {
      document.querySelector(`#dropdown-${id} p`).innerText = li.innerText;
      document
        .querySelector(`#dropdown-${id} .dropdown-list`)
        .classList.add("show");
    });
  });
};



logo.addEventListener("click", () => {
  window.location.reload();
});

// navbar links

navbarLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLink.forEach((li) => li.classList.remove("focus"));
    link.classList.add("focus");
  });
});

// load results

resultData.forEach((data) => {
  const clickme = (e) => {
    console.log(e.target);
  };
  resultTable.innerHTML += `
<tr>
<td>
  <img
    class="lender-img"
    src= ${data.pic}
    alt=""
  />
  <p>NMLS ID: ${data.nmsl}</p>
</td>
<td>
  <h2>${data.intrest}</h2>
  <p>${data.month}</p>
  <p>30 Rate Lock</p>
</td>
<td>
  <h5>${data.rate}</h5>
  <p>${data.point}</p>
  <p>30 Rate Lock</p>
</td>
<td>
  <h2>${data.price}</h2>
  <p>${data.point}</p>
  <p>30 Rate Lock</p>
</td>
<td>
  <h5>${data.phone}</h5>
  <p>Toll-free, no obligations</p>
</td>
<td>
  <button class="btn-dark btn-sm">next</button>
</td>
</tr>

`;
});

// load rates

rateData.forEach((data) => {
  ratesTable.innerHTML += `
    <tr>
       <td>
         <span class="colorful-bg color-${data.color}">${data.rate}</span>
         <span class="grey-bg">${data.type}</span>
       </td>
       <td>
         <p>${data.fairRate} <span class="grey-text">/ ${data.apr}</span></p>
       </td>
       <td>
         <p class="text-underline">-$${data.points}</p>
         <progress class="progress progress-${
           data.color
         }" value=${data.points.replace(/,/g, "")} max="2000">32%</progress>
       </td>
       <td>
         <p>$${data.permonth}</p>
            <progress class="month-progress progress progress-${
              data.color
            }" value=${data.permonth.replace(
    /,/g,
    ""
  )} max="5000">32%</progress>
        </td>
    </tr>       
    `;
});

// navigate pages

let sectionIndex = 0;

const nextSection = () => {
  sectionIndex = sectionIndex === 6 ? (sectionIndex = 0) : sectionIndex;
  sectionIndex += 1;
  sections.forEach((section) => section.classList.remove("show"));
  sections[sectionIndex].classList.add("show");
  console.log(sectionIndex);
};

const prevSection = () => {
  sectionIndex -= 1;
  sections.forEach((section) => section.classList.remove("show"));
  sections[sectionIndex].classList.add("show");
};

getStartedOutline.addEventListener("click", () => {
  window.location.reload();
});

nextDarkButton.forEach((button) => {
  button.addEventListener("click", nextSection);
});

nextButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstName.value === "" || lastName.value === "") {
      nameInputs.forEach((input) => input.classList.add("red-border"));
      alert("Enter required Fields");
    } else {
      if (sectionIndex == 4) {
        secondNavbar.classList.remove("none");
      }
      window.scrollTo(0, 0);
      welcomeMessage.innerText = `Good morning ${firstName.value}`;
      nextSection();
    }
  });
});

getStartedBlue.addEventListener("click", () => {
  if (sectionIndex == 5) {
    secondNavbar.classList.add("none");
  }
  nextSection();
});

applicationEdit.addEventListener("click", () => {
  sections.forEach((section) => section.classList.remove("show"));
  sections[1].classList.add("show");
  secondNavbar.classList.add("none");
  sectionIndex = 1;
});

prevButton.forEach((button) => {
  button.addEventListener("click", prevSection);
});

getStartedBlue.addEventListener("click", () => {
  loginName.innerText = `${firstName.value} ${lastName.value}`;
});

$("body").on("click", "#result-table button", nextSection);

uploadTab.forEach((tab) => {
  tab.addEventListener("click", () => {
    uploadTab.forEach((tab) => tab.classList.remove("focus"));
    tab.classList.toggle("focus");
  });
});


dropDown("month");
dropDown("years");
dropDown("price");
dropDown("sort");

// date picker

let dt = new Date();
let date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

dateInput.value = date;

$("#datepicker").datepicker();

// navigate upload tab

uploadTab[1].addEventListener("click", () => {
  identification.classList.add("hide");
});

uploadTab[0].addEventListener("click", () => {
  identification.classList.remove("hide");
});

// control slider

const sliders = document.querySelectorAll(".range-slider");

Array.prototype.forEach.call(sliders, (slider) => {
  slider.querySelector("input").addEventListener("input", (event) => {
    slider.querySelector("span").innerText = "$" + event.target.value;
    applyFill(event.target);
  });

  applyFill(slider.querySelector("input"));
});

function applyFill(slider) {
  const percentage =
    (100 * (slider.value - slider.min)) / (slider.max - slider.min);
}

// drag drop

const initApp = () => {
  const droparea = document.getElementById("drag-drop");
  const active = () => droparea.classList.add("green-border");
  const inactive = () => droparea.classList.remove("green-border");
  const prevents = (e) => e.preventDefault();
  ["dragenter", "dragover", "dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, prevents);
  });

  ["dragenter", "dragover"].forEach((evtName) => {
    droparea.addEventListener(evtName, active);
  });

  ["dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, inactive);
  });

  droparea.addEventListener("drop", handleDrop);
};

document.addEventListener("DOMContentLoaded", initApp);

const handleDrop = (e) => {
  if (e.dataTransfer.files[0].size > 5000000) {
    alert("File Too Big");
  } else {
    const dt = e.dataTransfer;
    const files = dt.files;
    const fileArray = [...files];
    uploadingFiles(fileArray);
  }
};

$("body").on("click", ".upload-files .trash", function () {
  console.log(this.parentElement.remove());
});

fileInput.onchange = function (event) {
  if (event.target.files[0].size > 5000000) {
    alert("File Too Big");
  } else {
    const fileList = event.target.files;
    const fileListArray = [...fileList];
    uploadingFiles(fileListArray);
  }
};

const uploadingFiles = (Array) => {
  Array.forEach((file) => {
    uploadFiles.innerHTML += `
        <div class="file-item">
        <div>
          <img class="file-type" src="../src/icons/${file.name.substr(
            file.name.indexOf(".") + 1
          )}.svg" alt="" />
        <p>${file.name}</p>
        </div>
        <p>${file.name.substr(file.name.indexOf(".") + 1)}</p>
        <p>${(file.size / 1000000).toFixed(2)} MB</p>
        <p>UPLOADED</p>
        <img class="trash" src="../src/icons/trash.svg" alt="" />
        </div>
        </div>
        `;
  });
};

// goodmorning message
