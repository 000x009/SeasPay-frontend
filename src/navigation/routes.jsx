import { MainPage } from '@/react/pages/MainPage/MainPage';
import { ProfilePage } from '@/react/pages/ProfilePage/ProfilePage';
import { ReferralPage } from '@/react/pages/ReferralPage/ReferralPage';
import { PaymentDetails } from '@/react/pages/PaymentDetails/PaymentDetails';
import { DetailsAdding } from '@/react/pages/DetailsAdding/DetailsAdding';
import { FeedbacksPage } from '@/react/pages/FeedbacksPage/FeedbacksPage';
import { PostFeedback } from '@/react/pages/PostFeedback/PostFeedback';
import { ServicesPage } from '@/react/pages/ServicesPage/ServicesPage';
import { ProductsPage } from '@/react/pages/ProductsPage/ProductsPage';

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
    {path: '/feedbacks', Component: FeedbacksPage},
    {path: '/feedbacks/post', Component: PostFeedback},
    {path: '/services', Component: ServicesPage},
    {path: '/services/products', Component: ProductsPage},
];
