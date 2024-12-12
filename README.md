# Crypto Tracker

Crypto Tracker is a web application built using React that allows users to explore cryptocurrency data, including live market information, historical charts, and detailed coin statistics. The application leverages the CoinGecko API for fetching data and displays charts using `react-google-charts`.

## Features

- **Browse Cryptocurrency Market Data:** View a list of cryptocurrencies with live market data such as prices, market caps, and volume.
- **Detailed Coin Information:** Access detailed data about individual cryptocurrencies, including price, supply, and market trends.
- **Historical Charts:** Visualize historical price data for selected cryptocurrencies.
- **Search Functionality:** Quickly find specific cryptocurrencies using the search feature.
- **Smooth Navigation:** Seamless navigation between pages using React Router.
- **Context API Integration:** Data is managed globally using the Context API for easy access across components.

## Tech Stack

- **Frontend:** React
- **Routing:** React Router DOM
- **Charts:** react-google-charts
- **Data Source:** CoinGecko API

## Dependencies

Make sure to install the following dependencies:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-google-charts": "^5.2.1",
    "react-router-dom": "^7.0.2"
  }
}
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd crypto-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the CoinGecko API key.

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## API Usage

### Endpoints

1. **Coins List with Market Data:**

   - Endpoint: [Coins Markets](https://docs.coingecko.com/v3.0.1/reference/coins-markets)
   - Use this endpoint to fetch a list of coins with their market data.

2. **Coin Data by ID:**

   - Endpoint: [Coin Data by ID](https://docs.coingecko.com/v3.0.1/reference/coins-id?)
   - Fetch detailed information for a specific cryptocurrency by ID.

3. **Historical Chart Data by ID:**
   - Endpoint: [Historical Chart Data](https://docs.coingecko.com/v3.0.1/reference/coins-id-market-chart)
   - Retrieve historical price data for chart visualization.

## Key Components

### Context API

`CoinContext` is used to provide global access to cryptocurrency data throughout the application. It simplifies state management and data sharing between components.

### React Google Charts

`react-google-charts` is used to render historical price charts, offering an intuitive and interactive way to visualize cryptocurrency trends.

## Acknowledgments

- [CoinGecko API](https://www.coingecko.com/en/api) for providing comprehensive cryptocurrency data.
- [React Google Charts](https://react-google-charts.com/) for seamless chart integration.
