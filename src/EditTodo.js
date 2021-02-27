import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import { FormTodo } from "./FormTodo"


export const EditTodo = () => {

    const [todo, setTodo] = useState();
    useEffect(() => {
        setTodo({ text: 'foo' })
    }, [])

    return todo ?
        <div className="container">
            <div className="mt-3">
                <h3>Edit Todo Item</h3>
                <FormTodo todo={todo} />
            </div></div>
        : <div>Loading...</div>
}
