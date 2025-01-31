import ReactDom from "react-dom/client"
import App from "./App.jsx"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

ReactDom.createRoot(document.getElementById("root")).render(<App/>)