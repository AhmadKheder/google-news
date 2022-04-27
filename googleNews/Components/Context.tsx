import axios from 'axios';
import React from 'react';

const getAllNews = async () => {
  const URL =
    'https://gnews.io/api/v4/search?q=example&token=724acfa9fa5e46bda9a4a121b139b2c9';
  axios
    .get(URL)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch((error: any) => {
      console.error(`Error: ${error}`);
    });
};

const newsAPI = () => {
  var url =
    'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-04-27&' +
    'sortBy=popularity&' +
    'apiKey=279121591f3849f4add3292ae66ced49';

  axios
    .get(url)
    .then(response => {
      const allnews = response.data;
      console.log({allnews});
    })
    .catch((error: any) => {
      console.error(`Error: ${error}`);
    });
};
export default React.createContext({
  status: '',
  totalResults: 60,
  articles: [{}],
});
