/**
 * NEXT STEP – ជំហានបន្ទាប់
 * User / Student Side Dynamic Controller
 */

// 1. Home Page Initialization
function initHomePage() {
  if (!window.NextStepData) return;

  // Render Popular Universities (top 4)
  const uniContainer = document.getElementById('home-popular-universities');
  if (uniContainer) {
    const unis = window.NextStepData.getUniversities().slice(0, 4);
    uniContainer.innerHTML = unis.map(u => renderUniversityCard(u, false)).join('');
  }

  // Render Popular Majors (top 8)
  const majorContainer = document.getElementById('home-popular-majors');
  if (majorContainer) {
    const majors = window.NextStepData.getMajors().slice(0, 8);
    majorContainer.innerHTML = majors.map(m => renderMajorCard(m, false)).join('');
  }

  // Render Latest Scholarships (top 3)
  const schContainer = document.getElementById('home-latest-scholarships');
  if (schContainer) {
    const schs = window.NextStepData.getScholarships().slice(0, 3);
    schContainer.innerHTML = schs.map(s => renderScholarshipCard(s, false)).join('');
  }

  // Bind Home Hero Search
  const heroForm = document.getElementById('heroSearchForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('heroSearchInput')?.value.trim();
      if (q) {
        window.location.href = `user/universities.html?q=${encodeURIComponent(q)}`;
      }
    });
  }
}

