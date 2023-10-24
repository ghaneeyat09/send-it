import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
import '../styles/DestinationPopup.css'
const CurrentLocPopup = ({classname, cClick, text}) => {
        // const google = window.google ? window.google : {}
        // const [display, setDisplay] = useState(false);
        // const [input, setInput] = useState('');
        const { register, handleSubmit} = useForm();
        
       
       
             const onSubmit = (data) => {
                 console.log(data);
                  /*change dest*/
                    cClick();
                    const rowId = localStorage.getItem('id');
                    const token = localStorage.getItem('token');
                    if(data !== ""){
                            
                            fetch(`https://parcel-backend.vercel.app/order/${rowId}`, {
                            method: "PATCH",
                            headers: {
                              Accept: "application/json, text/plain, */*", "Content-Type": "application/json",
                              Authorization: token
                           },
                           body: JSON.stringify({
                             presentLoc: data.input
                           }), 
                         })
                         .then((res) => res.json())
                         .then((res) => {
                           console.log(res);
                             if(res.message === "data patched"){
                                 alert("present location has been added");
                                 window.location.reload();
                             }
                         })
                         .catch((err) => {
                             console.log(err);
                         })
                       }
                      }
                  // useEffect( ()=> {
                  //   let autocomplete = new google.maps.places.Autocomplete(
                  //         (document.getElementById('input')),
                  
                  //         { types: ['geocode']});
                  
                  
                  //     google.maps.event.addListener(autocomplete, 'place_changed', function() {
                  
                  //       fillInAddress(autocomplete);
                  
                  //     });
                  
                  //     const fillInAddress=()=>{
                  //       setInput({...input, 
                  //         input: document.getElementById('input').value, 
                  //         });
        
                  //     }
                   
                  //         },[]);
                  //         /*handle change*/
                  //       const handleChange = event => {
                  //           setInput({
                  //             ...input, 
                  //             [event.target.name]: event.target.value
                  //        })
                  //          };
    
return (
    <div id="currentpop" className={classname}>
        <h1 className="destHead">{text}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('input', {required: true})} id="input" type="text"/><br/>
            <button className="destBtn" onClick={cClick}>cancel</button>
            <button className="destBtn">submit</button>
        </form>
    </div>
)
}
export default CurrentLocPopup;