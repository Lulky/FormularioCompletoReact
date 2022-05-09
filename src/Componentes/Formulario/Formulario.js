import React, {useState} from "react";


const Formulario = () => {

    const [nombre, setNombre]= useState();
    const [apellido, setApellido]= useState();
    const [email, setEmail]= useState();
    const [password, setPassword]=useState();
    const [confirm, setConfirm]=useState();
    const [hizoSubmit, setHizoSubmit]= useState(false);
    const [nombreError, setNombreError]= useState("");
    const [apellidoError, setApellidoError]= useState("");
    const [emailError, setEmailError]= useState("");
    const [passwordError, setPasswordError]= useState("");
    const [confirmError, setConfirmError]= useState("");


    const crearUsuario =(e)=>{
        e.preventDefault();
        console.log("Nombre:"+nombre+"Apellido:"+apellido+"Email:"+email+"Passwrod:"+password+"Confirm Password:"+confirm);
    
        setNombre("");
        setApellido("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setHizoSubmit(true);
    }

    const mensaje = () => {
        if(hizoSubmit){
            return "!Gracias por sus datos! Bienvenido"
        } else {
            return "Favor de llenar sus datos"
        }
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
        if(e.target.value.length < 2) {
            setNombreError("El campo de Nombre debe tener al menos 2 caracteres");
        } else {
            setNombreError('');
        }
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
        if(e.target.value.length < 2) {
            setApellidoError("El campo de Apellido debe tener al menos 2 caracteres");
        } else {
            setApellidoError('');
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 6) {
            setEmailError("El Campo de E-mail  debe tener al menos 6 caracteres");
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password mínimo 8 caracteres");
        } else if(e.target.value !== confirm) {
            setPasswordError("Password y Confirm deben coincidir");
        } else {
            setPasswordError('');
            setConfirmError('');
            
        }
    }
    
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmError("Confirm mínimo 8 caracteres");
        } else if(e.target.value !== password) {
            setPasswordError("Password y Confirm deben coincidir");
        } else {
            
            setPasswordError('');
            setConfirmError('');
            
        }
    }

    return (
        
        <form onSubmit={crearUsuario}>
            <h2>Crear Usuario</h2>
            <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" onChange={handleNombre}  value={nombre} />
                {
                    nombreError ?
                    <p style={{color:'red'}}>{ nombreError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input className="form-control" onChange={handleApellido}  value={apellido} />
                {
                    apellidoError ?
                    <p style={{color:'red'}}>{ apellidoError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" onChange={handleEmail} value={email} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input className="form-control" onChange={handlePassword} value={password}  type="password"/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Confirmar contraseña</label>
                <input className="form-control" onChange={handleConfirm} value={confirm}  type="password"/>
                {
                    confirmError ?
                    <p style={{color:'red'}}>{ confirmError }</p> :
                    ''
                }
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario"/>
            {mensaje()}
            
        </form>
        

        
    );

}

export default Formulario;