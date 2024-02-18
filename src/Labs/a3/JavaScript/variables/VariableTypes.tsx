function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    
    return(
        <div>
            <h2>Variable Types</h2>
            numberVariable = {numberVariable}<br/>
            floatingPointNumber = {floatingPointNumber}<br/>
            stringVariable = {stringVariable}<br/>
            booleanVariable = {booleanVariable.toString()}<br/>
            isNumber = {isNumber}<br/>
            isString = {isString}<br/>
            isBoolen = { isBoolean };
        </div>
    )
}

export default VariableTypes;