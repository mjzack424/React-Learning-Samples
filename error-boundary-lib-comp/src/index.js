import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>مشکلی برایت پیش آمده!</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>تلاش مجدد</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      //Do Something...
    }}
  >
    <App />
  </ErrorBoundary>
);
