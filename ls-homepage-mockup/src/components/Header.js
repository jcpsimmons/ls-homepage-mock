import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div id="Header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"> <img src="https://www.livingspaces.com/globalassets/logo.png" alt="" className="img-responsive" /> </div>
                        <div className="col-md-4">
                            <div className="form-group"><input class="form-control" type="text" placeholder="Search" /></div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
