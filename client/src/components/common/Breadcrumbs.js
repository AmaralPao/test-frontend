import "./Breadcrumb.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Breadcrumbs(props) {
    return (
        <div style={{ background: 'transparent' , color:'#999999'}}> 
           {props.s1} <ArrowForwardIosIcon sx={{ fontSize: 12 }}/>  {props.s2} <ArrowForwardIosIcon sx={{ fontSize: 12 }}/> {props.s3}      
        </div>
    );
}

export default Breadcrumbs;