// 2. University Card Template
function renderUniversityCard(u, isInsideUserDir = true) {
  const prefix = isInsideUserDir ? '' : 'user/';
  const isFav = window.NextStepData.isFavorite('universities', u.id);
  const badgeClass = u.type === 'Public' ? 'badge-public' : 'badge-private';
  const badgeText = u.type === 'Public' ? 'រដ្ឋ (Public)' : 'ឯកជន (Private)';

  return `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
      <div class="card ns-card h-100 d-flex flex-column">
        <div class="position-relative">
          <img src="${u.image}" alt="${u.nameEn}" class="uni-card-img" onerror="this.src='/assets/images/banners/hero.jpg'">
          <span class="position-absolute top-0 start-0 m-2 uni-badge-type ${badgeClass}">
            ${badgeText}
          </span>
          <button type="button" class="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
                  onclick="handleToggleFavorite('universities', '${u.id}', this)" title="Favorite" style="width: 32px; height: 32px; padding: 0;">
            <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
          </button>
        </div>
        <div class="card-body p-3 d-flex flex-column flex-grow-1">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="fs-4">${u.logo || '🎓'}</span>
            <h6 class="card-title fw-bold mb-0 text-truncate" title="${u.nameKh}">${u.nameKh}</h6>
          </div>
          <p class="text-muted small mb-2 text-truncate">${u.nameEn}</p>
          <div class="meta-item mb-2 text-truncate">
            <i class="bi bi-geo-alt text-primary"></i>
            <span>${u.location}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between text-xs text-muted mb-3 pt-2 border-top border-light">
            <span><i class="bi bi-book me-1"></i> ${u.majorsCount || 20} ជំនាញ</span>
            <span class="text-primary fw-semibold">${u.tuition}</span>
          </div>
          <div class="mt-auto d-flex gap-2">
            <a href="${prefix}university-details.html?id=${u.id}" class="btn btn-sm btn-ns-primary flex-grow-1">
              មើលលម្អិត
            </a>
            <button class="btn btn-sm btn-outline-secondary" onclick="handleAddToCompare('${u.id}')" title="ប្រៀបធៀប">
              <i class="bi bi-arrow-left-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 3. Major Card Template
function renderMajorCard(m, isInsideUserDir = true) {
  const prefix = isInsideUserDir ? '' : 'user/';
  const isFav = window.NextStepData.isFavorite('majors', m.id);

  return `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
      <div class="card ns-card h-100 d-flex flex-column">
        <div class="card-body p-4 d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <div class="rounded-3 p-2 bg-primary bg-opacity-10 text-primary fs-3 d-inline-flex">
              <i class="bi ${m.icon || 'bi-mortarboard'}"></i>
            </div>
            <button type="button" class="btn btn-sm btn-link text-muted p-0" onclick="handleToggleFavorite('majors', '${m.id}', this)" title="Favorite">
              <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'} fs-5"></i>
            </button>
          </div>
          <span class="text-xs text-muted mb-1">${m.category}</span>
          <h5 class="fw-bold text-dark mb-1">${m.nameKh}</h5>
          <p class="text-muted small mb-2">${m.nameEn}</p>
          <p class="text-secondary small mb-3 flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${m.shortDesc || m.description}
          </p>
          <div class="border-top pt-2 mt-auto">
            <a href="${prefix}major-details.html?id=${m.id}" class="btn btn-sm btn-ns-outline-primary w-100">
              ព័ត៌មានជំនាញ <i class="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 4. Scholarship Card Template
function renderScholarshipCard(s, isInsideUserDir = true) {
  const prefix = isInsideUserDir ? '' : 'user/';
  const isFav = window.NextStepData.isFavorite('scholarships', s.id);
  let statusBadge = '<span class="status-open"><i class="bi bi-circle-fill me-1 small"></i> បើកទទួលពាក្យ</span>';
  if (s.status === 'Closing Soon') {
    statusBadge = '<span class="status-closing"><i class="bi bi-exclamation-circle me-1 small"></i> ជិតផុតកំណត់</span>';
  } else if (s.status === 'Closed') {
    statusBadge = '<span class="status-closed"><i class="bi bi-dash-circle me-1 small"></i> បានបិទ</span>';
  }

  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card ns-card h-100 d-flex flex-column">
        <div class="card-body p-4 d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-2">
            ${statusBadge}
            <button type="button" class="btn btn-sm btn-link text-muted p-0" onclick="handleToggleFavorite('scholarships', '${s.id}', this)">
              <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'} fs-5"></i>
            </button>
          </div>
          <h5 class="fw-bold mb-2">${s.nameKh}</h5>
          <div class="meta-item mb-2 text-truncate text-muted">
            <i class="bi bi-bank2 text-primary"></i>
            <span>${s.university}</span>
          </div>
          <div class="p-2 rounded bg-light mb-3 text-xs text-dark">
            <i class="bi bi-gift-fill text-success me-1"></i>
            <strong>អត្ថប្រយោជន៍:</strong> ${s.benefits}
          </div>
          <div class="d-flex justify-content-between text-xs text-muted mb-3 mt-auto">
            <span><i class="bi bi-mortarboard me-1"></i> កម្រិត: ${s.degree}</span>
            <span class="text-danger fw-semibold"><i class="bi bi-calendar-event me-1"></i> ផុត: ${s.deadline}</span>
          </div>
          <a href="${prefix}scholarship-details.html?id=${s.id}" class="btn btn-sm btn-ns-primary w-100">
            មើលលម្អិត និងដាក់ពាក្យ
          </a>
        </div>
      </div>
    </div>
  `;
}

// 5. Universities Page Controller
function initUniversitiesPage() {
  const container = document.getElementById('universities-list');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const queryParam = urlParams.get('q') || '';
  const searchInput = document.getElementById('filter-search');
  if (searchInput && queryParam) {
    searchInput.value = queryParam;
  }

  function applyFilters() {
    const q = (document.getElementById('filter-search')?.value || '').toLowerCase().trim();
    const type = document.getElementById('filter-type')?.value || 'all';
    const loc = document.getElementById('filter-location')?.value || 'all';
    const maxFee = document.getElementById('filter-fee')?.value || 'all';

    let list = window.NextStepData.getUniversities();

    if (q) {
      list = list.filter(u => 
        u.nameKh.toLowerCase().includes(q) ||
        u.nameEn.toLowerCase().includes(q) ||
        u.location.toLowerCase().includes(q)
      );
    }
    if (type !== 'all') {
      list = list.filter(u => u.type === type);
    }
    if (loc !== 'all') {
      list = list.filter(u => u.location.includes(loc));
    }
    if (maxFee !== 'all') {
      const feeNum = parseInt(maxFee, 10);
      list = list.filter(u => u.tuitionMin <= feeNum);
    }

    const countEl = document.getElementById('uni-result-count');
    if (countEl) countEl.textContent = `រកឃើញ ${list.length} សាកលវិទ្យាល័យ`;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-12 py-5 text-center text-muted">
          <i class="bi bi-search fs-1 d-block mb-3 text-secondary"></i>
          <h5>មិនមានសាកលវិទ្យាល័យដែលត្រូវនឹងការស្វែងរកទេ</h5>
          <p class="small">សូមសាកល្បងផ្លាស់ប្តូរពាក្យគន្លឹះ ឬជ្រើសរើសតម្រងផ្សេង</p>
        </div>
      `;
    } else {
      container.innerHTML = list.map(u => renderUniversityCard(u, true)).join('');
    }
  }

  document.getElementById('filter-search')?.addEventListener('input', applyFilters);
  document.getElementById('filter-type')?.addEventListener('change', applyFilters);
  document.getElementById('filter-location')?.addEventListener('change', applyFilters);
  document.getElementById('filter-fee')?.addEventListener('change', applyFilters);
  document.getElementById('reset-filters')?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    document.getElementById('filter-type').value = 'all';
    document.getElementById('filter-location').value = 'all';
    document.getElementById('filter-fee').value = 'all';
    applyFilters();
  });

  applyFilters();
}

