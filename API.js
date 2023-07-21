import React from "react";
// import FetchAPI from "./APIHandling/FetchAPI";
// import AxiosAPI from "./APIHandling/AxiosAPI";
// import AxiosAPI2 from "./APIHandling/AxiosAPI2";
// import AxiosAPIPOST from "./APIHandling/AxiosAPIPOST";
// import AxiosAPIPOST2 from "./APIHandling/AxiosAPIPOST2";
import GetById from "./APIHandling/GetById";

function API() {
    return(
      <div>
        {/* <FetchAPI /> */}
        {/* <AxiosAPI /> */}
        {/* <AxiosAPI2 /> */}
        {/* <AxiosAPIPOST /> */}
        {/* <AxiosAPIPOST2 /> */}
        <GetById />
      </div>
    ); 
}

export default API;