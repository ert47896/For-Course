const photoNum=8;
let photoCount=0;
let data;
let maxNum=0;
window.onload=function(){
    let req=new XMLHttpRequest();
    req.open("get", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
    req.onload=function(){
        data = JSON.parse(req.responseText).result.results;
        maxNum = data.length;
        dealData(data);
    };
    req.send();
};

let btn=document.getElementById("btn");
btn.addEventListener("click", function(){
    photoCount+=photoNum;
    if(photoCount>=maxNum){
        btn.textContent="地點已呈現完畢!";
    }else{
        dealData(data);
    }
});

function dealData(spotsData){
    for(i=photoCount;i<photoCount+photoNum;i++){
        let container=document.createElement("div");
        container.classList.add("container");
        document.querySelector(".photosContainer").appendChild(container);
        const firstUrl="http://"+spotsData[i].file.split('http://')[1];
        const spotName=spotsData[i].stitle;
        let imgUrl=document.createElement("img");
        let photoName=document.createElement("div");
        photoName.classList.add("context");
        imgUrl.src=firstUrl;
        photoName.textContent=spotName;
        document.querySelectorAll(".container")[i].appendChild(imgUrl);
        document.querySelectorAll(".container")[i].appendChild(photoName);
    };
};

