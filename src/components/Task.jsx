import style from './Task.module.css'
import { useState } from 'react';
import { Trash } from 'phosphor-react'

export function Task(props) {

  //states
  const [checkedId, setCheckedId] = useState(null);

  //functions
  function handleCompletedTask() {

    const shouldDeselect = checkedId === props.id;
    const newCheckedId = shouldDeselect ? null : props.id;

    setCheckedId(newCheckedId);

    if (newCheckedId) {
      props.onCompletedTask(true);
    } else {
      props.onCompletedTask(false);
    }
  }

  function handleDeleteTask(id) {
    props.onDeleteTask(id)
    if (checkedId === id) {
      props.onCompletedTask(false);
    }
  }

  return (
    <>
      <div className={style.radioCheckBox}>
        <input type="radio"
          name={props.id}
          checked={checkedId === props.id}
          onClick={handleCompletedTask}
          id={props.id}
        />
        <label htmlFor={props.id}><p>{props.description}</p></label>
      </div>
      <button title="Deletar Tarefa" onClick={() => handleDeleteTask(props.id)}>
        <Trash size={20} />
      </button>
    </>
  )
}