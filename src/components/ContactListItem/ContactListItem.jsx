import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { FcPhone } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { AiOutlineDelete } from 'react-icons/ai';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item} key={contact.id}>
      <div className={css.contact_wrp}>
        <FcPhone size={'1.5em'} />
        {contact.name}: {contact.number}
      </div>

      <Button
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon color="error" />}
        onClick={() => dispatch(deleteContact(contact.id))} //Відправляємо action deleteContact в redux store по кліку на кнопці "Delete"
      ></Button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
