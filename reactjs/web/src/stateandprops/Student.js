import React from 'react'
import PropTypes from 'prop-types'

const Student = props => {

  return (
    <div>
      
      <p>student name:{props.name}</p>
      <p>student id:{props.id}</p>
      <p>student branch:{props.branch}</p>
      <p>student addres:{props.addres}</p>
      <p>student photo:<img src={props.photo}/></p>
      <hr/>
    </div>
  )
}

Student.propTypes = {

}

export default Student
