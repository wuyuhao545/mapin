  // 游戏状态
  // 1. 状态定义  
const GAME_STATES = {  
    START: 0,  
    PLAYING: 1
}

async function loadGameData() {  
    try {  
        const response = await fetch('寻宝作业改进/game_data.txt');  
        const data = await response.text();  
        const elements = parseGameData(data);  
        return elements;  
    } catch (error) {  
        console.error('加载数据失败:', error);  
    }  
}  

function parseGameData(data) {  
    const sections = data.split('\n\n');  
    const gameElements = {};  

    sections.forEach(section => {  
        const [title, ...details] = section.split('\n');  
        gameElements[title.replace(':', '')] = {  
            description: details[0].replace('描述：', ''),  
            treasure: details[1].replace('宝物：', '')  
        };  
    });  

    return gameElements;  
}  

function savePlayerData(playerId, nickname, gameHistory) {  
    const playerData = {  
        id: playerId,  
        nickname: nickname,  
        history: gameHistory  
    };  
    localStorage.setItem('playerData', JSON.stringify(playerData));  
}  

function loadPlayerData() {  
    const playerData = localStorage.getItem('playerData');  
    return playerData ? JSON.parse(playerData) : null;  
}  

// 在游戏开始时加载玩家数据  
let playerData = loadPlayerData();  
if (playerData) {  
    console.log('欢迎回来，' + playerData.nickname + '！');  
    // 恢复游戏历史等  
} else {  
    // 新玩家逻辑  
    const playerId = prompt('请输入您的玩家ID:');  
    const nickname = prompt('请输入您的昵称:');  
    savePlayerData(playerId, nickname, []);  
}

var i=0;//图片索引
var arr=new Array();    //图片列表
 
arr[0]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/page.png";
arr[1]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/map.png";
arr[2]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/start_stop.jpg";
arr[3]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/library.png";
arr[4]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/Supermarket.jpg";
arr[5]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/collage.jpg";
arr[6]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/place.jpg";
arr[7]="C:/Users/吴宇豪/Desktop/网页创建/寻宝作业改进/treasure.jpg"

function page(){
    var photo=document.getElementById("map");
    photo.src=arr[1];
    var btn = document.getElementById("startButton");    // 获取按钮元素对象
    btn.style.display = "none";   // 隐藏按钮
    document.querySelector('.container').style.opacity = '1'; //将五个地点展示出来
    document.getElementById("demo").innerHTML = "寻宝游戏地图"
}

let gameElements;  

document.getElementById('startButton').addEventListener('click', async function () {  
    gameState = GAME_STATES.PLAYING;  
    gameElements = await loadGameData(); // 加载游戏数据  
    page();  //主页面
    stop();  //火车站
    library();  //图书馆
    market();   //市场
    school();   //学校
    park();     //公园
    backgroundMusic.play();  //背景音乐
});

function stop(){
    var button = document.getElementById("stop");
    button.onclick = function(){
        var photo=document.getElementById("map");
        photo.src=arr[2]; 
        document.querySelector('.container').style.opacity = '0';
        document.getElementById("demo").innerHTML = "一座古老，破败的火车站，静静地伫立在岁月的角落，仿佛是一位历经沧桑的老人，诉说着往昔的辉煌与落寞。它的外墙早已斑驳不堪，砖瓦间透露出岁月的痕迹，每一块石头、每一根铁轨都承载着厚重的历史。站台上，杂草丛生，与昔日繁忙的景象形成了鲜明的对比，只有偶尔几声鸟鸣，才打破了这里的沉寂。那些曾经熙熙攘攘的候车室，如今也变得空旷而冷清，只有几盏昏黄的灯光，在黑暗中摇曳，似乎在回忆着过去的热闹与喧嚣。这座火车站，虽然已失去了往日的繁华，但它依然坚守在这里，成为了一段历史的见证者，静静地等待着那些愿意倾听它故事的人。";
        StopEvent();
    }    
}

