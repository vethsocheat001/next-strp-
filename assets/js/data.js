/**
 * NEXT STEP – ជំហានបន្ទាប់
 * Central Data Store & LocalStorage Synchronization Engine
 */

const DEFAULT_UNIVERSITIES = [
  {
    id: 'rupp',
    nameKh: 'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)',
    nameEn: 'Royal University of Phnom Penh',
    type: 'Public',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'មហាវិថីសហព័ន្ធរុស្ស៊ី សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ',
    tuition: '$500 - $1,200 / ឆ្នាំ',
    tuitionMin: 500,
    tuitionMax: 1200,
    image: '/assets/images/universities/rupp.jpg',
    logo: '🎓',
    rating: 4.8,
    reviewsCount: 320,
    majorsCount: 38,
    status: 'Active',
    phone: '+855 (0)23 883 640',
    email: 'info@rupp.edu.kh',
    website: 'https://www.rupp.edu.kh',
    facebook: 'https://facebook.com/rupp.edu.kh',
    description: 'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ គឺជាគ្រឹះស្ថានឧត្តមសិក្សាដំបូងគេ និងធំបំផុតនៅក្នុងប្រទេសកម្ពុជា បង្កើតឡើងតាំងពីឆ្នាំ ១៩៦០ ដែលបណ្តុះបណ្តាលលើជំនាញវិទ្យាសាស្ត្រ មនុស្សសាស្ត្រ បច្ចេកវិទ្យា និងភាសាបរទេស។',
    mission: 'បណ្តុះបណ្តាលធនធានមនុស្សប្រកបដោយសមត្ថភាព សីលធម៌ និងការស្រាវជ្រាវបែបវិទ្យាសាស្ត្រ ដើម្បីចូលរួមអភិវឌ្ឍន៍សង្គមជាតិ។',
    facilities: ['បណ្ណាល័យសម្ដេចតេជោ ហ៊ុន សែន ទំនើប', 'មន្ទីរពិសោធន៍ STEM & AI Lab', 'មជ្ឈមណ្ឌលសហប្រតិបត្តិការកម្ពុជា-កូរ៉េ (CKCC)', 'មជ្ឈមណ្ឌលសហប្រតិបត្តិការកម្ពុជា-ជប៉ុន (CJCC)', 'ទីលានកីឡា'],
    availableMajors: ['cs', 'it', 'software-eng', 'bio', 'chem', 'khmer-lit', 'english', 'intl-rel', 'psychology'],
    scholarshipsAvailable: 'មានអាហារូបករណ៍រដ្ឋាភិបាល (MoEYS) ១០០%, អាហារូបករណ៍ទេពកោសល្យ និងអាហារូបករណ៍ផ្លាស់ប្តូរការសិក្សាអន្តរជាតិ។'
  },
  {
    id: 'itc',
    nameKh: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC - សាលាតិចណូ)',
    nameEn: 'Institute of Technology of Cambodia',
    type: 'Public',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'មហាវិថីសហព័ន្ធរុស្ស៊ី សង្កាត់ទឹកល្អក់១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ',
    tuition: '$600 - $1,400 / ឆ្នាំ',
    tuitionMin: 600,
    tuitionMax: 1400,
    image: '/assets/images/universities/itc.jpg',
    logo: '⚙️',
    rating: 4.9,
    reviewsCount: 410,
    majorsCount: 26,
    status: 'Active',
    phone: '+855 (0)23 880 370',
    email: 'info@itc.edu.kh',
    website: 'https://www.itc.edu.kh',
    facebook: 'https://facebook.com/itc.edu.kh',
    description: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (តិចណូ) គឺជាគ្រឹះស្ថានឧត្តមសិក្សាឈានមុខគេលើផ្នែកវិស្វកម្ម បច្ចេកវិទ្យា ថាមពល និងសំណង់ស៊ីវិលក្នុងប្រទេសកម្ពុជា។',
    mission: 'បង្កើតវិស្វករ និងអ្នកបច្ចេកទេសជំនាញខ្ពស់ដែលមានភាពច្នៃប្រឌិត និងការស្រាវជ្រាវដើម្បីនវានុវត្តន៍ជាតិ។',
    facilities: ['មន្ទីរពិសោធន៍វិស្វកម្មកម្រិតស្តង់ដារអន្តរជាតិ', 'រោងជាងមេកានិច និងរ៉ូបូត', 'មជ្ឈមណ្ឌលស្រាវជ្រាវនវានុវត្តន៍', 'បណ្ណាល័យបច្ចេកទេស'],
    availableMajors: ['civil-eng', 'elec-eng', 'telecom-eng', 'food-tech', 'it', 'software-eng'],
    scholarshipsAvailable: 'អាហារូបករណ៍រដ្ឋាភិបាល MoEYS, អាហារូបករណ៍ក្រុមហ៊ុនឯកជន និងអាហារូបករណ៍សិក្សាបន្តនៅប្រទេសបារាំង ជប៉ុន និងបែលហ្ស៊ិក។'
  },
  {
    id: 'paragon',
    nameKh: 'សាកលវិទ្យាល័យអន្តរជាតិផារ៉ាហ្គន (Paragon.U)',
    nameEn: 'Paragon International University',
    type: 'Private',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវលេខ ៣១៥ សង្កាត់បឹងកក់១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ',
    tuition: '$2,500 - $4,200 / ឆ្នាំ',
    tuitionMin: 2500,
    tuitionMax: 4200,
    image: '/assets/images/universities/paragon.jpg',
    logo: '🏛️',
    rating: 4.7,
    reviewsCount: 185,
    majorsCount: 18,
    status: 'Active',
    phone: '+855 (0)23 996 111',
    email: 'info@paragoniu.edu.kh',
    website: 'https://paragoniu.edu.kh',
    facebook: 'https://facebook.com/paragoniu.edu.kh',
    description: 'សាកលវិទ្យាល័យអន្តរជាតិផារ៉ាហ្គន បង្រៀនជាភាសាអង់គ្លេស ១០០% ដោយផ្តោតលើវិទ្យាសាស្ត្រកុំព្យូទ័រ វិស្វកម្ម ស្ថាបត្យកម្ម និងធុរកិច្ចអន្តរជាតិ។',
    mission: 'ផ្តល់ការអប់រំស្តង់ដារអន្តរជាតិ រៀបចំសិស្សឱ្យក្លាយជាអ្នកដឹកនាំ និងសហគ្រិនសកល។',
    facilities: ['Apple iMac Computer Lab', 'បន្ទប់ស្ទូឌីយោស្ថាបត្យកម្ម', 'សាលប្រជុំសន្និសីទអន្តរជាតិ', 'អាហារដ្ឋាន និងកន្លែងកម្សាន្តសិស្ស'],
    availableMajors: ['cs', 'software-eng', 'arch', 'civil-eng', 'biz-admin', 'banking-fin', 'intl-rel'],
    scholarshipsAvailable: 'ការប្រឡងអាហារូបករណ៍ប្រចាំឆ្នាំរហូតដល់ ១០០%, ៧៥%, ៥០% និងអាហារូបករណ៍សិស្សឆ្នើមនិទ្ទេស A។'
  },
  {
    id: 'num',
    nameKh: 'សាកលវិទ្យាល័យជាតិគ្រប់គ្រង (NUM)',
    nameEn: 'National University of Management',
    type: 'Public',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវលេខ ៩៦ កែងវិថីព្រះមហាក្សត្រីយានីកុសុមៈ សង្កាត់វត្តភ្នំ ខណ្ឌដូនពេញ',
    tuition: '$480 - $950 / ឆ្នាំ',
    tuitionMin: 480,
    tuitionMax: 950,
    image: '/assets/images/banners/hero.jpg',
    logo: '📈',
    rating: 4.6,
    reviewsCount: 290,
    majorsCount: 22,
    status: 'Active',
    phone: '+855 (0)23 428 120',
    email: 'info@num.edu.kh',
    website: 'https://www.num.edu.kh',
    facebook: 'https://facebook.com/num.edu.kh',
    description: 'សាកលវិទ្យាល័យជាតិគ្រប់គ្រង គឺជាគ្រឹះស្ថានឈានមុខគេលើការបណ្តុះបណ្តាលជំនាញសេដ្ឋកិច្ច ពាណិជ្ជកម្ម គណនេយ្យ ធនាគារ និងសហគ្រិនភាពឌីជីថល (Digital Economy & Entrepreneurship)។',
    mission: 'បង្កើតធនធានមនុស្សផ្នែកសេដ្ឋកិច្ច ពាណិជ្ជកម្ម និងនវានុវត្តន៍អាជីវកម្មដើម្បីពង្រឹងសេដ្ឋកិច្ចកម្ពុជា។',
    facilities: ['NUM Digital Innovation Center', 'មន្ទីរពិសោធន៍ FinTech', 'បណ្ណាល័យសេដ្ឋកិច្ច', 'មជ្ឈមណ្ឌលបណ្តុះធុរកិច្ចថ្មី'],
    availableMajors: ['biz-admin', 'accounting', 'banking-fin', 'marketing', 'it', 'economics', 'digital-biz'],
    scholarshipsAvailable: 'អាហារូបករណ៍រដ្ឋាភិបាល MoEYS, អាហារូបករណ៍កម្មវិធីអន្តរជាតិ i-Biz និងអាហារូបករណ៍សហគ្រិនភាព។'
  },
  {
    id: 'uhs',
    nameKh: 'សាកលវិទ្យាល័យវិទ្យាសាស្ត្រសុខាភិបាល (UHS - សាលាក្រហម)',
    nameEn: 'University of Health Sciences',
    type: 'Public',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'មហាវិថីព្រះមុនីវង្ស សង្កាត់វាលវង់ ខណ្ឌ៧មករា រាជធានីភ្នំពេញ',
    tuition: '$1,200 - $3,500 / ឆ្នាំ',
    tuitionMin: 1200,
    tuitionMax: 3500,
    image: '/assets/images/universities/rupp.jpg',
    logo: '🩺',
    rating: 4.9,
    reviewsCount: 450,
    majorsCount: 14,
    status: 'Active',
    phone: '+855 (0)23 430 559',
    email: 'contact@uhs.edu.kh',
    website: 'https://www.uhs.edu.kh',
    facebook: 'https://facebook.com/uhs.edu.kh',
    description: 'គ្រឹះស្ថានបណ្តុះបណ្តាលវេជ្ជបណ្ឌិត ឱសថការី ទន្តបណ្ឌិត និងគិលានុបដ្ឋាកកំពូលនៅកម្ពុជា ក្រោមការគ្រប់គ្រងរបស់ក្រសួងសុខាភិបាល។',
    mission: 'ផ្តល់ការអប់រំសុខាភិបាលប្រកបដោយគុណភាព សីលធម៌វិជ្ជាជីវៈខ្ពស់ ដើម្បីលើកកម្ពស់សុខុមាលភាពប្រជាជន។',
    facilities: ['មន្ទីរពិសោធន៍វេជ្ជសាស្ត្រទំនើប', 'បន្ទប់ពិសោធន៍រូបគំរូវះកាត់ Simulation Lab', 'បណ្ណាល័យវេជ្ជសាស្ត្រ', 'មន្ទីរពេទ្យអនុវត្តន៍គ្លីនិក'],
    availableMajors: ['medicine', 'dentistry', 'pharmacy', 'nursing', 'med-lab'],
    scholarshipsAvailable: 'អាហារូបករណ៍រដ្ឋាភិបាលក្រសួងសុខាភិបាលតាមរយៈការប្រឡងថ្នាក់ជាតិ និងអាហារូបករណ៍ជំនួយអន្តរជាតិ។'
  },
  {
    id: 'cadt',
    nameKh: 'បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)',
    nameEn: 'Cambodia Academy of Digital Technology',
    type: 'Public',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវជាតិលេខ ៦A ព្រែកលៀប ខណ្ឌជ្រោយចង្វារ រាជធានីភ្នំពេញ',
    tuition: '$1,500 - $2,500 / ឆ្នាំ',
    tuitionMin: 1500,
    tuitionMax: 2500,
    image: '/assets/images/banners/hero.jpg',
    logo: '💻',
    rating: 4.9,
    reviewsCount: 220,
    majorsCount: 8,
    status: 'Active',
    phone: '+855 (0)15 335 847',
    email: 'info@cadt.edu.kh',
    website: 'https://www.cadt.edu.kh',
    facebook: 'https://facebook.com/cadt.edu.kh',
    description: 'គ្រឹះស្ថានឧត្តមសិក្សាសាធារណៈឯកទេសបច្ចេកវិទ្យាឌីជីថល ក្រោមឱវាទក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ បណ្តុះបណ្តាលសិស្សឆ្នើមលើផ្នែក AI, Data, Cyber Security និង Software Engineering។',
    mission: 'បង្កើតទេពកោសល្យឌីជីថលឆ្នើមសម្រាប់ជំរុញសេដ្ឋកិច្ច និងសង្គមឌីជីថលកម្ពុជា។',
    facilities: ['IoT & AI Makerspace', 'High Performance Computing Lab', 'Cybersecurity Range', 'Digital Library'],
    availableMajors: ['cs', 'software-eng', 'data-science', 'cybersecurity', 'telecom-eng'],
    scholarshipsAvailable: 'អាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោ (Techo Digital Talent Scholarship) ១០០% ថ្លៃសិក្សា + ប្រាក់ឧបត្ថម្ភប្រចាំខែ និងកុំព្យូទ័រយួរដៃ។'
  },
  {
    id: 'rule',
    nameKh: 'សាកលវិទ្យាល័យភូមិន្ទនីតិសាស្ត្រ និងវិទ្យាសាស្ត្រសេដ្ឋកិច្ច (RULE)',
    nameEn: 'Royal University of Law and Economics',
    type: 'Public',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវលេខ ៦៨ សង្កាត់ទួលទំពូង២ ខណ្ឌចំការមន រាជធានីភ្នំពេញ',
    tuition: '$550 - $1,100 / ឆ្នាំ',
    tuitionMin: 550,
    tuitionMax: 1100,
    image: '/assets/images/universities/itc.jpg',
    logo: '⚖️',
    rating: 4.7,
    reviewsCount: 380,
    majorsCount: 20,
    status: 'Active',
    phone: '+855 (0)23 213 777',
    email: 'info@rule.edu.kh',
    website: 'https://www.rule.edu.kh',
    facebook: 'https://facebook.com/rule.edu.kh',
    description: 'គ្រឹះស្ថានឧត្តមសិក្សាច្បាប់ដំបូងគេនៅកម្ពុជា បណ្តុះបណ្តាលច្បាប់ ទំនាក់ទំនងអន្តរជាតិ សេដ្ឋកិច្ច និងរដ្ឋបាលសាធារណៈ។',
    mission: 'ផ្តល់ចំណេះដឹងផ្នែកច្បាប់ និងសេដ្ឋកិច្ចដើម្បីពង្រឹងនីតិរដ្ឋ និងអភិបាលកិច្ចល្អនៅកម្ពុជា។',
    facilities: ['សាលសវនាការគំរូ (Moot Court)', 'បណ្ណាល័យច្បាប់បារាំង-ខ្មែរ', 'មជ្ឈមណ្ឌលភាសាច្បាប់'],
    availableMajors: ['law', 'intl-rel', 'economics', 'biz-admin', 'accounting'],
    scholarshipsAvailable: 'អាហារូបករណ៍រដ្ឋាភិបាល MoEYS និងអាហារូបករណ៍ថ្នាក់ពីរភាសា (បារាំង-អង់គ្លេស)។'
  },
  {
    id: 'camed',
    nameKh: 'វិទ្យាស្ថាន ខេមអេដ (CamEd Business School)',
    nameEn: 'CamEd Business School',
    type: 'Private',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវលេខ ៦១ សង្កាត់វត្តភ្នំ ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ',
    tuition: '$2,800 - $3,900 / ឆ្នាំ',
    tuitionMin: 2800,
    tuitionMax: 3900,
    image: '/assets/images/banners/scholarships.jpg',
    logo: '📊',
    rating: 4.9,
    reviewsCount: 160,
    majorsCount: 6,
    status: 'Active',
    phone: '+855 (0)23 986 522',
    email: 'receptionist@cam-ed.com',
    website: 'https://www.cam-ed.com',
    facebook: 'https://facebook.com/camedbusinessschool',
    description: 'វិទ្យាស្ថានជំនាញកំពូលលើផ្នែកគណនេយ្យ ហិរញ្ញវត្ថុ និងសវនកម្ម ដែលមានការទទួលស្គាល់កម្រិតផ្លាទីនៀមពី ACCA ចក្រភពអង់គ្លេស។',
    mission: 'បណ្តុះបណ្តាលអ្នកជំនាញគណនេយ្យ និងហិរញ្ញវត្ថុដែលទទួលបានការទទួលស្គាល់អន្តរជាតិ។',
    facilities: ['ACCA Testing Center', 'បណ្ណាល័យហិរញ្ញវត្ថុអន្តរជាតិ', 'បន្ទប់សន្និសីទ'],
    availableMajors: ['accounting', 'banking-fin', 'auditing'],
    scholarshipsAvailable: 'អាហារូបករណ៍ទេពកោសល្យគណនេយ្យ ១០០% និង ៥០% សម្រាប់សិស្សឆ្នើមទូទាំងប្រទេស។'
  },
  {
    id: 'rua',
    nameKh: 'សាកលវិទ្យាល័យភូមិន្ទកសិកម្ម (RUA)',
    nameEn: 'Royal University of Agriculture',
    type: 'Public',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវដងកោ សង្កាត់ដង្កោ ខណ្ឌដង្កោ រាជធានីភ្នំពេញ',
    tuition: '$450 - $900 / ឆ្នាំ',
    tuitionMin: 450,
    tuitionMax: 900,
    image: '/assets/images/universities/rupp.jpg',
    logo: '🌱',
    rating: 4.6,
    reviewsCount: 175,
    majorsCount: 18,
    status: 'Active',
    phone: '+855 (0)23 219 753',
    email: 'info@rua.edu.kh',
    website: 'https://www.rua.edu.kh',
    facebook: 'https://facebook.com/rua.edu.kh',
    description: 'សាកលវិទ្យាល័យឈានមុខគេលើការអប់រំ និងស្រាវជ្រាវវិស័យកសិកម្ម បសុសត្វ ជលផល និងបច្ចេកវិទ្យាអាហារនៅកម្ពុជា។',
    mission: 'បង្កើតធនធានមនុស្សដើម្បីអភិវឌ្ឍវិស័យកសិកម្មទំនើប សន្តិសុខស្បៀង និងការអភិវឌ្ឍប្រកបដោយចីរភាព។',
    facilities: ['កសិដ្ឋានស្រាវជ្រាវកសិកម្ម និងផ្ទះកញ្ចក់វៃឆ្លាត', 'មន្ទីរពិសោធន៍ដី និងដំណាំ', 'បណ្ណាល័យកសិកម្ម'],
    availableMajors: ['agri-sci', 'food-tech', 'agribusiness', 'vet-med'],
    scholarshipsAvailable: 'អាហារូបករណ៍រដ្ឋាភិបាល MoEYS និងអាហារូបករណ៍សិក្សា និងកម្មសិក្សានៅប្រទេសអ៊ីស្រាអែល និងជប៉ុន។'
  },
  {
    id: 'aupp',
    nameKh: 'សាកលវិទ្យាល័យអាមេរិកាំងភ្នំពេញ (AUPP)',
    nameEn: 'American University of Phnom Penh',
    type: 'Private',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវលេខ ២៧៨ សង្កាត់គីឡូម៉ែត្រលេខ ៦ ខណ្ឌឫស្សីកែវ រាជធានីភ្នំពេញ',
    tuition: '$6,000 - $9,000 / ឆ្នាំ',
    tuitionMin: 6000,
    tuitionMax: 9000,
    image: '/assets/images/universities/paragon.jpg',
    logo: '🦅',
    rating: 4.9,
    reviewsCount: 140,
    majorsCount: 12,
    status: 'Active',
    phone: '+855 (0)23 990 023',
    email: 'info@aupp.edu.kh',
    website: 'https://www.aupp.edu.kh',
    facebook: 'https://facebook.com/aupp.edu.kh',
    description: 'សាកលវិទ្យាល័យដែលផ្តល់សញ្ញាបត្រពីរ (Dual Degree) ទទួលស្គាល់ដោយសាកលវិទ្យាល័យអាមេរិក (University of Arizona & Fort Hays State University)។',
    mission: 'ផ្តល់ការអប់រំឧត្តមសិក្សាស្ដង់ដារអាមេរិកដល់យុវជនកម្ពុជា និងក្នុងតំបន់។',
    facilities: ['អគារសិក្សាទំនើបស្តង់ដារពិភពលោក', 'សាលបណ្ណាល័យឌីជីថលទំហំធំ', 'មជ្ឈមណ្ឌលកីឡា និងហាត់ប្រាណ'],
    availableMajors: ['cs', 'software-eng', 'biz-admin', 'intl-rel', 'cybersecurity'],
    scholarshipsAvailable: 'អាហារូបករណ៍ Merit Scholarship ៥០% - ១០០% សម្រាប់សិស្សឆ្នើមនិទ្ទេស A និងពូកែទូទាំងប្រទេស។'
  },
  {
    id: 'norton',
    nameKh: 'សាកលវិទ្យាល័យ ន័រតុន (NU)',
    nameEn: 'Norton University',
    type: 'Private',
    location: 'រាជធានីភ្នំពេញ (Phnom Penh)',
    address: 'ផ្លូវកែវចិន្តា សង្កាត់ជ្រោយចង្វារ ខណ្ឌជ្រោយចង្វារ រាជធានីភ្នំពេញ',
    tuition: '$800 - $1,600 / ឆ្នាំ',
    tuitionMin: 800,
    tuitionMax: 1600,
    image: '/assets/images/banners/hero.jpg',
    logo: '🏰',
    rating: 4.6,
    reviewsCount: 260,
    majorsCount: 30,
    status: 'Active',
    phone: '+855 (0)23 432 075',
    email: 'info@norton-u.com',
    website: 'https://www.norton-u.com',
    facebook: 'https://facebook.com/nortonuniversity',
    description: 'សាកលវិទ្យាល័យឯកជនដំបូងគេនៅកម្ពុជា បង្កើតឡើងតាំងពីឆ្នាំ ១៩៩៦ ផ្តល់ការអប់រំលើផ្នែកបច្ចេកវិទ្យា វិស្វកម្ម ស្ថាបត្យកម្ម និងគ្រប់គ្រង។',
    mission: 'ផ្តល់ឱកាសអប់រំកម្រិតឧត្តមសិក្សាប្រកបដោយគុណភាព និងតម្លៃសមរម្យ។',
    facilities: ['អគារសិក្សាធំទូលាយមាត់ទន្លេ', 'មន្ទីរពិសោធន៍កុំព្យូទ័រ', 'ស្ទូឌីយោគំនូរស្ថាបត្យកម្ម'],
    availableMajors: ['cs', 'it', 'civil-eng', 'arch', 'biz-admin', 'banking-fin'],
    scholarshipsAvailable: 'អាហារូបករណ៍ប្រចាំឆ្នាំ និងការបញ្ចុះតម្លៃសិក្សាសម្រាប់សិស្សក្រីក្រ និងនិទ្ទេសល្អ។'
  },
  {
    id: 'nubb',
    nameKh: 'សាកលវិទ្យាល័យជាតិបាត់ដំបង (NUBB)',
    nameEn: 'National University of Battambang',
    type: 'Public',
    location: 'ខេត្តបាត់ដំបង (Battambang)',
    address: 'ផ្លូវជាតិលេខ ៥ សង្កាត់ព្រែកព្រះស្តេច ក្រុងបាត់ដំបង ខេត្តបាត់ដំបង',
    tuition: '$400 - $800 / ឆ្នាំ',
    tuitionMin: 400,
    tuitionMax: 800,
    image: '/assets/images/universities/itc.jpg',
    logo: '🌾',
    rating: 4.7,
    reviewsCount: 190,
    majorsCount: 24,
    status: 'Active',
    phone: '+855 (0)53 952 905',
    email: 'info@nubb.edu.kh',
    website: 'https://www.nubb.edu.kh',
    facebook: 'https://facebook.com/nubb.edu.kh',
    description: 'គ្រឹះស្ថានឧត្តមសិក្សាសាធារណៈធំជាងគេនៅភាគពាយព្យនៃប្រទេសកម្ពុជា ផ្តល់ការបណ្តុះបណ្តាលផ្នែកកសិកម្ម បច្ចេកវិទ្យា ធុរកិច្ច និងអប់រំ។',
    mission: 'ក្លាយជាមជ្ឈមណ្ឌលឧត្តមភាពនៃការអប់រំ និងការស្រាវជ្រាវនៅតំបន់ពាយព្យនៃប្រទេសកម្ពុជា។',
    facilities: ['មជ្ឈមណ្ឌលបច្ចេកវិទ្យាកសិកម្មទំនើប', 'បណ្ណាល័យឌីជីថល', 'អន្តេវាសិកដ្ឋានសិស្ស'],
    availableMajors: ['agri-sci', 'food-tech', 'biz-admin', 'cs', 'it', 'english'],
    scholarshipsAvailable: 'អាហារូបករណ៍រដ្ឋាភិបាល MoEYS និងអាហារូបករណ៍គម្រោងអភិវឌ្ឍន៍តំបន់។'
  }
];

