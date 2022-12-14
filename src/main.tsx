import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"
import "./scss/index.css"
import { useComunication } from "./apollo/useComunication"
import React from "react"
import "./firebase"

const { client } = useComunication()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)
