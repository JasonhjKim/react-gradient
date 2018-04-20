import React, { Component } from 'react';
import styled from 'styled-components';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            angle: 0,
            primary: "rgb(0,0,0)",
            secondary: "rgb(255,255,255)",

        }
    }
    randomAngleGeneration() {
        const angle = Math.floor(Math.random() * 359);
        return `${angle}`
    }

    randomColorGeneration() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`
    }

    componentWillMount() {
        this.setState({
            angle: this.randomAngleGeneration(),
            primary: this.randomColorGeneration(),
            secondary: this.randomColorGeneration()
        })
    }

    handleNewColor() {
        this.setState({
            primary: this.randomColorGeneration(),
            secondary: this.randomColorGeneration()
        })
    }

    handleNewAngle() {
        this.setState({
            angle: this.randomAngleGeneration()
        })
    }

    handleNewTheme() {
        this.setState({
            primary: this.randomColorGeneration(),
            secondary: this.randomColorGeneration(),
            angle: this.randomAngleGeneration()
        })
    }

    render() {
        const Container = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 1;
        `
        const ShowCase = styled.div `
            width: 300px;
            margin-top: 10%;
            border-radius: 15px;
            box-shadow: 5px 10px 18px #a9a9a9;
        `
        const Gradient = styled.div`
            background: linear-gradient(${this.state.angle}deg, ${this.state.primary}, ${this.state.secondary});
            height: 350px;
            width: 100%;
            border-radius: 15px 15px 0 0;
        `
        const Button = styled.button `
            padding: 5px 15px;
            margin: 2px;
            border-radius: 25px;
        `
        const InfoBox = styled.div `
            height: 100%;
            padding: 10px;

        `
        return(
            <Container>
                <ShowCase>
                    <Gradient/>
                    <InfoBox>
                        <h5 style={{ color: this.state.primary }}><strong>{this.state.primary}</strong></h5>   
                        <h5 style={{ color: this.state.secondary }}><strong>{this.state.secondary}</strong></h5>
                        <h6 className="text-muted">Angle: {this.state.angle}&deg;</h6>
                    </InfoBox>
                </ShowCase>
                <div className="btn btn-group" style={{marginTop:"10px"}}>
                    <Button className="btn btn-secondary" onClick={this.handleNewColor.bind(this)}>Color</Button>
                    <Button className="btn btn-secondary" onClick={this.handleNewAngle.bind(this)}>Gradient</Button>
                    <Button className="btn btn-secondary" onClick={this.handleNewTheme.bind(this)}>New Theme</Button>
                </div>
            </Container>
        )
    }
}

