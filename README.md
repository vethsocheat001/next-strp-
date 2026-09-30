# NEXT STEP – ជំហានបន្ទាប់
## Cambodian Education Guidance Platform (វេទិកាណែនាំការអប់រំ និងសាកលវិទ្យាល័យ)

**NEXT STEP – ជំហានបន្ទាប់** គឺជាគេហទំព័រណែនាំការអប់រំទំនើប ស្អាត ឆ្លើយតបគ្រប់ឧបករណ៍ (Responsive) ដែលត្រូវបានបង្កើតឡើងជាពិសេសសម្រាប់សិស្សវិទ្យាល័យកម្ពុជា និងសិស្សដែលទើបបញ្ចប់ការប្រឡងបាក់ឌុប ដើម្បីជួយពួកគេស្វែងរកព័ត៌មានរៀបចំទុកជាមុនអំពី៖
- **សាកលវិទ្យាល័យ (Universities):** គ្រឹះស្ថានឧត្តមសិក្សារដ្ឋ និងឯកជន ទីតាំង តម្លៃសិក្សា និងបរិក្ខារ
- **មុខជំនាញ (Majors):** មុខវិជ្ជាត្រូវរៀន សមត្ថភាពចាំបាច់ ឱកាសការងារ និងកម្រិតប្រាក់ខែ
- **អាហារូបករណ៍ (Scholarships):** អាហារូបករណ៍រដ្ឋ MoEYS អាហារូបករណ៍ឯកជន និងអាហារូបករណ៍ទៅក្រៅប្រទេស
- **មាគ៌ាអាជីព (Career Paths):** ផែនទីបង្ហាញផ្លូវពីវិទ្យាល័យ រហូតដល់ក្លាយជាអ្នកជំនាញជាន់ខ្ពស់
- **ឧបករណ៍ប្រៀបធៀប (Compare Universities):** វិភាគសាកលវិទ្យាល័យពីរទន្ទឹមគ្នា
- **តេស្តស្វែងរកជំនាញ (Find Your Major):** ឆ្លើយសំណួរងាយៗ ៣ ជំហានដើម្បីស្វែងរកជំនាញត្រូវនឹងខ្លួន

---

## 🛠️ បច្ចេកវិទ្យាប្រើប្រាស់ (Technologies)

- **HTML5:** Semantic markup
- **CSS3:** Custom styles, CSS variables, clean typography
- **Bootstrap 5 (v5.3.3):** Responsive grid, cards, navbar, offcanvas, modals, utilities
- **Bootstrap Icons (v1.11.3):** Modern iconography
- **JavaScript (ES6+):** Dynamic client-side rendering, filters, search, multi-step quiz, and LocalStorage data sync
- **Google Fonts:** Noto Sans Khmer (សម្រាប់ភាសាខ្មែរ) និង Poppins (សម្រាប់ភាសាអង់គ្លេស)

---

## 📂 រចនាសម្ព័ន្ធគម្រោង (Project Structure)

```text
Next-Step/
├── index.html                     # ទំព័រដើមសិស្ស (Student Home Page)
│
├── user/                          # ទំព័រសិស្ស (User / Student Side)
│   ├── universities.html          # បញ្ជីសាកលវិទ្យាល័យ និង Filter
│   ├── university-details.html    # ព័ត៌មានលម្អិតសាកលវិទ្យាល័យ
│   ├── majors.html                # បញ្ជីមុខជំនាញតាមជំពូក
│   ├── major-details.html         # ព័ត៌មានលម្អិតមុខជំនាញ
│   ├── find-major.html            # តេស្តស្វែងរកជំនាញ (Find Your Major)
│   ├── compare.html               # ឧបករណ៍ប្រៀបធៀបសាកលវិទ្យាល័យ
│   ├── scholarships.html          # បញ្ជីអាហារូបករណ៍
│   ├── scholarship-details.html   # ព័ត៌មានលម្អិតអាហារូបករណ៍
│   ├── career-path.html           # មាគ៌ាអាជីព (Career Timelines)
│   ├── favorites.html             # បញ្ជីដែលបានរក្សាទុក (Favorites)
│   ├── account.html               # គណនីសិស្ស និងការកំណត់
│   └── about.html                 # អំពីយើង ចក្ខុវិស័យ និងក្រុមការងារ
│
├── admin/                         # ផ្ទាំងគ្រប់គ្រង (Admin Dashboard)
│   ├── login.html                 # ផ្ទាំងចូលគ្រប់គ្រង (Admin Login)
│   ├── dashboard.html             # ផ្ទាំងសង្ខេបស្ថិតិទូទៅ
│   ├── universities.html          # គ្រប់គ្រងសាកលវិទ្យាល័យ (CRUD)
│   ├── university-add.html        # បន្ថែមសាកលវិទ្យាល័យ
│   ├── university-edit.html       # កែប្រែសាកលវិទ្យាល័យ
│   ├── majors.html                # គ្រប់គ្រងមុខជំនាញ (CRUD)
│   ├── major-add.html             # បន្ថែមមុខជំនាញ
│   ├── major-edit.html            # កែប្រែមុខជំនាញ
│   ├── scholarships.html          # គ្រប់គ្រងអាហារូបករណ៍ (CRUD)
│   ├── scholarship-add.html       # បន្ថែមអាហារូបករណ៍
│   ├── scholarship-edit.html      # កែប្រែអាហារូបករណ៍
│   ├── users.html                 # គ្រប់គ្រងអ្នកប្រើប្រាស់
│   ├── news.html                  # គ្រប់គ្រងព័ត៌មាន និងសេចក្តីប្រកាស
│   ├── categories.html            # គ្រប់គ្រងជំពូកមុខវិជ្ជា
│   ├── content.html               # គ្រប់គ្រងមាតិកាទំព័រដើម
│   ├── profile.html               # ព័ត៌មានផ្ទាល់ខ្លួន Admin
│   └── settings.html              # ការកំណត់គេហទំព័រ
│
├── assets/
│   ├── css/
│   │   ├── style.css              # Main Core Stylesheet & Google Fonts
│   │   ├── user.css               # Student Side Stylesheet
│   │   └── admin.css              # Admin Dashboard Stylesheet
│   ├── js/
│   │   ├── data.js                # Data Store & LocalStorage Synchronization
│   │   ├── main.js                # Shared Utilities, Toasts, Badges
│   │   ├── user.js                # Dynamic Controllers for User Pages
│   │   └── admin.js               # Controllers for Admin Dashboard & CRUD
│   └── images/
│       ├── banners/               # Banners & Hero visuals
│       ├── universities/          # University photos
│       ├── majors/
│       └── scholarships/
│
└── README.md
```

---

## 👥 សមាជិកក្រុមការងារ (Team Members)

1. **លឹម មករា** - Team Leader & Full-Stack Web Development
2. **យ៉យ អារីយ៉ា** - UI/UX Design & User Research
3. **ញុឹប រ៉ានី** - Content Specialist & Data Collection
4. **លឹម យិបវៃ** - Frontend Engineer & Responsive Testing
5. **ម៉េង អ៊ុយសួង** - Career Guidance & Labor Market Analyst

---

## 🔐 ព័ត៌មានចូលគណនី Admin Demo (Credentials)

- **URL:** `/admin/login.html`
- **អ៊ីមែល (Email):** `admin@nextstep.kh`
- **ពាក្យសម្ងាត់ (Password):** `admin123`
