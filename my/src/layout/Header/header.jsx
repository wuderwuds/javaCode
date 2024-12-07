import {  NavLink, useNavigate } from 'react-router-dom'
import styles from './header.module.css'
import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { cleanToken } from '../../redux/slices/tokenSlace';



export const Header = () => {

// const token = useSelector(state=>state.token);
// const dispatch = useDispatch();
const navigate = useNavigate();
    
    return (
    
        <header className={styles.header}>
            
            <div className={styles.headerMenu}>
                <li>      
                    <Button 
                    onClick={()=>navigate('/createtodo')} 
                    variant="contained"
                    > Добавить
                    </Button>
                </li>
            </div>
            
            <div className={styles.headerMenu}>
                <li> 
                    <NavLink 
                    className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
                    to='/'> Todos 
                    </NavLink> 
                </li>
              
            </div>         
        </header>
    )
}