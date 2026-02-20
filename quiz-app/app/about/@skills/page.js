export default async function Info() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div className="quiz-container">مهارت های من</div>;
}
