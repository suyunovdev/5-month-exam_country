// URL parametrlaridan ma'lumotlarni olish funksiyasi
function getQueryParams() {
  // Hozirgi sahifaning URL'isidan parametrlarni olish
  let params = new URLSearchParams(window.location.search);
  // Olishilgan parametrlar bo'yicha ma'lumotlarni qaytarish
  return {
    name: params.get("name"),
    population: params.get("population"),
    region: params.get("region"),
    capital: params.get("capital"),
    flag: params.get("flag"),
    subregion: params.get("subregion"),
    nativeName: params.get("nativeName"),
    official: params.get("official"),
  };
}

// Ma'lumotlarni HTML shaklida ko'rsatish funksiyasi
function displayDetails(details) {
  // HTML-ni joylash uchun container elementini tanlash
  const container = document.getElementById("details-container");
  // Ma'lumotlarni HTML shaklida chiqarish
  container.innerHTML = `
    <img src="${details.flag}" width="500px" height="351px" alt="Flag of ${details.name}">
    <div class="words">
      <div class="words1">
        <div class="word1">
          <h1>${details.name}</h1>
          <p><strong>Native Name:</strong> ${details?.name?.common}</p>
          <p><strong>Population:</strong> ${details.population}</p>
          <p><strong>Region:</strong> ${details.region}</p>
          <p><strong>Subregion Region:</strong> ${details.subregion}</p>
          <p><strong>Capital:</strong> ${details.capital}</p>
        </div>
        <div class="word2">
          <p><strong>Top Level Domain:</strong> ${details.tld}</p>
          <p><strong>Currencies:</strong> ${details.currencies}</p>
          <p><strong>Languages:</strong> ${details.languages}</p>
        </div>
      </div>
      <div class="ones">
        <p><strong>Border Countries:</strong> ${details.borders}</p>
      </div>
    </div>
  `;
}

// HTML yuklangandan so'ng ma'lumotlarni chiqarish hodisasi
document.addEventListener("DOMContentLoaded", () => {
  // URL parametrlaridan ma'lumotlarni olish
  const details = getQueryParams();
  // Olingan ma'lumotlarni HTML shaklida chiqarish funksiyasini chaqirish
  displayDetails(details);
});
