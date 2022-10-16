import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormButton } from "../../../components/buttons"
import { Bold48, Bold24, Reg20 } from "../../../components/style"
import EntryImage from '../../../assets/images/entryImage.svg'
import { BottomWrapper, LeftWrapper } from "./style"
import Input from "../../../components/input"

/*
Props:
*/

const Entry = (props) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disable, setDisable] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem("email")) setEmail(sessionStorage.getItem("email"))
    if (sessionStorage.getItem("password")) setPassword(sessionStorage.getItem("password"))
  }, [])

  useEffect(() => {
    if (email && password && disable) setDisable(false)
    else if (!email && !password && !disable) setDisable(true)
  }, [email, password])

  const onSubmit = async (e) => {
    e.preventDefault()
    // backend stuff
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    navigate("/company")
  }

  return (
    <div>
      <Bold48 style={{marginBottom: '100px'}}>
        We simplify your recruitment process. <br/> Ready to get started?
      </Bold48>
      <BottomWrapper>
        <LeftWrapper onSubmit={(e) => {onSubmit(e)}} id="form">
          <div>
            <Reg20>
              Login or Signup
            </Reg20>
            <Input title="Company Email" placeholder={"talenthatched@gmail.com"} type="default" style={{margin: "40px 0px 20px 0px"}} required onChange={(e) => {setEmail(e.target.value)}} value={email}/>
            <Input title="Password" placeholder={""} type="default" style={{margin:"20px 0px"}} required onChange={(e) => {setPassword(e.target.value)}} value={password}/>
          </div>
          <FormButton title="Create Account" disable={disable}/>

        </LeftWrapper>
        <img src={EntryImage}/>
      </BottomWrapper>
    </div>
  )
}

export default Entry