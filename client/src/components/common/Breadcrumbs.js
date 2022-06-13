import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function Breadcrumbs(props) {
    return (
        <div style={{ background: 'transparent' , color:'#999999'}}> 
            { `${props.s1}  >  ${props.s2}  >  ${props.s3} `}
        </div>
    );
}

export default Breadcrumbs;
