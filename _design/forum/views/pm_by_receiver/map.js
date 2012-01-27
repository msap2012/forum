function(doc) { 
	if (doc.type && doc.type === 'pm') { 
		emit([doc.receiver_name], 
			{ content: doc.content, id: doc._id, user_id: doc.user_id, datetime: doc.datetime }
				); 
	}	
}
