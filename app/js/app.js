// MOBILE MENU
const openMenubtn = document.getElementById("menu_icon");
const menuNav = document.getElementById("mobile-menu");

openMenubtn.addEventListener("click", menu => {
  menuNav.classList.toggle("nav--active");
});
// MOBILE ACCOUNT

// MODAL &TABS
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

if (openModalButtons) {
  openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });
  closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal_form");
      console.log(modal);
      closeModal(modal);
    });
  });
}
if (overlay) {
  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal_form.modal_form-active");

    modals.forEach(modals => {
      closeModal(modals);
    });
  });
}

// function for opening modal
function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add("modal_form-active");
  overlay.classList.add("overlay-active");
}
// fucntion for close modal
function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove("modal_form-active");
  overlay.classList.remove("overlay-active");
}

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

// FORM DROPDOWN
const dropdownBtn = document.querySelectorAll(".form--dropdown");
const dropdownItem = document.querySelectorAll(".form--options-expanded");
dropdownBtn.forEach(button => {
  button.addEventListener("click", () => {
    const items = Array.from(button.children);
    items[2].classList.toggle("form--options-expanded");
  });
});

function closeItems() {
  dropdownItem.forEach(item => {
    item.className = item.className.replace("form--options-expanded", "");
  });
}

// CALENDAR

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();

  tbl = document.getElementById("calendar-body"); // body of the calendar
  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    // created individual cells and fill with data

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
      tbl.appendChild(row); // appending each row into calendar body.
    }
  }
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = [
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

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

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

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}
