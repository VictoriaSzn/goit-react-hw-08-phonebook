import { ContactForm } from "../components/ContactForm/ContacForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/ContactsOperations";

export const Contacts = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
        <div
         style={{
          height: '100vh',
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}>
          
         <h1>Phone book</h1>
        <ContactForm/> 
        <Filter/>
        <ContactList/>
        
        </div>
    
    );
};