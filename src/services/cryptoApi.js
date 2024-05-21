import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  const cryptoApiHeaders = {
      'X-RapidAPI-Key': '246470b7a7msh95ba3873db32827p1cf8fbjsnb94cd8b0f30e',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
     }
const baseUrl = `https://coinranking1.p.rapidapi.com/`;
 
const createRequest = (url) => ({baseUrl})
//reducerPath specifies the name of the slice in the Redux store where the API data will be stored.
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    //baseQuery defines the base query function used for making API requests. In this case, fetchBaseQuery is used with an empty baseUrl.
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:(count) =>  createRequest(`/coins?limit=${count}`),
        }),
        
        getCryptoDetails: builder.query({
            query: (cryptoId) => createRequest(`/coins/${cryptoId}`),
    }),
        getCryptoHistory: builder.query({
            query: ({ coinuuid, timeperiod }) => 
            createRequest(`coin/${coinuuid}/history?timeperiod=${timeperiod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
        
    }),
});
export const { useGetCryptosQuery, useGetCryptoDetailsQuery ,  useGetCryptoHistoryQuery,  useGetExchangesQuery } = cryptoApi;
