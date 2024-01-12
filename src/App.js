import './App.css';
import 'survey-react/survey.css';
import SurveyPage from './SurveyDisplay';
import React, {Component} from 'react';

class App extends Component {

  changeLocators(e) {
    document.querySelectorAll("li")?.forEach(element => element.setAttribute("id", "pb_" + element.innerText.toLowerCase().split("\n")[0]));
    document.querySelectorAll("[data-name]")?.forEach(element => element.setAttribute("id", element.getAttribute("data-name")));
    document.querySelectorAll("[data-key]")?.forEach(element => element.setAttribute("id", element.getAttribute("data-key")));
    document.querySelectorAll("[step]")?.forEach(element => element.setAttribute("id", "id_input_" + element.getAttribute("aria-label").toLowerCase().replace(/[^a-zA-Z\s]+/gi, '').replace(/\s/g, '_')));
  };

  timedChangeLocators(e) {
    setTimeout(this.changeLocators, 100);
  };

  componentDidMount() {
    this.timedChangeLocators();
    document.getElementsByClassName("sv_body")[0]?.addEventListener("click", this.timedChangeLocators.bind(this));
  };

  render() {
    return (
    <div className="App">
      <SurveyPage></SurveyPage>
    </div>
    )
  };
  
}

export default App;