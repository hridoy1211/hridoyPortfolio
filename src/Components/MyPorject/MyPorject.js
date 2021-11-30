import React, { useEffect, useState } from 'react';
import Projects from '../Projects/Projects';

const MyPorject = () => {
    const [myProject, setMyProject] = useState([]);
    useEffect(() =>{
        fetch('/myProject.json')
        .then(res => res.json())
        .then(data => setMyProject(data))
    },[])
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>See my Projects {myProject.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    myProject.map(project => <Projects key={project.id} project={project}></Projects>)
                }
            </div>
        </div>
    );
};

export default MyPorject;