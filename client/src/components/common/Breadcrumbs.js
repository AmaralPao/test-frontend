function Breadcrumbs(props) {
    return (
        <div style={{ background: 'transparent' , color:'#999999'}}> 
            { `${props.s1}  >  ${props.s2}  >  ${props.s3} `}
        </div>
    );
}

export default Breadcrumbs;
