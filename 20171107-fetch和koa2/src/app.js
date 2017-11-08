import React from 'react'
import {render} from 'react-dom'
import RouteMap from './router/RouteMap'
// 测试 fetch 的功能
import { getData, postData } from './fetch/test.js'
// import { getData, postData } from './fetch/data.js'
getData();
postData();

render(
    <RouteMap/>,
    document.getElementById('root')
)