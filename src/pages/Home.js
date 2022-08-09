import React, { useEffect, useState } from "react";

import { getUser, editUser, postUser, deleteUser } from "../services";
import "../style/home.css"

export const Home = () => {
    // const [counter, setCounter] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [dataUser, setDataUser] = useState({city: "", country: "", currency:"",language :"",province:"", tanggal: ""});
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");
    // const [name, setName] = useState("");
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");
    // console.log("DATA USER: ", dataUser);

    useEffect(() => {
        getUser(setListUser);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }, [message]);

    return (
        <>
        <div style={{ display: "flex", height: "100vh", }}>
            <div style={{ display: "flex", width: "50%", flexDirection: 'column',border:'solid' }}>
                <table>
                    
                    <tr>
                        
                        <th className="a">city</th>
                        <th className="b">country</th>
                        <th className="c">currency</th>
                       
                        <th className="d">language</th>
                    
                        
                        <th className="e">province</th>
                        <th className="f">tanggal</th>
                    </tr>
                    {
                        listUser.map((data, index) => 
                        <tr key={data.id}>
                          
                            <td>{data.city}</td>
                            <td>{data.country}</td>
                            <td>{data.currency}</td>
                           
                            <td>{data.language}</td>
                          
                            
                            <td>{data.province}</td>
                            <td>{data.tanggal}</td>
                            <td>
                                <div>
                                    <button className="edit"
                                        onClick={() => {
                                            setIsEditing(true);
                                            setDataUser(data);
                                        }}
                                    >
                                        edit
                                    </button>
                                    <button className="delete"
                                        onClick={() => {
                                           
                                            deleteUser(data.id, setMessage);
                                        }}
                                    >
                                        delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        )
                    }
                </table>
            </div>
            <div style={{ display: "flex", width: "50%", flexDirection: 'column',border:'solid' }} className='bg'>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                  
                    <label>city</label>
                    <input
                        type="text" 
                        placeholder="masukin mass" 
                        value={dataUser?.city} 
                        onChange={(e) => {
                            setDataUser({...dataUser, city: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    <label>country</label>
                    <input 
                        type="text" 
                        placeholder="Masukin mass" 
                        value={dataUser?.country}  
                        onChange={(e) => {
                            setDataUser({...dataUser, country: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    <label>currency</label>
                    <input 
                        type="text" 
                        placeholder="Masukkin mass" 
                        value={dataUser?.currency} 
                        onChange={(e) => {
                            setDataUser({...dataUser, currency: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    <label>language</label>
                    <input 
                        type="text" 
                        placeholder="Masukkin mass" 
                        value={dataUser?.launguage} 
                        onChange={(e) => {
                            setDataUser({...dataUser, launguage: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                  
                    <label>province</label>
                    <input
                        type="text" 
                        placeholder="masukin mass" 
                        value={dataUser?.province} 
                        onChange={(e) => {
                            setDataUser({...dataUser, province: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                  
                    <label>Tanggal</label>
                    <input
                        type="text" 
                        placeholder="masukin mass" 
                        value={dataUser?.tanggal} 
                        onChange={(e) => {
                            setDataUser({...dataUser, tanggal: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                {
                    isEditing === false ? 
                    <div>
                        <button className="create"
                            onClick={() => {
                                postUser(dataUser, setDataUser, setMessage)
                            }}
                        >
                            Create New
                        </button>
                    </div> 
                    : 
                    <div>
                        <button className="create"
                            onClick={() => {
                                editUser(dataUser, setIsEditing, setDataUser, setMessage);
                            }}
                        >
                            Create New
                        </button>
                    </div> 
                }
                <div style={{ marginTop: 30 }}>
                    {message}
                </div>
                <div>
                    <button className="create">
                        Simpan
                    </button>
                </div>
                <div>
                    <button className="create"
                        onClick={() => {
                            editUser(dataUser);
                        }}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};