import React, {useState} from 'react';
import './App.css';
import Main from "./components/Main";

function App() {
   let [isModal, setModal] = useState(true)
   let [first, setFirst] = useState('')
   let [second, setSecond] = useState('')

   let selectFirst = (e) => {
      setFirst(e.currentTarget.value)
   }
   let selectSecond = (e) => {
      setSecond(e.currentTarget.value)
   }

   const onSubmit = () => {
      if(first && second) {
         setModal(!isModal)
      }
   }

   return (
      <main className="App">
         {isModal
            ? <section className="modal-wrap">
                  <article className="modal-window" role="dialog" aria-modal="true">
                     <h2>Choose the names of the players:</h2>
                     <input placeholder='First player'
                            value={first}
                            onChange={selectFirst}
                     />
                     <input placeholder='Second player'
                            value={second}
                            onChange={selectSecond}
                     />
                     <button className="set-btn" onClick={onSubmit}>Set</button>
                  </article>
               </section>
            : <Main firstPlayer={first}
                    secondPlayer={second}
            />
            }
      </main>
   )
}

export default App;
