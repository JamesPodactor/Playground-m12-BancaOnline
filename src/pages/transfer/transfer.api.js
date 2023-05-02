import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`;
const transferUrl = `${process.env.BASE_API_URL}/transfer`;

export const getAccountList = id => Axios.get(url, {params: {id: id}}).then(response => {
    return response.data;
});

export const updateTransfer = transfer => Axios.post(`${transferUrl}`, transfer).then(response => {
    return response.data;
});