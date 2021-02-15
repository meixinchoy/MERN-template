import React, { Component } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/";

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            buttonClicked: false
        };
        this.getDetails = this.getDetails.bind(this);
    }

    componentDidMount() {
        axios.get(baseURL+ "getData").then(res => {
            this.setState({
                data: res.data
            });
        });
    }

    getDetails() {
            this.setState({
                buttonClicked: !this.state.buttonClicked
            });
    }

    render() {
        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <div className="row">
                    <div className="col-xs-12" style={{ textAlign: " center" }}>
                    <button
                        className="btn btn-primary"
                        style={{ position: "absolute", marginLeft: "48.2%" }}
                        onClick={this.getDetails}
                    >
                        Click
                    </button>
                    <div
                        className="container-fluid"
                        style={{
                            position: "absolute",
                            textAlign: "center",
                            marginTop: "50px"
                        }}
                    >
                        {this.state.buttonClicked? this.state.data.map(data => {
                                return (
                                    <React.Fragment>
                                        <p>
                                            <b>name</b> : {data.name}
                                        </p>
                                        <p>
                                            <b>age</b> : {data.age}
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
}