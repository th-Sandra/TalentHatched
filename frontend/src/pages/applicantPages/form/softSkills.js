import { useState } from "react"
import { FormButton, SelectButton } from "../../../components/buttons"
import { BodyWrapper, Row } from "../../../components/style"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"

/*
Props:
*/

const SoftSkills = ({page, onBackClick, onNextClick, thisPage}) => {

  const skillArray = [
    "Adaptability",
    "Communication",
    "Conflict Management",
    "Creativity",
    "Customer Service",
    "Emotional Intelligence",
    "Teamwork",
    "Time Management",
    "Problem Solving",
    "Willingness to Learn",
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="What are your top three soft skills?" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          <Row style={{transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`, transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',}}>
            {skillArray.map((skill, index) => {
              return(
                <SelectButton title={skill} margin="15px" key={skill}/>
              )
            })}
          </Row>
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default SoftSkills