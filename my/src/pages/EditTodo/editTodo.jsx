import * as Yup from 'yup';
import styles from '../CreateTodo/createTodo.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { FormCreateEditTodo } from '../../forms/FormsCreateEditTodo/formCreateEditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../redux/slices/todoSlice';
import { toastify } from '../CreateTodo/createTodo';



export const EditTodo = () => {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch();  
    const navigate = useNavigate();
    const {idTodo} = useParams();
    const textRequired = () => {
        return 'Обязательно'
    };
    
    const createTabSchema = Yup.object().shape({
        todo: Yup.string()
                         .max(120, 'max 120')
                         .required(textRequired()),
    });
        
    const initialValues = todos.find(todo=>todo.id===idTodo);
    const onSubmit = (value) => {        
            dispatch(editTodo([idTodo, value] ));
            navigate('/');
            toastify('success', toast.success);
    }       
    
    return (
        <div className={styles.wrapper}>
            <IconButton onClick={()=>navigate('/')}>
            <ArrowBackIcon/>
            </IconButton>
            <h1>Edit</h1>
            <FormCreateEditTodo
            validationSchema={createTabSchema} 
            onSubmit={onSubmit}
            initialValues={initialValues}
            typeForm={'edit'}
            />
        </div>
        
    )
}