import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [updateId, setUpdateId] = useState(null)
    const [updateText, setUpdateText] = useState('')

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {updateId === todo.id ? (
                            <div className="flex w-full items-center gap-2">
                                <input
                                    value={updateText}
                                    onChange={(e) => setUpdateText(e.target.value)}
                                    className="bg-gray-700 text-white px-2 py-1 rounded flex-1"
                                />

                                <button
                                    onClick={() => {
                                        dispatch(updateTodo({
                                            id: updateId,
                                            text: updateText
                                        }))
                                        setUpdateId(null)
                                        setUpdateText('')
                                    }}
                                    className="text-white bg-green-500 px-4 py-1 rounded"
                                >
                                    Save
                                </button>

                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="text-white bg-red-500 px-4 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="text-white">{todo.text}</div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setUpdateId(todo.id)
                                            setUpdateText(todo.text)
                                        }}
                                        className="text-white bg-blue-500 px-4 py-1 rounded"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="text-white bg-red-500 px-4 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos