import TeamA from "./TeamA";
 import TeamB from "./TeamB";
import { useState } from "react";
function Parent() {
    const[ATeam, SetA]= useState([
        {
            title:'stumps',
            country1:'England            501/7d',
            country2:'England Lions       (77ov) 412/9',
           
            Status:'Day2-England Lions Trails by 89 runs',
image:'pf.jpg'
        },

    ])
    const[BTeam, SetB]= useState([
        {
            title:'Inning Breaks',
            country1:'India     (50ov)306/7',
            country2:'New Zealand',
            Status:'New Zealand chose to field',
            image:'nf.jpg'

        },

    ])
    
    return (
        <div>
            <div>
            <TeamA c={ATeam}/>
            
            <TeamB propsB={BTeam}/>
            </div>
            
        </div>
    );
}

export default Parent;