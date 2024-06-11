import { useState, useEffect } from "react";
import axios from 'axios';

function App(){
    
    const[post,setPost] = useState([]);

    const[username,setUsername] = useState();
    const[start,setStart] = useState();
    const[end,setEnd] = useState();
    const[from,setFrom] = useState();
    const[to,setTo] = useState();
    const[cost,setCost] = useState();
    const[percnt,setPercnt] = useState();
    const[desc,setDesc] = useState();

    useEffect(() => {
        axios.get("https://learn-mern-backend.vercel.app/home")
        .then((content) => setPost(content.data))
        .catch((err) => console.log(err));
    },[post]);

    const submit = () => {
        axios.post("https://learn-mern-backend.vercel.app/home",{username,start,end,from,to,cost,percnt,desc})
        .then(() => console.log("Posted Successfully"))
        .catch((err) => console.log(err));
    }

    return(
        <>
            <center>
                <h1>Travel Experience</h1>
            </center>
            {
                post.map((value) => {
                    return(
                        <>
                            <center>
                                <table>
                                    <tr>
                                        <td>@{value.username}</td>
                                        <td colSpan={3}>{value.createdAt.substring(14,19)}</td>
                                    </tr>
                                    <tr>
                                        <td>From:{value.from}</td>
                                        <td>To:{value.to}</td>
                                    </tr>
                                    <tr>
                                        <td>Cost:{value.cost}</td>
                                        <td>Perons:{value.percnt}</td>
                                    </tr>
                                    <tr>
                                        <td>{value.desc}</td>
                                    </tr>
                                </table>
                                <br></br>
                            </center>
                        </>
                    )
                })
            }
            <center>
                <input placeholder="username" onChange={(e) => setUsername(e.target.value)}></input><br></br>
                <input type="date" placeholder="start" onChange={(e) => setStart(e.target.value)}></input>
                <input type="date" placeholder="end" onChange={(e) => setEnd(e.target.value)}></input><br></br>
                <input placeholder="from" onChange={(e) => setFrom(e.target.value)}></input>
                <input placeholder="to" onChange={(e) => setTo(e.target.value)}></input><br></br>
                <input type="number" placeholder="cost" onChange={(e) => setCost(e.target.value)}></input>
                <input type="number" placeholder="persons" onChange={(e) => setPercnt(e.target.value)}></input><br></br>
                <input placeholder="desc" onChange={(e) => setDesc(e.target.value)}></input>
                <button onClick={submit}>Submit</button>
            </center>
        </>
    )
}

export default App;