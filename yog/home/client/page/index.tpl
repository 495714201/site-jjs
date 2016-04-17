{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/user/userinfo.tpl"%}
     </div>
{% endblock %}