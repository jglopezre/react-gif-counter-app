import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Use effect ensures that functions just be executed one time meanwhile condition doesn't change

    useEffect(() => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false 
                });
            })
    }, [ category ]);  


    return state; 
}