const DEFAULT_MAJORS = [
  {
    id: 'cs',
    nameKh: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ',
    nameEn: 'Computer Science',
    category: 'Computer & Technology',
    icon: 'bi-cpu',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រ (Bachelor of Science)',
    shortDesc: 'សិក្សាអំពីក្បួនដោះស្រាយ (Algorithms) ការសរសេរកូដ ប្រព័ន្ធទិន្នន័យ និងបញ្ញាសិប្បនិម្មិត (AI)។',
    description: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ គឺជាជំនាញដែលសិក្សាអំពីទ្រឹស្តីព័ត៌មាន ក្បួនដោះស្រាយកុំព្យូទ័រ (Algorithms) ភាសាសរសេរកូដ រចនាសម្ព័ន្ធទិន្នន័យ ប្រព័ន្ធប្រតិបត្តិការ និងការអភិវឌ្ឍបញ្ញាសិប្បនិម្មិត (AI) ដើម្បីដោះស្រាយបញ្ហាស្មុគស្មាញក្នុងសង្គម និងធុរកិច្ច។',
    whatLearn: [
      'ក្បួនដោះស្រាយ និងរចនាសម្ព័ន្ធទិន្នន័យ (Data Structures & Algorithms)',
      'ការសរសេរកូដ (Python, C++, Java, JavaScript)',
      'ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ (Database Systems & SQL)',
      'បញ្ញាសិប្បនិម្មិត និងម៉ាស៊ីនរៀន (Artificial Intelligence & Machine Learning)',
      'ស្ថាបត្យកម្មកុំព្យូទ័រ និងបណ្តាញ (Computer Architecture & Networking)'
    ],
    requiredSkills: ['ការគិតបែបតក្កវិជ្ជា (Logical Thinking)', 'ចំណេះដឹងគណិតវិទ្យាគ្រឹះ', 'ជំនាញដោះស្រាយបញ្ហា', 'ការស្រាវជ្រាវ និងភាសាអង់គ្លេស'],
    suitableStudents: 'សិស្សដែលចូលចិត្តបច្ចេកវិទ្យា ចូលចិត្តអង្គុយស្រាវជ្រាវដោះស្រាយបញ្ហាស្មុគស្មាញ និងចូលចិត្តស្វែងយល់ពីរបៀបដែលកុំព្យូទ័រដំណើរការ។',
    careerOpportunities: [
      'Software Engineer / Developer',
      'AI & Machine Learning Specialist',
      'Data Scientist / Data Analyst',
      'System Architect / DevOps Engineer',
      'Mobile App Developer'
    ],
    entrySalary: '$400 - $800+ (Junior) / $1,500 - $3,000+ (Senior)',
    universities: ['rupp', 'cadt', 'itc', 'paragon', 'aupp', 'norton']
  },
  {
    id: 'software-eng',
    nameKh: 'វិស្វកម្មសូហ្វវែរ',
    nameEn: 'Software Engineering',
    category: 'Computer & Technology',
    icon: 'bi-code-square',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រវិស្វកម្មសូហ្វវែរ',
    shortDesc: 'ផ្តោតលើការរចនា បង្កើត ធ្វើតេស្ត និងគ្រប់គ្រងប្រព័ន្ធកម្មវិធីកុំព្យូទ័រខ្នាតធំ។',
    description: 'វិស្វកម្មសូហ្វវែរ អនុវត្តគោលការណ៍វិស្វកម្មទៅលើការផលិតកម្មវិធីកុំព្យូទ័រ ចាប់ពីដំណាក់កាលប្រមូលតម្រូវការ ការរចនា Architecture ការសរសេរកូដ ការធ្វើ Testing រហូតដល់ការដាក់ឱ្យប្រើប្រាស់ (Deployment)។',
    whatLearn: [
      'វដ្តជីវិតនៃការអភិវឌ្ឍសូហ្វវែរ (SDLC & Agile Scrum)',
      'ការសរសេរកម្មវិធីគេហទំព័រ និងទូរស័ព្ទ (Web & Mobile Development)',
      'ស្ថាបត្យកម្មប្រព័ន្ធ (Software Architecture & Design Patterns)',
      'ការធ្វើតេស្តគុណភាពសូហ្វវែរ (Software Testing & QA)',
      'Cloud Computing & DevOps Pipelines'
    ],
    requiredSkills: ['ការសរសេរកូដស្ទាត់ជំនាញ', 'ការងារជាក្រុម (Teamwork)', 'ការគ្រប់គ្រងពេលវេលា', 'ការវិភាគតម្រូវការអ្នកប្រើប្រាស់'],
    suitableStudents: 'សិស្សដែលចង់បង្កើតកម្មវិធីទូរស័ព្ទ គេហទំព័រ ឬប្រព័ន្ធគ្រប់គ្រងក្រុមហ៊ុនធំៗ និងចូលចិត្តធ្វើការងារជាក្រុម។',
    careerOpportunities: [
      'Full-Stack Web Developer',
      'Mobile Application Developer (iOS/Android)',
      'QA & Automation Test Engineer',
      'DevOps Engineer',
      'Software Project Manager'
    ],
    entrySalary: '$450 - $850+ (Junior) / $1,800 - $3,500+ (Senior)',
    universities: ['rupp', 'cadt', 'itc', 'paragon', 'aupp']
  },
  {
    id: 'it',
    nameKh: 'បច្ចេកវិទ្យាព័ត៌មាន',
    nameEn: 'Information Technology (IT)',
    category: 'Computer & Technology',
    icon: 'bi-hdd-network',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្របច្ចេកវិទ្យាព័ត៌មាន',
    shortDesc: 'គ្រប់គ្រងបណ្តាញកុំព្យូទ័រ សុវត្ថិភាពទិន្នន័យ និងប្រព័ន្ធហេដ្ឋារចនាសម្ព័ន្ធ IT របស់ស្ថាប័ន។',
    description: 'បច្ចេកវិទ្យាព័ត៌មាន ផ្តោតលើការដំឡើង ថែទាំ និងគ្រប់គ្រងប្រព័ន្ធបណ្តាញកុំព្យូទ័រ Server Cloud និងការធានាសុវត្ថិភាពប្រព័ន្ធដំណើរការអាជីវកម្មរបស់ក្រុមហ៊ុន។',
    whatLearn: [
      'ការគ្រប់គ្រងប្រព័ន្ធបណ្តាញកុំព្យូទ័រ (Network Administration - Cisco CCNA)',
      'ការគ្រប់គ្រងម៉ាស៊ីនមេ (Linux/Windows Server Administration)',
      'សន្តិសុខប្រព័ន្ធព័ត៌មាន (Information Security Basics)',
      'ហេដ្ឋារចនាសម្ព័ន្ធក្លោដ (Cloud Infrastructure - AWS/Azure)',
      'ការគាំទ្របច្ចេកវិទ្យាព័ត៌មាន (IT Support & Helpdesk Operations)'
    ],
    requiredSkills: ['ការដោះស្រាយបញ្ហាបច្ចេកទេស', 'ចំណេះដឹងផ្នែក Hardware & Networking', 'ការប្រាស្រ័យទាក់ទងល្អ'],
    suitableStudents: 'សិស្សដែលចូលចិត្តផ្នែកឧបករណ៍ Hardware ដំឡើងបណ្តាញ Wi-Fi Server និងចង់គ្រប់គ្រងប្រព័ន្ធ IT ក្រុមហ៊ុន។',
    careerOpportunities: [
      'Network Administrator',
      'System Administrator',
      'IT Infrastructure Specialist',
      'IT Support Specialist / Engineer',
      'Cloud Operations Support'
    ],
    entrySalary: '$350 - $650+ (Junior) / $1,200 - $2,500+ (Senior)',
    universities: ['rupp', 'itc', 'num', 'norton', 'nubb']
  },
  {
    id: 'cybersecurity',
    nameKh: 'សន្តិសុខស៊ីប័រ',
    nameEn: 'Cybersecurity',
    category: 'Computer & Technology',
    icon: 'bi-shield-check',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រសន្តិសុខស៊ីប័រ',
    shortDesc: 'ការពារទិន្នន័យ បណ្តាញ និងប្រព័ន្ធកុំព្យូទ័រពីការវាយប្រហាររបស់ Hacker។',
    description: 'ជំនាញការពារហេដ្ឋារចនាសម្ព័ន្ធឌីជីថល ធនាគារ និងស្ថាប័នរដ្ឋពីការជ្រៀតចូល ឬលួចទិន្នន័យ ដោយសិក្សាពីការវិភាគហានិភ័យ ការធ្វើតេស្តជ្រៀតចូល (Penetration Testing) និងការស៊ើបអង្កេតឌីជីថល។',
    whatLearn: [
      'ការវិភាគសុវត្ថិភាពបណ្តាញ (Network Security Analysis)',
      'ការធ្វើតេស្តជ្រៀតចូលដោយក្រមសីលធម៌ (Ethical Hacking & Penetration Testing)',
      'ការស៊ើបអង្កេតឌីជីថល (Digital Forensics & Incident Response)',
      'គ្រីបតូក្រាហ្វី (Cryptography & Security Protocols)',
      'ការអនុលោមតាមច្បាប់សន្តិសុខឌីជីថល'
    ],
    requiredSkills: ['ការវិភាគស៊ីជម្រៅ', 'ចំណេះដឹងបណ្តាញ និងប្រព័ន្ធប្រតិបត្តិការល្អិតល្អន់', 'ការប្រកាន់ខ្ជាប់ក្រមសីលធម៌វិជ្ជាជីវៈ'],
    suitableStudents: 'សិស្សដែលស្រលាញ់ការការពារប្រព័ន្ធ ចូលចិត្តស្វែងរកចំណុចខ្សោយ និងចង់ធ្វើការក្នុងវិស័យការពារសន្តិសុខជាតិ ឬធនាគារ។',
    careerOpportunities: [
      'Cybersecurity Analyst / Engineer',
      'Penetration Tester (Ethical Hacker)',
      'SOC Analyst (Security Operations Center)',
      'Information Security Officer (CISO path)'
    ],
    entrySalary: '$500 - $900+ (Junior) / $1,800 - $4,000+ (Senior)',
    universities: ['cadt', 'rupp', 'aupp', 'paragon']
  },
  {
    id: 'biz-admin',
    nameKh: 'គ្រប់គ្រងពាណិជ្ជកម្ម',
    nameEn: 'Business Administration',
    category: 'Business & Economics',
    icon: 'bi-briefcase',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រគ្រប់គ្រងពាណិជ្ជកម្ម (BBA)',
    shortDesc: 'រៀនពីយុទ្ធសាស្ត្រដឹកនាំ ការគ្រប់គ្រងប្រតិបត្តិការធុរកិច្ច និងសហគ្រិនភាព។',
    description: 'បណ្តុះបណ្តាលសិស្សឱ្យយល់ដឹងពីដំណើរការទាំងមូលនៃអាជីវកម្ម រួមមានការគ្រប់គ្រងធនធានមនុស្ស ការគ្រប់គ្រងហិរញ្ញវត្ថុ ទីផ្សារ យុទ្ធសាស្ត្រប្រកួតប្រជែង និងការបង្កើតក្រុមហ៊ុនថ្មី (Start-up)។',
    whatLearn: [
      'គោលការណ៍គ្រប់គ្រង និងភាពជាអ្នកដឹកនាំ (Management & Leadership)',
      'ការគ្រប់គ្រងយុទ្ធសាស្ត្រ (Strategic Management)',
      'សហគ្រិនភាព និងការបង្កើតអាជីវកម្ម (Entrepreneurship & Start-up Development)',
      'ការគ្រប់គ្រងធនធានមនុស្ស (Human Resource Management)',
      'ឥរិយាបថអង្គការ និងការចរចាពាណិជ្ជកម្ម (Organizational Behavior & Negotiation)'
    ],
    requiredSkills: ['ជំនាញទំនាក់ទំនង និងការចរចា', 'ភាពជាអ្នកដឹកនាំ (Leadership)', 'ការគិតបែបយុទ្ធសាស្ត្រ', 'ការសម្រេចចិត្ត'],
    suitableStudents: 'សិស្សដែលមានភាពសកម្ម ចូលចិត្តទំនាក់ទំនងមនុស្ស ចង់បើកអាជីវកម្មផ្ទាល់ខ្លួន ឬចង់ធ្វើជាអ្នកគ្រប់គ្រងក្រុមហ៊ុន។',
    careerOpportunities: [
      'Operations Manager / Executive',
      'Business Consultant',
      'Entrepreneur / Business Founder',
      'Human Resources Manager',
      'Project Coordinator'
    ],
    entrySalary: '$350 - $600+ (Junior) / $1,200 - $2,500+ (Senior)',
    universities: ['num', 'rule', 'paragon', 'aupp', 'nubb', 'camed']
  },
  {
    id: 'accounting',
    nameKh: 'គណនេយ្យ និងសវនកម្ម',
    nameEn: 'Accounting & Auditing',
    category: 'Business & Economics',
    icon: 'bi-calculator',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រគណនេយ្យ',
    shortDesc: 'គ្រប់គ្រងរបាយការណ៍ហិរញ្ញវត្ថុ គណនេយ្យពន្ធដារ និងការត្រួតពិនិត្យសវនកម្ម។',
    description: 'ជំនាញដែលជាឆ្អឹងខ្នងនៃគ្រប់ស្ថាប័ន ក្នុងការកត់ត្រា វិភាគ និងរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុស្របតាមស្តង់ដារគណនេយ្យកម្ពុជា និងអន្តរជាតិ (CIFRS/IFRS)។',
    whatLearn: [
      'គោលការណ៍គណនេយ្យហិរញ្ញវត្ថុ (Financial Accounting)',
      'គណនេយ្យថ្លៃដើម និងគ្រប់គ្រង (Cost & Management Accounting)',
      'ច្បាប់ពន្ធដារកម្ពុជា (Cambodia Taxation)',
      'សវនកម្មផ្ទៃក្នុង និងក្រៅ (Auditing & Assurance)',
      'កម្មវិធីគណនេយ្យ (QuickBooks, SAP, Xero)'
    ],
    requiredSkills: ['ភាពហ្មត់ចត់ និងច្បាស់លាស់ជាមួយតួលេខ', 'ការគោរពក្រមសីលធម៌ហិរញ្ញវត្ថុ', 'ការវិភាគទិន្នន័យ'],
    suitableStudents: 'សិស្សដែលពូកែគិតលេខ ចូលចិត្តភាពលម្អិត ហ្មត់ចត់ និងចង់ធ្វើការងារការិយាល័យដែលមានស្ថិរភាពខ្ពស់។',
    careerOpportunities: [
      'Financial Accountant',
      'Tax Consultant',
      'Internal / External Auditor (Big 4)',
      'Budget Analyst',
      'Chief Financial Officer (CFO path)'
    ],
    entrySalary: '$350 - $700+ (Junior) / $1,500 - $3,000+ (Senior)',
    universities: ['camed', 'num', 'rule', 'paragon', 'nubb']
  },
  {
    id: 'banking-fin',
    nameKh: 'ធនាគារ និងហិរញ្ញវត្ថុ',
    nameEn: 'Banking & Finance',
    category: 'Business & Economics',
    icon: 'bi-bank',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រធនាគារ និងហិរញ្ញវត្ថុ',
    shortDesc: 'សិក្សាពីទីផ្សារទុន ការគ្រប់គ្រងឥណទាន ការវិនិយោគ និងប្រព័ន្ធធនាគារ។',
    description: 'សិក្សាពីរបៀបដែលស្ថាប័នធនាគារ មីក្រូហិរញ្ញវត្ថុ និងក្រុមហ៊ុនវិនិយោគដំណើរការ រួមទាំងការវិភាគហានិភ័យឥណទាន ការគ្រប់គ្រងផលប័ត្រវិនិយោគ និងទីផ្សារមូលបត្រ។',
    whatLearn: [
      'ប្រតិបត្តិការធនាគារពាណិជ្ជ (Commercial Banking Operations)',
      'ការវិភាគឥណទាន និងគ្រប់គ្រងហានិភ័យ (Credit Risk Analysis)',
      'ការវិភាគទីផ្សារភាគហ៊ុន និងមូលបត្រ (Stock Market & Securities)',
      'បច្ចេកវិទ្យាហិរញ្ញវត្ថុ (FinTech Innovations)',
      'ហិរញ្ញវត្ថុអន្តរជាតិ (International Finance)'
    ],
    requiredSkills: ['ការវិភាគហិរញ្ញវត្ថុ', 'ការប្រាស្រ័យទាក់ទងជាមួយអតិថិជន', 'ការតាមដានព័ត៌មានសេដ្ឋកិច្ច'],
    suitableStudents: 'សិស្សដែលចង់ធ្វើការក្នុងវិស័យធនាគារ ក្រុមហ៊ុនមូលបត្រ ឬក្រុមហ៊ុនវិនិយោគទុន។',
    careerOpportunities: [
      'Credit / Loan Officer',
      'Financial Analyst',
      'Investment Banker',
      'Branch Manager',
      'Treasury Officer'
    ],
    entrySalary: '$350 - $650+ (Junior) / $1,400 - $2,800+ (Senior)',
    universities: ['num', 'rule', 'camed', 'paragon', 'norton']
  },
  {
    id: 'medicine',
    nameKh: 'វេជ្ជសាស្ត្រទូទៅ',
    nameEn: 'General Medicine',
    category: 'Health Science',
    icon: 'bi-heart-pulse',
    duration: '៨ ឆ្នាំ (Doctor of Medicine)',
    degree: 'សញ្ញាបត្រវេជ្ជបណ្ឌិត (MD)',
    shortDesc: 'បណ្តុះបណ្តាលវេជ្ជបណ្ឌិតក្នុងការធ្វើរោគវិនិច្ឆ័យ ព្យាបាល និងសង្គ្រោះជីវិតមនុស្ស។',
    description: 'ជំនាញបណ្តុះបណ្តាលវេជ្ជបណ្ឌិតដែលមានចំណេះដឹងវិទ្យាសាស្ត្រវេជ្ជសាស្ត្រទូលំទូលាយ ជំនាញគ្លីនិកជាក់ស្តែង និងសីលធម៌វិជ្ជាជីវៈខ្ពស់ក្នុងការពិនិត្យ ព្យាបាល និងការពារជំងឺជូនប្រជាពលរដ្ឋ។',
    whatLearn: [
      'កាយវិភាគសាស្ត្រ និងសរីរវិទ្យា (Human Anatomy & Physiology)',
      'រោគវិទ្យា និងឱសថសាស្ត្រគ្លីនិក (Pathology & Clinical Pharmacology)',
      'វេជ្ជសាស្ត្រផ្ទៃក្នុង និងការវះកាត់ (Internal Medicine & Surgery)',
      'សម្ភព និងរោគស្ត្រី មរណភាពកុមារ (Obstetrics & Pediatrics)',
      'ការអនុវត្តគ្លីនិកនៅមន្ទីរពេទ្យ (Hospital Internships & Residency)'
    ],
    requiredSkills: ['ការតស៊ូ អត់ធ្មត់ និងខិតខំរៀនសូត្រជាប់ជានិច្ច', 'សន្តានចិត្តមេត្តាធម៌ និងការយល់ចិត្តអ្នកជំងឺ', 'ភាពច្បាស់លាស់ និងការសម្រេចចិត្តលឿនក្នុងគ្រាអាសន្ន'],
    suitableStudents: 'សិស្សដែលមានពិន្ទុជីវវិទ្យា គីមីវិទ្យាល្អ ប្រលងបាក់ឌុបនិទ្ទេសខ្ពស់ និងមានបំណងប្រាថ្នាពិតប្រាកដក្នុងការជួយសង្គ្រោះជីវិតមនុស្ស។',
    careerOpportunities: [
      'General Medical Practitioner',
      'Specialist Doctor (Cardiologist, Surgeon, etc.)',
      'Public Health Advisor',
      'Clinical Researcher',
      'Hospital Medical Director'
    ],
    entrySalary: '$600 - $1,200+ (Junior) / $2,000 - $6,000+ (Specialist)',
    universities: ['uhs']
  },
  {
    id: 'dentistry',
    nameKh: 'ទន្តវទ្យាសាស្ត្រ (ពេទ្យធ្មេញ)',
    nameEn: 'Dentistry',
    category: 'Health Science',
    icon: 'bi-emoji-smile',
    duration: '៧ ឆ្នាំ (Doctor of Dental Surgery)',
    degree: 'ទន្តបណ្ឌិត (DDS)',
    shortDesc: 'ថែទាំ ព្យាបាល និងកែតម្រូវសុខភាពមាត់ធ្មេញ និងសោភ័ណភាពធ្មេញ។',
    description: 'បណ្តុះបណ្តាលទន្តបណ្ឌិតក្នុងការពិនិត្យ ព្យាបាលជំងឺធ្មេញ ជំងឺអញ្ចាញធ្មេញ ការវះកាត់ឆ្អឹងថ្គាម និងការតម្រង់ធ្មេញដើម្បីសោភ័ណភាព។',
    whatLearn: [
      'កាយវិភាគសាស្ត្រក្បាល ក និងធ្មេញ',
      'បច្ចេកទេសព្យាបាលធ្មេញ និងរោគអញ្ចាញធ្មេញ',
      'ការវះកាត់មាត់ និងថ្គាម',
      'ការកែតម្រង់ធ្មេញ (Orthodontics)',
      'ការដាំបង្គោលធ្មេញ (Dental Implants)'
    ],
    requiredSkills: ['ភាពប៉ិនប្រសប់នៃម្រាមដៃ (Manual Dexterity)', 'ភ្នែកសិល្បៈ និងភាពលម្អិត', 'ការទំនាក់ទំនងប្រកបដោយភាពកក់ក្តៅ'],
    suitableStudents: 'សិស្សដែលចូលចិត្តវិទ្យាសាស្ត្រសុខាភិបាល ប៉ុន្តែចូលចិត្តការងារអនុវត្តផ្ទាល់ដៃ និងសោភ័ណភាព។',
    careerOpportunities: [
      'General Dentist',
      'Orthodontist Specialist',
      'Dental Clinic Owner',
      'Hospital Dental Consultant'
    ],
    entrySalary: '$500 - $1,000+ (Junior) / $2,500 - $5,000+ (Private Clinic)',
    universities: ['uhs']
  },
  {
    id: 'civil-eng',
    nameKh: 'វិស្វកម្មសំណង់ស៊ីវិល',
    nameEn: 'Civil Engineering',
    category: 'Engineering & Architecture',
    icon: 'bi-building',
    duration: '៥ ឆ្នាំ (Engineering Degree)',
    degree: 'សញ្ញាបត្រវិស្វករ (Ingénieur)',
    shortDesc: 'រចនា ប្លង់ និងត្រួតពិនិត្យការសាងសង់អគារ ស្ពាន ផ្លូវថ្នល់ និងទំនប់ទឹក។',
    description: 'ជំនាញដែលកសាងហេដ្ឋារចនាសម្ព័ន្ធប្រទេស រួមមានអគារពាណិជ្ជកម្មខ្ពស់ៗ ស្ពាន ផ្លូវថ្នល់ ព្រលានយន្តហោះ និងប្រព័ន្ធធារាសាស្ត្រ ដោយធានាបាននូវសុវត្ថិភាព គុណភាព និងការសន្សំសំចៃ។',
    whatLearn: [
      'មេកានិចសំណង់ និងភាពរឹងមាំនៃសម្ភារៈ (Structural Mechanics)',
      'ការគណនាបេតុងអាម៉េ និងរចនាសម្ព័ន្ធដែក (Reinforced Concrete & Steel Design)',
      'ភូគព្ភសាស្ត្រគ្រឹះសំណង់ (Soil Mechanics & Foundations)',
      'បច្ចេកវិទ្យា CAD, BIM & Revit',
      'ការគ្រប់គ្រងគម្រោងដ្ឋានសាងសង់ (Construction Project Management)'
    ],
    requiredSkills: ['ការគណនាគណិតវិទ្យា និងរូបវិទ្យា', 'ការមើលប្លង់ស្ថាបត្យកម្ម', 'ការចុះត្រួតពិនិត្យការដ្ឋានជាក់ស្តែង'],
    suitableStudents: 'សិស្សដែលស្រលាញ់វិស័យសំណង់ ចូលចិត្តការងារបច្ចេកទេស និងមិនខ្លាចការចុះការដ្ឋានជាក់ស្តែង។',
    careerOpportunities: [
      'Structural Design Engineer',
      'Site Construction Engineer',
      'Project Planning Manager',
      'Quality Control / QA-QC Engineer',
      'Infrastructure Consultant'
    ],
    entrySalary: '$400 - $700+ (Junior) / $1,500 - $3,500+ (Senior)',
    universities: ['itc', 'paragon', 'norton']
  },
  {
    id: 'arch',
    nameKh: 'ស្ថាបត្យកម្ម និងនគរូបនីយកម្ម',
    nameEn: 'Architecture & Urban Planning',
    category: 'Engineering & Architecture',
    icon: 'bi-compass',
    duration: '៥ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រស្ថាបត្យកម្ម',
    shortDesc: 'គូរ និងរចនាម៉ូដអគារ លំហរស់នៅ និងរៀបចំគម្រោងប្លង់ទីក្រុង។',
    description: 'ការរួមបញ្ចូលគ្នារវាងសិល្បៈច្នៃប្រឌិត និងវិទ្យាសាស្ត្រ ដើម្បីរចនាលំហរស់នៅ អគារលំនៅដ្ឋាន និងប្លង់ទីក្រុងទំនើបស្របតាមបរិស្ថាន និងវប្បធម៌។',
    whatLearn: [
      'ស្ទូឌីយោរចនាស្ថាបត្យកម្ម (Architectural Design Studio)',
      'ប្រវត្តិសាស្ត្រស្ថាបត្យកម្មខ្មែរ និងសកល',
      'ការគូរប្លង់ 3D (AutoCAD, SketchUp, Lumion, Rhino)',
      'ការរចនាអគារបៃតង និងនិរន្តរភាព (Sustainable Building)',
      'នគរូបនីយកម្ម និងការរៀបចំដែនដី'
    ],
    requiredSkills: ['គំនិតច្នៃប្រឌិត និងសោភ័ណភាព', 'ជំនាញគំនូរ និងរូបភាពលំហ (Spatial Visualization)', 'ការយល់ដឹងពីសម្ភារៈសំណង់'],
    suitableStudents: 'សិស្សដែលមានទេពកោសល្យសិល្បៈ ចូលចិត្តគូររូប រចនាម៉ូដ និងស្រលាញ់អគារស្អាតៗ។',
    careerOpportunities: [
      'Architectural Designer',
      'Interior Designer',
      'Urban Planner',
      '3D Architectural Visualizer',
      'Landscape Architect'
    ],
    entrySalary: '$400 - $750+ (Junior) / $1,500 - $3,500+ (Senior)',
    universities: ['paragon', 'itc', 'norton', 'rupp']
  },
  {
    id: 'law',
    nameKh: 'នីតិសាស្ត្រ (ច្បាប់)',
    nameEn: 'Law',
    category: 'Social Science & Humanities',
    icon: 'bi-file-earmark-ruled',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រនីតិសាស្ត្រ (LL.B)',
    shortDesc: 'សិក្សាពីច្បាប់រដ្ឋធម្មនុញ្ញ ច្បាប់ពាណិជ្ជកម្ម ច្បាប់ព្រហ្មទណ្ឌ និងនីតិវិធីតុលាការ។',
    description: 'បណ្តុះបណ្តាលអ្នកច្បាប់ មេធាវី និងចៅក្រម ដើម្បីការពារយុត្តិធម៌សង្គម ផ្តល់ប្រឹក្សាផ្លូវច្បាប់ដល់អាជីវកម្ម និងរៀបចំកិច្ចសន្យាពាណិជ្ជកម្ម។',
    whatLearn: [
      'នីតិរដ្ឋធម្មនុញ្ញ និងរដ្ឋបាល (Constitutional & Administrative Law)',
      'នីតិព្រហ្មទណ្ឌ និងនីតិវិធីព្រហ្មទណ្ឌ (Criminal Law & Procedure)',
      'នីតិពាណិជ្ជកម្ម និងកិច្ចសន្យា (Commercial & Contract Law)',
      'នីតិការងារ និងពាណិជ្ជកម្មអន្តរជាតិ (Labor & International Trade Law)',
      'ការតាក់តែងកិច្ចសន្យា និងការដោះស្រាយវិវាទ (Contract Drafting & Dispute Resolution)'
    ],
    requiredSkills: ['ការអាន និងស្រាវជ្រាវឯកសារយ៉ាងច្រើន', 'ការនិយាយ និងការតស៊ូមតិប្រកបដោយហេតុផល', 'ការវិភាគច្បាប់ម៉ត់ចត់'],
    suitableStudents: 'សិស្សដែលស្រលាញ់យុត្តិធម៌ ពូកែអាន ពូកែនិយាយវែកញែក និងចង់ក្លាយជាមេធាវី ឬទីប្រឹក្សាច្បាប់។',
    careerOpportunities: [
      'Legal Advisor / In-house Counsel',
      'Attorney-at-Law (Lawyer)',
      'Judge / Prosecutor (via Royal Academy of Judicial Professions)',
      'Compliance Officer',
      'Notary Public'
    ],
    entrySalary: '$350 - $700+ (Junior) / $1,500 - $3,500+ (Senior)',
    universities: ['rule', 'rupp']
  },
  {
    id: 'intl-rel',
    nameKh: 'ទំនាក់ទំនងអន្តរជាតិ',
    nameEn: 'International Relations',
    category: 'Social Science & Humanities',
    icon: 'bi-globe-americas',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រទំនាក់ទំនងអន្តរជាតិ',
    shortDesc: 'សិក្សាពីនយោបាយពិភពលោក ការទូត អង្គការអន្តរជាតិ និងសេដ្ឋកិច្ចសកល។',
    description: 'ផ្តល់ការយល់ដឹងស៊ីជម្រៅអំពីទំនាក់ទំនងរវាងបណ្តាប្រទេស មហាអំណាចពិភពលោក ការទូត សន្តិសុខអន្តរជាតិ និងសេដ្ឋកិច្ចសកលភាវូបនីយកម្ម។',
    whatLearn: [
      'ទ្រឹស្តីទំនាក់ទំនងអន្តរជាតិ (Theories of International Relations)',
      'ការទូត និងការចរចាអន្តរជាតិ (Diplomacy & International Negotiations)',
      'ច្បាប់អន្តរជាតិសាធារណៈ (Public International Law)',
      'នយោបាយការបរទេសកម្ពុជា និងអាស៊ាន (ASEAN & Cambodian Foreign Policy)',
      'សេដ្ឋកិច្ចនយោបាយសកល (Global Political Economy)'
    ],
    requiredSkills: ['ភាសាអង់គ្លេសកម្រិតខ្ពស់', 'ការយល់ដឹងពីស្ថានការណ៍ពិភពលោក', 'ការតស៊ូមតិ និងការសរសេររបាយការណ៍វិភាគ'],
    suitableStudents: 'សិស្សដែលចូលចិត្តតាមដានព័ត៌មានអន្តរជាតិ ចង់ធ្វើការក្នុងអង្គការសហប្រជាជាតិ (UN) ស្ថានទូត ឬក្រសួងការបរទេស។',
    careerOpportunities: [
      'Diplomat / Foreign Affairs Officer',
      'UN / NGO Project Officer',
      'International Policy Analyst',
      'Corporate Relations Specialist',
      'Journalist / International Correspondent'
    ],
    entrySalary: '$400 - $800+ (Junior) / $1,500 - $3,500+ (Senior)',
    universities: ['rupp', 'rule', 'paragon', 'aupp']
  },
  {
    id: 'agri-sci',
    nameKh: 'វិទ្យាសាស្ត្រកសិកម្ម',
    nameEn: 'Agricultural Science',
    category: 'Agriculture',
    icon: 'bi-flower1',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្រវិទ្យាសាស្ត្រកសិកម្ម',
    shortDesc: 'ស្រាវជ្រាវបច្ចេកវិទ្យាដាំដុះ ដំណាំកសិកម្មទំនើប និងការការពារសត្វល្អិត។',
    description: 'ជំនាញសំខាន់បំផុតសម្រាប់សេដ្ឋកិច្ចកម្ពុជា ក្នុងការអនុវត្តបច្ចេកវិទ្យាទំនើបក្នុងការបង្កាត់ពូជដំណាំ ការគ្រប់គ្រងដី ជីជាតិ និងកសិកម្មឆ្លាតវៃ (Smart Farming)។',
    whatLearn: [
      'សរីរវិទ្យាដំណាំ និងការបង្កាត់ពូជ (Plant Physiology & Breeding)',
      'វិទ្យាសាស្ត្រដី និងជីកសិកម្ម (Soil Science & Fertilizers)',
      'កសិកម្មវៃឆ្លាត និងផ្ទះកញ្ចក់ (Smart Farming & Hydroponics)',
      'ការគ្រប់គ្រងសត្វល្អិតចង្រៃ (Integrated Pest Management)',
      'ខ្សែច្រវាក់តម្លៃកសិកម្ម (Agricultural Value Chain)'
    ],
    requiredSkills: ['ការស្រាវជ្រាវជីវវិទ្យា', 'ការអនុវត្តការងារផ្ទាល់នៅចម្ការ', 'ការយល់ដឹងពីបរិស្ថាន'],
    suitableStudents: 'សិស្សដែលស្រលាញ់ធម្មជាតិ ចង់កែប្រែកសិកម្មបែបបុរាណទៅជាកសិកម្មបច្ចេកវិទ្យាខ្ពស់ និងជួយកសិករខ្មែរ។',
    careerOpportunities: [
      'Agronomist / Crop Specialist',
      'Smart Farm Manager',
      'Agricultural Research Scientist',
      'Agrochemical Technical Advisor',
      'Agri-Tech Entrepreneur'
    ],
    entrySalary: '$350 - $650+ (Junior) / $1,200 - $2,500+ (Senior)',
    universities: ['rua', 'nubb']
  },
  {
    id: 'food-tech',
    nameKh: 'បច្ចេកវិទ្យាអាហារ',
    nameEn: 'Food Technology',
    category: 'Agriculture',
    icon: 'bi-basket',
    duration: '៤ ឆ្នាំ (Bachelor)',
    degree: 'បរិញ្ញាបត្របច្ចេកវិទ្យាអាហារ',
    shortDesc: 'កែច្នៃ វេចខ្ចប់ និងត្រួតពិនិត្យស្តង់ដារសុវត្ថិភាពម្ហូបអាហារ។',
    description: 'អនុវត្តវិទ្យាសាស្ត្រគីមី ជីវសាស្ត្រ និងវិស្វកម្ម ក្នុងការកែច្នៃផលិតផលកសិកម្មទៅជាចំណីអាហារប្រកបដោយសុវត្ថិភាព គុណភាព និងរក្សាទុកបានយូរសម្រាប់ទីផ្សារក្នុងស្រុក និងនាំចេញ។',
    whatLearn: [
      'មីក្រូជីវសាស្ត្រអាហារ (Food Microbiology)',
      'គីមីវិទ្យាអាហារ និងអាហារូបត្ថម្ភ (Food Chemistry & Nutrition)',
      'ដំណើរការកែច្នៃអាហារ (Food Processing & Preservation)',
      'ស្តង់ដារសុវត្ថិភាពចំណីអាហារ (HACCP, ISO 22000)',
      'ការរចនា និងបច្ចេកវិទ្យាវេចខ្ចប់អាហារ'
    ],
    requiredSkills: ['ចំណេះដឹងគីមី និងជីវវិទ្យា', 'ភាពម៉ត់ចត់ផ្នែកអនាម័យ និងសុវត្ថិភាព', 'ការត្រួតពិនិត្យគុណភាព'],
    suitableStudents: 'សិស្សដែលចូលចិត្តការពិសោធន៍ក្នុងបន្ទប់ Lab និងចង់អភិវឌ្ឍវិស័យកែច្នៃម្ហូបអាហារនៅកម្ពុជា។',
    careerOpportunities: [
      'Food Quality Assurance (QA/QC) Manager',
      'Food Product Development Scientist (R&D)',
      'Food Safety Auditor',
      'Food Processing Plant Supervisor'
    ],
    entrySalary: '$350 - $650+ (Junior) / $1,200 - $2,500+ (Senior)',
    universities: ['itc', 'rua', 'rupp']
  }
];

