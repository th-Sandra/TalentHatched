import { useState } from "react"
import { FormButton } from "../../../components/buttons"
import Input from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"

/*
Props:
*/

const JobSearch1 = ({page, onNextClick, onBackClick, thisPage}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="What kind of job do you want?" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          <Input type="range" inputType="number" title="Workload" placeholder="24" placeholder2="40" style={{margin:"30px 0px"}} required width="150px" info="How many hours do you want to work?"/>
          <Input type="dropdown" title="Workplace Type" placeholder="talenthatched@gmail.com" style={{margin:"30px 0px"}} required width="500px" info="Where will you be working?"/>
          <Input type="autofill" title="Skills" placeholder="React" style={{margin:"30px 0px"}} required width="200px" info="What skills do you want to use on the job?"/>
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default JobSearch1