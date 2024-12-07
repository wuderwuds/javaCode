import styles from './formCreateEditTodo.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';


export const FormCreateEditTodo = ({validationSchema, onSubmit, initialValues, typeForm}) => {
       
    return (        
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
             <Form className={styles.wrapper} >
                
                <label htmlFor="todo">todo</label>
                <Field className={styles.wrapper1}
                    id="todo" 
                    name="todo"
                    type="text"
                />
                <ErrorMessage component={'p'} name='todo'/>                                    
               
                <Button 
                    type = 'submit' 
                    sx={{ marginTop: 1 }}
                    variant="contained" 
                    color='success' 
                > {typeForm==='edit'? 'enter': 'enter'}
                </Button>
            
            </Form>
        </Formik>
    )
}