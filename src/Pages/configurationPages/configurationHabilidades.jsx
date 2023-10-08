import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const ConfiguracionHabilidades =  ()=> {
  const MySwal = withReactContent(Swal);
  return(
    <>
  <button onClick={async ()=> {
    const { value: texto } = await MySwal.fire({
      title: 'Ingrese su nuevo',
      input: 'text',
      inputLabel: 'Su nuevo',
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value != '') {
            resolve();
          } else {
            resolve('You need to write something');
          }
    })}
  })
    if(newItem){
   MySwal.fire({html: `You selected:  ${texto}`})
   let valores = {};
   switch(props.ident){
   case 'personas':
    valores = {
     [props.comprobante[2]]:props.comprobante[3],
     [props.nombres[props.index]] : texto
    };
   break;
   case 'empresas':
     valores = {
       [props.comprobante[2]]:props.comprobante[3],
       [props.comprobante[4]]:props.comprobante[5],
       [props.nombres[props.index]] : texto
     };
     break;

 };
   try {
     const response = await axios.put(`http://localhost:3000/api/v1/${props.ident}/${parseInt(props.id)}`, valores);
     console.log(response);// /api/v1/persona o empresa/id
     // Handle success, update UI if necessary
   } 
   catch (error) {
     console.error(error);
     // Handle errors
   }
    }
  }

   }>ohio</button>
   </>
  )
};

export default ConfiguracionHabilidades;