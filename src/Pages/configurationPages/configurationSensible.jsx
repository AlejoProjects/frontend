const ConfigurationSensible = (props) => {
  const divIden ="updateInfoSensible"+ props.index;
  const fixedInfo ="fixedInfoSensible"+ props.index;
    return (
      <>
      <div className="configComponentSensible">
      <div className="fixedInfoSensible" id={fixedInfo}>
        <p className='textComponentSensible'>{props.nombres[props.index]} :    {props.info[props.index]} </p>
       </div>
        
    </div>
    </>
    )

};
  export default ConfigurationSensible;
  