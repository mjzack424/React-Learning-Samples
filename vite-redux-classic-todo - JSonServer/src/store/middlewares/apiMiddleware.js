export const apiMiddleware = store => next => action => {
  console.log("Middleware hit:", action.type); // 🔥 این خط
  if (action.type !== "FETCH_TODOS") {
    return next(action);
  }

  store.dispatch({ type: "todos/FETCH_TODOS_REQUEST" });

  fetch("http://localhost:5000/todos")
    .then(res => res.json())
    .then(data => {
      store.dispatch({ type: "todos/FETCH_TODOS_SUCCESS", payload: data });
    })
    .catch(err => {
      store.dispatch({ type: "todos/FETCH_TODOS_ERROR", payload: err.message });
    });

  return next(action);
};
