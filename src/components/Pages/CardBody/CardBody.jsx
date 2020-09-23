import React from "react";
import "./CardBody.css";

function CardBody() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-3 "></div>

          <div className="col-md-6 cardstyle2">
            <div className="card card3">
              <h5 style={{ color: "black" }}>
                <input
                  className="form-control form02"
                  type="text"
                  placeholder="Titel"
                />

                <input
                  className="form-control form01"
                  type="text"
                  placeholder="Take A note..."
                />
              </h5>
              

                

              <div>
                {/* card bottem icon row */}
                <div className="row">
                  <div className="col-md-6 bodercss1">
                      <button type="button"  className="btn btn-light btn01 m-2" data-toggle="tooltip" data-placement="right" title="Remind Me"><i class="far fa-bell  " style={{ color: "black" }} ></i></button>
                      <button type="button" className="btn btn-light btn01 m-2"><i class="far fa-image  " style={{ color: "black" }}></i></button>
                      <button type="button" className="btn btn-light btn01 m-2"><i class="fas fa-inbox " style={{ color: "black" }}></i></button>
                    
                      <button type="button" className="btn btn-light btn01 m-2 mr-3"><i class="fas fa-ellipsis-v" style={{ color: "black" }}></i></button>

                      
                  </div>
                  <div className="col-md-6">

                  <button type="button" className="btn btn-light btn01 m-2"><i class="fas fa-undo " style={{ color: "black" }}></i></button>
                  <button type="button" className="btn btn-light btn01 m-2"><i class="fas fa-redo " style={{ color: "black" }}></i></button>

                  <button type="button" className="btn btn-light btn4">Save</button>




                  </div>



                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
