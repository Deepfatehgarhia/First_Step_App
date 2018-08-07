if (self.CavalryLogger) { CavalryLogger.start_js(["dgIYS"]); }

__d("InternAutoPageReloaderTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:InternAutoPageReloaderLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:InternAutoPageReloaderLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:InternAutoPageReloaderLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setLoadTime=function(a){this.$1.load_time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={load_time:!0,vc:!0};e.exports=a}),null);
__d("TasksNUXTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:TasksNUXLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:TasksNUXLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:TasksNUXLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCurrentStep=function(a){this.$1.current_step=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={current_step:!0,event:!0,vc:!0};e.exports=a}),null);
__d("FeedbackReactionTypeNames",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({0:"NONE",1:"LIKE",2:"LOVE",3:"WOW",4:"HAHA",5:"YAY",6:"OUCH",7:"SORRY",8:"ANGER",9:"JACKO",10:"CONFUSED",11:"DOROTHY",12:"TOTO",13:"SELFIE",14:"FLAME",15:"PLANE"})}),null);
__d("KeyframesLoop",["Run","TimeSlice","emptyFunction","performanceNow","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3,h=new Set();function i(a){var c=b("performanceNow")();a.callback(Math.min(c-(a.previousTime||c),g));a.previousTime=c;a.framesRemaining-=1;a.framesRemaining<=0&&a.cancel()}function j(a){h.size>0&&(h.forEach(i),b("requestAnimationFramePolyfill")(j))}b("Run").onLeave(function(){h.forEach(function(a){return a.cancel()})});window.addEventListener("focus",function(){h.forEach(function(a){return a.previousTime=b("performanceNow")()-16.67})});function a(a){this.framesRemaining=Infinity,this.callback=a,this.previousTime=0}a.prototype.start=function(a){a===void 0&&(a=Infinity),this.framesRemaining=a,this.$1||(h.size===0&&b("requestAnimationFramePolyfill")(j),h.add(this),this.previousTime=b("performanceNow")(),this.$1=b("TimeSlice").getGuardedContinuation("KeyframesLoop"))};a.prototype.cancel=function(){this.$1&&(this.$1(b("emptyFunction")),this.$1=null,h["delete"](this))};a.prototype.isRunning=function(){return!!this.$1};e.exports=a}),null);
__d("UFIReactionsMenuWithAnimatedIcons.react",["cx","KeyframesEnvironment","React","UFIReactionsAnimatedKeyframesIcon.react","UFIReactionsMenuImpl.react","createCancelableFunction","joinClasses","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={allowAnimationPlayback:b("KeyframesEnvironment").hasRenderLoopBeenStableOnce()},c}a.prototype.componentDidMount=function(){"use strict";this.state.allowAnimationPlayback||(this.$1=b("createCancelableFunction")(function(){this.setState({allowAnimationPlayback:!0})}.bind(this)),b("promiseDone")(b("KeyframesEnvironment").whenRenderLoopHasBeenStableOnce(),this.$1))};a.prototype.componentWillUnmount=function(){"use strict";this.$1&&(this.$1.cancel(),this.$1=null)};a.prototype.render=function(){"use strict";var a=b("joinClasses")("_1ef3",this.props.className);return b("React").createElement(b("UFIReactionsMenuImpl.react"),babelHelpers["extends"]({allowAnimationPlayback:this.state.allowAnimationPlayback},this.props,{className:a,icon:b("UFIReactionsAnimatedKeyframesIcon.react")}),this.props.children)};e.exports=a}),null);
__d("ContextualLayerHideOnScrollToBorder",["Event","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a}a.prototype.enable=function(){"use strict";this.$2||(this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(this.$1.subscribe("contextchange",this.$3.bind(this)),this.$1.subscribe("show",this.$4.bind(this)),this.$1.subscribe("hide",this.$5.bind(this))))};a.prototype.disable=function(){"use strict";this.$2&&(this.$2.release(),this.$2=undefined),this.$5()};a.prototype.$4=function(){"use strict";if(!this.$6){this.$7=this.$1.getContextScrollParent();if(this.$7===window)return;this.$6=b("Event").listen(this.$7,"scroll",this.$8.bind(this))}};a.prototype.$5=function(){"use strict";this.$6&&(this.$6.remove(),this.$6=undefined,this.$7=undefined)};a.prototype.$8=function(){"use strict";var a=this.$1.getContent().getBoundingClientRect(),b=this.$7.getBoundingClientRect(),c=a.bottom>=b.bottom||a.top<=b.top;a=a.left<=b.left||a.right>=b.right;(c||a)&&this.$1.hide()};a.prototype.$3=function(){"use strict";this.detach(),this.$1.isShown()&&this.attach()};e.exports=a}),null);
__d("PxlcldLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CREATE:"create",CREATE_PROJECT:"create_project",CREATE_COMMENT:"create_comment",RESOLVE_COMMENT:"resolve_comment",RESTORE_COMMENT:"restore_comment",CONSUME_ANNOTATION:"consume_annotation",CONSUME_POST:"consume_post",CONSUME_POST_FROM_INDEX_VIEW:"consume_post_from_index_view",CONSUME_PROJECT:"consume_project",CONSUME_FEED:"consume_feed",CONSUME_UNKNOWN:"consume_unknown",CONSUME_SUBSCRIPTION:"consume_subscription",CONSUME_SUBSCRIPTION_URL:"consume_subscription_url",CHANGE_ARTBOARD:"change_artboard",SUBSCRIBE:"subscribe",SUBSCRIBE_URL:"subscribe_url",DELETE:"delete",DELETE_PROJECT:"delete_project",DISABLE_COMMENTS:"disable_comments",DOWNLOAD_ARTBOARDS:"download_artboards",DELETE_COMMENT:"delete_comment",EDIT:"edit",EDIT_COMMENT:"edit_comment",EDIT_PROJECT:"edit_project",ENABLE_COMMENTS:"enable_comments",ENTER_FOCUS_MODE:"enter_focus_mode",REMIND_REVIEWERS:"remind_reviewers",RESTORE_PROJECT:"restore_project",CHANGE_TAGS:"change_tags",ADD_FILE:"add_file",PRESENT_POST:"present_post",PRESENT_PROJECT:"present_project",SEND_POST_TO_MESSENGER:"send_post_to_messenger",SEND_PROJECT_TO_MESSENGER:"send_project_to_messenger",SET_DEFAULT_SUBSCRIPTION:"set_default_subscription",SET_DESIGN_REVIEW:"set_design_review",SET_REVIEWERS:"set_reviewers",UNSET_DEFAULT_SUBSCRIPTION:"unset_default_subscription",USED_TOP_TAGS:"used_top_tags",OPEN_SEMAPHORE:"open_semaphore",MARK_NOTIFICATIONS_FOR_POST_AS_READ:"mark_notifications_for_post_as_read"})}),null);
__d("QE2CustomExperience",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:"none",SEARCH_TEAM:"search_team"})}),null);
__d("QE2CustomUseCase",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SEARCH:"SEARCH"})}),null);