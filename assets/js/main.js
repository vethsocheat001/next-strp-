/**
 * NEXT STEP – ជំហានបន្ទាប់
 * Main Shared Utilities (Toasts, Badges, Search redirect, Navbar helper)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize tooltips if Bootstrap exists
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  // Update badge counters in navbar if present
  updateNavbarBadges();
});

// Toast Notification Helper
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('ns-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'ns-toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(toastContainer);
  }

  const toastId = 'toast-' + Date.now();
  const bgClass = type === 'success' ? 'bg-success text-white' : type === 'danger' ? 'bg-danger text-white' : 'bg-primary text-white';
  const icon = type === 'success' ? 'bi-check-circle' : type === 'danger' ? 'bi-exclamation-triangle' : 'bi-info-circle';

  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${icon} fs-5"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  const toastEl = document.getElementById(toastId);
  if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
    const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
    bsToast.show();
    toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
  }
}

// Update Favorite & Compare Badges in Header
function updateNavbarBadges() {
  if (!window.NextStepData) return;
  const favs = window.NextStepData.getFavorites();
  const totalFavs = (favs.universities?.length || 0) + (favs.majors?.length || 0) + (favs.scholarships?.length || 0);
  const compCount = (window.NextStepData.getComparison() || []).length;

  const favBadge = document.getElementById('nav-fav-badge');
  if (favBadge) {
    favBadge.textContent = totalFavs;
    favBadge.style.display = totalFavs > 0 ? 'inline-block' : 'none';
  }

  const compBadge = document.getElementById('nav-comp-badge');
  if (compBadge) {
    compBadge.textContent = compCount;
    compBadge.style.display = compCount > 0 ? 'inline-block' : 'none';
  }
}

// Toggle Favorite helper
function handleToggleFavorite(type, id, btnElement) {
  if (!window.NextStepData) return;
  const isAdded = window.NextStepData.toggleFavorite(type, id);
  if (btnElement) {
    const icon = btnElement.querySelector('i');
    if (icon) {
      if (isAdded) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill', 'text-danger');
      } else {
        icon.classList.remove('bi-heart-fill', 'text-danger');
        icon.classList.add('bi-heart');
      }
    }
  }
  updateNavbarBadges();
  showToast(isAdded ? 'បានរក្សាទុកក្នុងបញ្ជីចំណូលចិត្ត' : 'បានដកចេញពីបញ្ជីចំណូលចិត្ត', isAdded ? 'success' : 'info');
}

// Add to comparison helper
function handleAddToCompare(uniId) {
  if (!window.NextStepData) return;
  const added = window.NextStepData.addToComparison(uniId);
  updateNavbarBadges();
  if (added) {
    showToast('បានបញ្ចូលសាកលវិទ្យាល័យទៅក្នុងបញ្ជីប្រៀបធៀប!', 'success');
  } else {
    showToast('សាកលវិទ្យាល័យនេះមានក្នុងបញ្ជីប្រៀបធៀបរួចហើយ', 'info');
  }
}

// Quick Search from any page
function handleGlobalSearch(e) {
  e.preventDefault();
  const input = document.getElementById('globalSearchInput');
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;
  // Redirect to universities or majors with search query
  const target = window.location.pathname.includes('/user/') ? 'universities.html' : 'user/universities.html';
  window.location.href = `${target}?q=${encodeURIComponent(q)}`;
}

window.showToast = showToast;
window.updateNavbarBadges = updateNavbarBadges;
window.handleToggleFavorite = handleToggleFavorite;
window.handleAddToCompare = handleAddToCompare;
window.handleGlobalSearch = handleGlobalSearch;
