require.config({
	//baseUrl: "./",
	paths: {
		// path
		"root": "../../../",
		"ui-libs": "../../../ui-libs",
		"ui-libs-demo": "../../../ui-libs-demo",

		// Offical Plugins
		"domReady": "../../../ui-libs/requirejs/plugins/domReady/2.0.1/domReady",
		"i18n": "../../../ui-libs/requirejs/plugins/i18n/2.0.5/i18n",
		"nls": "../../../ui-libs-demo/requirejs/2.1.17/nls",

		"text": "../../../ui-libs/requirejs/plugins/text/2.0.14/text",
		"jquery": "../../../ui-libs/jquery/1.7.2/jquery.min",
		"jquery-ui": "../../../ui-libs/jquery-ui/1.9pre/ui/jquery-ui"
	},
	shim: {
		"jquery.plugin1": ["jquery"],
		"jquery-ui": ["jquery", "css!ui-libs/jquery-ui/1.9pre/themes/base/jquery-ui"]
	},
	map: {
		'*': {
			// require-css 插件：https://github.com/guybedford/require-css
			'css': 'ui-libs/requirejs/plugins/require-css/0.1.8/css.min'
		}
	},
	config: {
		//Set the config for the i18n module ID
		//i18n: {locale: 'zh-cn'}
	},
	waitSeconds: 5
});

console.log("require=%o", typeof require);
console.log("define=%o", typeof define);
console.log("module=%o", typeof module);

require(["json1", "json2", "fn"], function (json1, json2, fn) {
	// 对象重复获取结果是一样的
	console.log("%s, fn=%o", require("fn") === fn, typeof fn);
	console.log("%s, json1=%o", require("json1") === json1, json1);
	console.log("%s, json2=%o", require("json2") === json2, json2);

	// 异常：Module name "json3" has not been loaded yet for context: _. Use require([])
	//var json3 = require("json3");
	//console.log("json3=%o", json3);
});

// 测试简单类型
require(["string", "number", "boolean"], function (s, n, b) {
	console.log("%s, string=%o", require("string") === s, s);
	console.log("%s, number=%i", require("number") === n, n);
	console.log("%s, b=%o", require("boolean") === b, b);
});

// 测试加载两个不同版本的jquery
require(["jquery", "my.module1", "jquery-ui"], function ($, m1, ui) {
	console.log("args=%o", arguments);
	console.log("$.version=%o", $.fn.jquery);
	console.log("$.dialog=%o", typeof $.fn.dialog);
});

require(['domReady'], function (domReady) {
	domReady(function () {
		//This function is called once the DOM is ready.
		//It will be safe to query the DOM and manipulate
		//DOM nodes in this function.
		console.log("domReady=%o", typeof domReady);
	});
});
require(['domReady!'], function (doc) {
	//This function is called once the DOM is ready,
	//notice the value for 'domReady!' is the current
	//document.
	console.log("document=%o", doc);
});

require(["text!ui-libs-demo/requirejs/2.1.17/tpl.htm", "jquery"], function (tpl, $) {
	console.log("tpl=%o", typeof tpl);
	$("body").append(tpl);
	console.log("navigator.language=%o", navigator.language);
	console.log("navigator.userLanguage =%o", navigator.userLanguage);
});

// http://requirejs.org/docs/api.html#i18n
require(["i18n!nls/colors"], function(colors) {
	console.log("colors=%o", colors);
});

// 使用绝对路径加载模块
require(["/ui-libs-demo/requirejs/2.1.17/json.js"], function(json) {
	console.log("json=%o", json);
});