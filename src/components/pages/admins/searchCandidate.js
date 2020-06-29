import React from 'react'
import '../../adminStyles/search.css'

const SearchCandidate = () => {
    return (
        <div className="col">
            <form className="search_form">
                <div className="row">
                <div className="col-sm-12 col-md-6">
                <input type="text" className="form-control" placeholder="JAMB Registration Number" />
                </div>
                <div className="col-sm-12 col-md-4">
                <input type="submit" className="btn btn-primary" value="Search Candidate" />   
                </div> 
                </div>  
            </form>
        </div>
    )
}

export default SearchCandidate
