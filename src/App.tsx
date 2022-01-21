import React, { useState } from 'react';
import './App.css';
import Roll from './Roll'

function App() {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [option, setOption] = useState('withdraw')
    const [userInput, setUserInput] = useState({
        description: '',
        value: '',
        option:''
    })
    const [dataArray, setDataArray] = useState(
        [
            {description: "asjdkhfakjsdhf",
            id: 1,
            amount: "asdfasdf"},
            {description: "asjdkhfakjsdhf",
            id: 2,
            amount: "asdfasdf"},{description: "asjdkhfakjsdhf",
            id: 3,
            amount: "asdfasdf"},{description: "asjdkhfakjsdhf",
            id: 4,
            amount: "asdfasdf"},
            ]
    )

    function setFormSubmission(){
        console.log('iam inside');
        // console.log(option);

        setUserInput({
            description: description,
            value: value,
            option:option
        })
        // console.log(userInput)

        setDataArray((prevArray)=>[...prevArray, 
            {
            description: userInput.description,
            id:(dataArray.length+1),
            amount:userInput.value
        }
    ]

        )



    }



        const dataArr = dataArray.map(roll=>(
        <Roll 
            description={roll.description}
            id={roll.id}
            amount={roll.amount}
            />))


  return (
    <div className="App">
      <section className="app_header">
          <div className="app_header_account">
              <div className="app_header_account_title">Superduper Checking (...3904)</div>
              <div>
                  <form className="app_header_account_form">
                      <select 
                        className="form-select expense" 
                        aria-label="Default select example"
                        onChange={event => setOption(event.target.value)}
                        value={option}
                        >
                          <option value="withdraw">Withdraw</option>
                          <option value="deposit">Deposit</option>
                      </select>
                      <input 
                        type="text" 
                        className="form-control description" 
                        placeholder="Description" 
                        aria-label="Description" 
                        aria-describedby="basic-addon1" 
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                        />
                      <input 
                        type="text" 
                        className="form-control value" 
                        placeholder="Value" 
                        aria-label="Value" 
                        aria-describedby="basic-addon1"
                        onChange={event => setValue(event.target.value)}
                        value={value}
                        />
                      <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={setFormSubmission}
                        >Submit</button>
                  </form>
              </div>
          </div>
          <div className="app_header_account_balance">
              <div className="amount">
                  <span className="total balance">$9,390.12</span>
                  <span className="title">Present balance</span>
              </div>
              <div className="amount">
                  <span className="total deposits"> $1,278.00</span>
                  <span className="title" >Total deposits</span>
              </div>
              <div className="amount">
                  <span className="total withdrawels">-$2,309.33</span>
                  <span className="title">Total withdrawels</span>
              </div>
          </div>
          <div>
          <div className="roll">
            <span className="roll__description">Description</span>
            <span className="roll__id">ID </span>
            <span className="roll__amount">Amount</span>
            <span className=""></span>    
        </div>
          {dataArr}
          </div>
      </section>
        <hr />
    </div>
  );
}

export default App;
