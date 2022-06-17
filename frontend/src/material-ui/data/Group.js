import React, { useState } from 'react';

import Modal from '../utils/Modal';

export const useGroup = ({data, columns, id}) => {

    const [groupModal, setGroupModal] = useState(false);

    return [
        groupModal,
        setGroupModal
    ];
}

const Group = ({groupModal, setGroupModal}) => {
 
    return (
        <Modal
            show={groupModal} 
            modalClosed={() => setGroupModal(false)} 
            top={'3rem'}
            right={'0rem'}
            width={'30.4rem'}   
        >
            <div>
                Group
            </div>
        </Modal>        
    );
}

export default Group;