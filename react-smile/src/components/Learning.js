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

  clickHandler = ()

  render()
  {
    return 
          
          (
            <div>
                  <h1>Fruit name is {this.state.fruits[0].name} and the weight is {this.state.fruits[0].weight}</h1>
                  
              </div>  
            )
          
  }
}

export default Learning