import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Please enter a valid URL");
      return;
    }

    // Simulate a "shortening" algorithm
    const fakeShort = "https://short.ly/" + Math.random().toString(36).substring(7);
    setShortenedUrl(fakeShort);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          style={{ padding: "0.5rem", width: "300px" }}
        />
        <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
          Shorten
        </button>
      </form>

      {shortenedUrl && (
        <div style={{ marginTop: "1rem" }}>
          <strong>Shortened URL: </strong>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
