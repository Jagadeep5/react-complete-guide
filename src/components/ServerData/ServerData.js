import React, { useEffect, useState } from 'react';
import { StyledButton2, StyledButton } from '../ComponentStyles/StyledComponents';
import axios from 'axios';
import CustomAxios from '../../axios';


const ServerData = (props) => {
    const ilLineStyles = {
        height: "30px",
        fontSize: "15px"
    }
    const [s, u] = useState({
        userCard: {},
        selectId: null
    })

    useEffect(() => {
        if (s.selectId != null) {
            axios.get("getuserdetails/" + s.selectId)
                .then((a) => {
                    console.log("User selected");
                    u({
                        userCard: a.data[0]
                    })
                });

        }
    }, [s.selectId])

    const getUser = (id) => {
        u({
            ...s,
            selectId: id
        })
    }
    const addData = () => {
        const data = {
            "fname": document.getElementById("fname").value,
            "lname": document.getElementById("lname").value,
            "email": document.getElementById("email").value
        }
        CustomAxios.post("values/AddUserDetails",data)
        .then(() => {
            props.userDetailsChanged();
        })
    }

    return (
        <div>
            <div>
                <table border="1">
                    <thead>
                        <tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input id="fname" ></input></td>
                            <td><input id="lname" ></input></td>
                            <td><input id="email" ></input></td>
                            <td><StyledButton style={ilLineStyles} onClick={() => addData()}> Add </StyledButton></td>
                        </tr>
                        
                        { props.userDetails.length > 0? props.userDetails.map(x => {
                            return <tr key={x.Userid}>
                                <td>{x.fname}</td>
                                <td>{x.lname}</td>
                                <td>{x.email}</td>
                                <td><StyledButton2 style={ilLineStyles} onClick={() => getUser(x.Userid)}>Details</StyledButton2></td>
                            </tr>
                        }):(<tr><td colSpan="4">Loading...</td></tr>)}
                    </tbody>
                </table>

            </div>
            <div>
                <h3>{s.userCard.Userid}</h3>
                <h4>Name: {s.userCard.fname + " " + s.userCard.lname}</h4>
                <h4>Email: {s.userCard.email}</h4>
            </div>
        </div>
    )
}


export default ServerData
