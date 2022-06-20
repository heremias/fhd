import * as React from 'react'

const Card = (props: {
  id: string;
  title: string;
  body: string
}) => {
  return (
    <div>
      <div className='card-text'>
        <a href={'node/' + props.id}>
          <h2>{props.title}</h2>
        </a>
        <div dangerouslySetInnerHTML={{__html: props.body}} />
      </div>
    </div>
  )
}

export default Card
