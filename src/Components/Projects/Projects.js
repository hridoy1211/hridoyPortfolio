import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => {
    const {name, img, id} = props.project;
    return (
        <div>
            <div className="col">
                <div className="card card-design h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        

                        <div className='button-style'>
                            <Link to={`/details/${id}`} style={{textDecoration:'none'}}>
                                <div className="d-grid gap-2 ">
                                    <button className="btn btn-danger" type="button">Visit</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;