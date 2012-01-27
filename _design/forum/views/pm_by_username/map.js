function(doc) { 
	if (doc.type && doc.type === 'pm') { 
		emit([doc.user_id], 
			{ content: doc.content, id: doc._id, user_id: doc.receiver_id, datetime: doc.datetime }
				); 
	}	
}
