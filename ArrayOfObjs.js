import React,{Component} from 'react'
class ArrayOfObjs extends Component{
  constructor(props){
    super(props);
    this.state={
      countriesinfo:[
         {name:'India',capital:'newDelhi'},
        {name:'china',capital:'Beijing'},
        {name:'USA',capital:'Washingtondc'},
        {name:'japan',capital:'tokyo'},
      ]
    }
  }
  render(){
    const {countriesinfo}=this.state;
    return (
          <div>
            <table border='1'>
              <tr>
                <th>country Name</th>
                <th>country capital</th>
              </tr>
              {countriesinfo.length>0 && countriesinfo.map((country)=>{
              
                return <tr key={country.name}>
                       <td>{country.name}</td>
                       <td>{country.capital}</td>
                </tr>
              })}
            </table>
           </div> )
         
      }
        
              
}
export default ArrayOfObjs;