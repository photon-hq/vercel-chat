export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>iMessage Chat Example</h1>
      <p>
        A minimal example using the Chat SDK with the iMessage adapter (remote
        mode) and ChatGPT via the Vercel AI SDK.
      </p>

      <h2>How it works</h2>
      <ul>
        <li>
          A Vercel cron job hits <code>/api/imessage/gateway</code> every 9
          minutes to maintain a persistent connection to the iMessage server.
        </li>
        <li>
          Every incoming DM is replied to with a ChatGPT response, using message
          history for context.
        </li>
      </ul>

      <h2>Environment Variables</h2>
      <pre>
        {`IMESSAGE_SERVER_URL=https://your-imessage-server.example.com
IMESSAGE_API_KEY=your-api-key
OPENAI_API_KEY=sk-...
REDIS_URL=redis://localhost:6379`}
      </pre>
    </main>
  );
}
