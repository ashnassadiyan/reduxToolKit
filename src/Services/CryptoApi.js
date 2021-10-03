// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//         'x-rapidapi-key': '41f2001dabmshc5d138b6d510795p1bf9d3jsnbf54fef329e7'
//     }
// };

import axios from "axios";

export default axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com", headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '41f2001dabmshc5d138b6d510795p1bf9d3jsnbf54fef329e7'
    }
})


