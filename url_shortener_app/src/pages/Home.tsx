import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")

  const handleShorten = async () => {
    const response = await axios.post("https://api.shrtco.de/v2/shorten?url=" + url)
    setShortUrl(response.data.result.full_short_link)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>URL Shortener</h1>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  )
}

export default Home