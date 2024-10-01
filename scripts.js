// Function to load the header content from external file
function loadHeader() {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
}

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
}

// Call the function when the page loads
window.onload = function () {
  loadHeader();
  loadFooter();
};

function openTab(evt, tabName) {
  if (window.innerWidth >= 960) {
    // Allow tab switching only for screens wider than 960px
    var i, tabcontent, tablinks, activeTabContent;

    // Hide all tab content in the tab section (already hidden by default in CSS)
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the active class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Add active class to the clicked button
    evt.currentTarget.className += " active";

    // Move the content of the active tab to the section below
    var selectedTab = document.getElementById(tabName);
    activeTabContent = document.getElementById("activeTabContent");
    activeTabContent.innerHTML = selectedTab.innerHTML; // Copy content of active tab
  }
}

// Set default tab open for desktop
if (window.innerWidth >= 960) {
  document.querySelector(".tablinks").classList.add("active");
  var defaultTabContent = document.getElementById("Charts").innerHTML;
  document.getElementById("activeTabContent").innerHTML = defaultTabContent; // Show default tab content
}
