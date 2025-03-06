export const generateNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

export const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32
}