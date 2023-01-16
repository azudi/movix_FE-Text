import SubmitButton from "components/widget/SubmitButton";
import React, {useState} from "react";
import { ReactComponent as AppLogo } from "../../assets/images/svg/app-logo.svg";
import { useNavigate } from "react-router-dom";
import routes from "navigation/routes";
import { BsEye } from "react-icons/bs"
import { BsEyeSlash } from "react-icons/bs"

interface Props {
  loginUser: Function;
  isLoading: boolean | undefined
}

const LoginForm: React.FC<Props> = (props: Props) => {
  const { loginUser, isLoading } = props;
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);




    //Function
   const submit= (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault()
      loginUser(user)
   }




  return (
    <form 
    onSubmit={(event)=>submit(event)}
    className="md:w-[450px] sm:w-10/12 w-11/12 flex flex-wrap justify-center rounded-lg shadow-md p-4">
      <AppLogo />
      <b className="block w-full text-center red-hat font-bold pt-4">
        Hi, Welcome
      </b>
      <span className="red-hat text-gray-400 pb-3">
      Please sign-in to your account and start your experience
      </span>
      <div className="input-container">
        <input 
         onChange={(e)=>{
          setUser({...user, email: e.target.value})
        }}
        placeholder="Email" className="w-full input" />
      </div>

      <div className="input-container">
        <input
         type={show ? "text" : "password"}
        onChange={(e)=>{
          setUser({...user, password: e.target.value})
        }}
        placeholder="Password" className="w-full input" />
        <span className="input-icon"
         onClick={()=> setShow(!show)}
        >
          { show ? <BsEye size={21}/> : <BsEyeSlash size={21}/>}
        </span>
      </div>

      <SubmitButton isLoading={isLoading} title={"Login"} />

      <div>
        <p className="red-hat text-[14px] py-5">
          <span>Don’t have an account?</span>
          <span className="text-red-500 mx-4 cursor-pointer"
           onClick={()=>navigate(routes.register)}
          >Register</span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
