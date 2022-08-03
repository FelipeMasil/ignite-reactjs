import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post
          author="Felipe Masil"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
          />          
        </main>
      </div>
      
    </div>
  )
}

export default App
