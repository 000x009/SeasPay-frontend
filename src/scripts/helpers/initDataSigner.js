import { sign } from '@telegram-apps/init-data-node';
import { botToken } from '@/constants/api';

export function initDataSigner(initData) {
    return sign(initData, botToken, new Date(1000));
}