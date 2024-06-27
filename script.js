const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
  navbarMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
  navbarMenu
    .querySelector(".menu-dropdown.active .submenu")
    .removeAttribute("style");
  navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    e.preventDefault();
    const menuDropdown = e.target.parentElement;

    // If Dropdown is Expanded, then Collapse It
    if (menuDropdown.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // Collapse Existing Expanded Dropdown
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
        collapseSubMenu();
      }

      // Expanded the New Dropdown
      menuDropdown.classList.add("active");
      const subMenu = menuDropdown.querySelector(".submenu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
const downArrow = document.querySelectorAll("#dropDown");

for (let i = 0; i < downArrow.length; i++) {
  downArrow[i].addEventListener("click", (e) => {
    if (
      e.target.parentElement.hasAttribute("data-toggle") &&
      window.innerWidth <= 992
    ) {
      e.preventDefault();
      // const menuDropdown = e.target.parentElement;
      const menuDropdownChild = e.target.parentElement;
      const menuDropdown = menuDropdownChild.parentElement;

      // If Dropdown is Expanded, then Collapse It
      if (menuDropdown.classList.contains("active")) {
        collapseSubMenu();
      } else {
        // Collapse Existing Expanded Dropdown
        if (navbarMenu.querySelector(".menu-dropdown.active")) {
          collapseSubMenu();
        }

        // Expanded the New Dropdown
        menuDropdown.classList.add("active");
        const subMenu = menuDropdown.querySelector(".submenu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
}
0.0;
