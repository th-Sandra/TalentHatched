import { useState } from "react"
import { FormButton } from "../../../components/buttons"
import { useNavigate } from "react-router-dom"
import { Input } from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"

/*
Props:
*/

const JobSearch2 = ({page, onNextClick, onBackClick, thisPage}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="What do you want to gain from this job?" onClick={onBackClick}/>
      <form onSubmit={onSubmit}>
        <BodyWrapper>
          <Input 
            type="" 
            title="Mentorship"
            placeholder="" 
            style={{
              margin:"30px 0px",
              transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
              transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',
              transitionDelay: `0ms`,
              transitionProperty: 'transform',
            }}
            width="200px"
            info="What do you want to learn?"
          />
          <Input
            type="range"
            inputType="number"
            title="Pay (USD)"
            placeholder="20"
            placeholder2="30"
            style={{
              margin:"30px 0px",
              transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
              transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',
              transitionDelay: `75ms`,
              transitionProperty: 'transform',
            }}
            width="150px" 
            info=""
          />
          <Input 
            type=""
            title="Benefits"
            placeholder="Health Insurance"
            style={{
              margin:"30px 0px",
              transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
              transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',
              transitionDelay: `150ms`,
              transitionProperty: 'transform',
            }}
            width="150px"
            info="What perks do you need?"/>
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default JobSearch2