import { MainPage } from '@/react/pages/MainPage/MainPage';
import { ProfilePage } from '@/react/pages/ProfilePage/ProfilePage';
import { ReferralPage } from '@/react/pages/ReferralPage/ReferralPage';
import { PaymentDetails } from '@/react/pages/PaymentDetails/PaymentDetails';
import { DetailsAdding } from '@/react/pages/DetailsAdding/DetailsAdding';

/**
 * @typedef {object} Route
 * @property {string} path
 * @property {import('react').ComponentType} Component
 * @property {string} [title]
 * @property {import('react').JSX.Element} [icon]
 */

/**
 * @type {Route[]}
 */
export const routes = [
    {path: '/', Component: MainPage},
    {path: '/profile', Component: ProfilePage},
    {path: '/referral', Component: ReferralPage},
    {path: '/payment-details', Component: PaymentDetails},
    {path: '/payment-details/add', Component: DetailsAdding},
];
