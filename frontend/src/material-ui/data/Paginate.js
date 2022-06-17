import { useEffect, useState } from 'react';

import Modal from '../utils/Modal';

export const usePaginate = (pageNum, pageIten) => {

    const [paginateData, setPaginateData] = useState();   
    const [pageNumber, setPageNumber] = useState(pageNum);
    const [pageItems, setPageItems] = useState(pageIten);
    const [numberOfPages, setNumberOfPages] = useState();

    useEffect(() => {
        if(paginateData) {
            setNumberOfPages(paginateData.lastPage);
        }
    }, [paginateData])

    const firstPage = () => {
        const pageNumber = paginateData.firstPage; 
        setPageNumber(pageNumber);                 
    }  

    const lastPage = () => {
        const pageNumber = paginateData.lastPage; 
        setPageNumber(pageNumber);           
    }

    const previousPage = () => {
        const pageNumber = paginateData.previousPage; 
        setPageNumber(pageNumber);                 
    }  
    
    const nextPage = () => {    
        const pageNumber = paginateData.nextPage; 
        setPageNumber(pageNumber);             
    }  
    
    const pageNumberHandler = (e) => {
        const pageNumber = e.target.value; 
        setPageNumber(pageNumber);      
    }       
    
    const pageItemsHandler = (e) => {
        const pageItems = e.target.value; 
        setPageItems(pageItems);     
    } 
    
    const metadata = {
        pageNumber,
        pageItems,
        numberOfPages,
        setPaginateData,
        setPageItems,
        setPageNumber,
        firstPage,
        lastPage,
        previousPage,
        nextPage,
        pageNumberHandler,
        pageItemsHandler,
        paginateData  
    }

    return {metadata};
}

