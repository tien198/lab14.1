export function isEmail(value) {
    return value.includes('@')
}

export function isNotNull(value) {
    return value.trim() !== ''
}
