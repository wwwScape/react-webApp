import 'whatwg-fetch'
import 'es6-promise'

// 获取数据
export function getData() {

    // 获取字符串
    let result = fetch('/api/1',{
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    });
    result.then(res=>{
        return res.text()
    }).then(text=>{
        console.log(text)
    });


    // 获取json
    let result2 = fetch('/api/2',{
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    });
    result2.then(res=>{
        return res.json()
    }).then(text=>{
        console.log(text)
    })
}

// 提交数据
export function postData() {

    let result = fetch('/api/post',{
        credentials:'include',
        method:'POST',
        headers:{
            'Accept': 'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:"a=100&b=50"
    });
    result.then(res=>{
        return res.json()
    }).then(json=>{
        console.log(json)
    })

}

