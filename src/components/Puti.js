import React from 'react';
import { PutiConsumer } from './Context';

const Puti = (props) => {
    return (
        <div>
            <h1>
            <PutiConsumer>
                {
                    msg=>{
                        return msg
                    }
                }
            </PutiConsumer>
            </h1>

        </div>
    );
};

export default Puti;