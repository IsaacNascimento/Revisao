import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ApiRick from '../../services/ApiRickMorty';

const RickDetails = () => {

    const params = useParams();
    const [rick, setRick] = useState({});

    useEffect(() => {
     ApiRick.get('/character/' + params.id).then((result) => {
         console.log(result.data);
         setRick(result.data);
    })
    }, [])

  return (
    <div>
        <h1>
        {rick.name}
        </h1>
    </div>
  );
};

export default RickDetails;