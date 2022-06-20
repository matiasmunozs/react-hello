//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


function semaforo (props){

return (
            <div className="cajaNegra">
                <div className="luz"> luz roja</div>
                <div className="luz"> luz amarilla</div>
                <div className="luz"> luz verde</div>


            </div>


)


}



//render your react application
ReactDOM.render(<semaforo />, document.querySelector("#app"));
