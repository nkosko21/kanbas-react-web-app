function TernaryOperator() {
    let LoggedIn = true;

    return(
        <div>
            <h2>Logged In</h2>
            { LoggedIn ? <p>Welcome User</p> : <p>Please Log In</p>}
        </div>
    )
}

export default TernaryOperator;