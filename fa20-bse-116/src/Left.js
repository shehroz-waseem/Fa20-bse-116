import { useState } from "react";
function Left() {
    const [cards, setCards] = useState([
        {
            id:"1",
            title: 'Quick Links',
            link1: 'T20 Timeout',
            link2: 'T20 Time out',
            link3: 'Fantasy Pick',
            link4: 'Icc Ranking',

        },
        
        {
            id:"2",
            title: 'ESPNcricinfo Apps',
            link1: 'Android App',
           
            link2: 'IOS App',
           
        },
        {
            id:"3",
            title: 'Follow ESPNcricinfo',
            link1: 'Instagram',
            link2: 'Twitter',
            link3: 'Facebook',
            link4: 'Youtube',
        },
        {
            id:"4",
            title: ' ESPNcricinfo Sites',
            link1: 'The Cricket Monthly',
            link2: 'ESPN',
            
        },


    ])
    function handleDelete(id) {
        const updateCard = cards.filter((card) => card.id !==id);
        setCards(updateCard);
    }

    return (
        <div>
            {
                cards.map((a) => (

                    <div class="card" key={a.id} style={{ width: '260px', display: 'flex', flex: 'wrap', marginTop: '10px' }}>
                        <ul class="list-group list-group-flush">
                            <h4 class="list-group-item" >{a.title}</h4>
                            <li class="list-group-item" style={{ border: 'none'}}>{a.link1}</li>
                            <li class="list-group-item" style={{ border: 'none'}}>{a.link2}</li>
                            <li class="list-group-item" style={{ border: 'none'}}>{a.link3}</li>
                            <li class="list-group-item" style={{ border: 'none'}}>{a.link4}</li>
                            
                        </ul>
                        <button style={{width:'80px', marginLeft:'70px'}} onClick={() =>handleDelete(a.id)}>Delete</button>
                        
                    </div>


                ))
            }
        </div>
    );
}

export default Left;