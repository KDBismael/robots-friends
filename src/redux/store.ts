import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchRobotSlice";
import { robotApi } from "./services/fetchRobots";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store=configureStore({
    reducer:{
        searchField:searchReducer,
        [robotApi.reducerPath]:robotApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(robotApi.middleware)

})
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch