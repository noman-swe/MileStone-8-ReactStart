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
/* 
const countryHTML = country => {

    // option-1 -destructuring
    const { name, flags } = country;

    return `
    <div class='country'>
        <h3>${name.common}</h3>
        <img src='${flags.png}'>
    </div>
    `;

} */


// option-2 -destructuring -dekhte bekkhappa lage
const countryHTML = ({name, flags, area, region}) => {
    return `
    <div class='country'>
        <h3>${name.common}</h3>
        <h3>Area: ${area}</h3>
        <h3>Continent: ${region}</h3>
        <img src='${flags.png}'>
    </div>
    `;

}

loadCountries();