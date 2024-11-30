export function formatDate(dateString) {
    const date = new Date(dateString.value);
    const today = new Date();
    
    const diffTime = today.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return "Сегодня";
    }

    if (diffDays === 1) {
        return "1 день назад";
    }

    if (isWithinRange(diffDays, 2, 4)) {
        return `${diffDays} дня назад`;
    }

    if (isWithinRange(diffDays, 5, 6)) {
        return `${diffDays} дней назад`;
    }

    return formatToRussianDate(date);
}

function isWithinRange(value, min, max) {
    return value >= min && value <= max;
}

function formatToRussianDate(date) {
    return date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long"
    });
}