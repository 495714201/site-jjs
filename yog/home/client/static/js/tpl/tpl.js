/*
 * des:tpl模版
 * author:wfj
 * email:177676656@qq.com
 * time:2016-04-15 00:22
 */
define(function(require, exports, module) {
	var tpls = {
		//分类列表页
		tpl01: [
			'<ul class="clearfix">',
                '{@each data as list}',
                '<li>',
                  	'<a href="/subordinate?cid=${list.cid}" target="_blank">',
                    	'<div class="menu_img">',
                    		'<img src="${list.img_url}" x="120" y="120" alt="${list.name}"/>',
                  		'</div>',
                    	'<strong>${list.name}</strong>',
                    '</a>',
                '</li>',
                '{@/each}',
            '</ul>'
		].join("")
	};
	module.exports = tpls;
});