// 6. University Details Page Controller
function initUniversityDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const uniId = urlParams.get('id') || 'rupp';
  const u = window.NextStepData.getUniversityById(uniId);
  if (!u) {
    document.getElementById('uni-details-container').innerHTML = `
      <div class="alert alert-warning my-5 text-center">រកមិនឃើញសាកលវិទ្យាល័យនេះទេ</div>
    `;
    return;
  }

  // Set page info
  document.title = `${u.nameKh} - NEXT STEP`;
  document.getElementById('uni-hero-name').textContent = u.nameKh;
  document.getElementById('uni-hero-name-en').textContent = u.nameEn;
  document.getElementById('uni-hero-type').textContent = u.type === 'Public' ? 'គ្រឹះស្ថានឧត្តមសិក្សារដ្ឋ (Public)' : 'គ្រឹះស្ថានឧត្តមសិក្សាឯកជន (Private)';
  document.getElementById('uni-hero-location').textContent = u.location;
  document.getElementById('uni-cover-img').src = u.image;
  document.getElementById('uni-desc').textContent = u.description;
  document.getElementById('uni-mission').textContent = u.mission;
  document.getElementById('uni-tuition').textContent = u.tuition;
  document.getElementById('uni-scholarships').textContent = u.scholarshipsAvailable;

  // Contact
  document.getElementById('uni-phone').textContent = u.phone;
  document.getElementById('uni-email').textContent = u.email;
  document.getElementById('uni-website').href = u.website;
  document.getElementById('uni-website').textContent = u.website;
  document.getElementById('uni-facebook').href = u.facebook;
  document.getElementById('uni-address').textContent = u.address;

  // Facilities
  const facList = document.getElementById('uni-facilities');
  if (facList) {
    facList.innerHTML = u.facilities.map(f => `<li class="mb-2"><i class="bi bi-check2-circle text-success me-2"></i>${f}</li>`).join('');
  }

  // Available Majors list
  const majorsList = document.getElementById('uni-majors-list');
  if (majorsList) {
    const allMajors = window.NextStepData.getMajors();
    const available = allMajors.filter(m => (u.availableMajors || []).includes(m.id));
    if (available.length === 0) {
      majorsList.innerHTML = '<p class="text-muted">ទិន្នន័យជំនាញកំពុងធ្វើបច្ចុប្បន្នភាព</p>';
    } else {
      majorsList.innerHTML = available.map(m => `
        <div class="col-md-6 mb-3">
          <div class="p-3 border rounded-3 bg-white h-100 d-flex align-items-center justify-content-between">
            <div>
              <h6 class="fw-bold mb-1">${m.nameKh}</h6>
              <span class="text-muted small">${m.nameEn}</span>
            </div>
            <a href="major-details.html?id=${m.id}" class="btn btn-sm btn-ns-outline-primary">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      `).join('');
    }
  }

  // Action buttons
  const favBtn = document.getElementById('btn-fav-uni');
  if (favBtn) {
    const isFav = window.NextStepData.isFavorite('universities', u.id);
    favBtn.innerHTML = `<i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> ${isFav ? 'បានរក្សាទុក' : 'រក្សាទុក'}`;
    favBtn.onclick = () => {
      const added = window.NextStepData.toggleFavorite('universities', u.id);
      favBtn.innerHTML = `<i class="bi ${added ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> ${added ? 'បានរក្សាទុក' : 'រក្សាទុក'}`;
      updateNavbarBadges();
      showToast(added ? 'បានរក្សាទុកក្នុងបញ្ជីចំណូលចិត្ត' : 'បានដកចេញពីបញ្ជីចំណូលចិត្ត');
    };
  }

  const compBtn = document.getElementById('btn-comp-uni');
  if (compBtn) {
    compBtn.onclick = () => {
      handleAddToCompare(u.id);
    };
  }

  // Related universities (same type)
  const relatedList = document.getElementById('uni-related-list');
  if (relatedList) {
    const related = window.NextStepData.getUniversities().filter(other => other.id !== u.id && other.type === u.type).slice(0, 3);
    relatedList.innerHTML = related.map(ru => renderUniversityCard(ru, true)).join('');
  }
}

