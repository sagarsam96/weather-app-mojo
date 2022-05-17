const getWeatherData = (query, setLocation) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": "5d1ab607edmsh3e58f17a685146ap188a0cjsn18c8b5010665"
      }
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
      options
    )
      .then((response) => response.json())
      .then((data) =>
        setLocation({
          place: data.location.name,
          temp: `${data.current.temp_c}°C`,
          wind: `${data.current.wind_kph}Km/hr`,
          humidity: data.current.humidity
        })
      )
      .catch((err) => console.error(err));
  };


  const getBackgroundImg = (query, setBackgroundImg, setLocation) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        "X-RapidAPI-Key": "5d1ab607edmsh3e58f17a685146ap188a0cjsn18c8b5010665"
      }
    };

    fetch(
      `https://bing-image-search1.p.rapidapi.com/images/search?q=${query}`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setBackgroundImg(
          response.value[~~(Math.random() * response.value.length)].contentUrl
        )
      )
      .catch((err) => console.error(err));
  };







  export {getWeatherData, getBackgroundImg}
