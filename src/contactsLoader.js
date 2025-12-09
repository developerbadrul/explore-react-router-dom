import { getContact, getContacts } from "./contacts";

export async function getContactLoader() {
    const contacts = await getContacts();
    return { contacts };
}


export async function getSingleContact({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}