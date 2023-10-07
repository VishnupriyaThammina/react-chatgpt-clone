import './index.css';

const App = () => {
  const getMessages= async()=>{
    const options ={
      method:"POST",
      body:JSON.stringify({
        message : "hello how are you?"
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }
    try{
const response = await fetch('http://localhost:8000/completions',options)
const data = await response.json()
console.log(data)    
}
catch(error){
      console.error(error)
    }
  }
  return (
    <div className="App">
      <section className='side-bar'>
        <button>+ New chat</button>
        <ul className='history'>
          <li>HEH</li>
          <li>HEH</li>
          <li>HEH</li>

        </ul>
        <nav>Made by Vish</nav>
      </section>
      <section className='main'>
<h1>Vish Gpt</h1>
<ul className='feed'>

</ul>
<div className="bottom-section">
  <div className="input-container">
    <input />
    <div id = "submit" onClick={getMessages}>
    ➢
    </div>
  </div>
  <p className='info'>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version</p>

</div>
</section>
    </div>
    
  );
}

export default App;


