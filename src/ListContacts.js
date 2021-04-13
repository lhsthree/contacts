import React from 'react'
import contacts from './utils/ContactsApi.js'

const ListContacts = () => {
	return(
		<div> {contacts.map((contact) => (
			<div>
				<p>{contact.id}</p>
				<p>{contact.name}</p>
				<p>{contact.avatarURL}</p>
				<p>{contact.handle}</p>
			</div>

		))}
		</div>
		)
}
export default ListContacts;