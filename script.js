  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const sectionId = btn.getAttribute("data-section");
      document.querySelectorAll(".section").forEach(section => {
        section.style.display = (section.id === sectionId) ? "" : "none";
        section.classList.toggle("active", section.id === sectionId);
      });
    });
  });

function toggleTCGSettingsModal() {
  const modal = document.getElementById("settings-modal-tcg");
  modal.classList.toggle("hidden");

  if (!modal.classList.contains("hidden")) {
    syncToggleWithDarkMode();
  }
}

const darkModeToggleModal = document.getElementById("darkModeToggleModal");

const savedDarkMode = localStorage.getItem("darkMode") === "enabled";
if (savedDarkMode) {
  document.body.classList.add("dark-mode");
  if (darkModeToggleModal) darkModeToggleModal.checked = true;
} else {
  if (darkModeToggleModal) darkModeToggleModal.checked = false;
}

if (darkModeToggleModal) {
  darkModeToggleModal.addEventListener("change", () => {
    if (darkModeToggleModal.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

function syncToggleWithDarkMode() {
  if (darkModeToggleModal) {
    darkModeToggleModal.checked = document.body.classList.contains("dark-mode");
  }
}

// Map modal logic
const mapCards = document.querySelectorAll('.map-card');
const mapModal = document.getElementById('map-modal');
const closeMapModal = document.getElementById('closeMapModal');
const modalMapImg = document.getElementById('modalMapImg');
const modalMapTitle = document.getElementById('modalMapTitle');
const modalMapOverview = document.getElementById('modalMapOverview');
const modalMapFact = document.getElementById('modalMapFact');

mapCards.forEach(card => {
  card.addEventListener('click', () => {
    modalMapImg.src = card.getAttribute('data-img');
    modalMapTitle.textContent = card.getAttribute('data-title');
    modalMapOverview.textContent = card.getAttribute('data-overview');
    modalMapFact.textContent = card.getAttribute('data-fact');
    mapModal.classList.remove('hidden');
  });
});

closeMapModal.addEventListener('click', () => {
  mapModal.classList.add('hidden');
});

// Close modal when clicking
mapModal.addEventListener('click', (e) => {
  if (e.target === mapModal) {
    mapModal.classList.add('hidden');
  }
});


// sigma sigma boy