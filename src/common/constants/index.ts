// Case status type
export const NOT_STARTED = 'notStarted';
export const ACTIVE_ONGOING = 'active:ongoing';
export const ACTIVE_SIGNATURE_COMPLETED = 'active:signature:completed';
export const ACTIVE_SIGNATURE_PENDING = 'active:signature:pending';
export const ACTIVE_SUBMITTED = 'active:submitted';
export const ACTIVE_PROCESSING = 'active:processing';
export const CLOSED = 'closed';

export const ACTIVE_COMPLETION_ONGOING = 'active:ongoing:completion';
export const ACTIVE_COMPLETION_SUBMITTED = 'active:submitted:completion';
export const ACTIVE_RANDOM_CHECK_ONGOING = 'active:ongoing:randomCheck';
export const ACTIVE_RANDOM_CHECK_SUBMITTED = 'active:submitted:randomCheck';

// Case state
export const CASE_HTML_GENERATED = 'CASE_HTML_GENERATED';
export const PDF_GENERATED = 'PDF_GENERATED';
export const PDF_NOT_GENERATED = 'PDF_NOT_GENERATED';
export const COMPLETION_REQUIRED = 'COMPLETION_REQUIRED';
export const RANDOM_CHECK_REQUIRED = 'RANDOM_CHECK_REQUIRED';

/**
 * A month is 1/12th of a year. In the Gregorian calendar, an average month has exactly 30.436875 days.
 * It was originally based on the time it takes for the moon to rotate the Earth.
 *
 * 6 Months = 4,382.90639 Hours
 * (exact result according to google)
 */
 export const SIX_MONTHS_IN_HOURS = 4382;

 export const FORTY_FIVE_DAYS_IN_HOURS = 1080;
 export const SEVENTY_TWO_HOURS = 72;
 export const TWELVE_HOURS = 12;