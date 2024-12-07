import { formatCardNumber } from "@/scripts/helpers/formatCardNumber"
import CardIcon from "@/assets/icons/details.svg?react"
import USDTIcon from "@/assets/icons/usdt.svg?react"
import CryptoIcon from "@/assets/icons/crypto_details.svg?react"

export const REQUISITE_CONFIG = {
    card: {
        icon: CardIcon,
        title: () => "КАРТА",
        getDescription: (requisite) => formatCardNumber(requisite.number)
    },
    crypto: {
        icon: USDTIcon,
        title: (requisite) => requisite.asset,
        getDescription: (requisite) => requisite.network
    }
};