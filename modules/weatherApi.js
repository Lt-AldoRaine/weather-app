export const getFormInput = () => {
  const locationInput = document.getElementById("search-location");
  const locationName = locationInput.value.toLowerCase();

  const regex = /^(.*?)(?: \s*(.*))?$/;
  const match = locationName.match(regex);

  if (match) {
    const city = match[1].trim();
    let region = match[2] ? match[2].trim() : "";
    let formattedLocation;

    if (region === "england".toLowerCase()) region = "United Kingdom";

    return (formattedLocation = region ? `${city} ${region}` : city);
  } else {
    console.log("Invalid input");
    return "";
  }
};

export function getRequestUrl(location) {
  // prettier-ignore
  return `https://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_WEATHER_API_KEY}&q="${location}"&days=7`;
}

export async function getWeatherData(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    const weatherData = await response.json();

    return weatherData;
  } catch (err) {
    console.error(err);
  }
}
