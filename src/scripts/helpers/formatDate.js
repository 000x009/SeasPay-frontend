export function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const daysDifference = today.getDate() - date.getDate();

    if (date.getDate() === today.getDate()) {
        return "Сегодня";
    }

    if (date.getDate() === today.getDate() - 1) {
        return "1 день назад";
    }

    if (isWithinRange(daysDifference, 2, 4)) {
        return `${daysDifference} дня назад`;
    }

    if (isWithinRange(daysDifference, 5, 6)) {
        return `${daysDifference} дней назад`;
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