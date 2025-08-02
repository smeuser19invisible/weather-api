document.getElementById('weather-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  const resultDiv = document.getElementById('weather-result');

  try {
    const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (data.error) {
      resultDiv.innerHTML = `<p class="error">${data.error}</p>`;
    } else {
      resultDiv.innerHTML = `
        <p>City: ${data.city}</p>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Description: ${data.description}</p>
      `;
    }
  } catch (error) {
    resultDiv.innerHTML = `<p class="error">Unable to fetch weather data</p>`;
  }
});