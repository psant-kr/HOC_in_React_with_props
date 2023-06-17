import React from 'react'

export default function SampleComponent(props) {
  return (
    <>
      <div style={{ fontWeight: "700", fontSize: "20px" }}> I am SampleComponent</div>
      {
        props.name && <h2>Hi, i am {props.name}</h2>
      }
    </>
  )
}

const hocFunction = (Component) => {
  return ((props) => (

    <div style={{ backgroundColor: 'aqua', padding: "50px" }}>
      <h2>i am from hoc function</h2>
      <Component {...props} />
      
    </div>
  )

  )
}

const HOCofSampleComponent = hocFunction(SampleComponent);

export { HOCofSampleComponent }