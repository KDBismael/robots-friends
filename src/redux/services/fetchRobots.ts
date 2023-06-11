import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export  const robotApi=createApi({
    reducerPath:'fetchRobot',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints:(builder)=>({
        getUser:builder.query({
            query:()=>({url:'users'})
        })
    })  
})

export const {useGetUserQuery} =robotApi;