import { MainPage } from '@/react/pages/MainPage/MainPage';
import { ProfilePage } from '@/react/pages/ProfilePage/ProfilePage';
import { ReferralPage } from '@/react/pages/ReferralPage/ReferralPage';
import { PaymentDetails } from '@/react/pages/PaymentDetails/PaymentDetails';
import { DetailsAdding } from '@/react/pages/DetailsAdding/DetailsAdding';
import { FeedbacksPage } from '@/react/pages/FeedbacksPage/FeedbacksPage';
import { PostFeedback } from '@/react/pages/PostFeedback/PostFeedback';
import { ServicesPage } from '@/react/pages/ServicesPage/ServicesPage';
import { ProductsPage } from '@/react/pages/ProductsPage/ProductsPage';
import { ProductPurchasing } from '@/react/pages/ProductPurchasing/ProductPurchasing';
import { PaymentPage } from '@/react/pages/PaymentPage/PaymentPage';
import { TransferPage } from '@/react/pages/TransferPage/TransferPage';
import { WithdrawPage } from '@/react/pages/WithdrawPage/WithdrawPage';
import { TransferFormPage } from '@/react/pages/TransferFormPage/TransferFormPage';
import { WithdrawFormPage } from '@/react/pages/WithdrawFormPage/WithdrawFormPage';
import { PurchaseRequest } from '@/react/pages/PurchaseRequest/PurchaseRequest';
import { TransactionDetails } from '@/react/pages/TransactionDetails/TransactionDetails';
import { RequisiteTypeSelecting } from '@/react/pages/RequisiteTypeSelecting/RequisiteTypeSelecting';
import { WithdrawalRequisiteSelecting } from '@/react/pages/WithdrawalRequisiteSelecting/WithdrawalRequisiteSelecting';
import { ProductApplication } from '@/react/pages/ProductApplication/ProductApplication';
import { SuccessPage } from '@/react/pages/SuccessPage/SuccessPage';

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
    {path: '/services/:id', Component: ProductsPage},
    {path: '/products/purchase/:id', Component: ProductPurchasing},
    {path: '/payment', Component: PaymentPage},
    {path: '/payment/:type', Component: PaymentPage},
    {path: '/transfer', Component: TransferPage},
    {path: '/transfer/form/', Component: TransferFormPage},
    {path: '/withdraw', Component: WithdrawPage},
    {path: '/withdraw/requisite-selecting', Component: WithdrawalRequisiteSelecting},
    {path: '/withdraw/form', Component: WithdrawFormPage},
    {path: '/purchase-request', Component: PurchaseRequest},
    {path: '/transaction/:id', Component: TransactionDetails},
    {path: '/payment-details/choose', Component: RequisiteTypeSelecting},
    {path: '/product-application/:id', Component: ProductApplication},
    {path: '/success', Component: SuccessPage},
];
