import { useState } from 'react';
import './App.css';

function App() {

 const [result, setresult] = useState("")
 const onClickHandler = () =>{}

  return (
    <div className="App">
      <header>Calculator - Using ReactJS</header>
      <main className="container-center">
        <div className="display">{result}</div>
        <div className="keypad">
          <table>
            <tbody>
              <tr>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    AC
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    C
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    %
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    +
                  </button>
                </td>
              </tr>
              <tr align="right">
                <td>
                  <button className="button-black" onClick={onClickHandler}>
                    .
                  </button>
                </td>
                <td>
                  <button
                    className="button-black button-number"
                    onClick={onClickHandler}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button className="button-red" onClick={onClickHandler}>
                    =
                  </button>
                </td>
                <td>
                  <button className="button-blue" onClick={onClickHandler}>
                    **
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
