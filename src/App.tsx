import React from 'react';
import Home from './pages/Home';
import Router, {RouteConfig} from "./core/router";
import Car from './pages/Car';
import Header from "./components/Header";

const routes: RouteConfig[] = [
    {
        component: Home,
        path: "/"
    },
    {
        component: Car,
        path: "/cars/:id"
    }
];

function App() {
    return (
       <div className="App">
           <Header/>
           <Router
               routes={routes}
           />
       </div>
    );
}

export default App;
