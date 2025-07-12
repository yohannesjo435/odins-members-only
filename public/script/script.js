function toggleDropdown() {
  const dropdownBtn = document.querySelector(".dropdownBtn")
  const dropdown = document.querySelector(".dropdown")

  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex"
  }else {
    dropdown.style.display = "none"
  }
}
