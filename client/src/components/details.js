import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/";

const Details = () => {

    const [data, setData] = useState([]);
    const [buttonClicked, setButtonClicked] = useState([]);

    useEffect(() => {
        axios.get(baseURL + "getData").then(res => {
            setData(res.data);
            console.log(res.data);
        });
    })

    const getDetails = () => {
        setButtonClicked(!buttonClicked)
    }
    return (
        <div className="container-fluid" style={{ marginTop: "30px" }}>
            <div className="row">
                <div className="col-xs-12" style={{ textAlign: " center" }}>
                    <button
                        className="btn btn-primary"
                        onClick={getDetails}
                    >
                        Click
                    </button>
                    <div
                        className="container-fluid"
                        style={{
                            textAlign: "center",
                        }}
                    >
                        {buttonClicked ? data.map(d => {
                            return (
                                <React.Fragment>
                                    <p>
                                        <b>name</b> : {d.name}
                                    </p>
                                    <p>
                                        <b>age</b> : {d.age}
                                    </p>
                                    <hr />
                                </React.Fragment>
                            );
                        })
                            : null}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Details;