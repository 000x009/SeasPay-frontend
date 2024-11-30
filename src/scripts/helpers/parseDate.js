export function parseDate(date) {
    const options = {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };

    const formattedDate = new Date(date).toLocaleString("ru-RU", options);
    return formattedDate.replace(/([а-я]+\.),/i, "$1");
}