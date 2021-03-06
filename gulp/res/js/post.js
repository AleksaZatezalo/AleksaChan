function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function post(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Date, RegExp, board, encodeURIComponent, globalmanage, manage, meta, modview, post, reverseImageLinksURL, upLevel, viewRawIp) {
      pug_mixins["report"] = pug_interp = function(r, manage=false){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"reports post-container\"\u003E\u003Cinput" + (" class=\"post-check\""+" type=\"checkbox\" name=\"checkedreports\""+pug_attr("value", r.id, true, false)) + "\u002F\u003E ";
const ip = viewRawIp === true ? r.ip.raw : r.ip.cloak;
pug_html = pug_html + "\u003Ca" + (" class=\"bold\""+pug_attr("href", `${manage ? 'recent.html' : ''}?ip=${encodeURIComponent(ip)}`, true, false)) + "\u003E[" + (pug_escape(null == (pug_interp = ip) ? "" : pug_interp)) + "]\u003C\u002Fa\u003E ";
const reportDate = new Date(r.date);
pug_html = pug_html + "\u003Ctime" + (" class=\"reltime\""+pug_attr("datetime", reportDate.toISOString(), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = reportDate.toLocaleString(undefined, { hourCycle:'h23' })) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E | Reason: " + (pug_escape(null == (pug_interp = r.reason) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
};
pug_mixins["post"] = pug_interp = function(post, truncate, manage=false, globalmanage=false, ban=false, overboard=false){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (" class=\"anchor\""+pug_attr("id", post.postId, true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv" + (pug_attr("class", pug_classes([`post-container ${post.thread || ban === true ? '' : 'op'}`], [true]), false, false)+pug_attr("data-board", post.board, true, false)+pug_attr("data-post-id", post.postId, true, false)+pug_attr("data-user-id", post.userId, true, false)+pug_attr("data-name", post.name, true, false)+pug_attr("data-tripcode", post.tripcode, true, false)+pug_attr("data-subject", post.subject, true, false)+pug_attr("data-email", post.email, true, false)) + "\u003E";
const postURL = `/${post.board}/${(modview || manage || globalmanage) ? 'manage/' : ''}thread/${post.thread || post.postId}.html`;
pug_html = pug_html + "\u003Cdiv class=\"post-info\"\u003E\u003Cspan\u003E\u003Clabel\u003E";
if (!overboard) {
if (globalmanage) {
pug_html = pug_html + "\u003Cinput" + (" class=\"post-check\""+" type=\"checkbox\" name=\"globalcheckedposts\""+pug_attr("value", post._id, true, false)) + "\u002F\u003E";
}
else
if (!ban) {
pug_html = pug_html + "\u003Cinput" + (" class=\"post-check\""+" type=\"checkbox\" name=\"checkedposts\""+pug_attr("value", post.postId, true, false)) + "\u002F\u003E";
}
pug_html = pug_html + " ";
}
if (manage) {
const ip = viewRawIp === true ? post.ip.raw : post.ip.cloak;
pug_html = pug_html + "\u003Ca" + (" class=\"bold\""+pug_attr("href", `${upLevel ? '../' : ''}recent.html?ip=${encodeURIComponent(ip)}`, true, false)) + "\u003E[" + (pug_escape(null == (pug_interp = ip) ? "" : pug_interp)) + "]\u003C\u002Fa\u003E";
}
else
if (modview) {
pug_html = pug_html + "\u003Ca" + (" class=\"bold\""+pug_attr("href", `${upLevel ? '../' : ''}recent.html?postid=${post.postId}`, true, false)) + "\u003E[+]\u003C\u002Fa\u003E";
}
else
if (globalmanage) {
const ip = viewRawIp === true ? post.ip.raw : post.ip.cloak;
pug_html = pug_html + "\u003Ca" + (" class=\"bold\""+pug_attr("href", `?ip=${encodeURIComponent(ip)}`, true, false)) + "\u003E[" + (pug_escape(null == (pug_interp = ip) ? "" : pug_interp)) + "]\u003C\u002Fa\u003E";
}
pug_html = pug_html + " ";
if (!post.thread) {
if (post.sticky || post.bumplocked || post.locked || post.cyclic) {
pug_html = pug_html + "\u003Cspan class=\"post-icons\"\u003E";
if (post.sticky) {
pug_html = pug_html + "\u003Cimg" + (" src=\"\u002Ffile\u002Fsticky.png\" height=\"14\" width=\"14\""+pug_attr("title", `Sticky (${post.sticky})`, true, false)) + "\u002F\u003E ";
}
if (post.bumplocked) {
pug_html = pug_html + "\u003Cimg src=\"\u002Ffile\u002Fbumplock.png\" height=\"14\" width=\"14\" title=\"Bumplocked\"\u002F\u003E ";
}
if (post.locked) {
pug_html = pug_html + "\u003Cimg src=\"\u002Ffile\u002Flock.png\" height=\"14\" width=\"14\" title=\"Locked\"\u002F\u003E ";
}
if (post.cyclic) {
pug_html = pug_html + "\u003Cimg src=\"\u002Ffile\u002Fcyclic.png\" height=\"14\" width=\"14\" title=\"Cyclic\"\u002F\u003E ";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
}
}
if (post.subject) {
pug_html = pug_html + "\u003Cspan class=\"post-subject\"\u003E" + (pug_escape(null == (pug_interp = post.subject) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E ";
}
if (post.email) {
pug_html = pug_html + "\u003Ca" + (" class=\"post-name\""+pug_attr("href", `mailto:${post.email}`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = post.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Cspan class=\"post-name\"\u003E" + (pug_escape(null == (pug_interp = post.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + " \u003C\u002Flabel\u003E";
if (post.country && post.country.code) {
if (post.country.custom === true) {
pug_html = pug_html + "\u003Cspan" + (pug_attr("title", post.country.name, true, false)) + "\u003E\u003Cimg" + (" class=\"customflag\""+pug_attr("src", `/flag/${post.board}/${post.country.src}`, true, false)+" alt=\" \" loading=\"lazy\"") + "\u002F\u003E\u003C\u002Fspan\u003E ";
}
else {
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([`flag flag-${post.country.code.toLowerCase()}`], [true]), false, false)+pug_attr("title", post.country.name, true, false)+pug_attr("alt", post.country.name, true, false)) + "\u003E\u003C\u002Fspan\u003E ";
}
}
if (post.tripcode) {
pug_html = pug_html + "\u003Cspan class=\"post-tripcode\"\u003E" + (pug_escape(null == (pug_interp = post.tripcode) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E ";
}
if (post.capcode) {
pug_html = pug_html + "\u003Cspan class=\"post-capcode\"\u003E" + (pug_escape(null == (pug_interp = post.capcode) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E ";
}
const postDate = new Date(post.date);
pug_html = pug_html + "\u003Ctime" + (" class=\"post-date reltime\""+pug_attr("datetime", postDate.toISOString(), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = postDate.toLocaleString(undefined, { hourCycle:'h23' })) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E ";
if (post.userId) {
pug_html = pug_html + "\u003Cspan" + (" class=\"user-id\""+pug_attr("style", pug_style(`background-color: #${post.userId}`), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = post.userId) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E ";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003Cspan class=\"post-links\"\u003E\u003Ca" + (" class=\"noselect no-decoration\""+pug_attr("href", `${postURL}#${post.postId}`, true, false)) + "\u003ENo.\u003C\u002Fa\u003E\u003Cspan class=\"post-quoters\"\u003E\u003Ca" + (" class=\"no-decoration\""+pug_attr("href", `${postURL}#postform`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = post.postId) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E ";
if (!post.thread && (truncate || manage || globalmanage)) {
pug_html = pug_html + " \u003Cspan class=\"noselect\"\u003E\u003Ca" + (pug_attr("href", `${postURL}`, true, false)) + "\u003E[Open]\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003Cselect class=\"jsonly postmenu\"\u003E\u003Coption value=\"single\"\u003EHide\u003C\u002Foption\u003E";
if (post.userId) {
pug_html = pug_html + "\u003Coption value=\"fid\"\u003EFilter ID\u003C\u002Foption\u003E";
}
if (post.name) {
pug_html = pug_html + "\u003Coption value=\"fname\"\u003EFilter Name\u003C\u002Foption\u003E";
}
if (post.subject) {
pug_html = pug_html + "\u003Coption value=\"fsub\"\u003EFilter Subject\u003C\u002Foption\u003E";
}
if (post.tripcode) {
pug_html = pug_html + "\u003Coption value=\"ftrip\"\u003EFilter Tripcode\u003C\u002Foption\u003E";
}
if (!overboard && !ban) {
pug_html = pug_html + "\u003Coption value=\"moderate\"\u003EModerate\u003C\u002Foption\u003E";
}
if (!post.thread) {
pug_html = pug_html + "\u003Coption value=\"watch\"\u003EWatch\u003C\u002Foption\u003E";
}
pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"post-data\"\u003E";
if (post.files.length > 0) {
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["post-files",(post.files.length > 1 ? 'fn' : '')], [false,true]), false, false)) + "\u003E";
// iterate post.files
;(function(){
  var $$obj = post.files;
  if ('number' == typeof $$obj.length) {
      for (var fileindex = 0, $$l = $$obj.length; fileindex < $$l; fileindex++) {
        var file = $$obj[fileindex];
pug_html = pug_html + "\u003Cdiv class=\"post-file\"\u003E";
const type = file.mimetype.split('/')[0]
pug_html = pug_html + "\u003Cspan class=\"post-file-info\"\u003E\u003Cspan\u003E\u003Ca" + (" class=\"filename\""+pug_attr("href", '/file/'+file.filename, true, false)+pug_attr("title", 'Download '+file.originalFilename, true, false)+pug_attr("download", file.originalFilename, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = post.spoiler || file.spoiler ? 'Spoiler File' : file.originalFilename) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003Cbr\u002F\u003E";
if (globalmanage && file.phash != null) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug_escape(null == (pug_interp = file.phash) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbr\u002F\u003E";
}
if (!file.attachment && !(post.spoiler || file.spoiler)) {
pug_html = pug_html + "\u003Cspan class=\"jsonly\"\u003E\u003Cb\u003E[\u003C\u002Fb\u003E\u003Ca" + (" class=\"dummy-link hide-image noselect\""+pug_attr("data-src", `/file/${file.hasThumb ? 'thumb/'+file.hash+file.thumbextension : file.filename}`, true, false)) + "\u003EHide\u003C\u002Fa\u003E\u003Cb\u003E]\u003C\u002Fb\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + ("\u003Cspan\u003E  (" + (pug_escape(null == (pug_interp = file.sizeString) ? "" : pug_interp)));
if (file.geometryString) {
pug_html = pug_html + (", " + (pug_escape(null == (pug_interp = file.geometryString) ? "" : pug_interp)));
}
if (file.durationString) {
pug_html = pug_html + (", " + (pug_escape(null == (pug_interp = file.durationString) ? "" : pug_interp)));
}
pug_html = pug_html + ")\u003C\u002Fspan\u003E";
if (type === 'image' && ((board && board.settings.reverseImageSearchLinks === true) || overboard || manage || globalmanage)) {
pug_html = pug_html + " \u003Cspan\u003E\u003Ca" + (pug_attr("href", `${reverseImageLinksURL.replace('%s', encodeURIComponent(meta.url+'/file/'+file.filename))}`, true, false)+" rel=\"nofollow\" referrerpolicy=\"same-origin\" title=\"Reverse Image Search\" target=\"_blank\"") + "\u003EReverse\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003Cdiv" + (" class=\"post-file-src\""+pug_attr("data-type", type, true, false)+pug_attr("data-attachment", (file.attachment ? "true" : "false"), true, false)) + "\u003E\u003Ca" + (" target=\"_blank\""+pug_attr("href", `/file/${file.filename}`, true, false)) + "\u003E";
if (post.spoiler || file.spoiler) {
pug_html = pug_html + "\u003Cdiv class=\"spoilerimg file-thumb\"\u003E\u003C\u002Fdiv\u003E";
}
else
if (file.hasThumb) {
pug_html = pug_html + "\u003Cimg" + (" class=\"file-thumb\""+pug_attr("src", `/file/thumb/${file.hash}${file.thumbextension}`, true, false)+pug_attr("height", file.geometry.thumbheight, true, false)+pug_attr("width", file.geometry.thumbwidth, true, false)+" loading=\"lazy\"") + "\u002F\u003E";
}
else
if (file.attachment) {
pug_html = pug_html + "\u003Cdiv" + (" class=\"attachmentimg file-thumb\""+pug_attr("data-mimetype", file.mimetype, true, false)) + "\u003E\u003C\u002Fdiv\u003E";
}
else
if (type === 'audio') {
pug_html = pug_html + "\u003Cdiv class=\"audioimg file-thumb\"\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cimg" + (" class=\"file-thumb\""+pug_attr("src", `/file/${file.filename}`, true, false)+pug_attr("height", file.geometry.height, true, false)+pug_attr("width", file.geometry.width, true, false)+" loading=\"lazy\"") + "\u002F\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var fileindex in $$obj) {
      $$l++;
      var file = $$obj[fileindex];
pug_html = pug_html + "\u003Cdiv class=\"post-file\"\u003E";
const type = file.mimetype.split('/')[0]
pug_html = pug_html + "\u003Cspan class=\"post-file-info\"\u003E\u003Cspan\u003E\u003Ca" + (" class=\"filename\""+pug_attr("href", '/file/'+file.filename, true, false)+pug_attr("title", 'Download '+file.originalFilename, true, false)+pug_attr("download", file.originalFilename, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = post.spoiler || file.spoiler ? 'Spoiler File' : file.originalFilename) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003Cbr\u002F\u003E";
if (globalmanage && file.phash != null) {
pug_html = pug_html + "\u003Cspan\u003E" + (pug_escape(null == (pug_interp = file.phash) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cbr\u002F\u003E";
}
if (!file.attachment && !(post.spoiler || file.spoiler)) {
pug_html = pug_html + "\u003Cspan class=\"jsonly\"\u003E\u003Cb\u003E[\u003C\u002Fb\u003E\u003Ca" + (" class=\"dummy-link hide-image noselect\""+pug_attr("data-src", `/file/${file.hasThumb ? 'thumb/'+file.hash+file.thumbextension : file.filename}`, true, false)) + "\u003EHide\u003C\u002Fa\u003E\u003Cb\u003E]\u003C\u002Fb\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + ("\u003Cspan\u003E  (" + (pug_escape(null == (pug_interp = file.sizeString) ? "" : pug_interp)));
if (file.geometryString) {
pug_html = pug_html + (", " + (pug_escape(null == (pug_interp = file.geometryString) ? "" : pug_interp)));
}
if (file.durationString) {
pug_html = pug_html + (", " + (pug_escape(null == (pug_interp = file.durationString) ? "" : pug_interp)));
}
pug_html = pug_html + ")\u003C\u002Fspan\u003E";
if (type === 'image' && ((board && board.settings.reverseImageSearchLinks === true) || overboard || manage || globalmanage)) {
pug_html = pug_html + " \u003Cspan\u003E\u003Ca" + (pug_attr("href", `${reverseImageLinksURL.replace('%s', encodeURIComponent(meta.url+'/file/'+file.filename))}`, true, false)+" rel=\"nofollow\" referrerpolicy=\"same-origin\" title=\"Reverse Image Search\" target=\"_blank\"") + "\u003EReverse\u003C\u002Fa\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003Cdiv" + (" class=\"post-file-src\""+pug_attr("data-type", type, true, false)+pug_attr("data-attachment", (file.attachment ? "true" : "false"), true, false)) + "\u003E\u003Ca" + (" target=\"_blank\""+pug_attr("href", `/file/${file.filename}`, true, false)) + "\u003E";
if (post.spoiler || file.spoiler) {
pug_html = pug_html + "\u003Cdiv class=\"spoilerimg file-thumb\"\u003E\u003C\u002Fdiv\u003E";
}
else
if (file.hasThumb) {
pug_html = pug_html + "\u003Cimg" + (" class=\"file-thumb\""+pug_attr("src", `/file/thumb/${file.hash}${file.thumbextension}`, true, false)+pug_attr("height", file.geometry.thumbheight, true, false)+pug_attr("width", file.geometry.thumbwidth, true, false)+" loading=\"lazy\"") + "\u002F\u003E";
}
else
if (file.attachment) {
pug_html = pug_html + "\u003Cdiv" + (" class=\"attachmentimg file-thumb\""+pug_attr("data-mimetype", file.mimetype, true, false)) + "\u003E\u003C\u002Fdiv\u003E";
}
else
if (type === 'audio') {
pug_html = pug_html + "\u003Cdiv class=\"audioimg file-thumb\"\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Cimg" + (" class=\"file-thumb\""+pug_attr("src", `/file/${file.filename}`, true, false)+pug_attr("height", file.geometry.height, true, false)+pug_attr("width", file.geometry.width, true, false)+" loading=\"lazy\"") + "\u002F\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
if (post.message && modview) { post.message = post.message.replace(new RegExp(`<a class="quote" href="/${post.board}/`, 'g'), `<a class="quote" href="/${post.board}/manage/`); } //its either this, a subdomain, or nothing.
let truncatedMessage = post.message;
if (post.message) {
if (truncate) {
const splitPost = post.message.split('\n');
const messageLines = splitPost.length;
if (messageLines > 15) {
	truncatedMessage = splitPost.slice(0, 15).join('\n');
} else if (post.message.length > 1500) {
	truncatedMessage = post.message.substring(0, 1500).replace(/<([\w]+)?([^>]*)?$/, '');
	const lastAnchorOpen = truncatedMessage.lastIndexOf('<a');
	const lastAnchorClose = truncatedMessage.lastIndexOf('</a>');
	if (lastAnchorOpen >= 0 && (lastAnchorClose === -1 || lastAnchorClose < lastAnchorOpen)) {
		truncatedMessage += '</a>';
	}
}
pug_html = pug_html + "\u003Cpre class=\"post-message\"\u003E" + (null == (pug_interp = truncatedMessage) ? "" : pug_interp) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + "\u003Cpre class=\"post-message\"\u003E" + (null == (pug_interp = post.message) ? "" : pug_interp) + "\u003C\u002Fpre\u003E";
}
}
if (!post.message && post.files.length === 0) {
pug_html = pug_html + "\u003Cp\u003ENo message or files.\u003C\u002Fp\u003E";
}
if (post.edited) {
const postEditDate = new Date(post.edited.date);
pug_html = pug_html + "\u003Csmall class=\"cb mt-5 ml-5 edited\"\u003ELast edited \u003Ctime" + (" class=\"reltime\""+pug_attr("datetime", postEditDate.toISOString(), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = postEditDate.toLocaleString(undefined, { hourCycle:'h23' })) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E by " + (pug_escape(null == (pug_interp = post.edited.username) ? "" : pug_interp)) + "\u003C\u002Fsmall\u003E";
}
if (post.banmessage) {
pug_html = pug_html + "\u003Cp class=\"ban\"\u003E\u003Cspan class=\"message\"\u003EUSER WAS BANNED FOR THIS POST\u003C\u002Fspan\u003E \u003Cspan" + (" class=\"reason\""+pug_attr("data-reason", post.banmessage, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = post.banmessage) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fp\u003E";
}
if (truncatedMessage !== post.message) {
pug_html = pug_html + "\u003Cdiv class=\"cb mt-5 ml-5\"\u003EMessage too long. \u003Ca" + (" class=\"viewfulltext\""+pug_attr("href", `${postURL}#${post.postId}`, true, false)) + "\u003EView the full text\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
if (post.omittedposts || post.omittedfiles) {
pug_html = pug_html + "\u003Cdiv class=\"cb mt-5 ml-5\"\u003E\u003Cimg" + (" class=\"jsonly dummy-link expand-omitted\""+" height=\"12\" width=\"12\""+pug_attr("data-shown", post.replies.length, true, false)+pug_attr("data-board", post.board, true, false)+pug_attr("data-thread", post.postId, true, false)+" src=\"\u002Ffile\u002Fplus.png\"") + "\u002F\u003E";
const ompo = post.omittedposts;
const omfi = post.omittedfiles;
pug_html = pug_html + "\u003Cspan\u003E" + (pug_escape(null == (pug_interp = ompo) ? "" : pug_interp)) + " repl" + (pug_escape(null == (pug_interp = ompo > 1 ? 'ies' : 'y') ? "" : pug_interp)) + "\n" + (pug_escape(null == (pug_interp = omfi > 0 ? ` and ${omfi} file${omfi > 1 ? 's' : ''}` : '') ? "" : pug_interp)) + " omitted. \u003C\u002Fspan\u003E\u003Ca" + (pug_attr("href", postURL, true, false)) + "\u003EView the full thread\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
if (post.previewbacklinks != null) {
if (post.previewbacklinks.length > 0) {
pug_html = pug_html + "\u003Cdiv class=\"replies mt-5 ml-5\"\u003EReplies: ";
// iterate post.previewbacklinks
;(function(){
  var $$obj = post.previewbacklinks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var backlink = $$obj[pug_index1];
pug_html = pug_html + "\u003Ca" + (" class=\"quote\""+pug_attr("href", `${postURL}#${backlink.postId}`, true, false)) + "\u003E&gt;&gt;" + (pug_escape(null == (pug_interp = backlink.postId) ? "" : pug_interp)) + "\u003C\u002Fa\u003E ";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var backlink = $$obj[pug_index1];
pug_html = pug_html + "\u003Ca" + (" class=\"quote\""+pug_attr("href", `${postURL}#${backlink.postId}`, true, false)) + "\u003E&gt;&gt;" + (pug_escape(null == (pug_interp = backlink.postId) ? "" : pug_interp)) + "\u003C\u002Fa\u003E ";
    }
  }
}).call(this);

if (post.previewbacklinks.length < post.backlinks.length) {
const ombls = post.backlinks.length-post.previewbacklinks.length;
pug_html = pug_html + "+ \u003Ca" + (pug_attr("href", `${postURL}#${post.postId}`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = ombls) ? "" : pug_interp)) + " earlier\u003C\u002Fa\u003E\n ";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
}
else
if (post.backlinks && post.backlinks.length > 0) {
pug_html = pug_html + "\u003Cdiv class=\"replies mt-5 ml-5\"\u003EReplies: ";
// iterate post.backlinks
;(function(){
  var $$obj = post.backlinks;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var backlink = $$obj[pug_index2];
pug_html = pug_html + "\u003Ca" + (" class=\"quote\""+pug_attr("href", `${postURL}#${backlink.postId}`, true, false)) + "\u003E&gt;&gt;" + (pug_escape(null == (pug_interp = backlink.postId) ? "" : pug_interp)) + "\u003C\u002Fa\u003E ";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var backlink = $$obj[pug_index2];
pug_html = pug_html + "\u003Ca" + (" class=\"quote\""+pug_attr("href", `${postURL}#${backlink.postId}`, true, false)) + "\u003E&gt;&gt;" + (pug_escape(null == (pug_interp = backlink.postId) ? "" : pug_interp)) + "\u003C\u002Fa\u003E ";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
if (manage === true) {
// iterate post.reports
;(function(){
  var $$obj = post.reports;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var r = $$obj[pug_index3];
pug_mixins["report"](r, true);
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var r = $$obj[pug_index3];
pug_mixins["report"](r, true);
    }
  }
}).call(this);

}
if (globalmanage === true) {
// iterate post.globalreports
;(function(){
  var $$obj = post.globalreports;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var r = $$obj[pug_index4];
pug_mixins["report"](r);
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var r = $$obj[pug_index4];
pug_mixins["report"](r);
    }
  }
}).call(this);

}
};
pug_mixins["post"](post, false, manage, globalmanage);
    }.call(this, "Date" in locals_for_with ?
        locals_for_with.Date :
        typeof Date !== 'undefined' ? Date : undefined, "RegExp" in locals_for_with ?
        locals_for_with.RegExp :
        typeof RegExp !== 'undefined' ? RegExp : undefined, "board" in locals_for_with ?
        locals_for_with.board :
        typeof board !== 'undefined' ? board : undefined, "encodeURIComponent" in locals_for_with ?
        locals_for_with.encodeURIComponent :
        typeof encodeURIComponent !== 'undefined' ? encodeURIComponent : undefined, "globalmanage" in locals_for_with ?
        locals_for_with.globalmanage :
        typeof globalmanage !== 'undefined' ? globalmanage : undefined, "manage" in locals_for_with ?
        locals_for_with.manage :
        typeof manage !== 'undefined' ? manage : undefined, "meta" in locals_for_with ?
        locals_for_with.meta :
        typeof meta !== 'undefined' ? meta : undefined, "modview" in locals_for_with ?
        locals_for_with.modview :
        typeof modview !== 'undefined' ? modview : undefined, "post" in locals_for_with ?
        locals_for_with.post :
        typeof post !== 'undefined' ? post : undefined, "reverseImageLinksURL" in locals_for_with ?
        locals_for_with.reverseImageLinksURL :
        typeof reverseImageLinksURL !== 'undefined' ? reverseImageLinksURL : undefined, "upLevel" in locals_for_with ?
        locals_for_with.upLevel :
        typeof upLevel !== 'undefined' ? upLevel : undefined, "viewRawIp" in locals_for_with ?
        locals_for_with.viewRawIp :
        typeof viewRawIp !== 'undefined' ? viewRawIp : undefined));
    ;;return pug_html;}