const DEFAULT_SCHOLARSHIPS = [
  {
    id: 'moeys-state-2026',
    nameKh: 'អាហារូបករណ៍រដ្ឋាភិបាលកម្ពុជា (MoEYS)',
    nameEn: 'MoEYS Government Scholarship 2026',
    university: 'គ្រឹះស្ថានឧត្តមសិក្សារដ្ឋទាំងអស់ (RUPP, ITC, NUM, RULE, etc.)',
    degree: 'Bachelor',
    deadline: '2026-10-15',
    openingDate: '2026-08-01',
    status: 'Open',
    benefits: 'ឧបត្ថម្ភថ្លៃសិក្សា ១០០% រយៈពេល ៤-៥ ឆ្នាំពេញ',
    description: 'អាហារូបករណ៍របស់រាជរដ្ឋាភិបាលកម្ពុជា តាមរយៈក្រសួងអប់រំ យុវជន និងកីឡា ផ្តល់ជូនសិស្សានុសិស្សដែលបានប្រឡងជាប់សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប) ផ្អែកលើនិទ្ទេស និងអាទិភាពសិស្សនារី សិស្សមកពីតំបន់ដាច់ស្រយាល និងសិស្សក្រីក្រ។',
    eligibility: [
      'ជាសិស្សដែលបានប្រឡងជាប់បាក់ឌុបឆ្នាំសិក្សាថ្មីៗ',
      'មានសញ្ជាតិខ្មែរ',
      'បំពេញទម្រង់បែបបទអាហារូបករណ៍តាមការកំណត់របស់ក្រសួង'
    ],
    requiredDocs: [
      'សញ្ញាបត្របាក់ឌុប ឬវិញ្ញាបនបត្របណ្តោះអាសន្ន',
      'អត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ ឬសំបុត្រកំណើត',
      'រូបថត 4x6 ចំនួន ៤ សន្លឹក',
      'ពាក្យស្នើសុំអាហារូបករណ៍របស់ក្រសួង'
    ],
    applicationMethod: 'ដាក់ពាក្យតាមរយៈវិទ្យាល័យដែលសាមីខ្លួនបានរៀន ឬតាមប្រព័ន្ធអនឡាញរបស់ក្រសួងអប់រំ។',
    url: 'https://www.moeys.gov.kh'
  },
  {
    id: 'techo-digital-cadt',
    nameKh: 'អាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោ (CADT)',
    nameEn: 'Techo Digital Talent Scholarship',
    university: 'បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)',
    degree: 'Bachelor',
    deadline: '2026-11-20',
    openingDate: '2026-09-01',
    status: 'Open',
    benefits: 'ថ្លៃសិក្សា ១០០% ($10,000+) + ប្រាក់ឧបត្ថម្ភប្រចាំខែ + កុំព្យូទ័រ Laptop',
    description: 'អាហារូបករណ៍ដ៏មានកិត្យានុភាពខ្ពស់ ក្រោមគំនិតផ្តួចផ្តើមរបស់រាជរដ្ឋាភិបាល ផ្តល់ជូនសិស្សឆ្នើមទូទាំងប្រទេសដើម្បីសិក្សាជំនាញ AI, Cyber Security, Software Engineering និង Data Science នៅ CADT។',
    eligibility: [
      'សិស្សជាប់បាក់ឌុបនិទ្ទេស A, B ឬ C (អាទិភាពសិស្សពូកែគណិតវិទ្យា)',
      'ឆ្លងកាត់ការប្រឡងតេស្តសមត្ថភាព (Maths, English, Logic)',
      'ឆ្លងកាត់ការសម្ភាសន៍ផ្ទាល់'
    ],
    requiredDocs: [
      'ព្រឹត្តិបត្រពិន្ទុបាក់ឌុប',
      'លិខិតបញ្ជាក់ការសិក្សាពីវិទ្យាល័យ',
      'អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន',
      'ប្រវត្តិរូបសង្ខេប (CV) និងលិខិតលើកទឹកចិត្ត (Cover Letter)'
    ],
    applicationMethod: 'ចុះឈ្មោះ និងបំពេញពាក្យតាមរយៈគេហទំព័រផ្លូវការរបស់ CADT។',
    url: 'https://www.cadt.edu.kh'
  },
  {
    id: 'paragon-excellence',
    nameKh: 'អាហារូបករណ៍សិស្សឆ្នើម Paragon U 100%',
    nameEn: 'Paragon U Academic Excellence Scholarship',
    university: 'សាកលវិទ្យាល័យអន្តរជាតិផារ៉ាហ្គន (Paragon.U)',
    degree: 'Bachelor',
    deadline: '2026-10-30',
    openingDate: '2026-08-15',
    status: 'Closing Soon',
    benefits: 'ថ្លៃសិក្សា ១០០%, ៧៥%, ៥០% រយៈពេល ៤ ឆ្នាំ',
    description: 'ការប្រឡងអាហារូបករណ៍ប្រចាំឆ្នាំរបស់ Paragon.U សម្រាប់សិស្សវិទ្យាល័យទូទាំងប្រទេស ដើម្បីសិក្សាកម្មវិធីស្តង់ដារអន្តរជាតិជាភាសាអង់គ្លេស។',
    eligibility: [
      'សិស្សថ្នាក់ទី១២ ឬសិស្សដែលទើបបញ្ចប់បាក់ឌុប',
      'ឆ្លងកាត់ការប្រឡងប្រជែងអាហារូបករណ៍ (Paragon Scholarship Exam)'
    ],
    requiredDocs: [
      'វិញ្ញាបនបត្របាក់ឌុប ឬលិខិតបញ្ជាក់ការសិក្សា',
      'រូបថត 4x6 ផ្ទៃខាងក្រោយពណ៌ស',
      'អត្តសញ្ញាណប័ណ្ណ'
    ],
    applicationMethod: 'ចុះឈ្មោះប្រឡងតាមអនឡាញនៅលើគេហទំព័រ Paragon IU។',
    url: 'https://paragoniu.edu.kh'
  },
  {
    id: 'camed-accounting-merit',
    nameKh: 'អាហារូបករណ៍ទេពកោសល្យគណនេយ្យ CamEd',
    nameEn: 'CamEd Accounting & Finance Merit Scholarship',
    university: 'វិទ្យាស្ថាន ខេមអេដ (CamEd Business School)',
    degree: 'Bachelor',
    deadline: '2026-11-05',
    openingDate: '2026-09-10',
    status: 'Open',
    benefits: 'អាហារូបករណ៍ថ្លៃសិក្សា ១០០% និង ៥០% សម្រាប់កម្មវិធី BA + CAT/ACCA',
    description: 'ផ្តល់ជូនសិស្សានុសិស្សដែលស្រលាញ់វិជ្ជាជីវៈគណនេយ្យ ហិរញ្ញវត្ថុ និងសវនកម្មកម្រិតអន្តរជាតិ ដើម្បីក្លាយជាអ្នកជំនាញដែលទទួលស្គាល់ដោយ ACCA។',
    eligibility: [
      'សិស្សនិទ្ទេស A ឬ B ក្នុងសម័យប្រឡងបាក់ឌុប',
      'មានសមត្ថភាពភាសាអង់គ្លេសល្អ'
    ],
    requiredDocs: [
      'ព្រឹត្តិបត្រពិន្ទុបាក់ឌុប',
      'លិខិតបញ្ជាក់ភាសាអង់គ្លេស (បើមាន)',
      'អត្តសញ្ញាណប័ណ្ណ'
    ],
    applicationMethod: 'បំពេញពាក្យស្នើសុំនៅការិយាល័យ CamEd ឬតាមគេហទំព័រ។',
    url: 'https://www.cam-ed.com'
  },
  {
    id: 'mext-japan-cambodia',
    nameKh: 'អាហារូបករណ៍រដ្ឋាភិបាលជប៉ុន MEXT 2027',
    nameEn: 'Japanese Government MEXT Scholarship',
    university: 'សាកលវិទ្យាល័យឈានមុខនៅប្រទេសជប៉ុន (Tokyo, Kyoto, Osaka)',
    degree: 'Bachelor',
    deadline: '2026-06-15',
    openingDate: '2026-04-01',
    status: 'Closed',
    benefits: 'ថ្លៃសិក្សា ១០០% + សំបុត្រយន្តហោះទៅមក + ប្រាក់ឧបត្ថម្ភប្រចាំខែ ¥120,000/ខែ',
    description: 'អាហារូបករណ៍ដ៏ល្បីល្បាញរបស់រដ្ឋាភិបាលជប៉ុន ផ្តល់ជូនសិស្សកម្ពុជាឆ្នើមទៅបន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រនៅប្រទេសជប៉ុន។',
    eligibility: [
      'សញ្ជាតិខ្មែរ អាយុចន្លោះពី ១៧ ដល់ ២៥ ឆ្នាំ',
      'បញ្ចប់មធ្យមសិក្សាទុតិយភូមិដោយទទួលបានលទ្ធផលល្អ',
      'ឆ្លងកាត់ការប្រឡងសរសេរ និងសម្ភាសន៍នៅស្ថានទូតជប៉ុន'
    ],
    requiredDocs: [
      'ពាក្យសុំ MEXT Application Form',
      'វិញ្ញាបនបត្រសុខភាពផ្លូវការ',
      'លិខិតណែនាំពីសាស្ត្រាចារ្យ ឬនាយកសាលា',
      'ព្រឹត្តិបត្រពិន្ទុបកប្រែជាភាសាអង់គ្លេស'
    ],
    applicationMethod: 'ដាក់ពាក្យផ្ទាល់នៅស្ថានទូតជប៉ុនប្រចាំព្រះរាជាណាចក្រកម្ពុជា។',
    url: 'https://www.kh.emb-japan.go.jp'
  },
  {
    id: 'australia-awards-kh',
    nameKh: 'អាហារូបករណ៍រដ្ឋាភិបាលអូស្ត្រាលី (Australia Awards)',
    nameEn: 'Australia Awards Cambodia',
    university: 'សាកលវិទ្យាល័យកំពូលនៅប្រទេសអូស្ត្រាលី (Melbourne, Sydney, ANU)',
    degree: 'Master',
    deadline: '2026-11-30',
    openingDate: '2026-09-01',
    status: 'Open',
    benefits: 'ថ្លៃសិក្សា ១០០% + ធានារ៉ាប់រងសុខភាព + ប្រាក់ឧបត្ថម្ភស្នាក់នៅ + សំបុត្រយន្តហោះ',
    description: 'អាហារូបករណ៍អភិវឌ្ឍន៍ធនធានមនុស្សសម្រាប់ថ្នាក់អនុបណ្ឌិតនៅប្រទេសអូស្ត្រាលី លើជំនាញអប់រំ សុខាភិបាល កសិកម្ម និងបរិស្ថាន។',
    eligibility: [
      'មានសញ្ញាបត្របរិញ្ញាបត្រ',
      'មានបទពិសោធន៍ការងារយ៉ាងតិច ២ ឆ្នាំ',
      'ពិន្ទុ IELTS 6.5 ឡើងទៅ'
    ],
    requiredDocs: [
      'សញ្ញាបត្រ និងព្រឹត្តិបត្រពិន្ទុបរិញ្ញាបត្រ',
      'លទ្ធផលតេស្ត IELTS/TOEFL',
      'លិខិតបញ្ជាក់ការងារ និងលិខិតយោង ២ ច្បាប់'
    ],
    applicationMethod: 'ដាក់ពាក្យតាមប្រព័ន្ធ OASIS អនឡាញ។',
    url: 'https://www.australiaawardscambodia.org'
  }
];

