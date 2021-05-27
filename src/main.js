let html = document.querySelector("#html");
let style = document.querySelector('#style')
let string = `/*你好，我叫成心
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    color:red;
}
/*接下来我把div变成一个班八卦图
* 注意看好了
* 首先，把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦是阴阳形成的
* 一黑一白
**/
#div1{
    background:linear-gradient(90deg,
    rgba(255,255,255,1)0%,
    rgba(255,255,255,1)50%,
    rgba(0,0,0,1)50%,
    rgba(0,0,0,1)100%);
}
/* 给八卦图注入神力 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
}
`
let string2 = '';
//初始化
let n = 0;
let step = () => {
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 += '<br>';
        }else if(string[n] === ' '){
            string2 += '&nbsp;'
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n)
        //控制滚动条
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n < string.length-1){
            n += 1;
            step();
        };
    },50);
};
step()