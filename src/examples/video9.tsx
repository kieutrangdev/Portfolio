interface IProps {
    defaultName: string,
    defaultAge: number | string
}
interface IUser {
    name: string,
    age: number | string,
    city: string
}
import React, { useState } from "react";
const Video9 = (props: IProps) => {
    const {defaultName, defaultAge} = props
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectCity, setSelectCity] = useState<string>("Hà Nội")
  
    const [users, setUsers] = useState<IUser[]>([
       
    ])
    const handleSubmit =(event:React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectCity
        }
        users.push(user)
        setUsers(users)
        // setUsers([...users, user])
        setName("")
        setAge("")
    }
    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const [isShowBtn, setIsShowBtn] = useState(false);
    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label>Name:</label><br />
                    <input 
                    type="text" 
                    value={name} 
                    onChange= {handleOnChangeName}
                    /><br/>
                </div>
                <div>
                    <label >Age:</label><br />
                    <input 
                    type="text" 
                    onChange={(event) => setAge(event.target.value)}
                    value={age} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                        onChange={(event) => setSelectCity(event.target.value)}
                    >
                        {city.map(item => {
                            return (
                                <option key={item}
                                    value={item}
                                >{item}</option>
                            )
                        })}
                    </select>
                </div>  

                <input 
                type="submit" 
                value="Submit"
                onClick={(e) => {handleSubmit(e)}}
                />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(user => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video9;