// Case status type
export const NOT_STARTED_VIVA = 'notStarted:viva';
export const ACTIVE_COMPLETION_REQUIRED_VIVA = 'active:completionRequired:viva';
export const ACTIVE_RANDOM_CHECK_REQUIRED_VIVA = 'active:randomCheckRequired:viva';
export const CLOSED_APPROVED_VIVA = 'closed:approved:viva';
export const CLOSED_PARTIALLY_APPROVED_VIVA = 'closed:partiallyApproved:viva';
export const CLOSED_REJECTED_VIVA = 'closed:rejected:viva';
export const CLOSED_COMPLETION_REJECTED_VIVA = 'closed:completionRejected:viva';
export const CLOSED_RANDOM_CHECK_REJECTED_VIVA = 'closed:randomCheckRejected:viva';

// Case state
export const VIVA_CASE_CREATED = 'VIVA_CASE_CREATED';
export const VIVA_APPLICATION_RECEIVED = 'VIVA_APPLICATION_RECEIVED';
export const VIVA_COMPLETION_REQUIRED = 'VIVA_COMPLETION_REQUIRED';
export const VIVA_COMPLETION_RECEIVED = 'VIVA_COMPLETION_RECEIVED';
export const VIVA_RANDOM_CHECK_REQUIRED = 'VIVA_RANDOM_CHECK_REQUIRED';
export const VIVA_RANDOM_CHECK_RECEIVED = 'VIVA_RANDOM_CHECK_RECEIVED';

export const CASE_PROVIDER_VIVA = 'VIVA';

export const VIVA_POST_TYPE_COLLECTION = {
  lon: 'Lön',
  aldreforsorjningsstod: 'Äldreförsörjningsstöd',
  underhallsbidrag: 'Underhållsstöd',
  annan: 'Övrig inkomst',
  barnpension: 'Efterlevandepension',
  boende: 'Hyra',
  hemforsakring: 'Hemförsäkring',
  bredband: 'Bredband',
  el: 'El',
  reskostnad: 'Reskostnad',
  akassa: 'A-kassa och fackavgift',
  barnomsorg: 'Barnomsorg',
  barnomsorgsskuld: 'Barnomsorg skuld',
  medicin: 'Medicinkostnader',
  lakarvard: 'Sjukvård',
  akuttandvard: 'Akut tandvård',
  tandvard: 'Tandvård',
  annantandvard: 'Annan tandvård',
  bostadslan: 'Bostadslån',
  hyresskuld: 'Skuld hyra',
  fackskuld: 'Skuld a-kassa/fackavgift',
  elskuld: 'Skuld el',
  fastighetsdrift: 'Drift kostnad',
  annat: 'Övrig utgift',
};

export const TAG_NAME = {
  appliesto: 'appliesto',
  amount: 'amount',
  description: 'description',
  date: 'date',
  group: 'group',
  school: 'school',
  housing: 'housing',
  firstName: 'firstName',
  lastName: 'lastName',
  personalNumber: 'personalNumber',
};

export const PERSON_ROLE = {
  applicant: 'applicant',
  coApplicant: 'coApplicant',
  children: 'children',
};

export const EMPTY_INCOME_POST = {
  type: 'income',
  group: '',
  belongsTo: 'APPLICANT',
  title: '',
  description: '',
  date: '',
  value: '',
  currency: 'kr',
};

export const EMPTY_EXPENSE_POST = {
  type: 'expense',
  group: '',
  belongsTo: 'APPLICANT',
  title: '',
  description: '',
  date: '',
  value: '',
  currency: 'kr',
};