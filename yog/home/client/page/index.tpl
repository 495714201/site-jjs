{% extends 'home:page/layout.tpl' %}

{% block content %}
<!-- topnav -->
    <div class="topnav wrapper">
    	<div class="head wrap">
    		<div class="fl">
    			<p>欢迎致电：&nbsp;400-068-1176</p>
    			<p>服务时间：&nbsp;9：&nbsp;&nbsp;00-21：&nbsp;&nbsp;00</p>
    			<div class="weiboDiv">
    				<div></div>
    				<img src="/client/static/img/weiboErWeiMa.png" alt="">
    			</div>
    			<div class="weChatDiv">
    				<div></div>
    				<img src="/client/static/img/weChatErWeiMa.png" alt="">
    			</div>
    		</div>
			<div class="fr">
    			<p>退出</p>
    			<p><span>131****1232</span>,&nbsp;&nbsp;您好</p>
    			<!-- 以下为登录后 -->
    			<!-- <p>登录</p>
    			<p>注册</p> -->
    			<p>下载客户端</p>
    			<p id="collect">收藏该页</p>
			</div>
    	</div>
    </div>

    <!-- mainnav-->
	<header class="mainbav wrapper">
		<div class="head wrap">
			<div class="fl">
				<a href="#"><img src="/client/static/img/logo.png" alt=""></a>
			</div>
			<div class="fr">
				<a href="#">关于我们</a>
				<a href="#">小金库</a>
				<a href="#">网贷账本</a>
				<a href="#">理财精选</a>
				<a class ="active" href="#">首页</a>
			</div>
		</div>
	</header>

    <div class="column-banner wrapper">
    	<div class="banner" id="banner">
            <!-- 以下为banner的js插件生成 -->
            <!--<ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul> -->
            <!--<div class="dot" id="dot">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div> -->
           <!--  <span  class="left"></span>
           <span  class="right"></span> -->
    	</div>
        <div class="wrap">
            <!-- 未登录状态 -->
            <!-- <div class="welcome welcome1">
                <p class="p1 f17"><span class="hong fc5f4e">一站式</span>购买</p>
                <p class="f17">全平台自动记账</p>
                <p class="p3"><a href="#">注册送百元红包</a></p>
                <p class="f14">已有账号？&nbsp;&nbsp;<a href="#">立即登录</a></p>
            </div> -->
            <div class="welcome welcome2">
                <p class="p11">欢迎使用金交所理财！</p>
                <p class="p12">总资产：<span class="hong">666.66</span>（元）</p>
                <p class="p12">待收：<span class="hong">666.66</span>（元）</p>
                <p class="p12">小金库：<span class="hong">666.66</span>（元）</p>
                <p class="p13"><a href="#" class="bg_fc614d">网贷资本</a><a href="#" class="bg_ff7e69">小金库</a></p>
            </div>
        </div>
    </div>

    <div class="column-title wrapper">
        <div class="wrap">
            <a href="#">
                <img src="/client/static/img/home_a4.png" alt="">
                <span class="span1">甄选产品</span>
                <span class="span2">多重风控保障</span>
            </a>            
            <a href="#">
                <img src="/client/static/img/home_a4.png" alt="">
                <span class="span1">甄选产品</span>
                <span class="span2">多重风控保障</span>
            </a>            
            <a href="#">
                <img src="/client/static/img/home_a4.png" alt="">
                <span class="span1">甄选产品</span>
                <span class="span2">多重风控保障</span>
            </a>            
            <a href="#" class="mr0">
                <img src="/client/static/img/home_a4.png" alt="">
                <span class="span1">甄选产品</span>
                <span class="span2">多重风控保障</span>
            </a>
        </div>
    </div>
    <div class="column-mod wrapper">
        <div class="wrap">
            <p class="title">推荐<span>红包送送送</span><a class="more" href="#">更多》</a></p>
            <ul>
                <li>
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">.04%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>                
                <li>
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>                
                <li>
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">.04%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>                
                <li class="mr0">
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">.04%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
    </div>
    <div class="column-mod wrapper">
        <div class="wrap">
            <p class="title">合作平台</p>
            <ul>
                <li>
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">.04%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>                
                <li>
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>                
                <li>
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">.04%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>                
                <li class="mr0">
                    <a href="#">
                        <p class="p31">前海理想金融</p>
                        <div>
                            <p class="p32">6<span class="f20">.04%</span></p>
                            <p class="p33">年化收益率</p>
                        </div>
                        <p class="p34">随存随取</p>
                        <p  class="p35">马上投资</p>
                        <p class="p36">加息5.5%</p>
                    </a>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
    </div>
    <div class="column-hdjx wrapper">
        <div class="wrap">
            <p class="title">活动精选</p>
            <ul>
                <li>
                    <a href="#">
                        <p class="p51">前海理想金融</p>
                        <p class="p54">随存随取</p>
                        <p><img src="" alt=""></p>
                    </a>
                </li>                
                <li>
                    <a href="#">
                        <img src="/client/static/img/port/img1.png" alt="">
                        <p class="p51">前海理想金融</p>
                        <p class="p54">随存随取</p>
                        <p class="p55"><img src="/client/static/img/port/icon1.png" alt=""></p>
                    </a>
                </li>                
                <li>
                    <a href="#">
                        <p class="p51">前海理想金融</p>
                        <p class="p54">随存随取</p>
                        <p><img src="" alt=""></p>
                    </a>
                </li>                
                <li class="mr0">
                    <a href="#">
                        <p class="p51">前海理想金融</p>
                        <p class="p54">随存随取</p>
                        <p><img src="" alt=""></p>
                    </a>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
    </div>
    <div class="wraper4 wraper">
        <div class="wrap">
            <p class="title">合作平台</p>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
    <div class="column-hdjx  wraper">
        <div class="wrap">
            <p class="title">活动精选<span>红包送送送</span><a class="more" href="#">更多》</a></p>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>    
    <div class="wraper6 wraper">
        <div class="wrap">
           <ul>
               <li></li>
               <li></li>
           </ul>
        </div>
    </div>
{% endblock %}