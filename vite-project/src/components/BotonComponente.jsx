export default function BotonComponente({nombre, color}){
    const misEstilos={
        backgroundColor: color,
        borderRadius: '20px',
        cursor: 'pointer',
        border: 0
    }

    const handleClick = () =>{
        console.log("estas en la seccion de"+nombre)
    }
    return <button onClick={handleClick} style={misEstilos}>{nombre}</button>
}