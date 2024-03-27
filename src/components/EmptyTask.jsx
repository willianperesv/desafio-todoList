import style from './EmptyTask.module.css'
import clipboard from '../assets/clipboard.svg'

export function EmptyTask() {
    return (
        <>
            <div className={style.taskEmpty}>
                <div className={style.emptyMessage}>
                    <img src={clipboard} />
                    <div>
                        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            </div>
        </>
    )
}