const DEFAULT_NEWS = [
  {
    id: 'news-1',
    title: 'ក្រសួងអប់រំប្រកាសកាលបរិច្ឆេទប្រឡងបាក់ឌុប និងគោលការណ៍អាហារូបករណ៍ថ្មី',
    category: 'Education News',
    date: '2026-09-25',
    image: '/assets/images/banners/hero.jpg',
    status: 'Published',
    description: 'ក្រសួងអប់រំ យុវជន និងកីឡា បានចេញសេចក្តីប្រកាសព័ត៌មានស្តីពីការរៀបចំការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ព្រមទាំងការបែងចែកកូតាអាហារូបករណ៍ថ្នាក់បរិញ្ញាបត្រទូទាំងប្រទេស។'
  },
  {
    id: 'news-2',
    title: 'ពិព័រណ៍សាកលវិទ្យាល័យ និងការណែនាំជំនាញសិក្សាប្រចាំឆ្នាំ ២០២៦ នៅភ្នំពេញ',
    category: 'University News',
    date: '2026-09-20',
    image: '/assets/images/banners/scholarships.jpg',
    status: 'Published',
    description: 'សាកលវិទ្យាល័យជាង ៣០ នឹងចូលរួមតាំងបង្ហាញព័ត៌មានជំនាញ និងផ្តល់ការប្រឹក្សាផ្ទាល់ដល់សិស្សវិទ្យាល័យដោយឥតគិតថ្លៃនៅសាលពិព័រណ៍កោះពេជ្រ។'
  },
  {
    id: 'news-3',
    title: 'CADT បើកទទួលពាក្យអាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោជំនាន់ទី ៦',
    category: 'Scholarship News',
    date: '2026-09-18',
    image: '/assets/images/universities/paragon.jpg',
    status: 'Published',
    description: 'ឱកាសទទួលបានការឧបត្ថម្ភ ១០០% ថ្លៃសិក្សា និងប្រាក់ឧបត្ថម្ភប្រចាំខែសម្រាប់សិស្សដែលស្រលាញ់ជំនាញ AI និងបច្ចេកវិទ្យាឌីជីថល។'
  },
  {
    id: 'news-4',
    title: 'របាយការណ៍ទីផ្សារការងារ៖ ជំនាញបច្ចេកវិទ្យា និងហិរញ្ញវត្ថុនៅតែកើនឡើងតម្រូវការខ្ពស់',
    category: 'Announcement',
    date: '2026-09-10',
    image: '/assets/images/universities/itc.jpg',
    status: 'Published',
    description: 'ការស្ទង់មតិពីក្រុមហ៊ុនធំៗនៅកម្ពុជាបង្ហាញថា វិស្វករសូហ្វវែរ អ្នកជំនាញសន្តិសុខស៊ីប័រ និងគណនេយ្យករជំនាញ មានអត្រាទទួលបានការងារ ៩៥% ក្រោយបញ្ចប់ការសិក្សា។'
  }
];

