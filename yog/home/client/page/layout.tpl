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
        <link href="../static/css/base.css" rel="stylesheet">
        <link href="../static/css/main.css" rel="stylesheet">
        <title>{{ title }}</title>
        {% require "home:static/js/jquery-1.11.2.js" %}
    {% endhead %}

    {% body %}
        {% block content %}{% endblock %}
    {% endbody %}
    
    {% require "home:static/js/tools.js" %}
    {% require "home:static/js/util.js" %}
{% endhtml %}
