import React from 'react';
import './App.css'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/SearchResults'
import Detail from './pages/Detail/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import { Link, Route } from "wouter"

export default function App() {
  // Todos lo que envuelve StaticContext tiene acceso a el.
  // Si se utiliza estas obligado a pasarle un value
  return (
    <StaticContext.Provider value={{
      name: 'guidacho99',
      followRepo: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
              />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
              />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}