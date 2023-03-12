const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const countryContainer = document.getElementById('countries');
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    countryContainer.innerHTML = allCountriesHTML.join(' ');
}

const getCountryHTML = country => {
    // option-1 -destructuring
    const {name, flags} = country;
    return `
        <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
        </div>
    `;
}

loadCountries();