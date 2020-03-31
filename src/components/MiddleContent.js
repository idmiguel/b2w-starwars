import React from 'react';
import styled from 'styled-components';
import css from '../assets/js/variables';

const SectionTop = styled.section`
 position: relative;
 top: 50%;
 transform: translate(0, 10%);
 width: 90%;
 @media (min-width: ${css.grid.tabletFull}px) {
   width: 500px;
 }
`

const List = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
  ul {
    background: ${css.color.black_transparent};
    border: 2px solid ${css.color.yellow};
    li {
      padding 20px 10px;
      border-bottom: 2px solid ${css.color.yellow};
      text-align: left;
    }
  }

`

const Title = styled.p`
  padding 0;
  font-size: 40px;
  text-align: center;
  color: ${css.color.white};
`


const Button = styled.button`
  display: block;
  margin: 30px auto;
  border: 1px solid ${css.color.yellow};
  border-radius: 20px;
  background: ${css.color.yellow};
  width: 100%;
  height: 40px;
  color: ${css.color.black};
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  @media (min-width: ${css.grid.tabletFull}px) {
    width: 200px;
  }
`

export default class PlanetsResult extends React.Component {
  state = { planets: [], NumberHolder: 0}

  componentDidMount() {
    fetch('https://swapi.co/api/planets')
    .then(res => res.json())
    .then(res => {
        this.setState({
            planets: res.results
        })
    })
  }

  GenerateRandomNumber=()=> {
    let RandomNumber = Math.floor(Math.random() * 9) + 0 ;
    if (RandomNumber === this.state.NumberHolder) {
       RandomNumber = Math.floor(Math.random() * 9) + 0 ;
    }
    this.setState({
      NumberHolder : RandomNumber
    })
  }

  render () {
    let content = <h2>Loading...</h2>
    let planet = []

    if (this.state.planets.length !== 0) {
      planet = this.state.planets[this.state.NumberHolder]
      content = (
        <List>
        <ul>
            <li><Title> {planet.name} </Title></li>
            <li><b>Population:</b> {planet.population}</li>
            <li><b>Terrain:</b> {planet.terrain}</li>
            <li><b>Feature(s) in {planet.films.length} Films</b> </li>
        </ul>
        <Button onClick={this.GenerateRandomNumber}><b>NEXT</b></Button>
        </List>
      )
    }

    return (
    <SectionTop>
      {content}
    </SectionTop>
    )
  }
}