function library() {  
    var button = document.getElementById("stop");
    button.onclick = function(){
        var photo=document.getElementById("map");
        photo.src=arr[2]; 
        document.querySelector('.container').style.opacity = '0';
        document.getElementById("demo").innerHTML = "一个古老而庄严的图书馆，静静地伫立在岁月的长河中，仿佛一位智慧的老者，默默守护着无数知识与故事。 ";
        StopEvent();
    }  
}

        
 function market(){
    var button = document.getElementById("market");
    button.onclick = function(){
        var photo=document.getElementById("map");
        photo.src=arr[4]; 
        document.querySelector('.container').style.opacity = '0';
        document.getElementById("demo").innerHTML ="一个喧嚣而繁忙的超市，人来人往，热闹非凡。各式各样的商品琳琅满目，摆满了货架，从新鲜的果蔬到各式各样的零食，从日常用品到家用电器，应有尽有，满足了顾客的各种需求。收银台前，顾客们排起了长队，耐心等待结账。促销员的吆喝声、顾客的交谈声以及收银机的嘀嗒声交织在一起，构成了一首独特的购物交响曲。";
        marketEvent();
    }  
}
            
function school(){
    var button = document.getElementById("school");
    button.onclick = function(){
        var photo=document.getElementById("map");
        photo.src=arr[5]; 
        document.querySelector('.container').style.opacity = '0';
        document.getElementById("demo").innerHTML ="一所历史悠久、声誉卓著的重点大学，坐落在风景秀丽的城市一隅，吸引着来自五湖四海的优秀学子。这所大学以其卓越的教学质量、丰富的学术资源和深厚的文化底蕴，在国内外享有极高的学术声望。校园内绿树成荫，古朴的建筑与现代设施交相辉映，为学生提供了一个既宁静又充满活力的学习环境。";
        SchoolEvent();
    }  
}

function park(){
    var button = document.getElementById("park");
    button.onclick = function(){
        var photo=document.getElementById("map");
        photo.src=arr[6]; 
        document.querySelector('.container').style.opacity = '0';
        document.getElementById("demo").innerHTML ="一个风景如画的公园，绿树成荫，鲜花盛开，为市民提供了一个休闲放松的好去处。园内小径蜿蜒，连接着各个景点，既有静谧的湖泊，也有热闹的游乐场，满足不同年龄层游客的需求。";
        ParkEvent();
    }  
}           

  
function StopEvent(){
    const button = document.createElement('button');    //设计选择按钮，选择下一步的行动
    button.className = 'button';  
    button.textContent = '深入破旧的火车站';  
    document.body.appendChild(button);
    button.addEventListener('click', function() {        //设置点击后触发的事件
        button.style.display = 'none'; 
        alert("宝藏在并不在这，但你找到了线索，宝藏在河流对岸"); 
        page(); 
    });  
}

function LibraryEvent() {  
    const button = document.createElement('button');    //设计选择按钮，选择下一步的行动
    button.className = 'button';  
    button.textContent = '深入破旧的火车站';  
    document.body.appendChild(button);
    button.addEventListener('click', function() {        //设置点击后触发的事件
        button.style.display = 'none'; 
        alert("宝藏在并不在这，但你找到了线索，宝藏在学校里"); 
        page(); 
    })
}

function SchoolEvent(){
    const button = document.createElement('button');  
    button.className = 'button';  
    button.textContent = '在高校中寻找';  
    document.body.appendChild(button);
    button.addEventListener('click', function() {  
        // 设置一个5秒计时器，5秒后隐藏按钮  
        alert("恭喜你找到了宝藏！");
        button.style.display = 'none';    
        document.getElementById("demo").innerHTML ="你打开了宝箱，得到了属于自己的财宝";
            var photo=document.getElementById("map");
            photo.src=arr[7]; 
        setTimeout(function() {  
            alert("游戏结束");
        }, 2000);   
    });  
}

function ParkEvent(){
    const button = document.createElement('button');  
    button.className = 'button';  
    button.textContent = '在公园休息片刻';  
    document.body.appendChild(button);
    button.addEventListener('click', function() {  
        alert("你漫步在公园之中，细细欣赏着一处处美景，飞上枝头的小鸟，池边跳越的青蛙，你的心情十分舒畅，但你没找到宝藏");
        button.style.display = 'none'; 
        page();
    });  
}

function marketEvent(){
    const button = document.createElement('button');  
    button.className = 'button';  
    button.textContent = '游走于大街小巷中';   
    document.body.appendChild(button);
    button.addEventListener('click', function() { 
        button.style.display = 'none';
        alert("宝藏在并不在这，但你找到了线索，宝藏在市场的北方");   
        page();
    });  
}