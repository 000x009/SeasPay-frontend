const MAX_COMMISSION_VALUE = 13;
const MIN_COMMISSION_VALUE = 5;

export function getCommissionProgress(commission) {
    const hundred_percentage = MAX_COMMISSION_VALUE - MIN_COMMISSION_VALUE;
    const current_percentage = MAX_COMMISSION_VALUE - commission;
    return (current_percentage / hundred_percentage) * 100;
}