/* import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Context from './Context';

interface GlobalStateProps {
  children: React.ReactNode;
}

const GlobalState: React.FC<GlobalStateProps> = ({children}) => {
  const [globalNews, setGlobalNews] = useState<object>({});
  var url =
    'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-04-27&' +
    'sortBy=popularity&' +
    'apiKey=279121591f3849f4add3292ae66ced49';

  useEffect(() => {
    newsAPI();
  }, []);
  const newsAPI = () => {
    axios
      .get(url)
      .then(response => {
        const allnews = response.data;
        console.log('*************');

        setGlobalNews(allnews);
      })
      .catch((error: any) => {
        console.error(`Error: ${error}`);
      });
  };
  return <Context.Provider value={globalNews}>{children}</Context.Provider>;
};
export default GlobalState;
 */
export {};
