import React, {useState} from 'react'
import './AskQuestion.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { askQuestion } from '../../actions/question'

const AskQuestion = (e) => {

   const [questionTitle, setQuestionTitle ] = useState('')
   const [questionBody, setQuestionBody ] = useState('')
   const [questionTags, setQuestionTags ] = useState('')

   const dispatch = useDispatch()
   const User = useSelector((state) => (state.currentUserReducer))
   const navigate = useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({questionTitle, questionBody, questionTags})
    dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
   }
   const handleEnter = (e) =>{
     if(e.key === 'Enter'){
      setQuestionBody(questionBody + "\n")
     }
   }

  return (
    <div className='ask-question'>
    <div className="ask-ques-container">
      <h1>Ask a Public Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="ask-form-container">
          <lebel htmlFor='ask-ques-title'>
            <h4>Title</h4>
            <p>Be specific and imagine you're asking a question t another person</p>
            <input type="text" name='questionTitle' onChange={(e) =>{setQuestionTitle(e.target.value)}} id='ask-ques-title' placeholder='e.g. is there an R function for finding the index of an element in a vector?'/>
          </lebel>
          <lebel htmlFor='ask-ques-body'>
            <h4>Body</h4>
            <p>Include all the information someone whould need to answer your question</p>
            <textarea name="" id="ask-ques-body" onChange={(e) =>{setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
          </lebel>
          <lebel htmlFor='ask-ques-tags'>
            <h4>Tags</h4>
            <p>Add upto 5 tags to describe what your question is about</p>
            <input type="text" name='questionTitle' onChange={(e) =>{setQuestionTags(e.target.value.split(""))}} id='ask-ques-tags' placeholder='e.g. (xml typescript wordpress)'/>
          </lebel>
        </div>
        <input type="submit" value="Review your question"  className='review-btn'/>
      </form>
    </div>
    </div>
  )
}

export default AskQuestion
