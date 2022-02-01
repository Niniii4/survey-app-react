import './App.css';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import SurveyPage from './SurveyDisplay';

function App() {
  Survey.StylesManager.applyTheme("modern");

  return (
    <div className="App">
      <SurveyPage></SurveyPage>
    </div>
  );
}

export default App;