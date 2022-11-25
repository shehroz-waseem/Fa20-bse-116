function TeamB({propsB}) {
    return ( 
        <div>
      
            {
              propsB.map((data) =>(
                <div style={{marginTop:'30px'}}>
                   <div class="card-body">
                   <div class="card">
                   <h5 class="card-title">{data.title}</h5>
                   <h5 class="card-title">{data.country1}</h5>
                    <h5 class="card-title">  {data.country2}</h5>
                    <p class="card-text">{data.Status}</p>
            
                   
                    </div>
                </div>
                </div>
              ))
            }
          </div>
     );
}

export default TeamB;