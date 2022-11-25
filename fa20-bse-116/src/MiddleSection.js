import { useState } from "react";
function MiddleSection() {
    const [cards, set] = useState([
        {
            image: 'm1.jpg',
            title1: 'Abrar Ahmed, Mohammad Ali get maiden call-ups for England Tests;Fawad, Hassan,Yasir droped',
            title2: 'Shaheen Shah Afridi is not fit and available for selection yet',
            image2: 'm2.jpg',
            title3: 'Shaheen feeling better after undergoing appendectomy',
            title4: 'He is also currently undergoing a two week rehab for his knee injury',
        },
        {
            image: 'm3.jpg',
            title1: 'Warner: Im not a criminal. You should get right of appeal',
            title2: 'Australia batter set to apply to have his leadership ban reviewed',
            image2: 'm4.jpg',
            title3: 'Meredith called up as Star is rested for ODI against England',
            title4: 'Agar also set to miss out after flying to Canberra to play a match',
        },
        {
            image: 'm3.jpg',
            title1: 'Warner: Im not a criminal. You should get right of appeal',
            title2: 'Australia batter set to apply to have his leadership ban reviewed',
            image2: 'm4.jpg',
            title3: 'Meredith called up as Star is rested for ODI against England',
            title4: 'Agar also set to miss out after flying to Canberra to play a match',
        },
        {
            image: 'm1.jpg',
            title1: 'Abrar Ahmed, Mohammad Ali get maiden call-ups for England Tests;Fawad, Hassan,Yasir droped',
            title2: 'Shaheen Shah Afridi is not fit and available for selection yet',
            image2: 'm2.jpg',
            title3: 'Shaheen feeling better after undergoing appendectomy',
            title4: 'He is also currently undergoing a two week rehab for his knee injury',
        },
    

    ])
    function handleDelete(title1) {
        const updateCard = cards.filter((card) => card.title1 !==title1);
        set(updateCard);
    }

    return (
        <div >
            {
                cards.map((a) => (
<div>
                    <div class="card text-white bg-dark mb-3" key={a.title1} style={{ width: '250px', height: '345px', display:"inline-flex", flex: "wrap", marginTop: '10px',marginLeft:"60px" }}>
                        <img src={a.image} class="card-img-top" alt="..." style={{ height: '200px' }} />
                        <div >
                            <h5 class="card-title">{a.title1}</h5>
                            <p class="card-text">{a.title2}</p>
                        </div>

                       


                    </div>
<div style={{marginLeft:'270px'}}>
<button style={{width:'70px'}} onClick={() =>handleDelete(a.title1)}>Delete</button>
</div>

</div>



                ))
            }
        </div>
    );
}

export default MiddleSection;