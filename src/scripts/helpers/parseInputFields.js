
const inputPlaceholders = {
    почта: "example@example.com",
    пароль: "Что-то секретное..."
};

/**
 * @param {Object[string]} inputFields
 * @returns {Object[]}
 */
export function parseInputFields(inputFields) {
    return inputFields.map((field) => ({
        header: field[0].toUpperCase() + field.slice(1),
        placeholder: inputPlaceholders[field.toLowerCase()] || null,
        name: field.toLowerCase(),
    }));
}