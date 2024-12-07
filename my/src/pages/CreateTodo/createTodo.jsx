import * as Yup from 'yup';
import styles from './createTodo.module.css'
import { useNavigate } from 'react-router-dom';
import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { FormCreateEditTodo } from '../../forms/FormsCreateEditTodo/formCreateEditTodo';
import { useDispatch } from 'react-redux';
import { addTOdo } from '../../redux/slices/todoSlice';

export const toastify = (message, toastState) => {
    return toastState (message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
        });
};

export const CreateTodo = () => {
    const dispatch = useDispatch();    
    const navigate = useNavigate();
    const textRequired = () => {
        return 'Обязательно'
    };
    
    const createTabSchema = Yup.object().shape({
        todo: Yup.string()
                         .max(120, 'max 120')
                         .required(textRequired()),                         
        });
        
    const initialValues = {
        todo: '',
        };
    const onSubmit = (value, {resetForm}) => {
        value = {dateOfCreation:new Date().toDateString(), ...value};         
            dispatch(addTOdo(value));
            navigate('/');
            toastify('Успешно добавлен', toast.success);
            resetForm();
    }    
    
    return (
        <div className={styles.wrapper}>
            <IconButton onClick={()=>navigate('/')}>
            <ArrowBackIcon/>
            </IconButton>
            <h1>Add</h1>
            <FormCreateEditTodo
            validationSchema={createTabSchema} 
            onSubmit={onSubmit}
            initialValues={initialValues}
            />
        </div>
        
    )
}