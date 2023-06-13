import { Link } from 'react-router-dom'
const Header=()=>{
    return(
        <div>
        <Link  style={{textDecoration:'none'}} to='/'>
        <span className='gradient' style={{color:'yellow',fontSize:50,marginLeft:20,textShadow: '2px 2px 4px #000000'}}><b>eLaundrybasket</b></span>
        </Link>
    </div>
    );
}
export default Header;

  
  