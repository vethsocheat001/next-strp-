/**
 * NEXT STEP – ជំហានបន្ទាប់
 * Admin Dashboard Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile sidebar toggle
  const sidebarToggle = document.getElementById('adminSidebarToggle');
  const sidebar = document.getElementById('adminSidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }
});

// Admin Auth check
function checkAdminAuth() {
  if (!window.NextStepData) return;
  const isLoginPage = window.location.pathname.endsWith('login.html');
  const auth = window.NextStepData.getAuth();
  if (!auth.isLoggedIn && !isLoginPage) {
    window.location.href = 'login.html';
  }
}

// 1. Dashboard Controller
function initAdminDashboard() {
  if (!window.NextStepData) return;

  const unis = window.NextStepData.getUniversities();
  const majors = window.NextStepData.getMajors();
  const schs = window.NextStepData.getScholarships();
  const users = window.NextStepData.getUsers();

  document.getElementById('stat-total-unis').textContent = unis.length;
  document.getElementById('stat-total-majors').textContent = majors.length;
  document.getElementById('stat-total-schs').textContent = schs.length;
  document.getElementById('stat-total-users').textContent = users.length;

  // Recent Users Table
  const userTbody = document.getElementById('dash-recent-users');
  if (userTbody) {
    userTbody.innerHTML = users.slice(0, 5).map(u => `
      <tr>
        <td class="d-flex align-items-center gap-2">
          <span class="fs-5">${u.avatar || '🧑'}</span>
          <div>
            <div class="fw-semibold text-dark">${u.name}</div>
            <div class="text-muted small">${u.email}</div>
          </div>
        </td>
        <td><span class="badge ${u.role === 'Admin' ? 'bg-primary' : 'bg-secondary'}">${u.role}</span></td>
        <td><span class="badge ${u.status === 'Active' ? 'bg-success' : 'bg-danger'}">${u.status}</span></td>
        <td class="text-muted small">${u.joinedDate}</td>
      </tr>
    `).join('');
  }

  // Recent Universities
  const uniTbody = document.getElementById('dash-recent-unis');
  if (uniTbody) {
    uniTbody.innerHTML = unis.slice(0, 5).map(u => `
      <tr>
        <td class="d-flex align-items-center gap-2">
          <span class="fs-4">${u.logo || '🎓'}</span>
          <div>
            <div class="fw-semibold text-dark">${u.nameKh}</div>
            <div class="text-muted small">${u.nameEn}</div>
          </div>
        </td>
        <td><span class="badge ${u.type === 'Public' ? 'bg-success' : 'bg-primary'}">${u.type}</span></td>
        <td class="text-muted small">${u.location}</td>
        <td>
          <a href="university-edit.html?id=${u.id}" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil"></i></a>
        </td>
      </tr>
    `).join('');
  }
}

// 2. Manage Universities
function initAdminUniversities() {
  const tbody = document.getElementById('admin-uni-tbody');
  if (!tbody) return;

  function renderTable() {
    const q = (document.getElementById('search-uni')?.value || '').toLowerCase().trim();
    const typeFilter = document.getElementById('filter-type')?.value || 'all';

    let list = window.NextStepData.getUniversities();
    if (q) {
      list = list.filter(u => u.nameKh.toLowerCase().includes(q) || u.nameEn.toLowerCase().includes(q) || u.location.toLowerCase().includes(q));
    }
    if (typeFilter !== 'all') {
      list = list.filter(u => u.type === typeFilter);
    }

    if (list.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-muted">មិនមានទិន្នន័យទេ</td></tr>';
      return;
    }

    tbody.innerHTML = list.map((u, idx) => `
      <tr>
        <td class="fw-bold">${idx + 1}</td>
        <td>
          <img src="${u.image}" alt="" style="width: 44px; height: 44px; object-fit: cover; border-radius: 8px;" onerror="this.src='/assets/images/banners/hero.jpg'">
        </td>
        <td>
          <div class="fw-semibold text-dark">${u.nameKh}</div>
          <div class="text-muted small">${u.nameEn}</div>
        </td>
        <td><span class="badge ${u.type === 'Public' ? 'bg-success' : 'bg-primary'}">${u.type}</span></td>
        <td class="text-muted small">${u.location}</td>
        <td><span class="badge bg-success">Active</span></td>
        <td>
          <div class="btn-group btn-group-sm">
            <a href="/user/university-details.html?id=${u.id}" target="_blank" class="btn btn-outline-secondary" title="View"><i class="bi bi-eye"></i></a>
            <a href="university-edit.html?id=${u.id}" class="btn btn-outline-primary" title="Edit"><i class="bi bi-pencil"></i></a>
            <button class="btn btn-outline-danger" onclick="deleteUni('${u.id}')" title="Delete"><i class="bi bi-trash"></i></button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.deleteUni = function(id) {
    if (confirm('តើអ្នកពិតជាចង់លុបសាកលវិទ្យាល័យនេះមែនទេ?')) {
      window.NextStepData.deleteUniversity(id);
      renderTable();
      showToast('បានលុបសាកលវិទ្យាល័យដោយជោគជ័យ', 'danger');
    }
  };

  document.getElementById('search-uni')?.addEventListener('input', renderTable);
  document.getElementById('filter-type')?.addEventListener('change', renderTable);

  renderTable();
}

// 3. Add / Edit University Form Controller
function initAdminUniversityForm(isEdit = false) {
  const form = document.getElementById('university-form');
  if (!form) return;

  const urlParams = new URLSearchParams(window.location.search);
  const uniId = urlParams.get('id');

  if (isEdit && uniId) {
    const u = window.NextStepData.getUniversityById(uniId);
    if (u) {
      document.getElementById('uni-id').value = u.id;
      document.getElementById('uni-name-kh').value = u.nameKh;
      document.getElementById('uni-name-en').value = u.nameEn;
      document.getElementById('uni-type').value = u.type;
      document.getElementById('uni-location').value = u.location;
      document.getElementById('uni-address').value = u.address;
      document.getElementById('uni-tuition').value = u.tuition;
      document.getElementById('uni-phone').value = u.phone;
      document.getElementById('uni-email').value = u.email;
      document.getElementById('uni-website').value = u.website;
      document.getElementById('uni-facebook').value = u.facebook;
      document.getElementById('uni-description').value = u.description;
      document.getElementById('uni-mission').value = u.mission;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('uni-id')?.value.trim() || 'uni-' + Date.now();
    const uniData = {
      id,
      nameKh: document.getElementById('uni-name-kh').value.trim(),
      nameEn: document.getElementById('uni-name-en').value.trim(),
      type: document.getElementById('uni-type').value,
      location: document.getElementById('uni-location').value.trim(),
      address: document.getElementById('uni-address').value.trim(),
      tuition: document.getElementById('uni-tuition').value.trim(),
      phone: document.getElementById('uni-phone').value.trim(),
      email: document.getElementById('uni-email').value.trim(),
      website: document.getElementById('uni-website').value.trim(),
      facebook: document.getElementById('uni-facebook').value.trim(),
      description: document.getElementById('uni-description').value.trim(),
      mission: document.getElementById('uni-mission').value.trim(),
      image: '/assets/images/universities/rupp.jpg',
      logo: '🎓',
      majorsCount: 15,
      status: 'Active',
      facilities: ['បណ្ណាល័យ', 'មន្ទីរពិសោធន៍កុំព្យូទ័រ', 'ទីលានកីឡា'],
      availableMajors: ['cs', 'it', 'biz-admin']
    };

    window.NextStepData.saveUniversity(uniData);
    alert('បានរក្សាទុកព័ត៌មានសាកលវិទ្យាល័យដោយជោគជ័យ!');
    window.location.href = 'universities.html';
  });
}

// 4. Manage Majors
function initAdminMajors() {
  const tbody = document.getElementById('admin-majors-tbody');
  if (!tbody) return;

  function renderTable() {
    const q = (document.getElementById('search-major')?.value || '').toLowerCase().trim();
    let list = window.NextStepData.getMajors();
    if (q) {
      list = list.filter(m => m.nameKh.toLowerCase().includes(q) || m.nameEn.toLowerCase().includes(q) || m.category.toLowerCase().includes(q));
    }

    tbody.innerHTML = list.map((m, idx) => `
      <tr>
        <td class="fw-bold">${idx + 1}</td>
        <td>
          <div class="fw-semibold text-dark">${m.nameKh}</div>
          <div class="text-muted small">${m.nameEn}</div>
        </td>
        <td><span class="badge bg-light text-dark border">${m.category}</span></td>
        <td>${m.duration}</td>
        <td><span class="badge bg-primary">${(m.universities || []).length} សាកលវិទ្យាល័យ</span></td>
        <td><span class="badge bg-success">Active</span></td>
        <td>
          <div class="btn-group btn-group-sm">
            <a href="/user/major-details.html?id=${m.id}" target="_blank" class="btn btn-outline-secondary"><i class="bi bi-eye"></i></a>
            <a href="major-edit.html?id=${m.id}" class="btn btn-outline-primary"><i class="bi bi-pencil"></i></a>
            <button class="btn btn-outline-danger" onclick="deleteMajor('${m.id}')"><i class="bi bi-trash"></i></button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.deleteMajor = function(id) {
    if (confirm('តើអ្នកពិតជាចង់លុបជំនាញនេះមែនទេ?')) {
      window.NextStepData.deleteMajor(id);
      renderTable();
      showToast('បានលុបជំនាញដោយជោគជ័យ', 'danger');
    }
  };

  document.getElementById('search-major')?.addEventListener('input', renderTable);
  renderTable();
}

// 5. Add / Edit Major Form Controller
function initAdminMajorForm(isEdit = false) {
  const form = document.getElementById('major-form');
  if (!form) return;

  const urlParams = new URLSearchParams(window.location.search);
  const majorId = urlParams.get('id');

  if (isEdit && majorId) {
    const m = window.NextStepData.getMajorById(majorId);
    if (m) {
      document.getElementById('major-id').value = m.id;
      document.getElementById('major-name-kh').value = m.nameKh;
      document.getElementById('major-name-en').value = m.nameEn;
      document.getElementById('major-category').value = m.category;
      document.getElementById('major-duration').value = m.duration;
      document.getElementById('major-degree').value = m.degree;
      document.getElementById('major-desc').value = m.description;
      document.getElementById('major-salary').value = m.entrySalary || '';
      document.getElementById('major-skills').value = (m.requiredSkills || []).join(', ');
      document.getElementById('major-suitable').value = m.suitableStudents || '';
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('major-id')?.value.trim() || 'major-' + Date.now();
    const skills = document.getElementById('major-skills').value.split(',').map(s => s.trim()).filter(Boolean);

    const majorData = {
      id,
      nameKh: document.getElementById('major-name-kh').value.trim(),
      nameEn: document.getElementById('major-name-en').value.trim(),
      category: document.getElementById('major-category').value,
      duration: document.getElementById('major-duration').value.trim(),
      degree: document.getElementById('major-degree').value.trim(),
      description: document.getElementById('major-desc').value.trim(),
      entrySalary: document.getElementById('major-salary').value.trim(),
      requiredSkills: skills.length > 0 ? skills : ['ការដោះស្រាយបញ្ហា', 'ការទំនាក់ទំនង'],
      suitableStudents: document.getElementById('major-suitable').value.trim(),
      whatLearn: ['ទ្រឹស្តីមូលដ្ឋានគ្រឹះ', 'ការអនុវត្តជាក់ស្តែង', 'ការស្រាវជ្រាវ និងវិភាគ'],
      careerOpportunities: ['អ្នកឯកទេសជំនាញ', 'ទីប្រឹក្សា', 'អ្នកស្រាវជ្រាវ'],
      universities: ['rupp', 'itc', 'num']
    };

    window.NextStepData.saveMajor(majorData);
    alert('បានរក្សាទុកព័ត៌មានជំនាញដោយជោគជ័យ!');
    window.location.href = 'majors.html';
  });
}

// 6. Manage Scholarships
function initAdminScholarships() {
  const tbody = document.getElementById('admin-sch-tbody');
  if (!tbody) return;

  function renderTable() {
    const q = (document.getElementById('search-sch')?.value || '').toLowerCase().trim();
    let list = window.NextStepData.getScholarships();
    if (q) {
      list = list.filter(s => s.nameKh.toLowerCase().includes(q) || s.university.toLowerCase().includes(q));
    }

    tbody.innerHTML = list.map((s, idx) => `
      <tr>
        <td class="fw-bold">${idx + 1}</td>
        <td>
          <div class="fw-semibold text-dark">${s.nameKh}</div>
          <div class="text-muted small">${s.nameEn}</div>
        </td>
        <td class="text-muted small">${s.university}</td>
        <td><span class="badge bg-light text-dark border">${s.degree}</span></td>
        <td class="text-danger small fw-semibold">${s.deadline}</td>
        <td><span class="badge ${s.status === 'Open' ? 'bg-success' : s.status === 'Closing Soon' ? 'bg-warning text-dark' : 'bg-secondary'}">${s.status}</span></td>
        <td>
          <div class="btn-group btn-group-sm">
            <a href="/user/scholarship-details.html?id=${s.id}" target="_blank" class="btn btn-outline-secondary"><i class="bi bi-eye"></i></a>
            <a href="scholarship-edit.html?id=${s.id}" class="btn btn-outline-primary"><i class="bi bi-pencil"></i></a>
            <button class="btn btn-outline-danger" onclick="deleteSch('${s.id}')"><i class="bi bi-trash"></i></button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.deleteSch = function(id) {
    if (confirm('តើអ្នកពិតជាចង់លុបអាហារូបករណ៍នេះមែនទេ?')) {
      window.NextStepData.deleteScholarship(id);
      renderTable();
      showToast('បានលុបអាហារូបករណ៍ដោយជោគជ័យ', 'danger');
    }
  };

  document.getElementById('search-sch')?.addEventListener('input', renderTable);
  renderTable();
}

// 7. Add / Edit Scholarship Form Controller
function initAdminScholarshipForm(isEdit = false) {
  const form = document.getElementById('scholarship-form');
  if (!form) return;

  const urlParams = new URLSearchParams(window.location.search);
  const schId = urlParams.get('id');

  if (isEdit && schId) {
    const s = window.NextStepData.getScholarshipById(schId);
    if (s) {
      document.getElementById('sch-id').value = s.id;
      document.getElementById('sch-name-kh').value = s.nameKh;
      document.getElementById('sch-name-en').value = s.nameEn;
      document.getElementById('sch-university').value = s.university;
      document.getElementById('sch-degree').value = s.degree;
      document.getElementById('sch-benefits').value = s.benefits;
      document.getElementById('sch-start-date').value = s.openingDate;
      document.getElementById('sch-deadline').value = s.deadline;
      document.getElementById('sch-status').value = s.status;
      document.getElementById('sch-desc').value = s.description;
      document.getElementById('sch-url').value = s.url;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('sch-id')?.value.trim() || 'sch-' + Date.now();
    const schData = {
      id,
      nameKh: document.getElementById('sch-name-kh').value.trim(),
      nameEn: document.getElementById('sch-name-en').value.trim(),
      university: document.getElementById('sch-university').value.trim(),
      degree: document.getElementById('sch-degree').value,
      benefits: document.getElementById('sch-benefits').value.trim(),
      openingDate: document.getElementById('sch-start-date').value,
      deadline: document.getElementById('sch-deadline').value,
      status: document.getElementById('sch-status').value,
      description: document.getElementById('sch-desc').value.trim(),
      url: document.getElementById('sch-url').value.trim(),
      eligibility: ['សិស្សានុសិស្សកម្ពុជា', 'បញ្ចប់ការសិក្សាដោយជោគជ័យ'],
      requiredDocs: ['វិញ្ញាបនបត្របាក់ឌុប', 'អត្តសញ្ញាណប័ណ្ណ', 'ពាក្យស្នើសុំ'],
      applicationMethod: 'ដាក់ពាក្យតាមរយៈគេហទំព័រផ្លូវការ'
    };

    window.NextStepData.saveScholarship(schData);
    alert('បានរក្សាទុកអាហារូបករណ៍ដោយជោគជ័យ!');
    window.location.href = 'scholarships.html';
  });
}

// 8. Manage Users
function initAdminUsers() {
  const tbody = document.getElementById('admin-users-tbody');
  if (!tbody) return;

  function renderTable() {
    const list = window.NextStepData.getUsers();
    tbody.innerHTML = list.map((u, idx) => `
      <tr>
        <td class="fw-bold">${idx + 1}</td>
        <td class="d-flex align-items-center gap-2">
          <span class="fs-4">${u.avatar || '🧑'}</span>
          <div>
            <div class="fw-semibold text-dark">${u.name}</div>
            <div class="text-muted small">${u.email}</div>
          </div>
        </td>
        <td><span class="badge ${u.role === 'Admin' ? 'bg-primary' : 'bg-secondary'}">${u.role}</span></td>
        <td><span class="badge ${u.status === 'Active' ? 'bg-success' : 'bg-danger'}">${u.status}</span></td>
        <td class="text-muted small">${u.joinedDate}</td>
        <td>
          <button class="btn btn-sm btn-outline-warning me-1" onclick="toggleUserStatus('${u.id}')" title="ប្តូរស្ថានភាព">
            <i class="bi bi-arrow-repeat"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteUser('${u.id}')" title="លុប">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }

  window.toggleUserStatus = function(id) {
    const list = window.NextStepData.getUsers();
    const user = list.find(u => u.id === id);
    if (user) {
      user.status = user.status === 'Active' ? 'Disabled' : 'Active';
      window.NextStepData.saveUser(user);
      renderTable();
      showToast(`បានប្តូរស្ថានភាពអ្នកប្រើប្រាស់ ${user.name}`);
    }
  };

  window.deleteUser = function(id) {
    if (confirm('តើអ្នកពិតជាចង់លុបអ្នកប្រើប្រាស់នេះមែនទេ?')) {
      window.NextStepData.deleteUser(id);
      renderTable();
      showToast('បានលុបអ្នកប្រើប្រាស់ដោយជោគជ័យ', 'danger');
    }
  };

  renderTable();
}

// 9. Manage News
function initAdminNews() {
  const tbody = document.getElementById('admin-news-tbody');
  if (!tbody) return;

  function renderTable() {
    const list = window.NextStepData.getNews();
    tbody.innerHTML = list.map((n, idx) => `
      <tr>
        <td class="fw-bold">${idx + 1}</td>
        <td>
          <div class="fw-semibold text-dark text-truncate" style="max-width: 320px;">${n.title}</div>
          <div class="text-muted small text-truncate" style="max-width: 320px;">${n.description}</div>
        </td>
        <td><span class="badge bg-light text-dark border">${n.category}</span></td>
        <td class="text-muted small">${n.date}</td>
        <td><span class="badge bg-success">${n.status}</span></td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteNews('${n.id}')"><i class="bi bi-trash"></i></button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteNews = function(id) {
    if (confirm('តើអ្នកពិតជាចង់លុបព័ត៌មាននេះមែនទេ?')) {
      window.NextStepData.deleteNews(id);
      renderTable();
      showToast('បានលុបព័ត៌មានដោយជោគជ័យ', 'danger');
    }
  };

  document.getElementById('add-news-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = {
      id: 'news-' + Date.now(),
      title: document.getElementById('news-title').value.trim(),
      category: document.getElementById('news-category').value,
      date: new Date().toISOString().split('T')[0],
      status: 'Published',
      description: document.getElementById('news-desc').value.trim(),
      image: '/assets/images/banners/hero.jpg'
    };
    window.NextStepData.saveNews(newItem);
    bootstrap.Modal.getInstance(document.getElementById('addNewsModal'))?.hide();
    renderTable();
    showToast('បានផ្សាយព័ត៌មានថ្មីដោយជោគជ័យ!');
  });

  renderTable();
}

// 10. Manage Categories
function initAdminCategories() {
  const tbody = document.getElementById('admin-cat-tbody');
  if (!tbody) return;

  function renderTable() {
    const list = window.NextStepData.getCategories();
    tbody.innerHTML = list.map((c, idx) => `
      <tr>
        <td class="fw-bold">${idx + 1}</td>
        <td>
          <div class="fw-semibold text-dark">${c.nameKh}</div>
          <div class="text-muted small">${c.name}</div>
        </td>
        <td><i class="bi ${c.icon} fs-5 text-primary"></i></td>
        <td><strong>${c.count || 0}</strong> ជំនាញ</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteCat('${c.id}')"><i class="bi bi-trash"></i></button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteCat = function(id) {
    if (confirm('តើអ្នកពិតជាចង់លុបជំពូកនេះមែនទេ?')) {
      window.NextStepData.deleteCategory(id);
      renderTable();
      showToast('បានលុបជំពូកដោយជោគជ័យ', 'danger');
    }
  };

  document.getElementById('add-cat-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newCat = {
      id: 'cat-' + Date.now(),
      name: document.getElementById('cat-name-en').value.trim(),
      nameKh: document.getElementById('cat-name-kh').value.trim(),
      icon: document.getElementById('cat-icon').value || 'bi-bookmark',
      count: 0
    };
    window.NextStepData.saveCategory(newCat);
    bootstrap.Modal.getInstance(document.getElementById('addCatModal'))?.hide();
    renderTable();
    showToast('បានបន្ថែមជំពូកថ្មីដោយជោគជ័យ!');
  });

  renderTable();
}

// Export functions to window
window.checkAdminAuth = checkAdminAuth;
window.initAdminDashboard = initAdminDashboard;
window.initAdminUniversities = initAdminUniversities;
window.initAdminUniversityForm = initAdminUniversityForm;
window.initAdminMajors = initAdminMajors;
window.initAdminMajorForm = initAdminMajorForm;
window.initAdminScholarships = initAdminScholarships;
window.initAdminScholarshipForm = initAdminScholarshipForm;
window.initAdminUsers = initAdminUsers;
window.initAdminNews = initAdminNews;
window.initAdminCategories = initAdminCategories;
