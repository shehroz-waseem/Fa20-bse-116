function TeamA({c}) {
    return ( 
        <div >
      
            {
              c.map((cdata) =>(
                <div style={{marginTop:'130px'}}>
                   <div class="card-body">
                   <div class="card">
                   <h5 class="card-text">{cdata.title}</h5>
                   <h5 class="card-text">{cdata.country1}</h5>
                    <h5 class="card-title">{cdata.country2}</h5>
                    <p class="card-text">{cdata.Status}</p>
                    </div>
                </div>
                </div>
              ))
            }
          </div>
     );
}

export default TeamA;