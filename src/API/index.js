import axios from 'axios';

const apiUrl = 'https://api.covid19api.com';

export const fetchData = async () => {
    try {
        const {data: { Global, Date }} = await axios.get(`${apiUrl}/summary`);

        return { Global, Date };
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data} = await axios.get(`${apiUrl}/countries`)
        
        return data.map((country) => country.Country);
    } catch (error) {
        console.log(error);
    }
}
