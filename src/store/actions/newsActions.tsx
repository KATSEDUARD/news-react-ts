import axios from 'axios';
import { loadData } from '../slices/newsSlice';

const URL = 'https://api.spaceflightnewsapi.net/v3/articles';

export const fetchNews = (newsAmount: number, typeOfFetch: string) => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            const response = typeOfFetch === 'loadMore' ? await axios.get(`${URL}?_limit=9&_start=${newsAmount - 9}`)
                : await axios.get(`${URL}?_limit=9&_start=0`);
                
            const { data } = response;
            return data;
        };

        try {
            const data = await fetchData();
            dispatch(loadData(data));
        } catch (error) {
            console.log(error);
        }
    };
};