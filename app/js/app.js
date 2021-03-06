// MOBILE MENU
const openMenubtn = document.getElementById("menu_icon");
const menuNav = document.getElementById("mobile-menu");
if (openMenubtn != null) {
  openMenubtn.addEventListener("click", menu => {
    menuNav.classList.toggle("nav--active");
  });
}
// AGENT DASHBOARD TABS
const el_tab = document.getElementById("nav-tab");

if (el_tab) {
  el_tab.addEventListener("click", activateTab, false);

  function activateTab(event) {
    const activeTab = document.querySelectorAll(".tab--active");
    const activePane = document.querySelectorAll(".tab--pane-active");
    event.preventDefault();
    activeTab.forEach(tab => {
      tab.className = tab.className.replace("tab--active", "");
      activePane.forEach(pane => {
        pane.className = pane.className.replace("tab--pane-active", "");
      });
    });
    // activate new tab and panel

    event.target.parentElement.className += " tab--active";

    console.log();
    document.getElementById(
      event.target.closest("a").href.split("#")[1]
    ).className += " tab--pane-active";
  }
}
// BUYER PROFILE TABS
const buyerTabs = document.getElementById("buyerMenu");
if (buyerTabs) {
  console.log(buyerTabs);
  buyerTabs.addEventListener("click", activateBuyerTab, false);
}

function activateBuyerTab(event) {
  console.log("CLICK");
  const activeTab = document.querySelectorAll(".bMenu--active");
  const activePane = document.querySelectorAll(".bContent--active");
  const clickedPane = document.getElementById(event.target.href.split("#")[1]);
  event.preventDefault();
  activeTab.forEach(tab => {
    tab.className = tab.className.replace("bMenu--active", "");
    activePane.forEach(pane => {
      pane.className = pane.className.replace("bContent--active", "");
    });
  });
  // activate new tab and panel
  console.log(clickedPane);

  if (event.target.href) {
    console.log("its a link");
    event.target.className += " bMenu--active";
    clickedPane.className += " bContent--active";
  } else {
    console.log("not link");
  }
  // console.log();
}
// REGISTER PAGE VALUES

$("#registerAgent").click(function() {
  var $agentDetails = {};
  // Account Firstname
  const $agentFirstname = $("#accountFirstname").val();
  // Account Lastname
  const $agentLastname = $("#accountlastname").val();
  // Account Email
  const $agentEmail = $("#accountEmail").val();
  // Account Password
  const $agentPassword = $("#accountPassword").val();
  // Account ConfirmPassword
  const $agentConfirmpass = $("#accountConfirmpass").val();
  // Account Contact
  const $agentContact = $("#accountContact").val();

  // prettier-ignore
  $agentDetails = 
    {
      "firstname": $agentFirstname,
      "lastname":$agentFirstname,
      "email":$agentEmail,
      "password":$agentPassword,
      "confirmpass":$agentConfirmpass,
      "contact":$agentContact
    }
  ;
  alert(JSON.stringify($agentDetails, undefined, 2));
});
$("#registerRenter").click(function() {
  var $renterDetails = {};
  // Account Firstname
  const $renterFirstname = $("#accountFirstname").val();
  // Account Lastname
  const $renterLastname = $("#accountlastname").val();
  // Account Email
  const $renterEmail = $("#accountEmail").val();
  // Account Password
  const $renterPassword = $("#accountPassword").val();
  // Account ConfirmPassword
  const $renterConfirmpass = $("#accountConfirmpass").val();
  // Account Contact
  const $renterContact = $("#accountContact").val();

  // prettier-ignore
  $renterDetails = 
    {
      "firstname": $renterFirstname,
      "lastname":$renterLastname,
      "email":$renterEmail,
      "password":$renterPassword,
      "confirmpass":$renterConfirmpass,
      "contact":$renterContact
    }
  ;
  alert(JSON.stringify($renterDetails, undefined, 2));
});
// LIST PROPERTY VALUES
$("#submitListing").click(function() {
  // Property type Value
  const $offerType = $("input[name='offerType']:checked").val();
  // Residential Type Value
  const $propertyType = $("#propertyType").val();
  // Residential Type Value
  const $subType = $("#propertySubtype").val();

  // No. of Bedrooms
  const $bedrooms = $("#inputbedroom").val();
  // No. of Bathrooms
  const $bathrooms = $("#inputbathrooms").val();
  // Property Area
  const $propertyArea = $("#inputArea").val();
  // Property Location
  const $propertyLocation = $("#inputLocation").val();
  // Property Location
  const $propertyPrice = $("#inputPrice").val();
  // Property Email
  const $propertyEmail = $("#inputEmail").val();
  // Property Contact
  const $propertyContact = $("#inputContact").val();
  // Amenities Available
  const $checkedAmenities = [];
  $.map($("input[name='amenitiesAvailable']:checked"), function(el) {
    $checkedAmenities.push(
      $(el)
        .next()
        .text()
    );
  });
  // Property Listing Title
  const $propertyTitle = $("#listingTitle").val();
  // Property Location
  const $propertyDesc = $("#inputDescription").val();
  // prettier-ignore
  var $listingDetails={
"offertype":$offerType,
"propertytype":$propertyType,
"subtype":$subType,
"bedroom":$bedrooms,
"bathroom":$bathrooms,
"propertyarea":$propertyArea,
"email":$propertyEmail,
"contact":$propertyContact,
"location":$propertyLocation,
"price":$propertyPrice,
"amenities":
  $checkedAmenities
,
"title":$propertyTitle,
"description":$propertyDesc
}
  alert(JSON.stringify($listingDetails, undefined, 2));
  // console.log($subType);
});

// AGENT CONTACT MODAL

$(".agentContactBtn").click(function() {
  // Customer Email
  const $custEmail = $("#agentEmail").val();
  // Customer Contact No.
  const $custContact = $("#agentContact").val();
  // Customer Message
  const $custMessage = $("#agentMessage").val();
  // prettier-ignore
  const $inquiryDetails={
"customerEmail":$custEmail,
"customerContact":$custContact,
"customerMessage":$custMessage
   }

  alert(JSON.stringify($inquiryDetails, undefined, 2));
});

// BOOSTSTRAP
// require("bootstrap");

// CALENDAR
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
console.log(currentMonth);
function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  // selectYear.value = year;
  // selectMonth.value = month;

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
    // creates a table row
    let row = document.createElement("tr");

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {
      // FILLS IN EMPTY CELLS UNTIL IT REACHES The
      // first date of the month
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");

        // console.log(j);

        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      // checks if the current date is larger than the
      // days of the month
      else if (date > daysInMonth) {
        console.log("date is already large");
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          // color today's date
          // cell.classList.add("current--day");
        }
        // console.log(cellText);
        cell.classList.add("calendar--day");
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row); // appending each row into calendar body.
  }
}

// const calendarDay = document.querySelectorAll(".calendar--day");

// console.log(calendarDay);
