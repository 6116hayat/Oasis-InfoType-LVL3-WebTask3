
const form = document.querySelector('form');

form.addEventListener(`submit`, function (e) {
    e.preventDefault();

    // Taking Values from Html
    const tempInput = parseFloat(document.querySelector('#temp').value);
    const fromType = document.querySelector('#fromType').value.toLowerCase();
    const resultType = document.querySelector('#resultType').value.toLowerCase();
    const result = document.querySelector('.result');
    let converted = '';

    if (isNaN(tempInput)) {
        result.innerHTML = `Please provide the valid Number`;
        return;
    }

    // Converting the current temp units in Celsius
    let tempInCelsius;
    switch (fromType) {
        case 'celsius':
            tempInCelsius = tempInput;
            break;
        case 'fahrenheit':
            tempInCelsius = (tempInput - 32) * 5 / 9;
            break;
        case 'kelvin':
            tempInCelsius = (tempInput - 273.15);
            break;
        default:
            result.textContent = 'Invalid input';
            return;
    }

    // Conversion for result type
    switch (resultType) {
        case "celsius":
            converted = `${tempInCelsius.toFixed(2)} °C`;
            break;
        case "fahrenheit":
            converted = `${((tempInCelsius * 9 / 5) + 32).toFixed(2)} °F`;
            break;
        case "kelvin":
            converted = `${(tempInCelsius + 273.15).toFixed(2)} K`;
            break;
        default:
            result.textContent = 'Invalid target';
            return;
    }

    result.innerHTML = `${tempInput} ${fromType} => ${converted}`

});


