import {configureStore} from "@reduxjs/toolkit";
import {rememberReducer, rememberEnhancer} from "redux-remember";
import auth from "./reducers/auth";
import cryptocurrency from '../redux/reducers/cryptocurrency'
import getCryptocurrency from '../redux/reducers/getAllBTC'
import resetCryptocurrency from '../redux/reducers/resetCryptocurrency'

const rememberedKeys = ['auth'];

const store = configureStore({
    reducer: rememberReducer({
        auth,
        cryptocurrency,
        getCryptocurrency,
        resetCryptocurrency
        }),
    enhancers: [rememberEnhancer(window.localStorage, rememberedKeys,{persistWholeStore: true})]
});

export default store