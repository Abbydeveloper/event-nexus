import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteEvent = ({ eventId }) => {
  const navigate = useNavigate();

  const handleDeleteEvent = async () => {
    try {
      await axios.delete(`/api/events/${eventId}`);
      navigate('/organizer/manage-events');
    } catch (err) {
      console.error(err);
      alert('Error deleting event');
    }
  };

  return (
    <button
      onClick={handleDeleteEvent}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
    >
      Delete Event
    </button>
  );
};

export default DeleteEvent;