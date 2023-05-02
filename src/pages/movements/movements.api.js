import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;
const accUrl = `${process.env.BASE_API_URL}/account-list`;

export const getMovementList = () => Axios.get(url).then(({ data }) => data);

export const getMovementById = id => Axios.get(url, {params: {accountId: id}}).then(({ data }) => data);

export const getAccountInfo = id => Axios.get(accUrl, {params: {id}}).then(({ data }) => data[0]);