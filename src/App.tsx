import './App.css';

import axios from 'axios';
import { FC, useEffect, useState } from 'react';

const App: FC = () => {
    const [state, setState] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const fetchApi = async () => {
        const { data } = await axios.get('http://localhost:2000/api/books/');
        setState(data.data);
    };
    useEffect(() => {
        fetchApi();
    }, []);

    const addBook = async () => {
        await axios.post('http://localhost:2000/api/books/', { name: name, date: date });
        fetchApi();
    };
    const deleteBook = async (id: string) => {
        await axios.delete(`http://localhost:2000/api/books/${id}`);
        fetchApi();
    };
    return (
        <div className="App">
            {state.map((item: any) => (
                <div key={item._id} onClick={() => deleteBook(item._id)}>
                    <h1>{item.name}</h1>
                </div>
            ))}

            <input type="text" onChange={(e: any) => setName(e.target.value)} name="" id="" />
            <input type="date" onChange={(e: any) => setDate(e.target.value)} name="" id="1" />
            <button onClick={addBook}>click</button>
        </div>
    );
};

export default App;
