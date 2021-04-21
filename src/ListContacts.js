import React from 'react'


const ListContacts = ({removeContact, contacts}) => {
	return(
		<div> {contacts.map((contact) => (
			<ol className="contact-list">
				<li key={contact.id} className='contact-list-item'>
					<div className='contact-avatar'
						style={{
							backgroundImage: `url(${contact.avatarURL})`
							}}
					></div>
					<div className='contact-details'>
						<p>{contact.name}</p>	
						<p>{contact.handle}</p>	
					</div>
					<button 
						onClick={() => removeContact(contact)}
						className="contact-remove">	
						Remove
					</button>	
				</li>
				
			</ol>
			))}
		</div>
		)
}
export default ListContacts;