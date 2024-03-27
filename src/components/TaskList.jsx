import style from './TaskList.module.css';
import { Task } from './Task';
import { EmptyTask } from './EmptyTask';
import { useState } from 'react';

export function TaskList(props) {
    const taskList = props.tasks;

    //states
    const [doneTask, setDoneTask] = useState(0);

    //functions
    function onHandleCompletedTask(isCompleted) {
        if (isCompleted) {
            setDoneTask(state => state + 1);
        } else {
            setDoneTask(state => state - 1);
        }
    }

    function onDeleteTask(id) {
        props.onHandleDeleteTask(id)
    }

    return (
        <>
            <div className={style.taskList}>
                <article className={style.taskInfos}>
                    <div className={style.totalTask}>
                        <div className={style.totalTaskCreated}>
                            <span>Tarefas criadas <span className={style.totalNumber}>{taskList.length}</span></span>
                        </div>
                        <div className={style.totalDoneTask}>
                            <span>Concluídas<span className={style.totalNumber}> {doneTask > 0
                                ? `${doneTask} de ${taskList.length}`
                                : `${doneTask} de ${taskList.length}`}
                            </span></span>
                        </div>
                    </div>
                </article>
                <div className={style.taskContainer}>
                    {taskList.length > 0 ? (
                        taskList.map(task => (
                            <div className={style.task} key={task.id}>
                                <Task
                                    id={task.id}
                                    description={task.task}
                                    onCompletedTask={onHandleCompletedTask}
                                    onDeleteTask={onDeleteTask}
                                />
                            </div>
                        ))
                    ) : (
                        <EmptyTask />
                    )}
                </div>
            </div>
        </>
    );
}
