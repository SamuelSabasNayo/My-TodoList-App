import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify';

const myId = 'custom-id-yes';

toast.configure();

const Toaster = (type, message) => {
    if (type === 'success'){
        toast.success(message, { 
            toastId: myId,
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000
        });
    }

    else if (type === 'error'){
        toast.error(message,{
            toastId: myId,
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    else if(type === 'info'){
        toast.info(message,{
            toastId: myId,
            position: toast.POSITION.BOTTOM_CENTER
        })
    }
};

export default Toaster;