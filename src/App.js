import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Glasses from "./Conponent/Glasses";

export default class App extends Component {
  state = {
    glassesImg: "./img/glassesImage/v2.png",
  };

  handle = (type) => {
    let urlImg = "";
    switch (type) {
      case "v1":
        urlImg = "./img/glassesImage/v1.png";
        break;
      case "v2":
        urlImg = "./img/glassesImage/v2.png";
        break;
      case "v3":
        urlImg = "./img/glassesImage/v3.png";
        break;
      case "v4":
        urlImg = "./img/glassesImage/v4.png";
        break;
      case "v5":
        urlImg = "./img/glassesImage/v5.png";
        break;
      case "v6":
        urlImg = "./img/glassesImage/v6.png";
        break;
      case "v7":
        urlImg = "./img/glassesImage/v7.png";
        break;
      case "v8":
        urlImg = "./img/glassesImage/v8.png";
        break;
      case "v9":
        urlImg = "./img/glassesImage/v9.png";
        break;
    }
    this.setState({ glassesImg: urlImg }, () => {});
  };
  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row justify-content-center">
            <section className="model d-flex justify-content-center col-5">
              <div
                className="card text-left"
                style={{ width: 300, position: "relative" }}
              >
                <img
                  className="card-img-top"
                  src="./img/glassesImage/model.jpg"
                  alt="hinh model"
                />
                <img
                  src={this.state.glassesImg}
                  alt="kinh"
                  style={{
                    width: 170,
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "16%",
                  }}
                />
                <div className="card-body">
                  <span className="card-title badge-danger h3 px-2 rounded">
                    $50
                  </span>
                  <p className="card-text mt-2">GUCCI G8759H</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v1.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v1");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v2.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v2");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v3.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v3");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v4.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v4");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v5.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v5");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v6.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v6");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v7.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v7");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v8.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v8");
                  }}
                />
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-outline-secondary">
                <img
                  src="./img/glassesImage/v9.png"
                  alt="hinh"
                  style={{ width: 100, borderRadius: 20 }}
                  onClick={() => {
                    this.handle("v9");
                  }}
                />
              </button>
            </div>
          </section>
        </div>
      </section>
    );
  }
}
