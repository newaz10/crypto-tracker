import { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-HhSU4BcCmC3W2VWpiswGevUs",
        },
      };

      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      if (!res.ok) {
        throw new Error("Failed to fetch coin data");
      }
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-HhSU4BcCmC3W2VWpiswGevUs",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=5&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img
            src={coinData.image.large}
            alt={coinData.name}
            className="coin-image"
          />
          <p className="coin-title">
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>

          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>

          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>

          <ul>
            <li>24 Hour High</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>

          <ul>
            <li>24 Hour Low</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