const DEFAULT_USERS = [
  {
    id: 'usr-1',
    name: 'លឹម មករា (Makar Lim)',
    email: 'makara.lim@student.kh',
    role: 'Admin',
    status: 'Active',
    joinedDate: '2026-01-15',
    phone: '+855 12 345 678',
    avatar: '👨‍🎓'
  },
  {
    id: 'usr-2',
    name: 'សូចិត្រ វ៉េត (Socheat Veth)',
    email: 'socheatveth24@gmail.com',
    role: 'User',
    status: 'Active',
    joinedDate: '2026-03-10',
    phone: '+855 98 765 432',
    avatar: '🧑‍💻'
  },
  {
    id: 'usr-3',
    name: 'យ៉យ អារីយ៉ា (Ariya Yoy)',
    email: 'ariya.yoy@student.kh',
    role: 'Admin',
    status: 'Active',
    joinedDate: '2026-02-01',
    phone: '+855 77 112 233',
    avatar: '👩‍🎓'
  },
  {
    id: 'usr-4',
    name: 'ញុឹប រ៉ានី (Rany Nheb)',
    email: 'rany.nheb@gmail.com',
    role: 'User',
    status: 'Active',
    joinedDate: '2026-04-12',
    phone: '+855 89 223 344',
    avatar: '👩‍🏫'
  },
  {
    id: 'usr-5',
    name: 'លឹម យិបវៃ (Yipwai Lim)',
    email: 'yipwai.lim@gmail.com',
    role: 'User',
    status: 'Active',
    joinedDate: '2026-05-20',
    phone: '+855 16 334 455',
    avatar: '👨‍💻'
  },
  {
    id: 'usr-6',
    name: 'ម៉េង អ៊ុយសួង (Ouysuong Meng)',
    email: 'ouysuong.meng@gmail.com',
    role: 'User',
    status: 'Active',
    joinedDate: '2026-06-05',
    phone: '+855 92 445 566',
    avatar: '👨‍🔬'
  },
  {
    id: 'usr-7',
    name: 'ចាន់ សុភ័ក្ត្រ (Sopheak Chan)',
    email: 'sopheak.chan@student.kh',
    role: 'User',
    status: 'Disabled',
    joinedDate: '2026-07-01',
    phone: '+855 11 556 677',
    avatar: '🧑'
  }
];

