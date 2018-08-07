if (self.CavalryLogger) { CavalryLogger.start_js(["rueXi"]); }

__d("UFICommentVoteContainer.react",["FluxContainer","React","ReactDOM","UFICommentAction","UFICommentVote.react","UFICommentVoteSyncStore","UFIConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);g=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a,c,d,e){return this.$3(a,c,d,e,b("UFIConstants").UFICommentVoteType.UPVOTE)}.bind(this),this.$2=function(a,c,d,e){return this.$3(a,c,d,e,b("UFIConstants").UFICommentVoteType.DOWNVOTE)}.bind(this),c}a.getStores=function(){return[b("UFICommentVoteSyncStore")]};a.calculateState=function(a,c){return{voteCount:b("UFICommentVoteSyncStore").getVoteCount(c.comment.fbid),voteState:b("UFICommentVoteSyncStore").getVoteState(c.comment.fbid)}};a.prototype.render=function(){var a=this.props,c=a.comment,d=a.contextArgs,e=a.feedback;a=a.UIVersion;var f=this.state,g=f.voteCount,h=f.voteState,i=b("ReactDOM").findDOMNode(this.refs.trigger);return b("React").createElement(b("UFICommentVote.react"),{contextArgs:d,feedback:e,UIVersion:a,voteCount:g,voteState:h,onUpArrowClick:function(){return this.$1(d,c,i,h)}.bind(this),onDownArrowClick:function(){return this.$2(d,c,i,h)}.bind(this)})};a.prototype.$3=function(a,c,d,e,f){this.context.dispatch(b("UFICommentAction").changeVote(a,c,d,e,f))};a.contextTypes={dispatch:c.func};a.propTypes={comment:c.object.isRequired,contextArgs:c.object.isRequired,feedback:c.object.isRequired,UIVersion:c.oneOf([b("UFIConstants").UFICommentVoteUIVersion.INSIDE_BLING_BAR,b("UFIConstants").UFICommentVoteUIVersion.VERTICAL_ON_THE_SIDE]).isRequired};e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);