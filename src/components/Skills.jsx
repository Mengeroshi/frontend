import React from 'react';
import SkillPercent from './SkillPercent';

import Tile from './Tile';


const Skills = ()=>{
    return(
        <Tile
        title="Skills"
        color="red"
        align="left"
        >
            <ul className="Skills__body">
            
            <SkillPercent
                name="React"
                percentage="50%"
            />
            <SkillPercent
                name="React"
                percentage="50%"
            />
            <SkillPercent
                name="React"
                percentage="50%"
            />
            
            
            </ul>
        </Tile>
    )
}

export default Skills