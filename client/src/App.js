import React, { useEffect, useState } from 'react'

function App() {
  const [HomePageData, setHomePageData] = useState([{}])

  // fetch the Homepage data
  useEffect(() => {
    fetch("/home").then(
      response => response.json()
    ).then(
      data => {
        setHomePageData(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof HomePageData.movies === 'undefined') ? (
        <p>Loading...</p>
      ): (
        HomePageData.movies.map((movie, i) => (
          <p key={i}>{movie}</p>
        ))
      )}


    </div>
  )
}

export default App