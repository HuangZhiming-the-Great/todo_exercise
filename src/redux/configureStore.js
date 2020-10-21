/*
createStore 用来初始化函数；
applyMiddleWare 用来添加我们需要的中间件；
combineReducers 用来将多个reducers合并为一个统一的实体。

createLogger 就是我们这里唯一使用的一个中间件，可以console出每一个action后数据的详细处理过程，给调试带来了很大方便。
*/
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import toDoApp from './modules/toDoApp';

//initialize logger
const loggerMiddleware=createLogger();

 // apply logger to redux
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

//combine the reducers
const reducer=combineReducers({
    toDoApp
});

const configureStore=(initialState)=>createStoreWithMiddleware(reducer,initialState);

export default configureStore;