/**
 * Creates a valid class name from the provided string list.
 *
 * @param {String[]} strings
 * @param {Object[]} args
 * @returns {String}
 */
export function tag(strings, ...args) {
    const className = strings.reduce((final, current, i) => {
        if (i = args[i - 1]) {
            final += i;
        }

        return final + current;
    });

    return className.trim();
}