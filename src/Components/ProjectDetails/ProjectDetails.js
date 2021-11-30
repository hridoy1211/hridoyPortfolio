import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('/myProject.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[]);

    const eachDetails = details.find(td => td.id == projectId)


    return (
        <div className='container'>
            <img src={eachDetails?.img} className=" img-fluid" alt="..." />
            <div style={{textAlign: 'left'}} className='my-3'>
                <div>
                    <h1>{eachDetails?.name}</h1>
                    <p>{eachDetails?.desc}</p>
                    <p>Relevant Tools: {eachDetails?.tools}</p>
                    <a href={eachDetails?.githubClient}><button className='btn btn-danger'>Github Client</button></a> &nbsp;
                    <a href={eachDetails?.githubServer}><button className='btn btn-danger'>Github Server</button></a> &nbsp;
                    <a href={eachDetails?.live}><button className='btn btn-danger'>Live Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;