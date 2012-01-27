function(doc) { 
	if (doc.type && doc.type === 'thread') { 
		emit(doc.datetime, doc.title); 
	} 
}
