import style from './TaskCreator.module.css'
import plusIco from '../assets/plus.ico'
import { TaskList } from './TaskList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export function TaskCreator() {
    const checkboxId = uuidv4();

    // states

    const [listTask, setListTask] = useState(() => { return [] })
    const [task, setTask] = useState('')
    const [error, setError] = useState('');

    // functions
    function handleTaskCreate() {
        event.preventDefault()
        if (!task.trim()) {
            setError('Esse campo é obrigatório');
            return;
        }
        setListTask(tasks => {
            return [...tasks, { id: checkboxId, task: task }]
        })
        setTask('');
        setError('');
    }

    function handleTaskChange() {

        setTask(event.target.value)
        setError('');
    }

    function deleteTask(id) {
        const updatedTasks = listTask.filter(task => task.id !== id);
        setListTask(updatedTasks);
    }

    return (
        <>
            <div>
                <article>
                    <div className={style.taskCreator}>
                        <div className={style.taskCreatorBox}>
                            <div className={style.taskCreatorInput}>
                                <input
                                    placeholder='Adicione uma nova tarefa'
                                    value={task} onChange={handleTaskChange}
                                    required />
                            </div>
                            <button onClick={handleTaskCreate}>
                                Criar
                                <img src={plusIco} alt="Ícone de Adicionar" />
                            </button>
                        </div>
                    </div>
                    <div className={style.errorBox}>
                        <span className={style.errorMessage}>{error}</span>
                    </div>
                </article>
                <TaskList tasks={listTask} onHandleDeleteTask={deleteTask} />
            </div>
        </>
    )
}