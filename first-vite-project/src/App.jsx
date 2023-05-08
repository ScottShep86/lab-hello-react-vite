import './App.css'
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {
  return <div className='App'>
  <div className='partOne'>
  <nav className='navbar'>
  <div>
  <img src={logo} alt='logo' />
  </div>
  <div>
  <img src={menu} alt='menu' />
  </div>
  </nav>
  <div className='welcome'>
    <h1>Say hello to <br></br>ReactJS</h1>
    <p>You will learn how to use <br></br>the most popular frontend library, <br></br>and become a super Ninja developer.</p>
    <button>Awesome!</button>
    </div>
    </div>
    <br></br>
    <div className='information'>
    <div className='container'>
    <img src={icon1} alt='icon1' />
    <h2>Declarative</h2>
    <p>React makes it <br></br>painless to create <br></br>interactive UIs.</p>
    </div>
    <div className='container'>
    <img src={icon2} alt='icon2' />
    <h2>Components</h2>
    <p>Build encapsulated <br></br>components that <br></br>manage their state.</p>
    </div>
    <div className='container'>
    <img src={icon3} alt='icon3' />
    <h2>Single-Way</h2>
    <p>A set of immutable <br></br>values are passed to <br></br>the components.</p>
    </div>
    <div className='container'>
    <img src={icon4} alt='icon4' />
    <h2>JSX</h2>
    <p>Statically-typed, <br></br>designed to run on <br></br>modern browsers.</p>
    </div>
    </div>
  </div>
}

export default App
