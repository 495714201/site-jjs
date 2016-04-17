<!doctype html>
{% html lang="en" framework="home:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="">
        <meta name="description" content="「金交所官网」提供的金交所APP手机理财聚合APP，聚合全网最优的800家线上理财产品，与3000家金融公司合作，省心有保障，安享高收益。金交所全国服务热线：010-53669251。">
        <meta name="keywords" content="金交所,金交所app,金交所官网">
        <link rel="icon" href="/static/favicon.ico">
        <link href="../static/css/main.css" rel="stylesheet">
        <title>{{ title }}</title>
        {% require "home:static/js/jquery-1.11.2.js" %}
    {% endhead %}

    {% body %}
        <div class="header wraper">
        <div class="head wrap">
            <div class="left">
                <p>欢迎致电：&nbsp;400-068-1176</p>
                <p>服务时间：&nbsp;9：&nbsp;&nbsp;00-21：&nbsp;&nbsp;00</p>
                <div class="weiboDiv">
                    <div class="weibo"></div>
                    <img class="weiboErWeiMa" src="/client/static/img/weiboErWeiMa.png" alt="">
                </div>
                <div class="weChatDiv">
                    <div class="weChat"></div>
                    <img class="weChatErWeiMa" src="/client/static/img/weChatErWeiMa.png" alt="">
                </div>
            </div>
            <div class="right">
                <p>退出</p>
                <p><span>131****1232</span>,&nbsp;&nbsp;您好</p>
                <!-- 以下为登录后 -->
                <!-- <p>登录</p>
                <p>注册</p> -->
                <p>下载客户端</p>
                <p id="collect">收藏该页</p>
            </div>
        </div>
        <div class="header2 wraper">
            <div class="head2 wrap">
                <div class="left">
                    <a href="#"><img src="/client/static/img/logo.png" alt=""></a>
                </div>
                <div class="right">
                    <a href="#">关于我们</a>
                    <a href="#">小金库</a>
                    <a href="#">网贷账本</a>
                    <a href="#">理财精选</a>
                    <a class ="active" href="#">首页</a>
                </div>
            </div>
        </div>
    </div>
    <div class="wraper1 wraper">
        <div class="wrap1 banner" id="banner">
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
        <div class="wrap2">
            <!-- 未登录状态 -->
            <!-- <div class="welcome welcome1">
                <p class="p1"><span class="hong">一站式</span>购买</p>
                <p class="p2">全平台自动记账</p>
                <p class="p3"><a href="#">注册送百元红包</a></p>
                <p class="p4">已有账号？&nbsp;&nbsp;<a href="#">立即登录</a></p>
            </div> -->
            <div class="welcome welcome2">
                <p class="p11">欢迎使用金交所理财！</p>
                <p class="p12">总资产：<span class="hong">666.66</span>（元）</p>
                <p class="p12">待收：<span class="hong">666.66</span>（元）</p>
                <p class="p12">小金库：<span class="hong">666.66</span>（元）</p>
                <p class="p13"><a href="#" class="a1">网贷资本</a><a href="#" class="a2">小金库</a></p>
            </div>
        </div>
    </div>
    <div class="wraper2 wraper">
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
            <a href="#" class="a4">
                <img src="/client/static/img/home_a4.png" alt="">
                <span class="span1">甄选产品</span>
                <span class="span2">多重风控保障</span>
            </a>
        </div>
    </div>
    <div class="wrapper3 wraper">
        <div class="wrap">
            <p class="title">推荐<span>红包送送送</span><a class="more" href="#">更多》</a></p>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
    {% endbody %}
    {% require "home:static/js/tools.js" %}
    {% require "home:static/js/util.js" %}
{% endhtml %}
