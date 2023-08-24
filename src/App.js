import './App.css';
import React, {Component} from 'react';
import Center from './center';
import LanguageSelector from './i18n';
let i=3;
class App extends Component{
  state = {
    items :[
      {id:1,name:"hazem",email:'wilpm@outlook.com',workdays:'S-M-T-W-T',comment:'I will exchange my schedule'},
      {id:2,name:"omar",email:'wilsonpm@gmail.com',workdays:'T-W-T-F-S',comment:'Alright I have completed my task'},
      {id:3,name:"Alaa",email:'peoplesner@atthaz.net',workdays:'M-T-W-T-F',comment:'Iam okay to change with hazem'}
    ]
  }
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value

   })
  }
  handleSubmit=(e)=>
  {
    e.preventDefault();
  this.Addd(this.state);
  }
  
  Addd = (item)=>{
       i++;
      let items = this.state.items;
      items.push(item);
      item.id=i;

      this.setState({
      items
      })
    }



 render(){
  return (
    <div className="App">

<img  className='image' src='https://dstal.com.au/wp-content/uploads/2021/09/logoipsum-768x360.png' alt=''/>

<div className='btns'> 
<div className='first'> 
   <img className='btn-1' src='https://th.bing.com/th/id/OIP.gh6jYPNPTNeY4Dv7dCXg9QHaF7?pid=ImgDet&rs=1'  alt=''/>
  <h4 className='h'>MainMenu</h4>
  <h4 className='may'>10-may  10-jun</h4>
  <img className='ion' src='https://images.surferseo.art/feb80369-3f5b-4f20-8afd-118d0fd45aea.png' alt=''/>
  <h4 className='o'>Other Readings :</h4>
  <img src='https://images.template.net/116106/free-pretty-august-2023-calendar-euuwu.jpg' alt='' className='ieng'/>
  </div>

<div className='menu-1'>
<img className='btn-2' alt='' src='https://th.bing.com/th/id/OIP.gh6jYPNPTNeY4Dv7dCXg9QHaF7?pid=ImgDet&rs=1'/>
<h4 className='s' >Menu 1</h4>
<img className='ig' src='https://th.bing.com/th?id=OIP.3B7Qe_AGdPt7rxOYfyeopQHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt=''/>
<h4 className='R'>Read 1 :233</h4>
<h4 className='z'>22</h4>
</div>

<div className='menu-2'>
<img className='btn-3' alt='' src='https://th.bing.com/th/id/OIP.gh6jYPNPTNeY4Dv7dCXg9QHaF7?pid=ImgDet&rs=1' />
<h4 className='menu2'>Menu 2</h4>
<h3 className='in'>First Employer</h3>
<h4 className='r'>Read 2 :18</h4>
</div>
<div className='menu-3'> 
  <img className='btn-4' alt=''  src='https://th.bing.com/th/id/OIP.gh6jYPNPTNeY4Dv7dCXg9QHaF7?pid=ImgDet&rs=1'/>
  <h4 className='menu3'> Menu 3</h4>
<form onSubmit={this.handleSubmit}>
<input  className='i'  placeholder='enter name' name='name' id='name' type='text' onChange={this.handlechange}/>
<input type="text" placeholder="enter email" onChange={this.handlechange} id="email" />  
<input type="text" placeholder="enter workdays" onChange={this.handlechange} id="workdays" />  
<input className='coms' placeholder='Add Comment' name='comment' id='comment' type='text' onChange={this.handlechange}></input>

<button className='byn' type='submit' >Add New</button>

</form>
</div>

<div className='menu-4'> 
  <img className='btn-5' alt=''  src='https://th.bing.com/th/id/R.574df53d599c5941d3db48280dff2981?rik=Xsxmqy0IrBOBeQ&pid=ImgRaw&r=0'/>
  <h4 className='help'>Help</h4>
  
</div>
<div className='menu-5'> 
  <img className='btn-6' alt=''  src='https://th.bing.com/th/id/R.49febd2b1b7dd9f2bd7c977fdb254feb?rik=%2fGKDRLN2fDspWw&pid=ImgRaw&r=0'/>
  <h4 className='set'>Settings</h4>
  <h4 className='m'>Id</h4>
  <h4 className='n'>Name</h4>
  <h4 className='l'>Email</h4>
  <h4 className='k'>Workdays</h4>
  <h4 className='C'>Comments</h4>

</div>
<div>
<Center items={this.state.items}/>

</div>
<div>
  <LanguageSelector />
</div>
</div>
</div>
  );
}
}

export default App;
