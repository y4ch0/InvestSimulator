import { mockComponent } from 'react-dom/test-utils';
import './App.css';
import Navbar from './Navbar';
import matchers from '@testing-library/jest-dom/matchers';

export function App() {
  const websiteTitle = "Invest simulator";
  var money = Math.round(Math.random() * 1250000);
  var rigcz = Math.round(money / 4500);
  const link = "https://www.gpw.pl/";
  var linkShown = true;
  var akcje = 0;
  const newMoney = () => {
    var savedMoney = money;
    var calculation = Math.round(Math.random());
    switch(calculation) {
      case 0:
        money = Math.round((money + Math.round((Math.random() * 2500))));
      case 1:
        money = Math.round((money - Math.round((Math.random() * 1500))));
    }
    var moneyCalculation = money - savedMoney;
    if(moneyCalculation > 0) {
      document.getElementById("account_state").style = "color:green;background-color:transparent;";
      document.getElementById("account_state").innerHTML = "makler mówi, że masz: <b>" + money + "</b> PLN, zyskałeś <b>" + moneyCalculation + "</b> PLN";
    } else if(moneyCalculation < 0) {
      document.getElementById("account_state").style = "color:red;background-color:transparent;";
      document.getElementById("account_state").innerHTML = "makler mówi, że masz: <b>" + money + "</b> PLN, straciłeś <b>" + moneyCalculation + "</b> PLN";
    } else {
      document.getElementById("account_state").style = "color:yellow;background-color:black;";
      document.getElementById("account_state").innerHTML = "makler mówi, że masz: <b>" + money + "</b> PLN";
    }
    rigcz = Math.round(money / 5000);
    document.getElementById("rigcz").innerHTML = "ile masz punktów prestiżu: <b>" + rigcz+"</b>";
    return money;
  }
  setInterval(newMoney,5000);
  const clickGpw = () => {
    if(linkShown == true) {
      linkShown = false;
      document.getElementById("linkGPW").style = "display:none;";
      document.getElementById("button1").innerHTML = "Pokaż link do GPW";
    } else {
      linkShown = true;
      document.getElementById("linkGPW").style = "display:block;";
      document.getElementById("button1").innerHTML = "Ukryj link do GPW";
    }
  }
  return (
    <div className='root'>
      <Navbar></Navbar>
      <div className='content'>
        <h1>{websiteTitle}</h1>
        <p id="rigcz">ile masz punktów prestiżu: {rigcz}</p>
        <p id="account_state">makler mówi, że masz: {money}PLN</p>
        <span id='linkGPW'>poradnik jak nie inwestować: <a href={link} target="_blank">GPW</a></span>
        <ul>
          <li>
            <button onClick={newMoney}>Zobacz czy zarobiłeś czy straciłeś</button>
          </li>
          <li>
            <button onClick={clickGpw} id="button1">Pokaż/ukryj link do GPW</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;