// 7. Majors Page Controller
function initMajorsPage() {
  const container = document.getElementById('majors-grid');
  if (!container) return;

  let currentCategory = 'all';

  function renderMajors() {
    const q = (document.getElementById('major-search')?.value || '').toLowerCase().trim();
    let majors = window.NextStepData.getMajors();

    if (currentCategory !== 'all') {
      majors = majors.filter(m => m.category === currentCategory);
    }
    if (q) {
      majors = majors.filter(m => 
        m.nameKh.toLowerCase().includes(q) || 
        m.nameEn.toLowerCase().includes(q) || 
        m.description.toLowerCase().includes(q)
      );
    }

    const countEl = document.getElementById('major-count');
    if (countEl) countEl.textContent = `បង្ហាញ ${majors.length} ជំនាញ`;

    if (majors.length === 0) {
      container.innerHTML = `
        <div class="col-12 py-5 text-center text-muted">
          <i class="bi bi-book fs-1 d-block mb-3 text-secondary"></i>
          <h5>រកមិនឃើញជំនាញត្រូវនឹងការស្វែងរកទេ</h5>
        </div>
      `;
    } else {
      container.innerHTML = majors.map(m => renderMajorCard(m, true)).join('');
    }
  }

  // Category Tab handlers
  const catButtons = document.querySelectorAll('.cat-filter-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active', 'btn-primary'));
      catButtons.forEach(b => b.classList.add('btn-light'));
      btn.classList.add('active', 'btn-primary');
      btn.classList.remove('btn-light');
      currentCategory = btn.dataset.category;
      renderMajors();
    });
  });

  document.getElementById('major-search')?.addEventListener('input', renderMajors);

  renderMajors();
}

