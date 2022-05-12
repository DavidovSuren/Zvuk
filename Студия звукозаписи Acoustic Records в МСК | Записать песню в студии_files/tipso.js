!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(l){function s(t,o){this.element=t,this.$element=l(this.element),this.doc=l(document),this.win=l(window),this.settings=l.extend({},d,o),"object"==typeof this.$element.data("tipso")&&l.extend(this.settings,this.$element.data("tipso"));for(var e=Object.keys(this.$element.data()),r={},s=0;s<e.length;s++){var i=e[s].replace(a,"");if(""!==i)for(var n in r[i=i.charAt(0).toLowerCase()+i.slice(1)]=this.$element.data(e[s]),this.settings)n.toLowerCase()==i&&(this.settings[n]=r[i])}this._defaults=d,this._name=a,this._title=this.$element.attr("title"),this.mode="hide",this.ieFade=!c,this.settings.preferedPosition=this.settings.position,this.init()}function p(t){var o=t.clone();o.css("visibility","hidden"),l("body").append(o);var e=o.outerHeight(),t=o.outerWidth();return o.remove(),{width:t,height:e}}function f(t){t.removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner"),t.find(".tipso_title").removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner")}function g(t){var o,e,r,s=t.tooltip(),i=t.$element,n=t,a=l(window),d=n.settings.background,t=n.titleContent();switch(void 0!==t&&""!==t&&(d=n.settings.titleBackground),i.parent().outerWidth()>a.outerWidth()&&(a=i.parent()),n.settings.position){case"top-right":e=i.offset().left+i.outerWidth(),o=i.offset().top-p(s).height-10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("bottom_right_corner"),s.find(".tipso_title").addClass("bottom_right_corner"),s.find(".tipso_arrow").css({"border-left-color":d}),s.removeClass("top-right top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent ","border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("top_right_corner"),s.find(".tipso_arrow").css({"border-left-color":n.settings.background}),s.removeClass("top bottom left right"),s.addClass("top"));break;case"top-left":e=i.offset().left-p(s).width,o=i.offset().top-p(s).height-10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("bottom_left_corner"),s.find(".tipso_title").addClass("bottom_left_corner"),s.find(".tipso_arrow").css({"border-right-color":d}),s.removeClass("top-right top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent ","border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("top_left_corner"),s.find(".tipso_arrow").css({"border-right-color":n.settings.background}),s.removeClass("top bottom left right"),s.addClass("top"));break;case"bottom-right":e=i.offset().left+i.outerWidth(),o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o+p(s).height>a.scrollTop()+a.outerHeight()?(o=i.offset().top-p(s).height-10,s.find(".tipso_arrow").css({"border-bottom-color":"transparent","border-top-color":n.settings.background,"border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("top_right_corner"),s.find(".tipso_title").addClass("top_left_corner"),s.find(".tipso_arrow").css({"border-left-color":n.settings.background}),s.removeClass("top-right top bottom left right"),s.addClass("top")):(s.find(".tipso_arrow").css({"border-top-color":"transparent","border-bottom-color":d,"border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("bottom_right_corner"),s.find(".tipso_title").addClass("bottom_right_corner"),s.find(".tipso_arrow").css({"border-left-color":d}),s.removeClass("top bottom left right"),s.addClass("bottom"));break;case"bottom-left":e=i.offset().left-p(s).width,o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o+p(s).height>a.scrollTop()+a.outerHeight()?(o=i.offset().top-p(s).height-10,s.find(".tipso_arrow").css({"border-bottom-color":"transparent","border-top-color":n.settings.background,"border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("top_left_corner"),s.find(".tipso_title").addClass("top_left_corner"),s.find(".tipso_arrow").css({"border-right-color":n.settings.background}),s.removeClass("top-right top bottom left right"),s.addClass("top")):(s.find(".tipso_arrow").css({"border-top-color":"transparent","border-bottom-color":d,"border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.addClass("bottom_left_corner"),s.find(".tipso_title").addClass("bottom_left_corner"),s.find(".tipso_arrow").css({"border-right-color":d}),s.removeClass("top bottom left right"),s.addClass("bottom"));break;case"top":e=i.offset().left+i.outerWidth()/2-p(s).width/2,o=i.offset().top-p(s).height-10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("top"));break;case"bottom":e=i.offset().left+i.outerWidth()/2-p(s).width/2,o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),o+p(s).height>a.scrollTop()+a.outerHeight()?(o=i.offset().top-p(s).height-10,s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("top")):(s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass(n.settings.position));break;case"left":e=i.offset().left-p(s).width-10,o=i.offset().top+i.outerHeight()/2-p(s).height/2,s.find(".tipso_arrow").css({marginTop:-n.settings.arrowWidth,marginLeft:""}),e<a.scrollLeft()?(e=i.offset().left+i.outerWidth()+10,s.find(".tipso_arrow").css({"border-right-color":n.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("right")):(s.find(".tipso_arrow").css({"border-left-color":n.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass(n.settings.position));break;case"right":e=i.offset().left+i.outerWidth()+10,o=i.offset().top+i.outerHeight()/2-p(s).height/2,s.find(".tipso_arrow").css({marginTop:-n.settings.arrowWidth,marginLeft:""}),e+10+n.settings.width>a.scrollLeft()+a.outerWidth()?(e=i.offset().left-p(s).width-10,s.find(".tipso_arrow").css({"border-left-color":n.settings.background,"border-right-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass("left")):(s.find(".tipso_arrow").css({"border-right-color":n.settings.background,"border-left-color":"transparent","border-top-color":"transparent","border-bottom-color":"transparent"}),s.removeClass("top bottom left right"),s.addClass(n.settings.position))}"top-right"===n.settings.position&&s.find(".tipso_arrow").css({"margin-left":-n.settings.width/2}),"top-left"===n.settings.position&&s.find(".tipso_arrow").eq(0).css({"margin-left":n.settings.width/2-2*n.settings.arrowWidth}),"bottom-right"===n.settings.position&&s.find(".tipso_arrow").eq(0).css({"margin-left":-n.settings.width/2,"margin-top":""}),"bottom-left"===n.settings.position&&s.find(".tipso_arrow").eq(0).css({"margin-left":n.settings.width/2-2*n.settings.arrowWidth,"margin-top":""}),e<a.scrollLeft()&&("bottom"===n.settings.position||"top"===n.settings.position)&&(s.find(".tipso_arrow").css({marginLeft:e-n.settings.arrowWidth}),e=0),e+n.settings.width>a.outerWidth()&&("bottom"===n.settings.position||"top"===n.settings.position)&&(r=a.outerWidth()-(e+n.settings.width),s.find(".tipso_arrow").css({marginLeft:-r-n.settings.arrowWidth,marginTop:""}),e+=r),e<a.scrollLeft()&&("left"===n.settings.position||"right"===n.settings.position||"top-right"===n.settings.position||"top-left"===n.settings.position||"bottom-right"===n.settings.position||"bottom-left"===n.settings.position)&&(e=i.offset().left+i.outerWidth()/2-p(s).width/2,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),(o=i.offset().top-p(s).height-10)<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),f(s),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),s.removeClass("top bottom left right"),f(s),s.addClass("top")),e+n.settings.width>a.outerWidth()&&(r=a.outerWidth()-(e+n.settings.width),s.find(".tipso_arrow").css({marginLeft:-r-n.settings.arrowWidth,marginTop:""}),e+=r),e<a.scrollLeft()&&(s.find(".tipso_arrow").css({marginLeft:e-n.settings.arrowWidth}),e=0)),e+n.settings.width>a.outerWidth()&&("left"===n.settings.position||"right"===n.settings.position||"top-right"===n.settings.position||"top-left"===n.settings.position||"bottom-right"===n.settings.position||"bottom-right"===n.settings.position)&&(e=i.offset().left+i.outerWidth()/2-p(s).width/2,s.find(".tipso_arrow").css({marginLeft:-n.settings.arrowWidth,marginTop:""}),(o=i.offset().top-p(s).height-10)<a.scrollTop()?(o=i.offset().top+i.outerHeight()+10,s.find(".tipso_arrow").css({"border-bottom-color":d,"border-top-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.removeClass("top bottom left right"),s.addClass("bottom")):(s.find(".tipso_arrow").css({"border-top-color":n.settings.background,"border-bottom-color":"transparent","border-left-color":"transparent","border-right-color":"transparent"}),f(s),s.removeClass("top bottom left right"),s.addClass("top")),e+n.settings.width>a.outerWidth()&&(r=a.outerWidth()-(e+n.settings.width),s.find(".tipso_arrow").css({marginLeft:-r-n.settings.arrowWidth,marginTop:""}),e+=r),e<a.scrollLeft()&&(s.find(".tipso_arrow").css({marginLeft:e-n.settings.arrowWidth}),e=0)),s.css({left:e+n.settings.offsetX,top:o+n.settings.offsetY}),o<a.scrollTop()&&("right"===n.settings.position||"left"===n.settings.position)&&(i.tipso("update","position","bottom"),g(n)),o+p(s).height>a.scrollTop()+a.outerHeight()&&("right"===n.settings.position||"left"===n.settings.position)&&(i.tipso("update","position","top"),g(n))}var a="tipso",d={speed:400,background:"#55b555",titleBackground:"#333333",color:"#ffffff",titleColor:"#ffffff",titleContent:"",showArrow:!0,position:"top",width:200,maxWidth:"",delay:200,hideDelay:0,animationIn:"",animationOut:"",offsetX:0,offsetY:0,arrowWidth:8,tooltipHover:!1,content:null,ajaxContentUrl:null,ajaxContentBuffer:0,contentElementId:null,useTitle:!1,templateEngineFunc:null,onBeforeShow:null,onShow:null,onHide:null};l.extend(s.prototype,{init:function(){var t,o,e=this,r=this.$element;this.doc;r.addClass("tipso_style").removeAttr("title"),e.settings.tooltipHover?(o=t=null,r.on("mouseover."+a,function(){clearTimeout(t),clearTimeout(o),o=setTimeout(function(){e.show()},150)}),r.on("mouseout."+a,function(){clearTimeout(t),clearTimeout(o),t=setTimeout(function(){e.hide()},200),e.tooltip().on("mouseover."+a,function(){e.mode="tooltipHover"}).on("mouseout."+a,function(){e.mode="show",clearTimeout(t),t=setTimeout(function(){e.hide()},200)})})):(r.on("mouseover."+a,function(){e.show()}),r.on("mouseout."+a,function(){e.hide()})),e.settings.ajaxContentUrl&&(e.ajaxContent=null)},tooltip:function(){return this.tipso_bubble||(this.tipso_bubble=l('<div class="tipso_bubble"><div class="tipso_title"></div><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')),this.tipso_bubble},show:function(){var t=this.tooltip(),o=this,e=this.win;!1===o.settings.showArrow?t.find(".tipso_arrow").hide():t.find(".tipso_arrow").show(),"hide"===o.mode&&(l.isFunction(o.settings.onBeforeShow)&&o.settings.onBeforeShow(o.$element,o.element,o),o.settings.size&&t.addClass(o.settings.size),(o.settings.width?t.css({background:o.settings.background,color:o.settings.color,width:o.settings.width}):o.settings.maxWidth?t.css({background:o.settings.background,color:o.settings.color,maxWidth:o.settings.maxWidth}):t.css({background:o.settings.background,color:o.settings.color,width:200})).hide(),t.find(".tipso_title").css({background:o.settings.titleBackground,color:o.settings.titleColor}),t.find(".tipso_content").html(o.content()),t.find(".tipso_title").html(o.titleContent()),g(o),e.on("resize."+a,function(){o.settings.position=o.settings.preferedPosition,g(o)}),window.clearTimeout(o.timeout),o.timeout=null,o.timeout=window.setTimeout(function(){o.ieFade||""===o.settings.animationIn||""===o.settings.animationOut?t.appendTo("body").stop(!0,!0).fadeIn(o.settings.speed,function(){o.mode="show",l.isFunction(o.settings.onShow)&&o.settings.onShow(o.$element,o.element,o)}):t.remove().appendTo("body").stop(!0,!0).removeClass("animated "+o.settings.animationOut).addClass("noAnimation").removeClass("noAnimation").addClass("animated "+o.settings.animationIn).fadeIn(o.settings.speed,function(){l(this).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){l(this).removeClass("animated "+o.settings.animationIn)}),o.mode="show",l.isFunction(o.settings.onShow)&&o.settings.onShow(o.$element,o.element,o),e.off("resize."+a,null,"tipsoResizeHandler")})},o.settings.delay))},hide:function(t){var o=this,e=this.win,r=this.tooltip(),s=o.settings.hideDelay;t&&(s=0,o.mode="show"),window.clearTimeout(o.timeout),o.timeout=null,o.timeout=window.setTimeout(function(){"tooltipHover"!==o.mode&&(o.ieFade||""===o.settings.animationIn||""===o.settings.animationOut?r.stop(!0,!0).fadeOut(o.settings.speed,function(){l(this).remove(),l.isFunction(o.settings.onHide)&&"show"===o.mode&&o.settings.onHide(o.$element,o.element,o),o.mode="hide",e.off("resize."+a,null,"tipsoResizeHandler")}):r.stop(!0,!0).removeClass("animated "+o.settings.animationIn).addClass("noAnimation").removeClass("noAnimation").addClass("animated "+o.settings.animationOut).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){l(this).removeClass("animated "+o.settings.animationOut).remove(),l.isFunction(o.settings.onHide)&&"show"===o.mode&&o.settings.onHide(o.$element,o.element,o),o.mode="hide",e.off("resize."+a,null,"tipsoResizeHandler")}))},s)},close:function(){this.hide(!0)},destroy:function(){var t=this.$element,o=this.win;this.doc;t.off("."+a),o.off("resize."+a,null,"tipsoResizeHandler"),t.removeData(a),t.removeClass("tipso_style").attr("title",this._title)},titleContent:function(){var t=this.$element,t=this.settings.titleContent||t.data("tipso-title");return t},content:function(){var t,o=this.$element,e=this,r=this._title;return e.settings.ajaxContentUrl?e._ajaxContent?t=e._ajaxContent:(e._ajaxContent=t=l.ajax({type:"GET",url:e.settings.ajaxContentUrl,async:!1}).responseText,0<e.settings.ajaxContentBuffer?setTimeout(function(){e._ajaxContent=null},e.settings.ajaxContentBuffer):e._ajaxContent=null):t=e.settings.contentElementId?l("#"+e.settings.contentElementId).text():e.settings.content||(!0===e.settings.useTitle?r:o.data("tipso")),t=null!==e.settings.templateEngineFunc?e.settings.templateEngineFunc(t):t},update:function(t,o){if(!o)return this.settings[t];this.settings[t]=o}});var c=function(){var t=document.createElement("p").style,o=["ms","O","Moz","Webkit"];if(""===t.transition)return!0;for(;o.length;)if(o.pop()+"Transition"in t)return!0;return!1}();l[a]=l.fn[a]=function(o){var e,r=arguments;return void 0===o||"object"==typeof o?(this instanceof l||l.extend(d,o),this.each(function(){l.data(this,"plugin_"+a)||l.data(this,"plugin_"+a,new s(this,o))})):"string"==typeof o&&"_"!==o[0]&&"init"!==o?(this.each(function(){var t=l.data(this,"plugin_"+a);(t=t||l.data(this,"plugin_"+a,new s(this,o)))instanceof s&&"function"==typeof t[o]&&(e=t[o].apply(t,Array.prototype.slice.call(r,1))),"destroy"===o&&l.data(this,"plugin_"+a,null)}),void 0!==e?e:this):void 0}});