export function initializeDropdown(buttonClass, listClass, activeClass) {
  function closeAllDropdowns() {
    document.querySelectorAll(`.${buttonClass}`).forEach((button) => {
      button.classList.remove(activeClass);
    });
  }

  function toggleDropdown(event, button, dropdownList) {
    const isActive = button.classList.contains(activeClass);
    closeAllDropdowns();
    if (!isActive) {
      button.classList.add(activeClass);
    }
  }

  function selectItem(event, button) {
    const selectedText = event.target.textContent;
    const span = button.querySelector("span");
    if (span) {
      span.textContent = selectedText;
    }
    button.classList.remove(activeClass);
  }

  function handleClickOutside(event) {
    if (!event.target.closest(`.${buttonClass}`) && !event.target.closest(`.${listClass}`)) {
      closeAllDropdowns();
    }
  }

  document.querySelectorAll(`.${buttonClass}`).forEach((button) => {
    const dropdownList = button.nextElementSibling;
    if (!dropdownList || !dropdownList.classList.contains(listClass)) return;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      toggleDropdown(event, button, dropdownList);
    });

    dropdownList.addEventListener("click", (event) => {
      if (event.target.tagName === "SPAN") {
        selectItem(event, button);
      }
    });
  });

  document.addEventListener("click", handleClickOutside);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllDropdowns();
    }
  });
}
