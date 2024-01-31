import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import json from './SurveyData';

const MySurvey = () => {
    Survey.StylesManager.applyTheme("orange");
    function sendDataToServer(survey) {
        //send Ajax request to your web server.
        //alert("The results are:" + JSON.stringify(survey.data));
    }
    return (
        <Survey.Survey
        json = {json}
        onComplete={ sendDataToServer }
        />
    )
}
export default MySurvey;