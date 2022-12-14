import React from 'react';
import {ReactComponent as ArmyIcon} from '../../assets/Logo_of_the_United_States_Army.svg';

const Header = () => {
    return (
        <div className='Header'>
            <ArmyIcon className='ArmyIcon'/>
            <div className='Header-guts'>
                <h1>APFT Tracker</h1>
                <p>
                    Rank: fName lName
                </p>
            </div>
        </div>
    );
}

export default Header;