// 58 wilayas d'Algérie (10 nouvelles wilayas créées en 2019 : 49→58)
// Coordonnées = chef-lieu (lat/lng décimal WGS84)
// `active: true` = projet livré par Volta Lighting
//
// ⚠ Le brief mentionne "42 wilayas sur 58" mais la liste fournie en compte 43.
//   Liste appliquée telle que reçue. Pour repasser à 42, basculer une à false.
//   Hubs majeurs (treatment visuel renforcé) : DZ-16 Alger, DZ-25 Constantine, DZ-31 Oran.

export const HUB_CODES = ['DZ-16', 'DZ-25', 'DZ-31'];

export const WILAYAS_ALGERIA = [
  { code: 'DZ-01', name_fr: 'Adrar',              name_ar: 'أدرار',           lat: 27.87, lng: -0.29, active: true  },
  { code: 'DZ-02', name_fr: 'Chlef',              name_ar: 'الشلف',           lat: 36.17, lng:  1.33, active: true  },
  { code: 'DZ-03', name_fr: 'Laghouat',           name_ar: 'الأغواط',         lat: 33.80, lng:  2.87, active: true  },
  { code: 'DZ-04', name_fr: 'Oum El Bouaghi',     name_ar: 'أم البواقي',      lat: 35.87, lng:  7.11, active: true  },
  { code: 'DZ-05', name_fr: 'Batna',              name_ar: 'باتنة',           lat: 35.55, lng:  6.17, active: true  },
  { code: 'DZ-06', name_fr: 'Béjaïa',             name_ar: 'بجاية',           lat: 36.75, lng:  5.08, active: true  },
  { code: 'DZ-07', name_fr: 'Biskra',             name_ar: 'بسكرة',           lat: 34.85, lng:  5.73, active: true  },
  { code: 'DZ-08', name_fr: 'Béchar',             name_ar: 'بشار',            lat: 31.62, lng: -2.21, active: true  },
  { code: 'DZ-09', name_fr: 'Blida',              name_ar: 'البليدة',         lat: 36.47, lng:  2.83, active: true  },
  { code: 'DZ-10', name_fr: 'Bouira',             name_ar: 'البويرة',         lat: 36.37, lng:  3.90, active: true  },
  { code: 'DZ-11', name_fr: 'Tamanrasset',        name_ar: 'تمنراست',         lat: 22.78, lng:  5.52, active: false },
  { code: 'DZ-12', name_fr: 'Tébessa',            name_ar: 'تبسة',            lat: 35.40, lng:  8.12, active: true  },
  { code: 'DZ-13', name_fr: 'Tlemcen',            name_ar: 'تلمسان',          lat: 34.88, lng: -1.32, active: true  },
  { code: 'DZ-14', name_fr: 'Tiaret',             name_ar: 'تيارت',           lat: 35.37, lng:  1.32, active: true  },
  { code: 'DZ-15', name_fr: 'Tizi Ouzou',         name_ar: 'تيزي وزو',        lat: 36.71, lng:  4.05, active: false },
  { code: 'DZ-16', name_fr: 'Alger',              name_ar: 'الجزائر',         lat: 36.75, lng:  3.06, active: true  },
  { code: 'DZ-17', name_fr: 'Djelfa',             name_ar: 'الجلفة',          lat: 34.67, lng:  3.25, active: true  },
  { code: 'DZ-18', name_fr: 'Jijel',              name_ar: 'جيجل',            lat: 36.82, lng:  5.77, active: true  },
  { code: 'DZ-19', name_fr: 'Sétif',              name_ar: 'سطيف',            lat: 36.19, lng:  5.41, active: true  },
  { code: 'DZ-20', name_fr: 'Saïda',              name_ar: 'سعيدة',           lat: 34.83, lng:  0.15, active: true  },
  { code: 'DZ-21', name_fr: 'Skikda',             name_ar: 'سكيكدة',          lat: 36.88, lng:  6.91, active: true  },
  { code: 'DZ-22', name_fr: 'Sidi Bel Abbès',     name_ar: 'سيدي بلعباس',     lat: 35.20, lng: -0.63, active: true  },
  { code: 'DZ-23', name_fr: 'Annaba',             name_ar: 'عنابة',           lat: 36.90, lng:  7.76, active: true  },
  { code: 'DZ-24', name_fr: 'Guelma',             name_ar: 'قالمة',           lat: 36.46, lng:  7.43, active: true  },
  { code: 'DZ-25', name_fr: 'Constantine',        name_ar: 'قسنطينة',         lat: 36.36, lng:  6.61, active: true  },
  { code: 'DZ-26', name_fr: 'Médéa',              name_ar: 'المدية',          lat: 36.27, lng:  2.75, active: true  },
  { code: 'DZ-27', name_fr: 'Mostaganem',         name_ar: 'مستغانم',         lat: 35.93, lng:  0.09, active: true  },
  { code: 'DZ-28', name_fr: "M'Sila",             name_ar: 'المسيلة',         lat: 35.70, lng:  4.54, active: true  },
  { code: 'DZ-29', name_fr: 'Mascara',            name_ar: 'معسكر',           lat: 35.40, lng:  0.14, active: true  },
  { code: 'DZ-30', name_fr: 'Ouargla',            name_ar: 'ورقلة',           lat: 31.95, lng:  5.33, active: true  },
  { code: 'DZ-31', name_fr: 'Oran',               name_ar: 'وهران',           lat: 35.70, lng: -0.63, active: true  },
  { code: 'DZ-32', name_fr: 'El Bayadh',          name_ar: 'البيض',           lat: 33.68, lng:  1.02, active: true  },
  { code: 'DZ-33', name_fr: 'Illizi',             name_ar: 'إيليزي',          lat: 26.48, lng:  8.47, active: false },
  { code: 'DZ-34', name_fr: 'Bordj Bou Arréridj', name_ar: 'برج بوعريريج',    lat: 36.07, lng:  4.76, active: true  },
  { code: 'DZ-35', name_fr: 'Boumerdès',          name_ar: 'بومرداس',         lat: 36.77, lng:  3.48, active: true  },
  { code: 'DZ-36', name_fr: 'El Tarf',            name_ar: 'الطارف',          lat: 36.77, lng:  8.31, active: false },
  { code: 'DZ-37', name_fr: 'Tindouf',            name_ar: 'تندوف',           lat: 27.67, lng: -8.15, active: true  },
  { code: 'DZ-38', name_fr: 'Tissemsilt',         name_ar: 'تيسمسيلت',        lat: 35.61, lng:  1.81, active: true  },
  { code: 'DZ-39', name_fr: 'El Oued',            name_ar: 'الوادي',          lat: 33.36, lng:  6.86, active: true  },
  { code: 'DZ-40', name_fr: 'Khenchela',          name_ar: 'خنشلة',           lat: 35.43, lng:  7.14, active: true  },
  { code: 'DZ-41', name_fr: 'Souk Ahras',         name_ar: 'سوق أهراس',       lat: 36.29, lng:  7.95, active: true  },
  { code: 'DZ-42', name_fr: 'Tipaza',             name_ar: 'تيبازة',          lat: 36.59, lng:  2.45, active: true  },
  { code: 'DZ-43', name_fr: 'Mila',               name_ar: 'ميلة',            lat: 36.45, lng:  6.26, active: false },
  { code: 'DZ-44', name_fr: 'Aïn Defla',          name_ar: 'عين الدفلى',      lat: 36.26, lng:  1.97, active: true  },
  { code: 'DZ-45', name_fr: 'Naâma',              name_ar: 'النعامة',         lat: 33.27, lng: -0.31, active: true  },
  { code: 'DZ-46', name_fr: 'Aïn Témouchent',     name_ar: 'عين تموشنت',      lat: 35.30, lng: -1.14, active: true  },
  { code: 'DZ-47', name_fr: 'Ghardaïa',           name_ar: 'غرداية',          lat: 32.49, lng:  3.67, active: true  },
  { code: 'DZ-48', name_fr: 'Relizane',           name_ar: 'غليزان',          lat: 35.74, lng:  0.55, active: true  },
  { code: 'DZ-49', name_fr: 'Timimoun',           name_ar: 'تيميمون',         lat: 29.26, lng:  0.23, active: false },
  { code: 'DZ-50', name_fr: 'Bordj Badji Mokhtar',name_ar: 'برج باجي مختار',  lat: 21.33, lng:  0.95, active: false },
  { code: 'DZ-51', name_fr: 'Ouled Djellal',      name_ar: 'أولاد جلال',      lat: 34.42, lng:  5.07, active: false },
  { code: 'DZ-52', name_fr: 'Béni Abbès',         name_ar: 'بني عباس',        lat: 30.13, lng: -2.17, active: false },
  { code: 'DZ-53', name_fr: 'In Salah',           name_ar: 'عين صالح',        lat: 27.20, lng:  2.48, active: false },
  { code: 'DZ-54', name_fr: 'In Guezzam',         name_ar: 'عين قزام',        lat: 19.57, lng:  5.77, active: false },
  { code: 'DZ-55', name_fr: 'Touggourt',          name_ar: 'تقرت',            lat: 33.10, lng:  6.07, active: false },
  { code: 'DZ-56', name_fr: 'Djanet',             name_ar: 'جانت',            lat: 24.55, lng:  9.49, active: false },
  { code: 'DZ-57', name_fr: "El M'Ghair",         name_ar: 'المغير',          lat: 33.95, lng:  5.92, active: false },
  { code: 'DZ-58', name_fr: 'El Meniaa',          name_ar: 'المنيعة',         lat: 30.58, lng:  2.88, active: false },
];

export const ACTIVE_COUNT = WILAYAS_ALGERIA.filter(w => w.active).length;
export const TOTAL_COUNT = WILAYAS_ALGERIA.length;

// Bounding box Algérie (utilisé pour projection lat/lng → % viewBox dans AlgeriaMap)
export const BBOX = {
  minLat: 18.96, maxLat: 37.10,
  minLng: -8.67, maxLng: 11.99,
};
