import React from 'react';
import { connect } from 'react-redux';
import Targets from '../components/Targets';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';

// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  multiplicator: state.game.multiplicator,
  isStarted: state.game.isStarted
});

const GameLayout = ({ isStarted, lives, score, multiplicator, dispatch }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    {isStarted ? (
      <React.Fragment>
        <Info lives={lives} score={score} multiplicator={multiplicator} />
        <Targets />
      </React.Fragment>
    ) : (
      <ButtonStart onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} />
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
