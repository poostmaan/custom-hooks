import { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    
    const [ state, setState ] = useState({ data: null, loading: true, error: null});

    useEffect(() => {
      return () => {
        isMounted.current = false
      }
    }, [])

    useEffect(() => {

      setState({ data: null,loading: true,error: null });

    
      fetch( url )
          .then( data => data.json())
          .then( data =>
            
            setTimeout( () => {

              if( isMounted.current ) {

                setState({
                    data,
                    loading: false,
                    error: null
                })

              } else {
                console.info('component was unmounted')
              }

            }, 4000)
  
          )
          .catch(

            setState({
              data: null,
              loading: false,
              error: `Couldn't fetch the API. Try again`
            })

          )

    }, [ url ])
    
    return state;

}
