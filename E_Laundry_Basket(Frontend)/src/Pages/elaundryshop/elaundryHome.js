
import RestoNav from '../../components/LaundryNav';
import resto from './../../images/shopbackground.jpg'
const ElaundryHome=()=>{
    return(
        <div className="container-fluid">
        <RestoNav/>
        <img
        style={{
            height:'100%',
            width: '100%',
            display: 'block',
            borderRadius: 10,
          }}
            src={resto}
        />
        </div>
    )
}

export default ElaundryHome;