export default function Friend ({friend}){
    console.log(friend)
    const {name, username, email, phone, street, suite, city, zipcode} = friend;
    
    return (
        <div className="card">
            <h4>Name: {name}</h4>
            <h4>username: {username}</h4>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <div className="card1">
                <p>street:{street} </p>
                <p>suite:{suite} </p>
                <p>city:{city} </p>
                <p>zipcode: {zipcode}</p>
            </div>
        </div>
    )
}