const photoNum=8;
window.onload=function(){
    let req=new XMLHttpRequest();
    req.open("get", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
    req.onload=function(){
        let data=JSON.parse(req.responseText);
        getData(data.result.results);
    };
    req.send();
};

function getData(spotsData){
    //const imgMatches=document.querySelectorAll("img");
    //console.log(imgMatches);
    //let imgUrl=document.createElement("img");
    //imgUrl.src=spotsData[0].file;
    //document.body.main.appendChild(imUrl);
    for(i=0;i<photoNum;i++){
        const firstUrl="http://"+spotsData[i].file.split('http://')[1];
        const photoTitle=spotsData[i].stitle;
        let imgUrl=document.createElement("img");
        let photoName=document.createElement("div");
        imgUrl.src=firstUrl;
        photoName.textContent=photoTitle;
        document.querySelectorAll('.container')[i].appendChild(imgUrl);
        document.querySelectorAll('.container')[i].appendChild(photoName);
    }    
};

/*
function getData(){
    if(spotsData===undefined){
        let req=new XMLHttpRequest();
        req.open("get", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
        req.onload=function(){
            spotsData=JSON.parse(req.responseText);
            console.log(spotsData);
            console.log("222222222222");
        };
        req.onerror=function(){
            console.log("Connection error");
        };
        req.send();
    };
    const matchs=document.querySelectorAll("img");
    console.log(matchs);
    console.log(spotsData);
};
*/


