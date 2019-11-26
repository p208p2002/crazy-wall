import React, { Component } from 'react';
import './Input.css'
var $ = require("jquery");
class InputView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        function hover() {
            $(".button").on("mouseenter", function () {
                return $(this).addClass("hover");
            });
        }

        function hoverOff() {
            $(".button").on("mouseleave", function () {
                return $(this).removeClass("hover");
            });
        }

        function active() {
            $(".button").on("click", function () {
                setTimeout(() => {
                    $(this).removeClass("active");
                }, 1500)
                return $(this).addClass("active");
            });
        }

        hover();
        hoverOff();
        active();

    }

    render() {
        return (
            <div id="InputView">
                <div className="container">
                    <h1>Querator AI</h1>
                    <h3>隨意輸入關鍵字吧!</h3>
                    {/* <input type="text" /> */}
                    <div className="wrapper">
                        <input className="search" type="text" id="search" />
                    </div>

                    <br />
                    {/*  */}
                    <div className="button">
                        <div className="submit"><span>Submit</span></div>
                        <div className="arrow">
                            <div className="top line"></div>
                            <div className="bottom line"></div>
                        </div>
                    </div>

                    <h5>present by UDIC</h5>

                </div>



            </div>
        );
    }
}

export default InputView;