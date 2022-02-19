import React from 'react'

function Quiz() {
  return (
    <div>
       <div className="card mb-3 my-3" style={{"max-width": "862px", "border-radius": "20px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://leverageedu.com/blog/hi/wp-content/uploads/sites/2/2020/04/Science-Quiz.png"
                            className="img-fluid " alt="..." style={{borderRadius: '20px', }}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title " style={{color:'#00316d'}}>Mock Test</h5>
                            <p className="card-text"></p>
                            <a href="/testmock">
                                <button type="button" className="btn btn-primary">Attempt</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Quiz
