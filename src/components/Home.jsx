import React from 'react'

function Home() {
  const styles = {
    container: {
      margin: '10 auto',
      padding: '10px',
      backgroundColor: '#eee',
    },
    heading: {
      fontSize: '8em',
      textAlign: 'center',
      margin: '1rem'
    }
  }
  return (
    <div style={styles.container}>
      <p style={styles.heading}>Home</p>
      <hr />
    </div>
  )
}

export default Home