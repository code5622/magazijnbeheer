import { Route, Redirect, Switch } from 'react-router-dom';

import Finance from '../containers/finance/Finance';
import FinanceOptions from '../containers/finance/Options';
import Options from '../containers/warehouse/Options';
import Warehouse from '../containers/warehouse/Warehouse';

const Routing = () => (
    <Switch>
        {/* ******** finance *******************************/}
        <Route path="/finance/options" component={FinanceOptions} />
        <Route path="/finance" component={Finance} />
        

        {/* ******** warehouse *****************************/}  
        <Route path="/warehouse/options" component={Options} />             
        <Route path="/warehouse" component={Warehouse} />
        <Redirect to="/warehouse" component={Warehouse} />
    </Switch>  
);

export default Routing;

    //    <Route path="/" exact component={DataTable} />       
    //    <Route path="/datagrid" exact component={DataGrid} />        
    //    <Route path="/products2" component={Products2} />         
    //   <Route path="/sales" component={Sales} />    
    //   <Route path="/warehouse" component={Purchase} /> 
    //   <Route path="/suppliers" component={Suppliers} />   
    //   <Route path="/supplier/:id" component={Supplier} />              
    //    <Route path="/products" component={Products} />   

    //   <Route path="/product/:id" component={Product} />               
    //   <Route path="/logistiek" component={Logistiek} />                 
    //   <Redirect to="/" />   

    //    <Route path='/products' component={() => <Products id={1}/>} />            
    //    <Route path='/products' component={Products} />                     
    //    <ul>
    //     <NavLink to="/">Home</NavLink>        
    //     <NavLink to="/products">Products</NavLink>       
    //   </ul>

    //   <div style={{padding: '0 150px', marginTop: '200px'}}> 
   
    //      <Route path='/products' component={() => <Products id={2}/>} />
    //     <Route path='/' exact component={() => <Products id={1}/>} />        
    //     <br></br> 
    //      <TableData />
    //     <MultiFilteringWithOrGrid /> 
    //    </div>  