const Paginate = ({metadata, positionModal}) => {
    const {paginateData, pageNumber, firstPage, previousPage, pageItems, pageNumberHandler, pageItemsHandler, nextPage, lastPage, numberOfPages, totalCount} = metadata;

    const [currentPreviousPage, setPreviousPage] = useState();
    const [initializePageNumber, setInitializePageNumber] = useState();
    const [initializePageItems, setInitializePageItems] = useState(false);
    
    const [showModal, setShowModal] = useState();

    useEffect(() => {
        if(pageNumber)
            setInitializePageNumber(pageNumber);

        if(pageItems)
            setInitializePageItems(pageItems);        
    }, [pageNumber, pageItems])

    const closeModalHandler = () => {
        console.log('closeModalHandler calling');
        setShowModal(false);
    }

    const onPageNumberHandler = (e) => {
        setInitializePageNumber(e.target.value)
        pageNumberHandler(e);
        // setShowModal(false);
    }

    const onPageItemHandler = (e) => {
        setInitializePageItems(e.target.value)
        pageItemsHandler(e);
        // setShowModal(false);
    }    

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5rem', minWidth: '28rem'}}>
            {/* <div style={{marginRight: 'auto'}}>
                <span style={{margin: '10px'}}>PageNumber</span>               
                  
                <span style={{margin: '10px'}}>{pageNumber}</span>  
                <span style={{margin: '10px'}}>PageItems</span>  
            </div>   */}
    
                {pageNumber !== 1 
                ? <button className="btn-paginate" style={{backgroundColor: '#E6007E', margin: '1rem 1rem 1rem 0rem'}} onClick={firstPage}><span style={{color: '#fff', fontWeight: 'bolder'}}>| &#60;</span></button>
                : <button className="btn-paginate" style={{margin: '1rem 1rem 1rem 0rem', opacity: '0.6', backgroundColor: '#E6007E'}} onClick={firstPage}><span style={{color: '#fff', fontWeight: 'bolder'}}>| &#60;</span></button>}
                
                {pageNumber !== 1
                ? <button className="btn-paginate" style={{backgroundColor: '#E6007E', margin: '10px'}} onClick={previousPage}><span style={{color: '#fff', fontWeight: 'bolder'}}>&#60;</span></button>
                : <button disabled className="btn-paginate" style={{opacity: '0.6', backgroundColor: '#E6007E', margin: '10px'}} onClick={previousPage}><span style={{color: '#fff', fontWeight: 'bolder'}}>&#60;</span></button>}

                {/* <input  style={{margin: '10px'}} type="number" min="1" onBlur={pageItemsHandler} /> 
                                            */}
                {/* <select style={{appearance: 'none', opacity: '0.6', backgroundColor: '#E6007E', border: 'none', height: '30px', fontWeight: 'bolder'}} id="logical_operator" name="logical_operator" onChange={() => console.log()}>
                    <optgroup label="Options 1">
                        <option>Option 1.1</option>
                        <option>Option 1.2</option>
                    </optgroup>                    
                    <option key="2" value="pageItems">PageItems</option>
                </select>                                             */}
                {/* <input style={{margin: '10px'}} type="number" size="4" min="1" onBlur={pageNumberHandler} /> */}
                
                    <div className="dropup"> 
                            <button className="Button" onClick={() => setShowModal(showModal => !showModal)}><i className="fa fa-ellipsis-h" style={{fontSize: '12px', color: '#fff'}}></i></button>
                            <Modal 
                                show={showModal} 
                                modalClosed={closeModalHandler}
                                width={positionModal.width}
                                height={positionModal.height}
                                top={positionModal.top}                           
                                bottom={positionModal.bottom || null}
                                right={positionModal.right} 
                                left={positionModal.left || null}                    
                            > 
                                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: '1.6rem'}}>
                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '70%', marginLeft: '.5rem'}}>
                                        <div style={{display: 'inline-block', marginBottom: '1rem'}}>Page</div>
                                        <div style={{display: 'inline-block'}}>Rows</div>
                                    </div>
                                        
                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '30%'}}>
                                        <input style={{marginBottom: '1rem'}} className="InputPage" size="2" value={initializePageNumber || ''} onChange={e => onPageNumberHandler(e)} type="text" /> 
                                        <input className="InputPage" size="2" value={initializePageItems || ''} onChange={e => onPageItemHandler(e)} type="text" />     
                                    </div>
                                </div>               
                            </Modal>                 
                            {/* <div className="dropup-content">
                            <a href="#"><label for="page" style={{marginRight: '3px'}}>Page</label><input type="text" /></a>
                            <a href="#"><label for="page" style={{marginRight: '3px'}}>Records</label><input type="text" /></a>
                            </div> */}
                        </div>


                {pageNumber !== numberOfPages                                            
                ? <button className="btn-paginate" style={{backgroundColor: '#E6007E', margin: '10px'}} onClick={nextPage}><span style={{color: '#fff', fontWeight: 'bolder'}}>&#62;</span></button>
                : <button disabled className="btn-paginate" style={{opacity: '0.6', backgroundColor: '#E6007E', margin: '10px'}} onClick={nextPage}><span style={{color: '#fff', fontWeight: 'bolder'}}>&#62;</span></button>}
                {/* <button className="btn" style={{margin: '10px'}} onClick={lastPage}>| &#62;</button>   */}



                {pageNumber !== numberOfPages
                ? <button className="btn-paginate" style={{backgroundColor: '#E6007E', margin: '1rem 0 1rem 1rem'}} onClick={lastPage}><span className="btn-span" style={{color: '#fff', fontWeight: 'bolder'}}>| &#62;</span></button>
                : <button disabled className="btn-paginate" style={{opacity: '0.6', margin: '1rem 0 1rem 1rem', backgroundColor: '#E6007E'}} onClick={lastPage}><span style={{color: '#fff', fontWeight: 'bolder'}}>| &#62;</span></button>}                              
                <div style={{display: 'inline-block', color: 'grey', paddingLeft: '2rem', fontSize: '1.6rem'}}>{paginateData && paginateData.currentPage} - {paginateData && paginateData.lastPage} ({pageItems && pageItems} rows - {paginateData && paginateData.totalCount} records)</div>
        </div>
    );
}

export default Paginate;