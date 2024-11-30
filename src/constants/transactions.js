import TransferIcon from "@/assets/icons/transfer2.svg?react"
import WithdrawIcon from "@/assets/icons/withdraw2.svg?react"
import DigitalProductIcon from "@/assets/icons/digital_product.svg?react"
import TransactionPendingIcon from "@/assets/icons/transaction_pending.svg?react"

export const TYPE_MAP = {
    "WITHDRAW": "Вывод",
    "TRANSFER": "Перевод",
    "DIGITAL_PRODUCT": "Покупка",
}

export const STATUS_MAP = {
    "NEW": {
        icon: TransactionPendingIcon,
        text: "Ожидание выполнения",
    },
    "COMPLETED": {
        icon: null,
        text: "Выполнен",
    },
    "CANCELLED": {
        icon: null,
        text: "Отменен",
    },
}

export const ICON_MAP = {
    "WITHDRAW": WithdrawIcon,
    "TRANSFER": TransferIcon,
    "DIGITAL_PRODUCT": DigitalProductIcon,
    "PENDING": TransactionPendingIcon,
}