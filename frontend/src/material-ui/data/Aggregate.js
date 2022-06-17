import React, { useState } from 'react';

import Modal from '../utils/Modal';

export const useAggregate = ({data, columns, id}) => {

    const [aggregateModal, setAggregateModal] = useState(false);

    return [
        aggregateModal, 
        setAggregateModal
    ];
}

// export default Filter;

const Aggregate = ({aggregateModal, setAggregateModal}) => {
 
    return (
        <Modal
            show={aggregateModal} 
            modalClosed={() => setAggregateModal(false)} 
            top={'3rem'}
            right={'0rem'}
            width={'30.4rem'}          
        >
            <div>
                Aggregate
            </div>
        </Modal>
    );
}

export default Aggregate;