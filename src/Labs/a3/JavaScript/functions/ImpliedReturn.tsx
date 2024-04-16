function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);

    return(
        <div>
            <h3>Implied return</h3>
            fourTimesFive = {fourTimesFive}<br />
        </div>
    );
}

export default ImpliedReturn;
