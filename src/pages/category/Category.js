import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';

const Category = () => {
    const [open, setOpen] = useState(false);
    const nameRef = useRef('')
    const [allcat, setAllCat] = useState([])
    const [load, setLoad] = useState(true)
    const [edit, setEdit] = useState({ no: '' })
    const [newTitle, setNewTitle] = useState()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const newCat = { title: nameRef.current.value }
        console.log(newCat);
        fetch('https://vleaf-server.vercel.app/category', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newCat)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    setOpen(false)
                    setLoad(true)
                }
            })

        e.target.reset()
    }

    useEffect(() => {
        if (load) {
            setLoad(false)
            fetch('https://vleaf-server.vercel.app/categories')
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    setAllCat(result)

                })
        }

    }, [load])

    console.log(allcat);

    const handleUpdate = (id) => {
        const body = { title: newTitle }
        fetch(`https://vleaf-server.vercel.app/category/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setEdit({ no: '' })
                    setNewTitle('')
                    setLoad(true)
                }
            })
    }

    const handleDelete = (id) => {

    }

    return (
        <div style={{ minHeight: '90vh' }}>
            <div className='w-50 mx-auto my-3'>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="fadeID" className='bg-myViolet text-white shadow-none rounded-0 d-block px-4 py-2'>{!open ? `Add A Category` : `Cancel`}</Button>
            </div>
            <Collapse in={open}><div id="fadeID" className='mx-auto'
                style={{
                    width: '50%',
                    textAlign: 'justify'
                }}>
                <form className='add-form' onSubmit={handleOnSubmit}>
                    <input ref={nameRef} type="text" placeholder='category name' required />
                    <button className='shadow-none' style={{ padding: '10px 15px', backgroundColor: 'green', color: 'white', border: '0' }}>Add</button>
                </form>
            </div>
            </Collapse>
            <table className='mx-auto styled-table'>
                <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Category name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allcat.map((cat, i) =>
                            <tr key={cat._id}>
                                <td>{i + 1}</td>
                                <td>{edit.no === i ? <input onChange={e => setNewTitle(e.target.value)} type="text" value={newTitle ? newTitle : cat.title} /> : cat.title}</td>
                                <td className='d-flex gap-2'>
                                    <Button onClick={() => { setEdit({ no: i }); handleUpdate(cat._id) }} className='bg-myViolet text-white shadow-none d-block mx-auto' >
                                        Update
                                    </Button>
                                    {
                                        edit.no === i ? <Button onClick={() => { setEdit({ no: '' }); setNewTitle('') }} className='bg-myViolet text-white shadow-none d-block mx-auto' >
                                            Cancel
                                        </Button> :
                                            <Button variant='danger' onClick={() => handleDelete(cat._id)} className=' text-white shadow-none d-block mx-auto' >
                                                delete
                                            </Button>

                                    }
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Category;