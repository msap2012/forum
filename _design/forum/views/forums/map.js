function(doc) { 
	if (doc.type && doc.type === 'forum') { 
		emit(doc._id, doc.title); 
	} 
}
