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
