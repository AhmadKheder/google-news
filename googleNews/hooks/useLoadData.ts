import axios from "axios";
import { useEffect, useState } from "react";
export type dataType = {
    status: string;
    totalResults: number;
    articles: Object[];
};
type Result = {
    loading: boolean
    data: undefined | any
    error?: any
}

type Args = {
    newsType: 'home' | 'braking'
}

const useLoadData = (url: string) => {
    const [data, setData] = useState<dataType>({
        status: '',
        totalResults: 60,
        articles: [{}],
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();



    useEffect(() => {
        newsAPI();
    }, [url]);
    const newsAPI = () => {
        axios
            .get(url)
            .then(response => {
                const allnews = response.data;
                setData(allnews);
                setLoading(!loading)
            })
            .catch((error: any) => {
                console.error(`Error: ${error}`);
                setError(error)
                setLoading(!loading)

            });
    };
    return { data, loading, error };

}
export default useLoadData;