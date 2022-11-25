import { useState } from "react";

function Footer() {
    
    const [cards, setCards] = useState([
        {
        title: "Key Series",
            link1: "T20 World Cup",
            link2: "Australia v England",
            link3: "New Zealand v India",
            link4: "Sri Lanka v Afghanistan",
            link5:"Australia v West Indies", 
            link6:"IRE-W in Pakistan",
        
            link7:" OEA Trophy",
           
             
            link8:" WBBL 2022",
            link9:" Marsh Cup",
            link10:" Sheffield Shield",
        },
        {
            title: 'Quick Links',
            link1: 'T20 Timeout',
            link2: 'T20 Time out',
            link3: 'Fantasy Pick',
            link4: 'Icc Ranking',

        },
        {
            title: 'ESPNcricinfo Apps',
            link1: 'Android App',
            link2: 'IOS App',
        },
        {
            title: 'Follow ESPNcricinfo',
            link1: 'Instagram',
            link2: 'Twitter',
            link3: 'Facebook',
            link4: 'Youtube',
        },
        {
            title: ' ESPNcricinfo Sites',
            link1: 'The Cricket Monthly',
            link2: 'ESPN',
            
        },


    ])

    return (
        <div>
            {
                cards.map((a) => (

                    <div class="card" style={{ width: '200px', border: 'none', backgroundColor: 'rgb(202, 194, 194)', height: '300px', display: 'inline-flex', flex: 'wrap', marginLeft: '45px' }}>
                        <ul class="list-group list-group-flush">
                            <h3 class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.title}</h3>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link1}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link2}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link3}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link4}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link5}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link6}</li>
                            <li  class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link7}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link8}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link9}</li>
                            <li class="list-group-item" style={{ border: 'none', backgroundColor: 'rgb(202, 194, 194)' }}>{a.link10}</li>
                        </ul>

                    </div>


                ))
            }
        </div>
    );
}

export default Footer;