// 8. Major Details Page Controller
function initMajorDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const majorId = urlParams.get('id') || 'cs';
  const m = window.NextStepData.getMajorById(majorId);
  if (!m) return;

  document.title = `${m.nameKh} (${m.nameEn}) - NEXT STEP`;
  document.getElementById('major-title-kh').textContent = m.nameKh;
  document.getElementById('major-title-en').textContent = m.nameEn;
  document.getElementById('major-category-badge').textContent = m.category;
  document.getElementById('major-duration').textContent = m.duration;
  document.getElementById('major-degree').textContent = m.degree;
  document.getElementById('major-salary').textContent = m.entrySalary;
  document.getElementById('major-description').textContent = m.description;
  document.getElementById('major-suitable').textContent = m.suitableStudents;

  // What learn
  const learnList = document.getElementById('major-learn-list');
  if (learnList) {
    learnList.innerHTML = m.whatLearn.map(item => `
      <li class="mb-2 d-flex align-items-start gap-2">
        <i class="bi bi-check-circle-fill text-primary mt-1"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Required skills
  const skillsList = document.getElementById('major-skills-list');
  if (skillsList) {
    skillsList.innerHTML = m.requiredSkills.map(skill => `
      <span class="badge bg-light text-dark border p-2 fw-normal">${skill}</span>
    `).join(' ');
  }

  // Career opportunities
  const careerList = document.getElementById('major-career-list');
  if (careerList) {
    careerList.innerHTML = m.careerOpportunities.map(opp => `
      <div class="col-md-6 mb-2">
        <div class="p-2 border rounded bg-white d-flex align-items-center gap-2">
          <i class="bi bi-briefcase text-success"></i>
          <span class="fw-semibold text-dark">${opp}</span>
        </div>
      </div>
    `).join('');
  }

  // Universities offering this major
  const uniList = document.getElementById('major-universities-list');
  if (uniList) {
    const allUnis = window.NextStepData.getUniversities();
    const offeringUnis = allUnis.filter(u => (m.universities || []).includes(u.id));
    uniList.innerHTML = offeringUnis.map(u => `
      <div class="col-12 col-md-6 col-lg-4 mb-3">
        <div class="p-3 border rounded-3 bg-white h-100 d-flex flex-column">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="fs-4">${u.logo}</span>
            <h6 class="fw-bold mb-0 text-truncate">${u.nameKh}</h6>
          </div>
          <p class="text-muted small mb-2 text-truncate">${u.nameEn}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
            <span class="badge ${u.type === 'Public' ? 'bg-success' : 'bg-primary'}">${u.type}</span>
            <a href="university-details.html?id=${u.id}" class="btn btn-sm btn-ns-outline-primary">មើលសាកលវិទ្យាល័យ</a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// 9. Find Your Major Quiz Controller
function initFindMajorPage() {
  const quizForm = document.getElementById('find-major-form');
  if (!quizForm) return;

  const resultContainer = document.getElementById('quiz-result');

  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const interest = document.querySelector('input[name="interest"]:checked')?.value;
    const subject = document.querySelector('input[name="subject"]:checked')?.value;
    const workStyle = document.querySelector('input[name="workStyle"]:checked')?.value;

    if (!interest || !subject || !workStyle) {
      alert('សូមឆ្លើយសំណួរទាំង ៣ ជាមុនសិន!');
      return;
    }

    // Recommendation logic based on answers
    let matchedMajorIds = [];
    if (interest === 'tech') {
      matchedMajorIds = ['cs', 'software-eng', 'it', 'cybersecurity'];
    } else if (interest === 'biz') {
      matchedMajorIds = ['biz-admin', 'banking-fin', 'accounting'];
    } else if (interest === 'health') {
      matchedMajorIds = ['medicine', 'dentistry'];
    } else if (interest === 'eng') {
      matchedMajorIds = ['civil-eng', 'arch'];
    } else if (interest === 'law') {
      matchedMajorIds = ['law', 'intl-rel'];
    } else if (interest === 'agri') {
      matchedMajorIds = ['agri-sci', 'food-tech'];
    } else {
      matchedMajorIds = ['cs', 'biz-admin', 'intl-rel'];
    }

    const allMajors = window.NextStepData.getMajors();
    const recommended = allMajors.filter(m => matchedMajorIds.includes(m.id));

    resultContainer.classList.remove('d-none');
    resultContainer.scrollIntoView({ behavior: 'smooth' });

    const grid = document.getElementById('recommended-majors-grid');
    grid.innerHTML = recommended.map(m => renderMajorCard(m, true)).join('');
  });
}

