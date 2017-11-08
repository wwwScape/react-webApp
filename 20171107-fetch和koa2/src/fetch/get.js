import 'whatwg-fetch'
import 'es6-promise'

// 获取数据
export function get(url) {
    let result = fetch(url,{
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    });

    return result;
}