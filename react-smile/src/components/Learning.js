import React, { Component } from 'react'

class Learning extends Component
{

  state = 
  {
    fruits :
    [
      {name: 'Mango', weight: '120gm'},
      {name: 'Orange', weight: '200gm'},
      {name: 'Apple', weight: '60gm'},
    ]
  }

  clickHandler = () =>
  {
    console.log('Hello Mansoor Rafiq');
    alert('Welcome Mansoor')
  }

  render()
  {
    return 
          
          (
            <div>
                  <button onClick={this.clickHandler}>Click Me</button>
                  
              </div>  
            )
          
  }
}

export default Learning