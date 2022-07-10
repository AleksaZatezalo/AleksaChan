function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function modal(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Date, RegExp, board, captchaGridSize, captchaType, csrf, encodeURIComponent, googleRecaptchaSiteKey, hcaptchaSiteKey, meta, minimal, modal, modview, reverseImageLinksURL, upLevel, viewRawIp) {
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
pug_mixins["ban"] = pug_interp = function(ban, banpage){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E";
if (!banpage || (ban.appeal == null && ban.allowAppeal === true)) {
pug_html = pug_html + "\u003Cinput" + (" class=\"post-check\""+" type=\"checkbox\" name=\"checkedbans\""+pug_attr("value", ban._id, true, false)) + "\u002F\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (ban.board) {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `/${ban.board}/`, true, false)) + "\u003E\u002F" + (pug_escape(null == (pug_interp = ban.board) ? "" : pug_interp)) + "\u002F\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "Global";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ban.reason) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
const ip = viewRawIp === true ? ban.ip.raw : ban.ip.cloak;
if (viewRawIp === true) {
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ip) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ip) ? "" : pug_interp)) + (pug_escape(null == (pug_interp = '.*'.repeat(ban.range)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ban.type === 0 ? 'IP' : ban.type === 1 ? 'Bypass' : 'Pruned IP') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = ban.range === 0 ? 'Single' : ban.range === 1 ? 'Narrow' : 'Wide') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug_escape(null == (pug_interp = (!banpage || ban.showUser === true) ? ban.issuer : 'Hidden User') ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
const banDate = new Date(ban.date);
pug_html = pug_html + "\u003Ctd\u003E\u003Ctime" + (" class=\"right reltime\""+pug_attr("datetime", banDate.toISOString(), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = banDate.toLocaleString(undefined, {hourCycle:'h23'})) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E\u003C\u002Ftd\u003E";
const expireDate = new Date(ban.expireAt);
pug_html = pug_html + "\u003Ctd\u003E\u003Ctime" + (" class=\"right reltime\""+pug_attr("datetime", expireDate.toISOString(), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = expireDate.toLocaleString(undefined, {hourCycle:'h23'})) ? "" : pug_interp)) + "\u003C\u002Ftime\u003E\u003C\u002Ftd\u003E\u003Ctd class=\"banposts\"\u003E";
if (ban.posts && ban.posts.length > 0) {
pug_html = pug_html + "Hover to view\u003Cdiv class=\"thread\"\u003E";
// iterate ban.posts
;(function(){
  var $$obj = ban.posts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var p = $$obj[pug_index5];
pug_mixins["post"](p, false, false, false, true);
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var p = $$obj[pug_index5];
pug_mixins["post"](p, false, false, false, true);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003CPosts\u003Enot shown\u003C\u002FPosts\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (ban.seen) {
pug_html = pug_html + "&#10003;";
}
else {
pug_html = pug_html + "&#10799;";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (ban.allowAppeal && !ban.appeal) {
pug_html = pug_html + "&#10003;";
}
else {
pug_html = pug_html + "&#10799;";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (ban.appeal) {
pug_html = pug_html + "\u003Ctextarea rows=\"1\" disabled=\"true\"\u003E" + (pug_escape(null == (pug_interp = ban.appeal) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E";
}
else
if (ban.allowAppeal) {
pug_html = pug_html + "No appeal submitted";
}
else {
pug_html = pug_html + "-";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
};
pug_mixins["modal"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (" class=\"modal-bg\""+pug_attr("style", pug_style(data.hidden?'display:none':''), true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"modal\""+pug_attr("id", (data.settings ? 'settingsmodal' : ''), true, false)+pug_attr("style", pug_style(data.hidden?'display:none':''), true, false)) + "\u003E\u003Cdiv class=\"row\"\u003E\u003Cp class=\"bold\"\u003E" + (pug_escape(null == (pug_interp = data.title) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Ca class=\"close postform-style\" id=\"modalclose\"\u003E×\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
if (data.bans) {
pug_html = pug_html + "\u003Ch1 class=\"board-title\"\u003EBanned!\u003C\u002Fh1\u003E\u003Cdiv class=\"row\" id=\"modalbanned\"\u003E";
const bans = data.bans;
pug_html = pug_html + "\u003Cform class=\"form-post\" action=\"\u002Fforms\u002Fappeal\" enctype=\"application\u002Fx-www-form-urlencoded\" method=\"POST\" data-captcha-preload=\"true\"\u003E\u003Cdiv class=\"table-container mv-10 text-center horscroll\"\u003E\u003Ctable class=\"bantable\"\u003E\u003Ctr\u003E\u003Cth\u003E\u003C\u002Fth\u003E\u003Cth\u003EBoard\u003C\u002Fth\u003E\u003Cth\u003EReason\u003C\u002Fth\u003E\u003Cth\u003EIP\u002FID\u003C\u002Fth\u003E\u003Cth\u003EType\u003C\u002Fth\u003E\u003Cth\u003ERange\u003C\u002Fth\u003E\u003Cth\u003EIssuer\u003C\u002Fth\u003E\u003Cth\u003EIssue Date\u003C\u002Fth\u003E\u003Cth\u003EExpiry\u003C\u002Fth\u003E\u003Cth\u003EPost(s)\u003C\u002Fth\u003E\u003Cth\u003ESeen?\u003C\u002Fth\u003E\u003Cth\u003EAppealable?\u003C\u002Fth\u003E\u003Cth\u003EAppeal";
// iterate bans
;(function(){
  var $$obj = bans;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var ban = $$obj[pug_index6];
pug_mixins["ban"](ban, true);
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var ban = $$obj[pug_index6];
pug_mixins["ban"](ban, true);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Ftable\u003E\u003C\u002Fdiv\u003E";
const allowAppeal = bans.filter(ban => ban.allowAppeal === true && !ban.appeal).length > 0;
if (allowAppeal === true) {
pug_html = pug_html + "\u003Ch4 class=\"no-m-p\"\u003EAppeal:\u003Cdiv class=\"form-wrapper flexleft mt-10\"\u003E\u003Cinput" + (" type=\"hidden\" name=\"_csrf\""+pug_attr("value", csrf, true, false)) + "\u002F\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003EMessage\u003C\u002Fdiv\u003E\u003Ctextarea" + (" rows=\"5\" name=\"message\""+pug_attr("required", true, true, false)) + "\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E";
if (captchaType === 'text') {
pug_html = pug_html + "\u003Csection class=\"row\"\u003E\u003Cdiv class=\"label\"\u003E\u003Cspan\u003ECaptcha\u003Cspan class=\"required\"\u003E*\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col\"\u003E";
switch (captchaType){
case 'google':
pug_html = pug_html + "\u003Cdiv" + (" class=\"g-recaptcha\""+pug_attr("data-sitekey", `${googleRecaptchaSiteKey}`, true, false)+" data-theme=\"dark\" data-size=\"compact\" data-callback=\"recaptchaCallback\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cnoscript\u003EPlease enable JavaScript to solve the captcha.\u003C\u002Fnoscript\u003E";
  break;
case 'hcaptcha':
pug_html = pug_html + "\u003Cdiv" + (" class=\"h-captcha\""+pug_attr("data-sitekey", `${hcaptchaSiteKey}`, true, false)+" data-theme=\"dark\" data-size=\"compact\" data-callback=\"recaptchaCallback\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cnoscript\u003EPlease enable JavaScript to solve the captcha.\u003C\u002Fnoscript\u003E";
  break;
case 'text':
pug_html = pug_html + "\u003Cnoscript class=\"no-m-p\"\u003E\u003Ciframe" + (" class=\"captcha\""+" src=\"\u002Fcaptcha.html\""+pug_attr("width=210", true, true, false)+" height=\"80\" scrolling=\"no\" loading=\"lazy\"") + "\u003E\u003C\u002Fiframe\u003E\u003C\u002Fnoscript\u003E\u003Cdiv class=\"jsonly captcha\" style=\"display:none;\"\u003E\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"captchafield\""+" type=\"text\" name=\"captcha\" autocomplete=\"off\" placeholder=\"Captcha text\" pattern=\".{6}\""+pug_attr("required", true, true, false)+" title=\"6 characters\"") + "\u002F\u003E";
  break;
case 'grid':
if (!(minimal)) {
pug_html = pug_html + "\u003Ca class=\"text-center\" href=\"\u002Ffaq.html#captcha\"\u003EInstructions\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"catalog\"\u003E\u003Cnoscript class=\"no-m-p\"\u003E\u003Ciframe class=\"captcha\" src=\"\u002Fcaptcha.html\" width=\"150\" height=\"150\" scrolling=\"no\" loading=\"lazy\"\u003E\u003C\u002Fiframe\u003E\u003C\u002Fnoscript\u003E\u003Cdiv class=\"jsonly captcha\" style=\"display:none\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"captchafield noselect\"\u003E";
for(let i = 0; i < captchaGridSize**2; i++) {
pug_html = pug_html + "\u003Clabel class=\"captchachecklabel\"\u003E\u003Cinput" + (" type=\"checkbox\" name=\"captcha\""+pug_attr("value", i, true, false)) + "\u002F\u003E\u003Cspan class=\"captchacheckbox\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
else {
pug_html = pug_html + "\u003Cdiv class=\"row label mr-0\"\u003E\u003Cdiv class=\"pv-5\"\u003ECaptcha\u003Cspan class=\"required\"\u003E*\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
switch (captchaType){
case 'google':
pug_html = pug_html + "\u003Cdiv" + (" class=\"g-recaptcha\""+pug_attr("data-sitekey", `${googleRecaptchaSiteKey}`, true, false)+" data-theme=\"dark\" data-size=\"compact\" data-callback=\"recaptchaCallback\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cnoscript\u003EPlease enable JavaScript to solve the captcha.\u003C\u002Fnoscript\u003E";
  break;
case 'hcaptcha':
pug_html = pug_html + "\u003Cdiv" + (" class=\"h-captcha\""+pug_attr("data-sitekey", `${hcaptchaSiteKey}`, true, false)+" data-theme=\"dark\" data-size=\"compact\" data-callback=\"recaptchaCallback\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cnoscript\u003EPlease enable JavaScript to solve the captcha.\u003C\u002Fnoscript\u003E";
  break;
case 'text':
pug_html = pug_html + "\u003Cnoscript class=\"no-m-p\"\u003E\u003Ciframe" + (" class=\"captcha\""+" src=\"\u002Fcaptcha.html\""+pug_attr("width=210", true, true, false)+" height=\"80\" scrolling=\"no\" loading=\"lazy\"") + "\u003E\u003C\u002Fiframe\u003E\u003C\u002Fnoscript\u003E\u003Cdiv class=\"jsonly captcha\" style=\"display:none;\"\u003E\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"captchafield\""+" type=\"text\" name=\"captcha\" autocomplete=\"off\" placeholder=\"Captcha text\" pattern=\".{6}\""+pug_attr("required", true, true, false)+" title=\"6 characters\"") + "\u002F\u003E";
  break;
case 'grid':
if (!(minimal)) {
pug_html = pug_html + "\u003Ca class=\"text-center\" href=\"\u002Ffaq.html#captcha\"\u003EInstructions\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"catalog\"\u003E\u003Cnoscript class=\"no-m-p\"\u003E\u003Ciframe class=\"captcha\" src=\"\u002Fcaptcha.html\" width=\"150\" height=\"150\" scrolling=\"no\" loading=\"lazy\"\u003E\u003C\u002Fiframe\u003E\u003C\u002Fnoscript\u003E\u003Cdiv class=\"jsonly captcha\" style=\"display:none\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"captchafield noselect\"\u003E";
for(let i = 0; i < captchaGridSize**2; i++) {
pug_html = pug_html + "\u003Clabel class=\"captchachecklabel\"\u003E\u003Cinput" + (" type=\"checkbox\" name=\"captcha\""+pug_attr("value", i, true, false)) + "\u002F\u003E\u003Cspan class=\"captchacheckbox\"\u003E\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cinput type=\"submit\" value=\"submit\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fh4\u003E";
}
pug_html = pug_html + "\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
}
if (data.message || data.messages || data.error || data.errors) {
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cul class=\"nomarks\"\u003E";
if (data.message) {
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = data.message) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
if (data.error) {
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = data.error) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
if (data.messages) {
// iterate data.messages
;(function(){
  var $$obj = data.messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var msg = $$obj[pug_index7];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var msg = $$obj[pug_index7];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

}
if (data.errors) {
// iterate data.errors
;(function(){
  var $$obj = data.errors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var error = $$obj[pug_index8];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = error) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var error = $$obj[pug_index8];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = error) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
}
if (data.frame) {
pug_html = pug_html + "\u003Cdiv class=\"row f1\"\u003E\u003Ciframe" + (" class=\"bypass\""+" id=\"modalframe\""+pug_attr("src", data.frame, true, false)+" frameborder=\"0\" scrolling=\"no\"") + "\u003E\u003C\u002Fiframe\u003E\u003C\u002Fdiv\u003E";
}
else
if (data.link) {
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Ca" + (" class=\"button mv-0\""+pug_attr("href", data.link.href, true, false)+" target=\"_blank\"") + "\u003E" + (pug_escape(null == (pug_interp = data.link.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (data.redirect && data.title === 'Success') {
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Ca" + (" class=\"button mv-0\""+pug_attr("href", data.redirect, true, false)) + "\u003EOK\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
else
if (data.settings) {
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"form-wrapper flexleft mt-10\"\u003E\u003Cdiv class=\"row wrap sb\"\u003E\u003Cdiv class=\"col mr-5\"\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"live-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ELive posts\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"notification-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ENotifications\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"notification-yous-only\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EOnly notify (You)s\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"scroll-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EScroll to new posts\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"localtime-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ELocal time\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"24hour-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003E24h time\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"relative-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EShow relative time\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"noncolorids-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ENon-color IDs\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"hidepoststubs-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EHide post stubs\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"hidedeletedpostcontent-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EHide deleted post content\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"disableboardcss-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EDisable board custom CSS\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col\"\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"hidethumbnails-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EHide thumbnails\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"hiderecursive-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ERecursive post hide\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"loop-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ELoop audio\u002Fvideo\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"heightlimit-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EUnlimit media height\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"crispimages-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ECrisp image rendering\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"imageloadingbars-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EImage loading bars\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"alwaysshowspoilers-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EAlways reveal text spoilers\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"yous-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EShow (You)s\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"smoothscrolling-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003ESmooth scrolling\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"threadwatcher-setting\" type=\"checkbox\"\u002F\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"rlabel\"\u003EThread watcher\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row wrap sb mt-5\"\u003E\u003Cdiv class=\"col mr-5\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003EVideo\u002FAudio volume\u003C\u002Fdiv\u003E\u003Clabel class=\"postform-style ph-5\"\u003E\u003Cinput id=\"volume-setting\" type=\"range\" min=\"0\" max=\"100\"\u002F\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003EDefault name\u003C\u002Fdiv\u003E\u003Cinput id=\"name-setting\" type=\"text\" name=\"name\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003EPost password\u003C\u002Fdiv\u003E\u003Cinput id=\"postpassword-setting\" type=\"password\" name=\"postpassword\" autocomplete=\"new-password\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003ETheme\u003C\u002Fdiv\u003E\u003Cselect id=\"theme-setting\"\u003E\u003Coption value=\"default\"\u003Edefault\u003C\u002Foption\u003E";
// iterate data.settings.themes
;(function(){
  var $$obj = data.settings.themes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var theme = $$obj[pug_index9];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", theme, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = theme) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var theme = $$obj[pug_index9];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", theme, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = theme) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003ECode theme\u003C\u002Fdiv\u003E\u003Cselect id=\"codetheme-setting\"\u003E\u003Coption value=\"default\"\u003Edefault\u003C\u002Foption\u003E";
// iterate data.settings.codeThemes
;(function(){
  var $$obj = data.settings.codeThemes;
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var theme = $$obj[pug_index10];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", theme, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = theme) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var theme = $$obj[pug_index10];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", theme, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = theme) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003E(You)s\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"mr-1\""+" id=\"youslist-setting\" type=\"text\""+pug_attr("readonly", true, true, false)) + "\u002F\u003E\u003Cinput id=\"youslist-clear\" type=\"button\" value=\"Clear\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003EWatchlist\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"mr-1\""+" id=\"watchlist-setting\" type=\"text\""+pug_attr("readonly", true, true, false)) + "\u002F\u003E\u003Cinput id=\"watchlist-clear\" type=\"button\" value=\"Clear\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003EHidden images\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"mr-1\""+" id=\"hiddenimages-setting\" type=\"text\""+pug_attr("readonly", true, true, false)) + "\u002F\u003E\u003Cinput id=\"hiddenimages-clear\" type=\"button\" value=\"Clear\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003ECache\u003C\u002Fdiv\u003E\u003Cinput" + (" class=\"mr-1\""+" id=\"hovercachelist-setting\" type=\"text\""+pug_attr("readonly", true, true, false)) + "\u002F\u003E\u003Cinput id=\"hovercachelist-clear\" type=\"button\" value=\"Clear\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"label\"\u003ETegaki Size\u003C\u002Fdiv\u003E\u003Cinput class=\"mr-1 w50\" id=\"tegakiwidth-setting\" type=\"number\"\u002F\u003E\u003Cdiv class=\"postform-style ph-5 mr-1\"\u003E× \u003C\u002Fdiv\u003E\u003Cinput class=\"mr-1 w50\" id=\"tegakiheight-setting\" type=\"number\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row mt-5\"\u003E\u003Cdiv class=\"label\"\u003ECustom CSS\u003C\u002Fdiv\u003E\u003Ctextarea id=\"customcss-setting\" rows=\"7\"\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row mt-5\"\u003E\u003Cform class=\"text-center\" id=\"filter-form\"\u003E\u003Ctable class=\"fw\"\u003E\u003Ctbody id=\"advancedfilters\"\u003E\u003Ctr\u003E\u003Cth colspan=\"4\"\u003EPost Filters\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003EType\u003C\u002Ftd\u003E\u003Ctd\u003EValue\u003C\u002Ftd\u003E\u003Ctd\u003ERegex?\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cinput class=\"right\" id=\"filters-clear\" type=\"button\" value=\"Clear\"\u002F\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E\u003Cselect name=\"type\"\u003E\u003Coption value=\"fname\"\u003EName\u003C\u002Foption\u003E\u003Coption value=\"ftrip\"\u003ETripcode\u003C\u002Foption\u003E\u003Coption value=\"fsub\"\u003ESubject\u003C\u002Foption\u003E\u003Coption value=\"fmsg\"\u003EMessage\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cinput" + (" id=\"filter-value-input\""+pug_attr("required", true, true, false)+" type=\"text\" name=\"value\"") + "\u002F\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cinput type=\"checkbox\" name=\"regex\"\u002F\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cinput class=\"right\" type=\"submit\" value=\"Add\"\u002F\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row mt-5\"\u003E\u003Cdiv class=\"label\"\u003EImport\u002FExport Settings\u003Csmall class=\"title\"\u003EDo NOT import untrusted settings data!\u003C\u002Fsmall\u003E\u003Csmall\u003EExport does not include post password or (You)'s\u003C\u002Fsmall\u003E\u003C\u002Fdiv\u003E\u003Ctextarea id=\"import-export-setting\" type=\"text\"\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cinput class=\"mr-1\" id=\"export-setting\" type=\"button\" value=\"Export\"\u002F\u003E\u003Cinput id=\"import-setting\" type=\"button\" value=\"Import\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["modal"](modal);
    }.call(this, "Date" in locals_for_with ?
        locals_for_with.Date :
        typeof Date !== 'undefined' ? Date : undefined, "RegExp" in locals_for_with ?
        locals_for_with.RegExp :
        typeof RegExp !== 'undefined' ? RegExp : undefined, "board" in locals_for_with ?
        locals_for_with.board :
        typeof board !== 'undefined' ? board : undefined, "captchaGridSize" in locals_for_with ?
        locals_for_with.captchaGridSize :
        typeof captchaGridSize !== 'undefined' ? captchaGridSize : undefined, "captchaType" in locals_for_with ?
        locals_for_with.captchaType :
        typeof captchaType !== 'undefined' ? captchaType : undefined, "csrf" in locals_for_with ?
        locals_for_with.csrf :
        typeof csrf !== 'undefined' ? csrf : undefined, "encodeURIComponent" in locals_for_with ?
        locals_for_with.encodeURIComponent :
        typeof encodeURIComponent !== 'undefined' ? encodeURIComponent : undefined, "googleRecaptchaSiteKey" in locals_for_with ?
        locals_for_with.googleRecaptchaSiteKey :
        typeof googleRecaptchaSiteKey !== 'undefined' ? googleRecaptchaSiteKey : undefined, "hcaptchaSiteKey" in locals_for_with ?
        locals_for_with.hcaptchaSiteKey :
        typeof hcaptchaSiteKey !== 'undefined' ? hcaptchaSiteKey : undefined, "meta" in locals_for_with ?
        locals_for_with.meta :
        typeof meta !== 'undefined' ? meta : undefined, "minimal" in locals_for_with ?
        locals_for_with.minimal :
        typeof minimal !== 'undefined' ? minimal : undefined, "modal" in locals_for_with ?
        locals_for_with.modal :
        typeof modal !== 'undefined' ? modal : undefined, "modview" in locals_for_with ?
        locals_for_with.modview :
        typeof modview !== 'undefined' ? modview : undefined, "reverseImageLinksURL" in locals_for_with ?
        locals_for_with.reverseImageLinksURL :
        typeof reverseImageLinksURL !== 'undefined' ? reverseImageLinksURL : undefined, "upLevel" in locals_for_with ?
        locals_for_with.upLevel :
        typeof upLevel !== 'undefined' ? upLevel : undefined, "viewRawIp" in locals_for_with ?
        locals_for_with.viewRawIp :
        typeof viewRawIp !== 'undefined' ? viewRawIp : undefined));
    ;;return pug_html;}