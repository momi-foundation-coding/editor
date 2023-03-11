import React from 'react'

const questions = [
  {
    heading: "Create a button with:",
    details: [
      "Padding of 5px",
      "Width of 100px",
      "Background color of green",
      "Border radius of 5px",
      "Text color of white"
    ]
  },
  {
    heading: "Create an input field with:",
    details: [
      "Padding of 5px",
      "Width of 300px",
      "Border radius of 5px",
      "Placeholder of first input text"
    ]
  }
]

const Questions = () => {
  return (
    <div className=''>
      <h3>Question to practice</h3>
      <p style={{ color: 'red' }}>NB: Can do any practice here</p>
      {
        questions.map((question, index) => {
          const details = question.details
          return (
            <div key={question.heading}>
              <div className='question'>{index+1}.&nbsp;<p>{question.heading}</p></div>
              <ul>
                {details.map(detail => {
                  return (
                    <li key={detail}>{detail}</li>
                  )
                })}
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default Questions