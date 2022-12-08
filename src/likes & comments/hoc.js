import React from "react";

const Hoc = (Component,data) => {
  return class extends React.Component{
    render(){
        return(
            <div className="man">
            hello <Component/>
            </div>
            )
        }
    }
}
export default Hoc;