import axios from 'axios';

const apiURL1 = 'https://api.covid19api.com';

export const fetchData = async () => {
    try {
        const {data: { Global, Date }} = await axios.get(`${apiURL1}/summary`);

        return { Global, Date };
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data} = await axios.get(`${apiURL1}/countries`)
        
        return data.map((country) => country.Country);
    } catch (error) {
        console.log(error);
    }
}

const apiUrl2 = 'https://covid19.mathdro.id/api';

export const chartData = async () => {
    try {
        const {data} = await axios.get(`${apiUrl2}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}