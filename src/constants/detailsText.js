export const CARD_DETAILS = {
    title: "Карта",
    inputs: [
      {
        header: "Номер карты",
        placeholder: "0000 0000 0000 0000"
      },
      {
        header: "Имя держателя",
        placeholder: "Иван Иванов"
      }
    ]
};
  
export const CRYPTO_DETAILS = {
    title: "Крипто",
    inputs: [
      {
        header: "Адрес",
        placeholder: "Адрес кошелька" 
      },
      {
        header: "Комментарий",
        placeholder: "Комментарий/Тег/Мемо"
      }
    ],
    selects: [
        {
            options: [
                {
                    value: "TON",
                    label: "TON"
                },
            ],
            header: "Сеть",
            placeholder: "Выберите сеть"
        },
        {
            options: [
                {
                    value: "USDT",
                    label: "USDT"
                }
            ],
            header: "Монета",
            placeholder: "Выберите монету"
        }
    ]
};