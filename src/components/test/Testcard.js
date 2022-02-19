import React from 'react'

function Testcard(props) {
  return (
    <div class="courses-container">
    <div class="course">
        <div class="course-preview">
            <h6>Question {props.no+1}</h6>
            <h2>
                {props.ques}
            </h2>
        </div>
        <div class="course-info">
            <h6>Options</h6>
            <h5><input type="radio" name={`qval${props.no}`} value="0"/>
                <label for="html">
                {props.o1}
                </label>
            </h5>
            <h5><input type="radio" name={`qval${props.no}`} value="1"/>
                <label for="css">
                {props.o2}
                </label>
            </h5>
            <h5><input type="radio" name={`qval${props.no}`} value="2"/>
                <label for="javascript">
                {props.o3}
                </label>
            </h5>
            <h5><input type="radio" name={`qval${props.no}`} value="3"/>
                <label for="javascript">
                   {props.o4}
                </label>
            </h5>
        </div>

    </div>
</div>

  )
}

export default Testcard