const DEFAULT_CATEGORIES = [
  { id: 'cat-1', name: 'Computer & Technology', nameKh: 'កុំព្យូទ័រ និងបច្ចេកវិទ្យា', count: 6, icon: 'bi-laptop' },
  { id: 'cat-2', name: 'Engineering & Architecture', nameKh: 'វិស្វកម្ម និងស្ថាបត្យកម្ម', count: 3, icon: 'bi-gear-wide-connected' },
  { id: 'cat-3', name: 'Business & Economics', nameKh: 'ធុរកិច្ច និងសេដ្ឋកិច្ច', count: 4, icon: 'bi-graph-up-arrow' },
  { id: 'cat-4', name: 'Health Science', nameKh: 'វិទ្យាសាស្ត្រសុខាភិបាល', count: 2, icon: 'bi-heart-pulse' },
  { id: 'cat-5', name: 'Social Science & Humanities', nameKh: 'វិទ្យាសាស្ត្រសង្គម និងមនុស្សសាស្ត្រ', count: 2, icon: 'bi-book' },
  { id: 'cat-6', name: 'Agriculture', nameKh: 'កសិកម្ម និងកែច្នៃអាហារ', count: 2, icon: 'bi-tree' }
];

const DEFAULT_SETTINGS = {
  siteName: 'NEXT STEP – ជំហានបន្ទាប់',
  siteDesc: 'វេទិកាណែនាំការអប់រំសម្រាប់សិស្សវិទ្យាល័យកម្ពុជាក្នុងការស្វែងរកសាកលវិទ្យាល័យ ជំនាញ អាហារូបករណ៍ និងមាគ៌ាអាជីព។',
  email: 'contact@nextstep.edu.kh',
  phone: '+855 (0)23 999 888',
  address: 'រាជធានីភ្នំពេញ ព្រះរាជាណាចក្រកម្ពុជា (Phnom Penh, Cambodia)',
  facebook: 'https://facebook.com/nextstepcambodia',
  telegram: 'https://t.me/nextstep_kh',
  instagram: 'https://instagram.com/nextstep_kh'
};

