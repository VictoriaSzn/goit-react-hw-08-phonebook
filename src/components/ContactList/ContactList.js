import * as React from 'react';
import styles from "../Form.module.css";
import { useDispatch, useSelector } from "react-redux";
//import {useGetContactsQuery, useDeleteContactMutation} from "../../redux/contacts/ContactSlice";
import { deleteContact } from "redux/contacts/ContactsOperations";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  //const { data } = useGetContactsQuery();
  //const [delContact] = useDeleteContactMutation();
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  // const handleDelContact = id => {
  //   delContact(id);
  // };

  //  if (!data) {
  //   return;
  // }
const submit = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
         <div>
            <p>You want to delete this contact?</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  dispatch(deleteContact(id));
                  toast.success('Success! The contact has been deleted', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  onClose();
                }}
              >
                Yes!
              </button>
          </div> 
        );
      },
    });
  };

  const handleDelContact = id => {
    submit(id);
  };
  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });
  return(
    <ul className={styles.contactList}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name + ": " + number}
          {
            <Button
              variant="contained"
              type="button"
              name="delte"
              onClick={() => handleDelContact(id)}
              startIcon={<DeleteIcon />}
            >
              delete
            </Button>
          }
        </li>
      ))}
    </ul>
  )
};



