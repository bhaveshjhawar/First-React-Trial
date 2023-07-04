import React from 'react';


export default function Alert(props){
  
  const capitalize = (word) =>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
}


const styles={
  transition:'1s ease'
}

return (
    <>
    <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert" style={styles}>
    <div>
      <strong>{capitalize(props.alert.type) } </strong><b>{props.alert.message}</b>
    </div>
  </div>
    </>
)
}
