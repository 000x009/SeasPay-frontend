import fx from 'money';

export async function currencyCommissionConvertor(amount, commission) {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        fx.base = data.base;
        fx.rates = data.rates;

        const finalAmountUsd = parseFloat(amount) + (parseFloat(amount) / 100 * commission);
        
        const result = fx(finalAmountUsd).from('USD').to('RUB');
        return Math.round(result);
        
    } catch (error) {
        console.error('Currency conversion error:', error);
        return Math.round(amount * 90);
    }
}