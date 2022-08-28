import { useState } from 'react'

export const useCounter = ( defaultValue = 100 ) => {

    const [state, setState] = useState( defaultValue );

    const increment = () => {
        setState( state + 1 );
    }

    const decrement = () => {
        setState( state - 1 );
    }

    const reset = () => {
        setState( defaultValue );
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}
