const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);
    const countriesContainer = document.getElementById('countries'); 
    const allCountryHTML = countries.map(country => countryHTML(country));
    countriesContainer.innerHTML = allCountryHTML.join(' ');
    
}

const countryHTML = country => {
    console.log(country);
    return`
    <div class='country'>
        <h3>${country.name.common}</h3>
        <img src='${country.flags.png}'>
    </div>
    `;

}

loadCountries();