import React from "react";
import PropTypes from "prop-types"

export default function Task({task: {id, title, state}, onArchiveTask, onPinTask}){
    return (
        <div className={`list-item ${state} text-black`}>
            <label htmlFor="title" aria-label={`archiveTask-${id}`} className="checkbox">
                <input 
                type="text" value={title}
                disabled={true}
                 readOnly={true}
                  name="checked"
                    checked={state === "TASK_ARCHIVED"}
                  />
                  <span className="checkbox-custom"
                    onClick={() => onArchiveTask(id)}
                  />
            </label>
            <label className="swap text-black">
  <input type="checkbox" />
  <div className="swap-on">ON</div>
  <div className="swap-off">OFF</div>
</label>
            <label htmlFor="title" aria-label={title} className="title text-black">
                <input type="text" value={title} readOnly={true} name="title" placeholder="input title"/>
            </label>
            {state !== "TASK_ARCHIVED" && (

                <button className="pin-button" onClick={() => onPinTask(id)} id={`pinTask${id}`} aria-label={`pinTask-${id}`} key={`pinTask${id}`}>
                    <span className={`icon-star`}/>
                </button>
            )
            }

        </div>
    )
}


Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
}