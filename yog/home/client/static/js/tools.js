/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-12 15:44:39
 * @version $Id$
 */
//收藏该页

var tools ={
	/*添加到收藏夹
	*param url   收藏的链接 str
	*param title 收藏的名字 str
	*/
	addfavorite : function(url,title){
		if (document.all) { //ie
			window.external.addFavorite(url,title); 
		} else if (window.sidebar) {//火狐
			alert("加入收藏失败，请使用Ctrl+D手动收藏！");
		} else{//谷歌
			alert("加入收藏失败，请使用Ctrl+D手动收藏！");
		}
	},

	/*banner条动效
	*图片会一直居中
	*fn getTotalLi   获取到banner个数 
	*fn ulInit       初始化banner ul盒子
	*fn dotInit      初始化悬浮小点
	*var activeSort  当前该显示的序列号
	*var interval    动效自动换图的间隔时间
	*var timer       定时器
	*var Data        从服务器里获取过来的数据经过JSON.parse(data).data计算后的数据
	*var len         Data 的长度
	*/
	banner: {
		activeSort: 0,
		interval: 3000,
		timer : null,
		Data: null,
		len: null,
		init: function (){
			tools.banner.getData();
		},
		getData: function (){
			tools.ajax2("get","banner.txt",true,"",successFn);
			function successFn (data){
				var result = JSON.parse(data);
				if(result.success){
            		tools.banner.Data= result.data;
            		tools.banner.len= tools.banner.Data.length;
            		if(tools.banner.len!==0){
            			tools.banner.ulInit();
            			tools.banner.dotInit();
            			tools.banner.skipInit();
            		}else{
            			//服务器一张图都没有时怎么办
            		}
                }else{
            		alert("服务器返回异常，请稍后再试。")
            	}	
			}
		},

		ulInit: function(){
			var banner = document.getElementById('banner');
			var ul = document.createElement('ul');
			ul.style.position = "relative";
			for(var i = 0; i<tools.banner.len; i++){
				var li = document.createElement("li");
				if(i == tools.banner.activeSort){
					li.style.opacity = 1;
				}
				var a = document.createElement("a");
				//li.style.zIndex = data[i]["sort"];
				a.style.background = tools.banner.Data[i]["bg"]+" url("+tools.banner.Data[i]["img"]+") no-repeat center center";
				/*a.style.backgroundSize = imgW+" "+imgH;*/
				a.href = tools.banner.Data[i]["link"];
				a.dataSort = tools.banner.Data[i]["sort"];
				li.appendChild(a);
				ul.appendChild(li);
			}
			banner.appendChild(ul);

		},
		dotInit: function (){
			var banner = document.getElementById('banner');
			var dot = document.createElement('div');
			dot.id = "dot";
			dot.className = "dot";
			for(var i = 0; i<tools.banner.len; i++){
				var span = document.createElement("span");
				if(i == tools.banner.activeSort){
					span.className+=" active";
				}
				span.dataSort = tools.banner.Data[i]["sort"];
				dot.appendChild(span);
				span.index = i;
				span.onmouseover = function() {
					tools.banner.clearTimer();
					tools.banner.oneShow(this.index);
				}				
				span.onmouseout = function() {
					tools.banner.setTimer();
				}
			}
			banner.appendChild(dot);
			/*function setTimer (Data){
				var len =Data.length;
				tools.banner.timer = setInterval(function(){
					tools.banner.activeSort++;
					tools.banner.oneShow(tools.banner.activeSort%len);
				},tools.banner.interval);
			}*/
			tools.banner.setTimer();
		},
		skipInit: function (){
			var banner = document.getElementById('banner');
			var left = document.createElement('left');
			var right = document.createElement('right');
			left.className= "left";
			right.className= "right";
			banner.appendChild(left);
			banner.appendChild(right);
			left.onclick = function (){
				tools.banner.clearTimer();
				tools.banner.activeSort--;
				if(tools.banner.activeSort < 0){
					tools.banner.activeSort = tools.banner.len-1;
				}
				tools.banner.oneShow(tools.banner.activeSort%tools.banner.len);
			}
			right.onclick = function (){
				tools.banner.clearTimer();
				tools.banner.activeSort++;
				tools.banner.oneShow(tools.banner.activeSort%tools.banner.len);
			}
			left.onmouseout = function() {
				tools.banner.setTimer(tools.banner.Data);
			}
			right.onmouseout = function() {
				tools.banner.setTimer(tools.banner.Data);
			}
		},
		oneShow: function(sort){
			var lis = document.getElementById("banner").getElementsByTagName("li");
			var dots = document.getElementById("dot").getElementsByTagName("span");
			for(var i = 0; i<tools.banner.len; i++){
				if(i !== sort){
					lis[i].style.opacity = 0;
					dots[i].className = dots[i].className.replace(/ active/,"");
				}
			}
			lis[sort].style.opacity = 1;
			tools.banner.activeSort = sort;
			dots[sort].className +=" active";
		},
		setTimer: function(){
			tools.banner.timer = setInterval(function(){
				tools.banner.activeSort++;
				tools.banner.oneShow(tools.banner.activeSort%tools.banner.len);
			},tools.banner.interval);
		},
		clearTimer: function(){
			clearInterval(tools.banner.timer);
			tools.banner.timer = null;
		}

	},

	/*ajax请求 依赖于jquery
	*param type       类型 str
	*param url        请求地址 str
	*param async   	  是否异步 true为异步   false 同步
	*param successFn  请求成功回调函数 fn
	*param errFn      请求失败回调函数 fn
	*/
	ajax: function(type,url,async,data,successFn,errFn){
		$.ajax({
			type: type,
            url: url,//东帅给路径，ac为服务器的类型
            async: async,
            cache: false,
            //dataType: "json",
            //data: {'url':'http://api2.bajinshe.com/web-inner//account/api/v1/getInvit','usn':usnVal,'start':0,'limit':100},//从0条开始获取，获取100条数据
            data: data,
            success: function(data){
            	alert(data);
            	/*var result= JSON.parse(data);
            	if(result.success){
            		var data= result.data;
            		if(data.length!==0){
            			var total=0;
	            		for (var i=0;i<data.length;i++){
	            			var reward=data[i].showName;
	            			reward=reward.replace("奖励","-").split("-");//现金-10.0元
	            			reward[1]=reward[1].replace((/(\.\d)元/.exec(reward[1]))[0],"");
	            			reward[1] = Number(reward[1]);
	            			total +=reward[1];
	            			fanli.innerHTML=total;
	            		}
            		}else{
	            		fanli.innerHTML=0;
            		}
            	}else{
            		alert("服务器返回异常，请稍后再试。")
            	}*/
            
            },
            error: function(){
            	alert("请求异常，请稍后再试。");
            }
        }); 
	},

	/*原生js ajax请求
	*param type       类型 str
	*param url        请求地址 str
	*param async   	  是否异步 true为异步   false 同步
	*param successFn  请求成功回调函数 fn
	*param errFn      请求失败回调函数 fn
	*/
	ajax2: function (type,url,async,data,successFn) {
	    var xmlHttpReq = null; 
	    if (window.ActiveXObject) { //IE5 IE6
	        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	    } else if (window.XMLHttpRequest) { //除IE5 IE6 以外的浏览器
	        xmlHttpReq = new XMLHttpRequest(); 
	    }
	    if (xmlHttpReq != null) {
	        xmlHttpReq.open(type,url,async); 
	        xmlHttpReq.onreadystatechange = RequestCallBack; 
	        xmlHttpReq.send(data); 
	    }

	    function RequestCallBack() {
	        if (xmlHttpReq.readyState == 4) {
	            if (xmlHttpReq.status == 200) { 
	    			var result = xmlHttpReq.responseText;
	            	successFn(result);
	            }
	        }else{
	        	//errFn();
	        }
	    }
	}


}