// Data Management Engine with LocalStorage Persistence
const NextStepData = {
  // Universities
  getUniversities() {
    const data = localStorage.getItem('ns_universities');
    if (!data) {
      localStorage.setItem('ns_universities', JSON.stringify(DEFAULT_UNIVERSITIES));
      return DEFAULT_UNIVERSITIES;
    }
    return JSON.parse(data);
  },
  getUniversityById(id) {
    const list = this.getUniversities();
    return list.find(u => u.id === id) || null;
  },
  saveUniversity(uni) {
    const list = this.getUniversities();
    const index = list.findIndex(u => u.id === uni.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...uni };
    } else {
      list.unshift(uni);
    }
    localStorage.setItem('ns_universities', JSON.stringify(list));
    return true;
  },
  deleteUniversity(id) {
    let list = this.getUniversities();
    list = list.filter(u => u.id !== id);
    localStorage.setItem('ns_universities', JSON.stringify(list));
    return true;
  },

  // Majors
  getMajors() {
    const data = localStorage.getItem('ns_majors');
    if (!data) {
      localStorage.setItem('ns_majors', JSON.stringify(DEFAULT_MAJORS));
      return DEFAULT_MAJORS;
    }
    return JSON.parse(data);
  },
  getMajorById(id) {
    const list = this.getMajors();
    return list.find(m => m.id === id) || null;
  },
  saveMajor(major) {
    const list = this.getMajors();
    const index = list.findIndex(m => m.id === major.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...major };
    } else {
      list.unshift(major);
    }
    localStorage.setItem('ns_majors', JSON.stringify(list));
    return true;
  },
  deleteMajor(id) {
    let list = this.getMajors();
    list = list.filter(m => m.id !== id);
    localStorage.setItem('ns_majors', JSON.stringify(list));
    return true;
  },

  // Scholarships
  getScholarships() {
    const data = localStorage.getItem('ns_scholarships');
    if (!data) {
      localStorage.setItem('ns_scholarships', JSON.stringify(DEFAULT_SCHOLARSHIPS));
      return DEFAULT_SCHOLARSHIPS;
    }
    return JSON.parse(data);
  },
  getScholarshipById(id) {
    const list = this.getScholarships();
    return list.find(s => s.id === id) || null;
  },
  saveScholarship(sch) {
    const list = this.getScholarships();
    const index = list.findIndex(s => s.id === sch.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...sch };
    } else {
      list.unshift(sch);
    }
    localStorage.setItem('ns_scholarships', JSON.stringify(list));
    return true;
  },
  deleteScholarship(id) {
    let list = this.getScholarships();
    list = list.filter(s => s.id !== id);
    localStorage.setItem('ns_scholarships', JSON.stringify(list));
    return true;
  },

  // News
  getNews() {
    const data = localStorage.getItem('ns_news');
    if (!data) {
      localStorage.setItem('ns_news', JSON.stringify(DEFAULT_NEWS));
      return DEFAULT_NEWS;
    }
    return JSON.parse(data);
  },
  saveNews(item) {
    const list = this.getNews();
    const index = list.findIndex(n => n.id === item.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...item };
    } else {
      list.unshift(item);
    }
    localStorage.setItem('ns_news', JSON.stringify(list));
    return true;
  },
  deleteNews(id) {
    let list = this.getNews();
    list = list.filter(n => n.id !== id);
    localStorage.setItem('ns_news', JSON.stringify(list));
    return true;
  },

  // Users
  getUsers() {
    const data = localStorage.getItem('ns_users');
    if (!data) {
      localStorage.setItem('ns_users', JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    return JSON.parse(data);
  },
  saveUser(user) {
    const list = this.getUsers();
    const index = list.findIndex(u => u.id === user.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...user };
    } else {
      list.unshift(user);
    }
    localStorage.setItem('ns_users', JSON.stringify(list));
    return true;
  },
  deleteUser(id) {
    let list = this.getUsers();
    list = list.filter(u => u.id !== id);
    localStorage.setItem('ns_users', JSON.stringify(list));
    return true;
  },

  // Categories
  getCategories() {
    const data = localStorage.getItem('ns_categories');
    if (!data) {
      localStorage.setItem('ns_categories', JSON.stringify(DEFAULT_CATEGORIES));
      return DEFAULT_CATEGORIES;
    }
    return JSON.parse(data);
  },
  saveCategory(cat) {
    const list = this.getCategories();
    const index = list.findIndex(c => c.id === cat.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...cat };
    } else {
      list.push(cat);
    }
    localStorage.setItem('ns_categories', JSON.stringify(list));
    return true;
  },
  deleteCategory(id) {
    let list = this.getCategories();
    list = list.filter(c => c.id !== id);
    localStorage.setItem('ns_categories', JSON.stringify(list));
    return true;
  },

  // Site Settings
  getSettings() {
    const data = localStorage.getItem('ns_settings');
    if (!data) {
      localStorage.setItem('ns_settings', JSON.stringify(DEFAULT_SETTINGS));
      return DEFAULT_SETTINGS;
    }
    return JSON.parse(data);
  },
  saveSettings(settings) {
    localStorage.setItem('ns_settings', JSON.stringify(settings));
    return true;
  },

  // Favorites (universities, majors, scholarships)
  getFavorites() {
    const data = localStorage.getItem('ns_favorites');
    if (!data) {
      const initial = { universities: ['rupp', 'itc', 'paragon'], majors: ['cs', 'biz-admin'], scholarships: ['moeys-state-2026', 'techo-digital-cadt'] };
      localStorage.setItem('ns_favorites', JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(data);
  },
  isFavorite(type, id) {
    const favs = this.getFavorites();
    return favs[type] ? favs[type].includes(id) : false;
  },
  toggleFavorite(type, id) {
    const favs = this.getFavorites();
    if (!favs[type]) favs[type] = [];
    const index = favs[type].indexOf(id);
    let added = false;
    if (index >= 0) {
      favs[type].splice(index, 1);
      added = false;
    } else {
      favs[type].push(id);
      added = true;
    }
    localStorage.setItem('ns_favorites', JSON.stringify(favs));
    return added;
  },

  // University Comparison (up to 3 universities)
  getComparison() {
    const data = localStorage.getItem('ns_comparison');
    if (!data) {
      const initial = ['rupp', 'itc'];
      localStorage.setItem('ns_comparison', JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(data);
  },
  addToComparison(id) {
    const list = this.getComparison();
    if (!list.includes(id)) {
      if (list.length >= 3) {
        list.shift(); // keep max 3
      }
      list.push(id);
      localStorage.setItem('ns_comparison', JSON.stringify(list));
      return true;
    }
    return false;
  },
  removeFromComparison(id) {
    let list = this.getComparison();
    list = list.filter(i => i !== id);
    localStorage.setItem('ns_comparison', JSON.stringify(list));
    return true;
  },

  // Authentication State (Mock)
  getAuth() {
    const data = localStorage.getItem('ns_admin_auth');
    return data ? JSON.parse(data) : { isLoggedIn: true, email: 'admin@nextstep.kh', name: 'លឹម មករា (Admin)' };
  },
  loginAdmin(email, password) {
    if (email && password) {
      const auth = { isLoggedIn: true, email, name: 'Admin Administrator' };
      localStorage.setItem('ns_admin_auth', JSON.stringify(auth));
      return true;
    }
    return false;
  },
  logoutAdmin() {
    localStorage.removeItem('ns_admin_auth');
    return true;
  }
};

// Export to window so all scripts across HTML pages can access
window.NextStepData = NextStepData;
