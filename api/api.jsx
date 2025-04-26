import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mrarrieta-auth.onrender.com/', 
    header: {
        'Content-Type': 'application/json',
    },
})

export default api; 