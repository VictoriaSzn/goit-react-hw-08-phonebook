import * as React from 'react';
import styles from "../Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/ContactsOperations";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export const ContactList = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

   return (
    <div>
    <ul className={styles.contactList}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name + ": " + number}
          {
            <Button
              variant="contained"
              type="button"
              name="delte"
              onClick={() => { dispatch(deleteContact(id))}}
              startIcon={<DeleteIcon />}
            > delete
            </Button>
          }
          
        </li>
      ))}
      </ul>
      
      </div>
  )
};



