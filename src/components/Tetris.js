import React from 'react';
import {createStage} from '../gameHelper'
import {StyledTetrisWrapper,StyledTetris} from './styles/StyledTetris';

//components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () =>{

    return(
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                    <Display text="Score"/>
                    <Display text="Rows"/>
                    <Display text="Level"/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;