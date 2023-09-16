// import axios from "axios";
// import React from "react";

// const instances = axios.create({
//     baseURL:"https://api.themoviedb.org/3",
// })

// export default instances;

import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjBkZDEyYzFiZjEyYjMyMzg2YjM4ODM1NjJiMjY5OCIsInN1YiI6IjY0ZWYwYThhZTBjYTdmMDBjYmUzZDFlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XhPfV-1ykhjAlpVAxMPw8WqLC_8MGo4rEoMy7gcS1RU';

const MyAPI = {
    async get(url) {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response = await axios.get(`${url}`, { headers });
            return { status: response.status, data: response.data };
        } catch (error) {
            return { status: error.response?.status || 501, error: error.message };
        }
    },
}

export default MyAPI;