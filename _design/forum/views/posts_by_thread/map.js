function(doc) {
 if (doc.type && doc.type == 'post') {
  emit([doc.thread_id, doc.datetime], {content: doc.content, thread_id: doc.thread_id, user_id: doc.user_id, post_rev: doc._rev});
 }
}