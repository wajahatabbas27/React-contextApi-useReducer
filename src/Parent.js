const { default: Child } = require("./Child");
const { default: Child2 } = require("./Child2");

function Parent() {
    return (
      <div >
          This is Parent component 
          <br/>
       <Child></Child>
       <br/>
       <Child2></Child2>
      </div>
    );
  }
  
  export default Parent;
  