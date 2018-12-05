window.onload(function(){
    searchEffect();

})
//头部颜色渐变
function searchEffect(){
     //获取banner的高度
     var banner =document.querySelector(".jd_banner");
     var bannerHeight =banner.offsetHeight;
     //获取头部盒子的高度
     var search=document.querySelector(".jd_search");
     //获取当前屏幕滚动时,banner滚出背景颜色的样式
     window.onscroll(function(){
        var offsetTop=document.body.scrollTop||document.documentElement.scrollTop;
        // 定义透明度
        var opacity=0;
        console.log(111);
        
        // 判断滚动出区域是否小于banner区域,改变透明度
        if(offsetTop<bannerHeight){
            //获取比例值,赋值给search
            opacity=offsetTop/bannerHeight
            // 设置样式
            search.style.backgroundColor="rgba(233,35,34,"+opacity+")";
        }     
   })
}
//banner广告栏
function bannerEffect(){

// 课后总结：

// 1、结构
// 1、获取banner+ul+ll(last+first)
// 2、ul.appendChild(first.cloneNode(true))  +  ul.insertBefore(last.cloneNode(true),first)
// 2、样式
// 1、获取banner+ul+li
// 2、li的个数count
// 3、banner的宽度
// 4、ul的宽度=li的个数*banner的宽度
// 5、li的宽度=banner的宽度
// 6、ul设置偏移=-banner的宽度

// 7、onresize  
//     3、banner的宽度
//     4、ul的宽度=li的个数*banner的宽度
//     5、li的宽度=banner的宽度
//     6、ul设置偏移=-banner的宽度

// 3、自动轮播
// 自动轮播之前声明全局变量index=1;
// setInterval(function(){
//     1、index++
//     2、ul设置偏移=-index*banner的宽度
//     3、添加transition 动画
//     4、判断
//         1、添加延时器  setTimeout(function(){
//             if（index==count-1）{
//                 1、index=1;
//                 2、取消过渡
//                 3、ul设置偏移=-index*banner的宽度
//             }
//     },200)
// },1000)


// 4、手指滑动

    var startX, moveX,distanceX
// 1、touchstart
imgBox.addEventListenner("touchstart",function(e){
    // 1、取消定时器
    clearInterval(timerId);
    console.log(e);
    startX=e.targetTouches[0].clientX;
    })
} 
// 2、touchmove
imgBox.addEventListenner("touchmove",function(e){
    // 记录手指在滑动中的过程的位置
    moveX=e.targetTouches[0].clientX;
    // 计算手指触摸滑动与开始触摸之间的距离
    distanceX=moveX-startX;
    // 3、ul设置偏移=-index*banner的宽度+disX
    imgBox.style.left=(-index*bannerWidth +distanceX)+"px";
    // 4、取消过渡
    imgBox.style.transform="none";
})



