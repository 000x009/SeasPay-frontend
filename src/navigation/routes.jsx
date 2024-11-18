import { MainPage } from '@/react/pages/MainPage/MainPage';
import { ProfilePage } from '@/react/pages/ProfilePage/ProfilePage';
import { ReferralPage } from '@/react/pages/ReferralPage/ReferralPage';


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
];
