import React from 'react';
import styled from 'styled-components';

import './assets/scss/reset.scss';
import './assets/scss/main.scss';
import starBg from './assets/imgs/star.png';
import starwarsLogo from './assets/imgs/star-wars.png';
import MiddleContent from './components/MiddleContent';
import soundfile from './assets/theme.mp3';
import Sound from 'react-sound'

const MainGeneral = styled.main`
  text-align: center;
  background-image: url(${starBg});
  background-size: contain;
  background-repeat: repeat;
`

export default class MainMenu extends React.Component {

  render () {

    return (
    <MainGeneral>
      <Sound
       url={soundfile}
       playStatus={Sound.status.PLAYING}
       onLoading={this.handleSongLoading}
       onPlaying={this.handleSongPlaying}
       onFinishedPlaying={this.handleSongFinishedPlaying}
       /> 
      <header className="App-header">
        <img src={starwarsLogo} className="App-logo" alt="logo" />
        <MiddleContent />
      </header>
    </MainGeneral>
    )
  }
}
