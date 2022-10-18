import { useState } from "react"
import { FormButton, BackButton } from "../../../components/buttons"
import { Input } from "../../../components/input"
import { Column, InputsWrapper, Row, BodyWrapper } from "../../../components/style"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"


/*
Props:
*/

const Projects = ({page, onNextClick, onBackClick, thisPage}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="Do you have any projects?" onClick={onBackClick}/>
      <form onSubmit={onSubmit}>
        <BodyWrapper>
          <Column>
            <Row style={{transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`, transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',}}>
              <Input type="" title="Title" placeholder="Interpolation of the Quantum Realm" style={{margin:"30px 0px 0px 0px"}} required width="200px"/>
              <Input type="" title="Location" placeholder="https://talenthatched.com" style={{margin:"30px 0px 0px 0px"}} required width="200px" info="Where can employers find this project?"/>
            </Row>
            <Input
              type="textarea"
              title="Description"
              placeholder="Talent Hatched is a multigenerational company looking to revolutionize the job market with new and 
                innovative ways to employ and fund lower education students through an app that connects students to job opportunities."
              style={{
                margin:"30px 0px 80px 0px",
                transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
                transition: 'transform 1s', pointerEvents: page==thisPage?'initial':'none',
                transitionDelay: `75ms`,
                transitionProperty: 'transform',
              }}
              required
              width="800px"
              height="80px"
              info="What is this project about?"
            />
          </Column>
        </BodyWrapper>
        <FormButton/>
      </form>
    </FormPageWrapper>
  )
}

export default Projects