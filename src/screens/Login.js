import { useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"
import { useEffect } from "react";
const Login = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const schema = yup.object().shape({
        email: yup.string()
        .required("email is required")
        .email(),
        password: yup.string()
        .required("password is required")
      });

    const { register, 
        handleSubmit, 
        formState: {errors}} = useForm({
            resolver: yupResolver(schema)
        });
    const onSubmit = (data) => {
       console.log(data);
       //login admin
       if(data.email === 'kiekie@gmail.com' && data.password === 'kiekiexo' ){
 
        fetch("https://parcel-backend.vercel.app/user/login", 
        {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, *//*", "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
                const { _id } = res.user;
                localStorage.setItem("token", res.token)
                fetch(`https://parcel-backend.vercel.app/user/login/${_id}`, {
                    method: "GET",
                    headers: {
                        Authorization: res.token,
                    }
                })
                .then((res) => res.json())
                .then((res) => {
                    if(res.success){
                        localStorage.setItem("firstName", res.data.firstName);
                        localStorage.setItem("userId", res.data._id);
                        localStorage.setItem("email", res.data.email);
                        navigate('admin-dashboard')
                        // history.push('/AdminProfile')
                        
                    }
                    else if(res.error){
                      console.log(res.error)
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            }
            )
        } 
        //login basic user
       else{
       fetch("https://parcel-backend.vercel.app/user/login", 
       {
           method: "POST",
           headers: {
             Accept: "application/json, text/plain, */*", "Content-Type": "application/json"
           },
           body: JSON.stringify({
               email: data.email,
               password: data.password
           })
       })
       .then((res) => res.json())
       .then((res) => {
           if(res.message === "user not found" && data.password !== ""){
               alert('user not registered');
               return false;
           }
           if(res.message === "invalid email/password"){
               alert('invalid email/password');
           }
           else if(res.token){
             const { _id } = res.user;
             localStorage.setItem("token", res.token)
             fetch(`https://parcel-backend.vercel.app/user/login/${_id}`, {
                 method: "GET",
                 headers: {
                     Authorization: res.token,
                 }
             })
             .then((res) => res.json())
             .then((res) => {
                 if(res.success){
                     localStorage.setItem("firstName", res.data.firstName);
                     localStorage.setItem("userId", res.data._id);
                     data.email = "";
                     navigate('/user-dashboard');
                    
                 }
                 else if(res.error){
                    console.log(res.error)
                 }
             })
         }
     })
     .catch((err) => {
         console.log(err);
     });
    }
}
     useEffect(() => {
        if(token && email !== "genki@gmail.com"){
            navigate('/user-dashboard');
        }
        else if(token && email === "genki@gmail.com"){
           navigate('/admin-dashboard');
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    return(
        <div className="login">
                <div>
                    <img src="/images/delivery12.png" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-wrapper">
                            <h2 className="title">login</h2>
                            <input className="email" placeholder="Email" type="text" {...register('email')}/>
                            <p className="messages" style={{color: "red"}}>{errors.email?.message}</p>
                            <input className="password" placeholder="password" type="password" {...register('password')}/>
                            <p className="messages" style={{color: "red"}}>{errors.password?.message}</p>
                            <div className="loginBtn">
                                <button>Login</button>
                                <p className="login-sign">no account yet?....<Link to="/register" className="sign-up">Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    );
    }
export default Login;