// 10. Compare Universities Controller
function initComparePage() {
  const container = document.getElementById('compare-content');
  if (!container) return;

  function renderCompare() {
    const compIds = window.NextStepData.getComparison();
    const allUnis = window.NextStepData.getUniversities();

    // Fill university select dropdowns
    const select1 = document.getElementById('select-uni-1');
    const select2 = document.getElementById('select-uni-2');

    if (select1 && select2) {
      const optionsHtml = allUnis.map(u => `<option value="${u.id}">${u.nameKh} (${u.nameEn})</option>`).join('');
      select1.innerHTML = optionsHtml;
      select2.innerHTML = optionsHtml;

      select1.value = compIds[0] || 'rupp';
      select2.value = compIds[1] || 'itc';

      select1.onchange = () => {
        window.NextStepData.removeFromComparison(compIds[0]);
        window.NextStepData.addToComparison(select1.value);
        renderTable(select1.value, select2.value);
      };
      select2.onchange = () => {
        window.NextStepData.removeFromComparison(compIds[1]);
        window.NextStepData.addToComparison(select2.value);
        renderTable(select1.value, select2.value);
      };
    }

    renderTable(select1 ? select1.value : compIds[0], select2 ? select2.value : compIds[1]);
  }

  function renderTable(id1, id2) {
    const u1 = window.NextStepData.getUniversityById(id1);
    const u2 = window.NextStepData.getUniversityById(id2);
    if (!u1 || !u2) return;

    const tbody = document.getElementById('compare-table-body');
    tbody.innerHTML = `
      <tr>
        <th class="w-25">រូបភាព & ឡូហ្គោ</th>
        <td class="w-35 text-center">
          <img src="${u1.image}" class="img-fluid rounded mb-2" style="max-height: 140px; object-fit: cover;" onerror="this.src='/assets/images/banners/hero.jpg'">
          <h5 class="fw-bold">${u1.nameKh}</h5>
          <span class="text-muted small">${u1.nameEn}</span>
        </td>
        <td class="w-35 text-center">
          <img src="${u2.image}" class="img-fluid rounded mb-2" style="max-height: 140px; object-fit: cover;" onerror="this.src='/assets/images/banners/hero.jpg'">
          <h5 class="fw-bold">${u2.nameKh}</h5>
          <span class="text-muted small">${u2.nameEn}</span>
        </td>
      </tr>
      <tr>
        <th>ប្រភេទ (Type)</th>
        <td><span class="badge ${u1.type === 'Public' ? 'bg-success' : 'bg-primary'}">${u1.type}</span></td>
        <td><span class="badge ${u2.type === 'Public' ? 'bg-success' : 'bg-primary'}">${u2.type}</span></td>
      </tr>
      <tr>
        <th>ទីតាំង (Location)</th>
        <td><i class="bi bi-geo-alt text-danger me-1"></i> ${u1.address}</td>
        <td><i class="bi bi-geo-alt text-danger me-1"></i> ${u2.address}</td>
      </tr>
      <tr>
        <th>តម្លៃសិក្សា (Tuition Fee)</th>
        <td class="fw-bold text-primary">${u1.tuition}</td>
        <td class="fw-bold text-primary">${u2.tuition}</td>
      </tr>
      <tr>
        <th>ចំនួនជំនាញបណ្តុះបណ្តាល</th>
        <td><strong>${u1.majorsCount}</strong> ជំនាញ</td>
        <td><strong>${u2.majorsCount}</strong> ជំនាញ</td>
      </tr>
      <tr>
        <th>អាហារូបករណ៍ (Scholarship)</th>
        <td>${u1.scholarshipsAvailable}</td>
        <td>${u2.scholarshipsAvailable}</td>
      </tr>
      <tr>
        <th>បរិក្ខារ & ហេដ្ឋារចនាសម្ព័ន្ធ</th>
        <td>
          <ul class="list-unstyled mb-0 small">
            ${u1.facilities.map(f => `<li><i class="bi bi-check text-success"></i> ${f}</li>`).join('')}
          </ul>
        </td>
        <td>
          <ul class="list-unstyled mb-0 small">
            ${u2.facilities.map(f => `<li><i class="bi bi-check text-success"></i> ${f}</li>`).join('')}
          </ul>
        </td>
      </tr>
      <tr>
        <th>ទំនាក់ទំនង & គេហទំព័រ</th>
        <td>
          <div class="small">
            <div><i class="bi bi-telephone me-1"></i> ${u1.phone}</div>
            <div><i class="bi bi-envelope me-1"></i> ${u1.email}</div>
            <a href="${u1.website}" target="_blank" class="text-primary mt-1 d-inline-block">${u1.website}</a>
          </div>
        </td>
        <td>
          <div class="small">
            <div><i class="bi bi-telephone me-1"></i> ${u2.phone}</div>
            <div><i class="bi bi-envelope me-1"></i> ${u2.email}</div>
            <a href="${u2.website}" target="_blank" class="text-primary mt-1 d-inline-block">${u2.website}</a>
          </div>
        </td>
      </tr>
      <tr>
        <th>សកម្មភាព</th>
        <td>
          <a href="university-details.html?id=${u1.id}" class="btn btn-sm btn-ns-primary w-100">មើលទំព័រលម្អិត</a>
        </td>
        <td>
          <a href="university-details.html?id=${u2.id}" class="btn btn-sm btn-ns-primary w-100">មើលទំព័រលម្អិត</a>
        </td>
      </tr>
    `;
  }

  renderCompare();
}

