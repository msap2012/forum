function(doc) {
 if (doc.type && doc.type == 'thread') {
 // emit([doc.forum_id, doc.datetime], {title: doc.title, thread_id: doc.thread_id, post_rev: doc._rev});
		emit([doc.forum_id], doc.title);
 }
}
