import style from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'
import todo from '../assets/todo.svg'


export function Header() {
    return (
        <>
            <header className={style.header}>
                <img src={rocketLogo} alt="rocket" />
                <img src={todo} alt="todo" />
            </header>
        </>
    )
}