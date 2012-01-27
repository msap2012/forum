$(function() {

	Locale.addTranslation('main.ms', locale, '<h1>Welcome {{name}}!</h1><a href="#/view/thread">View Threads</a>');
	//Locale.addTranslation('login.ms', locale, '<div class="reply ui-content"><h2>Login</h2><form action="#/post/login" method="put">  <input type="text" name="username" id="loginUsername" autofocus required placeholder="Username?" />  <input type="password" name="password" required placeholder="Password?" />  <input type="submit" value="Login" /></form></div>');

	Locale.addTranslation('login.ms', locale, '<div class="ui-content ui-login">' +
'<h2>Login</h2>' +
'<form action="#/post/login" method="PUT">' +
'<div class="ui-field-contain ui-body ">' +
'<label for="loginUsername" class="ui-input-text">Username:</label>' +
'<input type="text" name="username" id="loginUsername" autofocus="autofocus" required="required" placeholder="Username?" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'</div>' +
'<div class="ui-field-contain ui-body ">' +
'<label for="loginPassword" class="ui-input-text">Password:</label>' +
'<input type="password" name="password" id="loginPassword" required="required" placeholder="Password?" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'</div>' +
'<div class="ui-body">' +
'<div class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a">' +
'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Login</span></span>' +
'<button type="submit" class="ui-btn-hidden">Login</button>' +
'</div>' +
'</div>' +
'</form>' +
'</div>');

	//Locale.addTranslation('register.ms', locale, '<div class="reply">  <h1>Register</h1>  <form action="#/post/register" method="put">    <input type="text" name="username" id="registerUsername" required placeholder="Desired username?" />    <input type="password" name="password" required placeholder="Password?" />    <br/><br/>    <input type="email" name="email" required placeholder="Email?" />    <input type="url" name="avatar" placeholder="Avatar URL?" />    <input type="submit" value="Register" />  </form></div>');

	Locale.addTranslation('register.ms', locale, '<div class="ui-content ui-register">' +
'<h2>Register</h2>' +
'<form action="#/post/register" method="PUT">' +
'<div class="ui-field-contain ui-body">' +
'<label for="regUsername" class="ui-input-text">Username:</label>' +
'<input type="text" name="username" id="regUsername" autofocus="autofocus" required="required" placeholder="Desired username?" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'</div>' +
'<div class="ui-field-contain ui-body">' +
'<label for="regPassword" class="ui-input-text">Password:</label>' +
'<input type="password" name="password" id="regPassword" required="required" placeholder="Password?" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'</div>' +
'<div class="ui-field-contain ui-body">' +
'<label for="regEmail" class="ui-input-text">Email:</label>' +
'<input type="text" name="email" id="regEmail" required="required" placeholder="Email?" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'</div>' +
'<div class="ui-field-contain ui-body">' +
'<label for="regAvatar" class="ui-input-text">Avatar:</label>' +
'<input type="text" name="avatar" id="regAvatar" required="required" placeholder="Avatar URL?" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'</div>' +
'<div class="ui-body">' +
'<div class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a">' +
'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Register</span></span>' +
'<button type="submit" class="ui-btn-hidden">Register</button' +
'</div>' +
'</div>' +
'</form>' +
'</div>');

	//Locale.addTranslation('newthread.ms', locale, '<div class="reply">  <h1>New Thread</h1>  <form action="#/post/thread" method="put">    <input type="text" name="threadTitle" id="threadTitle" autofocus required placeholder="Type your thread\'s title here" /><br/>    <textarea id="replyBox" name="postContent" required placeholder="Type your post here"></textarea><br/>    <input type="submit" value="Create Thread" />  </form></div>');

	Locale.addTranslation('newthread.ms', locale, '<div class="ui-content ui-new-thread">' +
'<h2>New Thread</h2>' +
'<form action="#/post/thread" method="put">' +
'<div class="ui-field-contain ui-body ">' +
'<label for="threadTitle" class="ui-input-text">Title:</label>' +
'<input type="text" name="threadTitle" id="threadTitle" autofocus="autofocus" required="required" placeholder="Type your thread\'s title here" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'</div>' +
'<div class="ui-field-contain ui-body ">' +
'<label for="postContent" class="ui-input-text">Content:</label>' +
'<textarea type="text" name="postContent" id="postContent" required="required" placeholder="Type your post here" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></textarea>' +
'<a href="#/share_file/new" class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a ui-share-btn">' +
'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Share File</span></span>' +
'</a>' +
'</div>' +
'<div class="ui-body">' +
'<div class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a">' +
'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Create Thread</span></span>' +
'<button type="submit" class="ui-btn-hidden">Create Thread</button' +
'</div>' +
'</div>' +
'</form>' +
'</div>');
	Locale.addTranslation('user_profile.ms', locale,'{{#user}}<div class="user"><img src="{{avatar}}" width="120" height="120" alt="" /></div>' +
'<div class="user_detail">' + '<div class="ui-send-message">Send private message to {{username}}</div>' + 
'<form action="#/post/pm" method="put">' +
'<input type="hidden" name="receiver_id" value="{{id}}" />' +
'<input type="hidden" name="receiver_name" value="{{username}}" />' +
'<div class="ui-field-contain ui-body">' +
'<label for="threadTitle" class="ui-input-text">Title:</label>' +
'<input type="text" name="pmTitle" id="pmTitle" autofocus="autofocus" required="required" placeholder="Type your message\'s title here" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" />' +
'<label for="threadTitle" class="ui-input-text">Message:</label>' +
'<textarea type="text" name="postPM" id="postPM" required="required" placeholder="Type your post here" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></textarea>' +
'</div>' +
'<div class="ui-body">' +
'<div class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a">' +
'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Send</span></span>' +
'<button type="submit" class="ui-btn-hidden">Send</button>' +
'</div>' + 
'</div>' + 
'<form>' +
'</div>{{/user}}');

	Locale.addTranslation('posts.ms', locale, '{{#posts}}<div class="post"><a href="#/user/{{user_id}}" class="user"><img src="http://i.imgur.com/arExL.png" width="120" height="120" alt="" />{{user_id}}</a><div>{{content}}</div><div class="signature"></div></div>{{/posts}}');

	Locale.addTranslation('quickreply.ms', locale, '<div class="ui-content ui-forum-quick-reply">' +
'<div class="ui-body-c ui-body ui-corner-all">' +
'<h2>Reply</h2>' +
'<form action="#/post/reply" method="put">' +
'<input type="hidden" name="currentThread" value="{{thread_id}}" />' +
'<div class="ui-field-contain ui-body">' +
'<textarea type="text" name="postContent" id="postContent" required="required" placeholder="Type your post here" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></textarea>' +
'<a href="#/share_file/{{thread_id}}" class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a ui-share-btn">' +
'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Share File</span></span>' +
'</a>' +
'</div>' +
'<div class="ui-body">' +
'<div class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a">' +
'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Reply</span></span>' +
'<button type="submit" class="ui-btn-hidden">Reply</button>' +
'</div>' +
'</div>' +
'</form>' +
'</div>' +
'</div>');

	Locale.addTranslation('dropboxshare.ms', locale, '<div class="ui-content ui-forum-quick-reply-dropbox">' +
'<div class="ui-body-c ui-body ui-corner-all">' +
'<h2>Share DropBox</h2>' +
'<div id="dropbox-browser">'+
'</div>' +
'</div>' +
'</div>'
	);

	Locale.addTranslation('postsv2.ms', locale, '<div class="ui-forum-thread-posts ui-content">' +
'<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' +
'<li class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-top ui-btn-up-undefined">{{thread_name}}</li>' +
'{{#posts}}' +
'<li id="post-{{id}}" class="ui-li {{listclass_}} ui-header">' +
'<div class="ui-forum-thread-post ui-li">' +
'<div class="ui-post-content ui-body ui-body-c">' +
'<a href="#/user/{{user_id}}" class="ui-post-user"><div class=""><img src="http://i.imgur.com/arExL.png" role-data="{{user_id}}"  width="40" height="40" alt="" /><span>{{user_id}}</span></div></a>' +
'<div class="ui-post-text ">{{#nl2br}}{{content}}{{/nl2br}}</div>' +
'</div>' +
'</div>' +
'{{#isadmin}}' +
'<a href="#/delete/{{thread_id}}/{{id}}/{{post_rev}}" class="ui-delete-post-btn ui-btn ui-corner-all ui-btn-up ui-btn-right ui-btn-icon-notext">' +
'<span class="ui-corner-all ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow"></span></span>'+
'</a>' +
'{{/isadmin}}' +
'</li>' +
'{{/posts}}' +
'</ul>' +
'</div>');

	Locale.addTranslation('postsv3.ms', locale, '<div class="ui-forum-thread-posts ui-content">' +
'<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' +
'<li class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-top ui-btn-up-undefined">{{thread_name}}</li>' +
'{{#posts}}' +
'<li id="post-{{id}}" class="ui-li {{listclass_}} ui-header">' +
'<div class="ui-forum-thread-post ui-li">' +
'<div class="ui-post-content ui-body ui-body-c">' +
'<a href="#/user/{{user_id}}" class="ui-post-user"><div class=""><img src="http://i.imgur.com/arExL.png" role-data="{{user_id}}"  width="40" height="40" alt="" /><span>{{user_id}}</span></div></a>' +
'<div class="ui-post-text ">{{#nl2br}}{{content}}{{/nl2br}}</div>' +
'</div>' +
'</div>' +
'{{#isadmin}}' +
'<a href="#/delete/{{thread_id}}/{{id}}/{{post_rev}}" class="ui-delete-post-btn ui-btn ui-corner-all ui-btn-up ui-btn-right ui-btn-icon-notext">' +
'<span class="ui-corner-all ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow"></span></span>'+
'</a>' +
'{{/isadmin}}' +
'</li>' +
'{{/posts}}' +
'</ul>' +
'<div>' + 
'{{#first}} <a href="#/thread/{{thread_id}}/{{first}}">First</a> {{/first}}' +
'{{#prev}} <a href="#/thread/{{thread_id}}/{{prev}}">Prev</a> {{/prev}}' +
'{{#pages}}{{#current}} <span>{{page}}</span> {{/current}}' + 
'{{^current}} <a href="#/thread/{{thread_id}}/{{page}}">{{page}}</a> {{/current}}{{/pages}}' +
'{{#next}} <a href="#/thread/{{thread_id}}/{{next}}">Next</a> {{/next}}' +
'{{#last}} <a href="#/thread/{{thread_id}}/{{last}}">Last</a> {{/last}}' +
'</div>' +
'</div>');

	Locale.addTranslation('newthreadbrn.ms', locale, '<a href="#/new/thread" class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-c ui-btn-new-thread">' +
'<span class="ui-btn-inner ui-btn-corner-all">' +
'<span class="ui-btn-text">New Thread</span>' +
'</span>' +
'</a>');

	Locale.addTranslation('dropbox.ms', locale, '<div class="ui-content ui-dropbox-browser" id="dropbox-browser"></div>');

	Locale.addTranslation('threads.ms', locale, '<div class="ui-content ui-forum-threads">' +
		'{{#isLogged}}' +
/*
		'<a href="#/dropbox/auth" class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-a">' +
		'<span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">DropBox</span></span>' +
		'</a>' +
*/
		'<a href="#/new/thread" class="ui-btn ui-btn-corner-all ui-shadow ui-btn-up-c ui-btn-new-thread">' +
		'<span class="ui-btn-inner ui-btn-corner-all">' +
		'<span class="ui-btn-text">New Thread</span>' +
		'</span>' +
		'</a>' +
		'{{/isLogged}}' +
		'<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' + 
		'<li class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-top ui-btn-up-undefined">Threads List</li>' +
		'{{#threads}}' + 
		'<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-a {{listclass_}}">' + 
			'<div class="ui-forum-thread ui-btn-inner ui-li">' + 
			'<div class="ui-btn-text">' +
				'<!--<a href="#/thread/{{id}}" class="ui-link-inherit">{{value}}</a>-->' +
				'<a href="#/thread/{{id}}/1" class="ui-link-inherit">{{value}}</a>' +
			'</div>' + 
			'<span class="ui-icon ui-icon-arrow-r ui-icon-shadow"></span>' + 
			'</div>' + 
		'</li>' + 
		'{{/threads}}' +
	'</ul></div>');
	Locale.addTranslation('forums.ms', locale,  '<div class="ui-content ui-forum-threads">' +
		 '<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' +
    '<li class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-top ui-btn-up-undefined">Forums List</li>' +
    '{{#forums}}' +
    '<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-a {{listclass_}}">' +
      '<div class="ui-forum-thread ui-btn-inner ui-li">' +
      '<div class="ui-btn-text">' +
        '<!--<a href="#/thread/{{id}}" class="ui-link-inherit">{{value}}</a>-->' +
        '<a href="#/forum/{{id}}/1" class="ui-link-inherit">{{value}}</a>' +
      '</div>' +
      '<span class="ui-icon ui-icon-arrow-r ui-icon-shadow"></span>' +
      '</div>' +
    '</li>' +
    '{{/forums}}' +
  '</ul></div>');


	Locale.addTranslation('login_control.ms', locale, $('#page_header .ui-user-nav .ui-btn-right.ui-controlgroup-horizontal').html());
	Locale.addTranslation('logout_control.ms', locale, '<a href="#/logout" class="ui-btn ui-btn-up-a ui-btn-corner-all">'+
		'<span class="ui-btn-inner ui-btn-corner-all">' +
			'<span class="ui-btn-text">Logout</span>' +
		'</span>' + '</a>' +
		' <a href="#/pm" class="ui-btn ui-btn-up-a ui-btn-corner-all">'+
		'<span class="ui-btn-inner ui-btn-corner-all">' +
			'<span class="ui-btn-text">PM</span>' +
		'</span>' +
	'</a>');

	Locale.addTranslation('view_pm_frame.ms', locale,  '<div class="ui-content ui-forum-threads">' +
     '<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow">' +
    '<li class="ui-li ui-li-divider ui-btn ui-bar-b ui-corner-top ui-btn-up-undefined">Private Message:</li>' +
'{{#pm}}' +
'<li><div class="sender">From: {{user_id}}</div><div class="receiver">To: {{receiver_name}}</div><div class="title">Title: {{title}}</div><div class="content">Message: {{content}}</div></li>' +
'{{/pm}}' +
'{{^pm}}<li>You don\'t have any private message yet</li>{{/pm}}' +
'</ul></div>'

	);

	Locale.addTranslation('pc_page_frame', locale, '<div class="ui-body ui-pc-page-frame">' +
'<div class="content-primary">{{>page_frame_content}}</div>' +
'<div class="content-secondary">{{>page_frame_threads}}</div>' +
'</div>');

	Locale.addTranslation('current_users', locale, '<div id="users" class="ui-body-c ui-body ui-corner-all">' +
'<div class="header"><b>There are {{count}} user(s) online, including:</b></div>' +
'{{#users}}<div class="user"><img src="{{avatar}}" /><span>{{username}}</span></div>{{/users}}' +
'<div style="clear: both"></div>' + 
'</div>');
});