// 11. Scholarships Page Controller
function initScholarshipsPage() {
  const container = document.getElementById('scholarships-grid');
  if (!container) return;

  function renderScholarships() {
    const q = (document.getElementById('sch-search')?.value || '').toLowerCase().trim();
    const degree = document.getElementById('sch-degree')?.value || 'all';
    const status = document.getElementById('sch-status')?.value || 'all';

    let list = window.NextStepData.getScholarships();

    if (q) {
      list = list.filter(s => 
        s.nameKh.toLowerCase().includes(q) || 
        s.nameEn.toLowerCase().includes(q) || 
        s.university.toLowerCase().includes(q)
      );
    }
    if (degree !== 'all') {
      list = list.filter(s => s.degree === degree);
    }
    if (status !== 'all') {
      list = list.filter(s => s.status === status);
    }

    const countEl = document.getElementById('sch-count');
    if (countEl) countEl.textContent = `រកឃើញ ${list.length} អាហារូបករណ៍`;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-12 py-5 text-center text-muted">
          <i class="bi bi-gift fs-1 d-block mb-3 text-secondary"></i>
          <h5>រកមិនឃើញអាហារូបករណ៍តាមការស្វែងរកទេ</h5>
        </div>
      `;
    } else {
      container.innerHTML = list.map(s => renderScholarshipCard(s, true)).join('');
    }
  }

  document.getElementById('sch-search')?.addEventListener('input', renderScholarships);
  document.getElementById('sch-degree')?.addEventListener('change', renderScholarships);
  document.getElementById('sch-status')?.addEventListener('change', renderScholarships);

  renderScholarships();
}

// 12. Scholarship Details Page Controller
function initScholarshipDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const schId = urlParams.get('id') || 'moeys-state-2026';
  const s = window.NextStepData.getScholarshipById(schId);
  if (!s) return;

  document.title = `${s.nameKh} - NEXT STEP`;
  document.getElementById('sch-title-kh').textContent = s.nameKh;
  document.getElementById('sch-title-en').textContent = s.nameEn;
  document.getElementById('sch-university').textContent = s.university;
  document.getElementById('sch-degree').textContent = s.degree;
  document.getElementById('sch-benefits').textContent = s.benefits;
  document.getElementById('sch-description').textContent = s.description;
  document.getElementById('sch-start-date').textContent = s.openingDate;
  document.getElementById('sch-deadline').textContent = s.deadline;
  document.getElementById('sch-method').textContent = s.applicationMethod;
  document.getElementById('sch-url').href = s.url;
  document.getElementById('sch-url').textContent = s.url;

  // Eligibility
  const elList = document.getElementById('sch-eligibility-list');
  if (elList) {
    elList.innerHTML = s.eligibility.map(item => `
      <li class="mb-2 d-flex align-items-start gap-2">
        <i class="bi bi-check-circle-fill text-success mt-1"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Required docs
  const docList = document.getElementById('sch-docs-list');
  if (docList) {
    docList.innerHTML = s.requiredDocs.map(doc => `
      <li class="mb-2 d-flex align-items-start gap-2">
        <i class="bi bi-file-earmark-text text-primary mt-1"></i>
        <span>${doc}</span>
      </li>
    `).join('');
  }
}

// 13. Favorites Page Controller
function initFavoritesPage() {
  const favs = window.NextStepData.getFavorites();

  // Universities
  const uniContainer = document.getElementById('fav-universities-grid');
  if (uniContainer) {
    const allUnis = window.NextStepData.getUniversities();
    const favUnis = allUnis.filter(u => (favs.universities || []).includes(u.id));
    if (favUnis.length === 0) {
      uniContainer.innerHTML = '<div class="col-12 text-muted py-3">មិនទាន់មានសាកលវិទ្យាល័យដែលបានរក្សាទុកទេ</div>';
    } else {
      uniContainer.innerHTML = favUnis.map(u => renderUniversityCard(u, true)).join('');
    }
  }

  // Majors
  const majorContainer = document.getElementById('fav-majors-grid');
  if (majorContainer) {
    const allMajors = window.NextStepData.getMajors();
    const favMajors = allMajors.filter(m => (favs.majors || []).includes(m.id));
    if (favMajors.length === 0) {
      majorContainer.innerHTML = '<div class="col-12 text-muted py-3">មិនទាន់មានជំនាញដែលបានរក្សាទុកទេ</div>';
    } else {
      majorContainer.innerHTML = favMajors.map(m => renderMajorCard(m, true)).join('');
    }
  }

  // Scholarships
  const schContainer = document.getElementById('fav-scholarships-grid');
  if (schContainer) {
    const allSchs = window.NextStepData.getScholarships();
    const favSchs = allSchs.filter(s => (favs.scholarships || []).includes(s.id));
    if (favSchs.length === 0) {
      schContainer.innerHTML = '<div class="col-12 text-muted py-3">មិនទាន់មានអាហារូបករណ៍ដែលបានរក្សាទុកទេ</div>';
    } else {
      schContainer.innerHTML = favSchs.map(s => renderScholarshipCard(s, true)).join('');
    }
  }
}

// Export functions to window
window.initHomePage = initHomePage;
window.initUniversitiesPage = initUniversitiesPage;
window.initUniversityDetailsPage = initUniversityDetailsPage;
window.initMajorsPage = initMajorsPage;
window.initMajorDetailsPage = initMajorDetailsPage;
window.initFindMajorPage = initFindMajorPage;
window.initComparePage = initComparePage;
window.initScholarshipsPage = initScholarshipsPage;
window.initScholarshipDetailsPage = initScholarshipDetailsPage;
window.initFavoritesPage = initFavoritesPage;
