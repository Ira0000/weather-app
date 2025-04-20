# Weather Forecast App

## Overview

A React application that allows users to search for cities and view temperature forecasts using the OpenWeatherMap API.

## Features

- ☁️ City-based weather search
- 📊 Temperature forecast visualization with bar chart
- 📱 Responsive design for all devices
- ⚠️ Error handling for city not found scenarios

## Tech Stack

- **Frontend**: React.js
- **State Management**: Redux
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **HTTP Client**: Axios

## Installation

```bash
# Clone repository
git clone git@github.com:Ira0000/weather-app.git

# Navigate to project directory
cd weather-app

# Install dependencies
npm install

# Start development server
npm start
```

## Usage

1. Enter a city name in the search field
2. Click the "Search" button
3. View the temperature forecast displayed as a bar chart

## API Configuration

This app uses the OpenWeatherMap API.
(https://openweathermap.org/)

## Available Scripts

| Command         | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `npm start`     | Run development server at [http://localhost:3000](http://localhost:3000) |
| `npm test`      | Launch the test runner                                                   |
| `npm run build` | Build production-ready app in the `build` folder                         |
| `npm run eject` | Eject from Create React App                                              |

## Project Structure

```
/
├── public/           # Static files
├── src/              # Source files
│   ├── components/   # React components
│   │   ├── SearchBar/
│   │   └── ForecastChart/
│   ├── redux/        # Redux store and actions
│   │   ├── store.js
│   │   ├── weatherSlice.js
│   │   └── weatherOps.js
│   ├── App.js        # Main application component
│   └── index.js      # Application entry point
└── README.md         # This file
```
