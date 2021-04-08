window.onload=function(){
    // 搜索框
    var  searchInput=document.getElementById("searchInput");
    searchInput.addEventListener("keyup",showKeyword,false);
    searchInput.addEventListener("blur",hideKeyword,false);
    searchInput.addEventListener("focus",showKeyword,false);


    function showKeyword()
    {
        if(searchInput.value!==""){
            document.getElementById("search-suggest").style.display="block";
        }
        
    }
    function hideKeyword()
    {
        document.getElementById("search-suggest").style.display="none";
    }

    bannerOption();
    function bannerOption()
    { 
    var swiper=document.getElementById("swiper");//获取 轮播图包裹层元素
    var swiperItem=document.getElementsByClassName("swiper-item");//获取轮播图列表
    var prev=document.getElementsByClassName("prev")[0];//获取上一张按钮
    var next=document.getElementsByClassName("next")[0];//获取下一张按钮
    var indicators=document.getElementsByClassName("indicator");//获取圆点列表
    var index=0;//当前轮播图索引，默认第一章
    var time=null;//定时器

    //设置轮播图的透明度和位移

    for(var i=0;i<swiperItem.length;i++)
    {
        if(index==i)
        {
            swiperItem[i].style.opcity=1;
        }
        else
        {
            swiperItem[i].style.opcity=0;
        }
        swiperItem[i].style.transform="translateX("+(-i*swiperItem[0].offsetWidth)+"px)";
    }

    //给圆点添加点击事件
    for(var k=0;k<indicators.length;k++)
    {
        indicators[k].onclick= function(){
            clearInterval(timer);
            var clickIndex=parseInt(this.getAttribute("data-index"));
            index=clickIndex;
            changeImg();


        }
    }
     
    prev.onclick=function(){
        index--;
        changeImg();
    }
    
    next.onclick=function(){
        index++;
        changeImg();
    }

   //鼠标经过自动播放
    swiper.addEventListener("mouseover",function(){
        clearInterval(timer);
    },false);
    swiper.addEventListener("mouseout",function(){
        autoChange();
    },false);
    //更换图片
    function changeImg(){
        if(index<0)
        {
            index=swiperItem.length-1;
        }else if(index>swiperItem.length-1)
        {
            index=0;
        }
        for(var j=0;j<swiperItem.length;j++)
        {
            swiperItem[j].style.opacity=0;
        }
        swiperItem[index].style.opacity=1;
        setIndicatorOn();
    }

//设置圆点激活状态
    function setIndicatorOn(){
        for(var i=0;i<indicators.length;i++)
        {
            indicators[i].classList.remove("on");

        }
        indicators[index].classList.add("on");
    }
    autoChange();
    //自动播放
    function autoChange(){
        timer=setInterval(function(){
            index++;
            changeImg();

        },3000);
    }

}   
}

