export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="quiz-container" style={{backgroundColor: "green"}}>
      <main>
        <div>
          <h1>توسعه دهنده اپلیکیشن</h1>
          <h2>یونس قربانی 🤗</h2>
        </div>
      </main>
    </div>
  );
}
