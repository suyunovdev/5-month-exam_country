document.addEventListener('DOMContentLoaded', () => {
    const regionSelect = document.getElementById('region-select');
    const countryDetails = document.getElementById('country-details');
    let countries = [];

    // API dan ma'lumotlarni olish
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            countries = data;  // Barcha davlat ma'lumotlarini saqlab qo'yish
        })
        .catch(error => console.error('Error fetching countries:', error));

    // Region tanlanganda davlatlarni filtrlash
    regionSelect.addEventListener('change', () => {
        const selectedRegion = regionSelect.value;
        countryDetails.innerHTML = '';  // Kartalarni tozalash

        if (selectedRegion) {
            const filteredCountries = countries.filter(country => country.region === selectedRegion);
            filteredCountries.forEach(country => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
                    <div class="card-details">  
                    <h2>${country.name.common}</h2>
                    <p><strong>Capital:</strong> ${country.capital}</p>
                    <p><strong>Region:</strong> ${country.region}</p>
                    <p><strong>Subregion:</strong> ${country.subregion}</p>
                    <p><strong>Population:</strong> ${country.population}</p>
                    </div>
                `;
                countryDetails.appendChild(card);
            });
        }
    });
});
