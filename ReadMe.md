# 🌦️ Weather App

This is a project from **The Odin Project** curriculum, focused on applying key front-end concepts, including but not limited to:

- Handling user input using HTML5 form validation and custom logic  
- Sending requests to third-party APIs — primarily the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api), and optionally the [Giphy API](https://developers.giphy.com/)  
- Using **Promises** and **async/await** to handle asynchronous operations  
- Writing **modular**, **loosely coupled** code following the **Single Responsibility Principle**  
- Practicing **API key security** through environment variables and/or proxying (depending on deployment)

---

## ✅ Minimum Viable Product (MVP) Requirements

- 🔍 **Search by location**
- 🌡️ **Toggle between Fahrenheit and Celsius**
- 🎨 **Dynamically update UI based on weather data**
  - Background color changes
  - Weather-descriptive images or icons
  - (Optional) Forecast-related GIFs using the Giphy API

---

## 📋 Instructions

1. **Start with logic — not styling**  
   Focus on building a sound data flow before worrying about design:
   - Fetch weather data for a given location and log it
   - Create a function that processes the raw API JSON into a simplified object containing only the data you need
   - Set up a form to get user input and log the value

2. **Display the data**  
   Once the logic is solid and error-handling is in place:
   - Style the page and display weather data dynamically in the DOM
   - Use modules, icons, and assets as needed to enhance the UI

---

## 🔐 API Key Setup

This project uses free API keys for the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) and optionally the [Giphy API](https://developers.giphy.com/).

> **Note:** API keys are **hardcoded in the source files** for educational purposes and to ensure the app works when deployed on GitHub Pages. These APIs are free and intended for public use in this context.  
> In production-grade applications, API keys should be secured and not exposed in client-side code.

---

## 🛠 Features to Explore (Stretch Goals)

- Smooth transitions or animations when weather changes
- Local storage to remember the user's last searched location
- Hourly/daily forecast toggles
- Dark mode based on time of day
- Better error UI (e.g., "City not found" messages)
