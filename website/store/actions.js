import axios from 'axios';

export default {

    async GET_RESIDENTS({ }) {
        return (await axios.get('/api/test')).data.residents;
    }

}