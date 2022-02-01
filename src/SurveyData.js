const json = {
"title": "Data reporting form for suspected and probable cases of COVID-19",
"pages": [
    {
        "name": "page1",
        "elements": [
            {
                "type": "panel",
                "name": "first_page_container_panel",
                "elements": [
                    {
                        "type": "text",
                        "name": "unique_case_id_textbox",
                        "startWithNewLine": false,
                        "title": "Unique Case Number ID / Cluster Number (if applicable):",
                        "hideNumber": true,
                        "inputType": "number",
                        "isRequired": true,
                        "requiredErrorText": "Response required for Case Number ID"
                    }, {
                        "type": "panel",
                        "name": "data_collector_information",
                        "elements": [
                            {
                                "type": "text",
                                "name": "name_of_data_collector",
                                "title": "Name of data collector",
                                "isRequired": true,
                                "requiredErrorText": "Response required for data collector's name"
                            }, {
                                "type": "text",
                                "name": "data_collector_institution",
                                "title": "Data collector Institution",
                                "startWithNewLine": false,
                                "isRequired": true,
                                "requiredErrorText": "Response required for health institution",
                            }, {
                                "type": "text",
                                "name": "data_collector_telephone_number",
                                "title": "Data collector telephone number",
                                "inputType": "tel",
                                "startWithNewLine": false,
                                "isRequired": true,
                                "requiredErrorText":"Number should contain numbers in range 5-25",
                                "validators": [
                                    {
                                     "type": "regex",
                                     "regex": "[0-9]{5,25}"
                                    }
                                   ]
                            }, {
                                "type": "text",
                                "name": "email",
                                "title": "Email",
                                "inputType": "email",
                                "isRequired": true,
                                "requiredErrorText":"Please insert valid form of email",

                                "validators": [
                                    {
                                        "type": "email",
                                        "text": "Please type valid form of email"
                                    }
                                ]
                            }, {
                                "type": "text",
                                "name": "form_completion_date",
                                "title": "Form completion date",
                                "inputType": "date", 
                                "startWithNewLine": false,
                                "isRequired": true,
                                "requiredErrorText":"Please insert a valid date in form mm/dd/yyyy",
                            }, {
                                "type": "signaturepad",
                                "name": "signature",
                                "title": "Data collector signature", 
                                "isRequired": true,
                                "width": "1055%",
                                "height": 100,
                                "titleLocation": "left",
                                "penColor": "#ff8040",
                                "requiredErrorText":"Please insert a signature",
                            }
                        ],
                        "title": "Data Collector Information",
                        "showQuestionNumbers": "off"
                    }
                ],
                "startWithNewLine": false
            }
        ],
        "navigationTitle": "Collector",
        "navigationDescription": "Collector's info"
    }, {
        "name": "page2",
        "elements": [
            {
                "type": "boolean",
                "name": "is_the_person_providing_the_information_is_the_patient",
                "title": "Is the person providing the information is the patient?",
                "hideNumber": true,
                "isRequired": true,
                "labelTrue": "Yes",
                "labelFalse": "No"
            }, {
                "type": "panel",
                "name": "case_identifier_information",
                "elements": [
                    {
                        "type": "text",
                        "name": "given_names",
                        "title": "Given name(s)"
                    }, {
                        "type": "text",
                        "name": "family_name",
                        "startWithNewLine": false,
                        "title": "Family name"
                    }, {
                        "type": "radiogroup",
                        "name": "case_identifier_information_sex",
                        "startWithNewLine": false,
                        "title": "Sex",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Male"
                            }, {
                                "value": "item2",
                                "text": "Female"
                            }, {
                                "value": "item3",
                                "text": "Not known"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "panel",
                        "name": "case_identifier_information_patient_date_of_birth_panel",
                        "elements": [
                            {
                                "type": "text",
                                "name": "case_identifier_information_patient_date_of_birth_date",
                                "visibleIf": "{case_identifier_information_patient_date_of_birth_checkbox} empty",
                                "titleLocation": "hidden",
                                "inputType": "date"
                            }, {
                                "type": "checkbox",
                                "name": "case_identifier_information_patient_date_of_birth_checkbox",
                                "startWithNewLine": false,
                                "titleLocation": "hidden",
                                "choices": ["Unknown"]
                            }
                        ],
                        "title": "Date of Birth"
                    }, {
                        "type": "text",
                        "name": "case_identifier_information_patient_telephone_mobile_number",
                        "title": "Telephone (mobile) number",
                        "inputType": "tel"
                    }, {
                        "type": "panel",
                        "name": "case_identifier_information_patient_age",
                        "elements": [
                            {
                                "type": "text",
                                "name": "case_identifier_information_patient_age_years",
                                "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
                                "title": "Years:",
                                "titleLocation": "default",
                                "inputType": "number"
                            }, {
                                "type": "text",
                                "name": "case_identifier_information_patient_age_months",
                                "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
                                "startWithNewLine": false,
                                "title": "Months:",
                                "titleLocation": "default",
                                "inputType": "number"
                            }, {
                                "type": "checkbox",
                                "name": "case_identifier_information_patient_age_checkbox",
                                "startWithNewLine": false,
                                "titleLocation": "hidden",
                                "choices": ["Unknown"]
                            }
                        ],
                        "title": "Age (years, months) "
                    }, {
                        "type": "text",
                        "name": "case_identifier_information_patient_email",
                        "title": "Email",
                        "inputType": "email"
                    }, {
                        "type": "text",
                        "name": "case_identifier_information_patient_address",
                        "startWithNewLine": false,
                        "title": "Address"
                    }, {
                        "type": "text",
                        "name": "case_identifier_information_patient_national_social_number",
                        "startWithNewLine": false,
                        "title": "National social number/ identifier (if applicable)"
                    }, {
                        "type": "dropdown",
                        "name": "case_identifier_information_patient_country_of_residence",
                        "title": "Country of residence",
                        "choices": [
                            "item1", "item2", "item3"
                        ],
                        "choicesByUrl": {
                            "url": "https://surveyjs.io/api/CountriesExample",
                            "valueName": "name"
                        }
                    }, {
                        "type": "radiogroup",
                        "name": "case_identifier_information_patient_case_status",
                        "startWithNewLine": false,
                        "title": "Case status",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Suspected"
                            }, {
                                "value": "item2",
                                "text": "Probable"
                            }, {
                                "value": "item3",
                                "text": "Confirmed"
                            }
                        ],
                        "colCount": 3
                    }
                ],
                "visible": false,
                "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = true",
                "title": "Case Identifier Information",
                "showNumber": true,
                "showQuestionNumbers": "off"
            }, {
                "type": "panel",
                "name": "interview_respondent_information_if_the_persons_providing_the_information_is_not_the_patient",
                "elements": [
                    {
                        "type": "text",
                        "name": "first_name",
                        "title": "First name "
                    }, {
                        "type": "text",
                        "name": "surname",
                        "startWithNewLine": false,
                        "title": "Surname"
                    }, {
                        "type": "radiogroup",
                        "name": "interview_respondent_information_sex",
                        "startWithNewLine": false,
                        "title": "Sex",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Male"
                            }, {
                                "value": "item2",
                                "text": "Female"
                            }, {
                                "value": "item3",
                                "text": "Not known"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "panel",
                        "name": "interview_respondent_information_patient_date_of_birth_panel",
                        "elements": [
                            {
                                "type": "text",
                                "name": "interview_respondent_information_patient_date_of_birth_date",
                                "visibleIf": "{interview_respondent_information_patient_date_of_birth_checkbox} empty",
                                "titleLocation": "hidden",
                                "inputType": "date"
                            }, {
                                "type": "checkbox",
                                "name": "interview_respondent_information_patient_date_of_birth_checkbox",
                                "startWithNewLine": false,
                                "titleLocation": "hidden",
                                "choices": ["Unknown"]
                            }
                        ],
                        "title": "Date of Birth"
                    }, {
                        "type": "text",
                        "name": "relationship_to_patient",
                        "title": "Relationship to patient"
                    }, {
                        "type": "text",
                        "name": "respondent_address",
                        "startWithNewLine": false,
                        "title": "Respondent address"
                    }, {
                        "type": "text",
                        "name": "interview_respondent_information_patient_telephone_mobile_number",
                        "startWithNewLine": false,
                        "title": "Telephone (mobile) number",
                        "inputType": "tel"
                    }
                ],
                "visible": false,
                "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = false",
                "title": "Interview respondent information",
                "showNumber": true,
                "showQuestionNumbers": "off"
            }
        ],
        "navigationTitle": "Person",
        "navigationDescription": "Person's info"
    }, {
        "name": "page3",
        "elements": [
            {
                "type": "image",
                "name": "third_page_image",
                "width": "600px",
                "imageLink": "/Content/Images/examples/covid/03.png",
                "imageHeight": 690,
                "imageWidth": 500
            }, {
                "type": "panel",
                "name": "patient_symptoms_from_disease_onset",
                "elements": [
                    {
                        "type": "panel",
                        "name": "date_of_first_symptom_onset",
                        "elements": [
                            {
                                "type": "text",
                                "name": "date_of_first_symptom_onset_date",
                                "width": "314px",
                                "titleLocation": "hidden",
                                "enableIf": "{date_of_first_symptom_onset_checkbox} empty",
                                "inputType": "date"
                            }, {
                                "type": "checkbox",
                                "name": "date_of_first_symptom_onset_checkbox",
                                "startWithNewLine": false,
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "No symptoms",
                                        "enableIf": "{date_of_first_symptom_onset_checkbox} <> ['item2']"
                                    }, {
                                        "value": "item2",
                                        "text": "Unknown",
                                        "enableIf": "{date_of_first_symptom_onset_checkbox} <> ['item1']"
                                    }
                                ],
                                "colCount": 2
                            }, {
                                "type": "radiogroup",
                                "name": "question1",
                                "title": "Fever (≥38 °C) or history of fever ",
                                "titleLocation": "default",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }
                        ],
                        "title": "Date of first symptom onset"
                    }, {
                        "type": "radiogroup",
                        "name": "sore_throat",
                        "title": "Sore throat",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "runny_nose",
                        "title": "Runny nose",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "cough",
                        "title": "Cough",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "shortness_of_Breath",
                        "title": "Shortness of Breath",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "vomiting",
                        "title": "Vomiting",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "nausea",
                        "title": "Nausea",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "diarrhea",
                        "title": "Diarrhea",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }
                ],
                "title": "Patient symptoms (from disease onset)",
                "startWithNewLine": false,
                "showNumber": true,
                "showQuestionNumbers": "off"
            }
        ],
        "navigationTitle": "Symptoms",
        "navigationDescription": "Patient symptoms"
    }, {
        "name": "page4",
        "elements": [
            {
                "type": "image",
                "name": "fouth_page_image",
                "width": "600px",
                "imageLink": "/Content/Images/examples/covid/04.png",
                "imageHeight": 567,
                "imageWidth": 500
            }, {
                "type": "panel",
                "name": "initial_sample_collection",
                "elements": [
                    {
                        "type": "text",
                        "name": "date_respiratory_sample_collected",
                        "title": "Date respiratory sample collected",
                        "inputType": "date"
                    }, {
                        "type": "radiogroup",
                        "name": "what_type_of_respiratory_sample_was_collected",
                        "title": "What type of respiratory sample was collected?",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Nasal swab"
                            }, {
                                "value": "item2",
                                "text": "Throat swab "
                            }, {
                                "value": "item3",
                                "text": "Nasopharyngeal swab"
                            }
                        ],
                        "hasOther": true,
                        "otherText": "Other, specify",
                        "colCount": 2
                    }, {
                        "type": "panel",
                        "name": "has_baseline_serum_been_taken_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "has_baseline_serum_been_taken_radio",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "has_baseline_serum_been_taken_date",
                                "visible": false,
                                "visibleIf": "{has_baseline_serum_been_taken_radio} = 'item1'",
                                "startWithNewLine": false,
                                "title": "Date baseline serum taken",
                                "titleLocation": "default",
                                "inputType": "date"
                            }
                        ],
                        "title": "Has baseline serum been taken?"
                    }, {
                        "type": "panel",
                        "name": "were_other_samples_collected_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "were_other_samples_collected_radio",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "were_other_samples_collected_textbox",
                                "visible": false,
                                "visibleIf": "{were_other_samples_collected_radio} = 'item1'",
                                "startWithNewLine": false,
                                "title": "Which samples:"
                            }, {
                                "type": "text",
                                "name": "were_other_samples_collected_date",
                                "visible": false,
                                "visibleIf": "{were_other_samples_collected_radio} = 'item1'",
                                "startWithNewLine": false,
                                "title": "Date taken",
                                "inputType": "date"
                            }
                        ],
                        "title": "Were other samples collected? "
                    }
                ],
                "title": "Initial sample collection",
                "startWithNewLine": false,
                "showNumber": true,
                "showQuestionNumbers": "off"
            }
        ],
        "navigationTitle": "Sample",
        "navigationDescription": "Initial sample"
    }, {
        "name": "page5",
        "elements": [
            {
                "type": "image",
                "name": "fifth_image",
                "width": "600px",
                "imageLink": "/Content/Images/examples/covid/05.png",
                "imageHeight": 713,
                "imageWidth": 500
            }, {
                "type": "panel",
                "name": "clinical_course_complications_panel",
                "elements": [
                    {
                        "type": "panel",
                        "name": "hospitalization_required_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "hospitalization_required_radio",
                                "width": "49%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "hospitalization_required_hospital",
                                "width": "313px",
                                "startWithNewLine": false,
                                "title": "Name of hospital",
                                "titleLocation": "default",
                                "enableIf": "{hospitalization_required_radio} = 'item1'",
                                "readOnly": true
                            }
                        ],
                        "title": "Hospitalization required?"
                    }, {
                        "type": "radiogroup",
                        "name": "icu_Intensive_Care_Unit_admission_required",
                        "title": "ICU (Intensive Care Unit) admission required",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "acute_respiratory_distress_syndrome_ards",
                        "title": "Acute Respiratory Distress Syndrome (ARDS)",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "panel",
                        "name": "pneumonia_by_chest_xray_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "pneumonia_by_chest_xray_radio",
                                "width": "49%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Not applicable (no X-ray performed)"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "pneumonia_by_chest_xray_date",
                                "width": "313px",
                                "startWithNewLine": false,
                                "title": "Date",
                                "titleLocation": "default",
                                "enableIf": "{pneumonia_by_chest_xray_radio} = 'item1'",
                                "readOnly": true,
                                "inputType": "date"
                            }
                        ],
                        "title": "Pneumonia by chest X-ray "
                    }, {
                        "type": "panel",
                        "name": "other_severe_or_life_threatening_illness_suggestive_of_an_infection_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "other_severe_or_life_threatening_illness_suggestive_of_an_radio",
                                "width": "49%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "other_severe_or_life_threatening_illness_suggestive_of_an_specify",
                                "width": "313px",
                                "startWithNewLine": false,
                                "title": "Specify:",
                                "titleLocation": "default",
                                "enableIf": "{other_severe_or_life_threatening_illness_suggestive_of_an_radio} = 'item1'",
                                "readOnly": true
                            }
                        ],
                        "title": "Other severe or life-threatening illness suggestive of an infection"
                    }, {
                        "type": "radiogroup",
                        "name": "mechanical_ventilation_required",
                        "title": "Mechanical ventilation required",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "extracorporeal_membrane_oxygenation_emo",
                        "title": "Extracorporeal membrane oxygenation (EMO)",
                        "titleLocation": "default",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }
                ],
                "title": "Clinical Course: Complications",
                "startWithNewLine": false,
                "showNumber": true,
                "showQuestionNumbers": "off"
            }
        ],
        "navigationTitle": "Complications",
        "navigationDescription": "Clinical Course"
    }, {
        "name": "page6",
        "elements": [
            {
                "type": "panel",
                "name": "human_exposures_in_the_days_before_illness_onset",
                "elements": [
                    {
                        "type": "panel",
                        "name": "have_you_travelled_within_the_last_days_domestically_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "have_you_travelled_within_the_last_days_domestically_radio",
                                "width": "50%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "panel",
                                "name": "have_you_travelled_within_the_last_days_domestically_date_panel",
                                "elements": [
                                    {
                                        "type": "text",
                                        "name": "have_you_travelled_within_the_last_days_domestically_date_from",
                                        "title": "from",
                                        "titleLocation": "default",
                                        "inputType": "date"
                                    }, {
                                        "type": "text",
                                        "name": "have_you_travelled_within_the_last_days_domestically_date_to",
                                        "startWithNewLine": false,
                                        "title": "to",
                                        "titleLocation": "default",
                                        "inputType": "date"
                                    }
                                ],
                                "visible": false,
                                "visibleIf": "{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                                "title": "Dates of travel"
                            }, {
                                "type": "text",
                                "name": "have_you_travelled_within_the_last_days_domestically_regions",
                                "visible": false,
                                "visibleIf": "{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                                "title": "Regions:",
                                "titleLocation": "default"
                            }, {
                                "type": "text",
                                "name": "have_you_travelled_within_the_last_days_domestically_cities_visited",
                                "visible": false,
                                "visibleIf": "{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                                "startWithNewLine": false,
                                "title": "Cities visited:",
                                "titleLocation": "default"
                            }
                        ],
                        "title": "Have you travelled within the last 14 days domestically?",
                        "showQuestionNumbers": "off"
                    }, {
                        "type": "panel",
                        "name": "have_you_travelled_within_the_last_days_internationall_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "have_you_travelled_within_the_last_days_internationall_radio",
                                "width": "50%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "panel",
                                "name": "have_you_travelled_within_the_last_days_internationall_date_panel",
                                "elements": [
                                    {
                                        "type": "text",
                                        "name": "have_you_travelled_within_the_last_days_internationall_date_from",
                                        "title": "from",
                                        "titleLocation": "default",
                                        "inputType": "date"
                                    }, {
                                        "type": "text",
                                        "name": "have_you_travelled_within_the_last_days_internationall_date_to",
                                        "startWithNewLine": false,
                                        "title": "to",
                                        "titleLocation": "default",
                                        "inputType": "date"
                                    }
                                ],
                                "visible": false,
                                "visibleIf": "{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                                "title": "Dates of travel"
                            }, {
                                "type": "text",
                                "name": "have_you_travelled_within_the_last_days_internationall_countries",
                                "visible": false,
                                "visibleIf": "{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                                "title": "Countries visited:",
                                "titleLocation": "default"
                            }, {
                                "type": "text",
                                "name": "have_you_travelled_within_the_last_days_internationall_cities",
                                "visible": false,
                                "visibleIf": "{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                                "startWithNewLine": false,
                                "title": "Cities visited:",
                                "titleLocation": "default"
                            }
                        ],
                        "title": "Have you travelled within the last 14 days internationally?",
                        "showQuestionNumbers": "off"
                    }, {
                        "type": "panel",
                        "name": "in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_radio",
                                "width": "50%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_date",
                                "startWithNewLine": false,
                                "title": "Date of last contact",
                                "titleLocation": "default",
                                "enableIf": "{in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_radio} = 'item1'",
                                "readOnly": true,
                                "inputType": "date"
                            }
                        ],
                        "title": "In the past 14 days, have you had contact with a anyone with suspected or confirmed 2019-nCoV infection?",
                        "showQuestionNumbers": "off"
                    }, {
                        "type": "panel",
                        "name": "patient_attended_festival_or_mass_gathering_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "patient_attended_festival_or_mass_gathering_radio",
                                "width": "50%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "patient_attended_festival_or_mass_gathering_specify",
                                "startWithNewLine": false,
                                "title": "Specify:",
                                "titleLocation": "default",
                                "enableIf": "{patient_attended_festival_or_mass_gathering_radio} = 'item1'",
                                "readOnly": true
                            }
                        ],
                        "title": "Patient attended festival or mass gathering",
                        "showQuestionNumbers": "off"
                    }, {
                        "type": "radiogroup",
                        "name": "patient_exposed_to_person_with_similar_illness",
                        "width": "50%",
                        "title": "Patient exposed to person with similar illness",
                        "hideNumber": true,
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            }, {
                                "value": "item2",
                                "text": "No"
                            }, {
                                "value": "item3",
                                "text": "Unknown"
                            }
                        ],
                        "colCount": 3
                    }, {
                        "type": "radiogroup",
                        "name": "location_of_exposure",
                        "width": "50%",
                        "title": "Location of exposure",
                        "hideNumber": true,
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Home"
                            }, {
                                "value": "item2",
                                "text": "Hospital"
                            }, {
                                "value": "item3",
                                "text": "Workplace"
                            }, {
                                "value": "item4",
                                "text": "Tour group"
                            }, {
                                "value": "item5",
                                "text": "Unknown"
                            }
                        ],
                        "hasOther": true,
                        "otherText": "Other, specify:",
                        "colCount": 3
                    }, {
                        "type": "panel",
                        "name": "patient_visited_or_was_admitted_to_inpatient_health_facility_panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "patient_visited_or_was_admitted_to_inpatient_health_facility_radio",
                                "width": "50%",
                                "titleLocation": "hidden",
                                "choices": [
                                    {
                                        "value": "item1",
                                        "text": "Yes"
                                    }, {
                                        "value": "item2",
                                        "text": "No"
                                    }, {
                                        "value": "item3",
                                        "text": "Unknown"
                                    }
                                ],
                                "colCount": 3
                            }, {
                                "type": "text",
                                "name": "patient_visited_or_was_admitted_to_inpatient_health_facility_specify",
                                "startWithNewLine": false,
                                "title": "Specify:",
                                "titleLocation": "default",
                                "enableIf": "{patient_visited_or_was_admitted_to_inpatient_health_facility_radio} = 'item1'",
                                "readOnly": true
                            }, {
                                "type": "panel",
                                "name": "patient_visited_outpatient_treatment_facility_panel",
                                "elements": [
                                    {
                                        "type": "radiogroup",
                                        "name": "patient_visited_outpatient_treatment_facility_radio",
                                        "width": "50%",
                                        "titleLocation": "hidden",
                                        "choices": [
                                            {
                                                "value": "item1",
                                                "text": "Yes"
                                            }, {
                                                "value": "item2",
                                                "text": "No"
                                            }, {
                                                "value": "item3",
                                                "text": "Unknown"
                                            }
                                        ],
                                        "colCount": 3
                                    }, {
                                        "type": "text",
                                        "name": "patient_visited_outpatient_treatment_facility_specify",
                                        "startWithNewLine": false,
                                        "title": "Specify:",
                                        "titleLocation": "default",
                                        "enableIf": "{patient_visited_outpatient_treatment_facility_radio} = 'item1'",
                                        "readOnly": true
                                    }
                                ],
                                "title": "Patient visited outpatient treatment facility"
                            }, {
                                "type": "panel",
                                "name": "patient_visited_traditional_healer_panel",
                                "elements": [
                                    {
                                        "type": "radiogroup",
                                        "name": "patient_visited_traditional_healer_radio",
                                        "width": "50%",
                                        "titleLocation": "hidden",
                                        "choices": [
                                            {
                                                "value": "item1",
                                                "text": "Yes"
                                            }, {
                                                "value": "item2",
                                                "text": "No"
                                            }, {
                                                "value": "item3",
                                                "text": "Unknown"
                                            }
                                        ],
                                        "colCount": 3
                                    }, {
                                        "type": "text",
                                        "name": "patient_visited_traditional_healer_specify",
                                        "startWithNewLine": false,
                                        "title": "Specify:",
                                        "titleLocation": "default",
                                        "enableIf": "{patient_visited_traditional_healer_radio} = 'item1'",
                                        "readOnly": true
                                    }, {
                                        "type": "panel",
                                        "name": "patient_occupation_specify_location_facility_panel",
                                        "elements": [
                                            {
                                                "type": "checkbox",
                                                "name": "patient_occupation_specify_location_facility_checkbox",
                                                "titleLocation": "hidden",
                                                "choices": [
                                                    {
                                                        "value": "item1",
                                                        "text": "Health care worker"
                                                    }, {
                                                        "value": "item2",
                                                        "text": "Working with animals "
                                                    }, {
                                                        "value": "item3",
                                                        "text": "Health laboratory worker"
                                                    }, {
                                                        "value": "item4",
                                                        "text": "Student"
                                                    }
                                                ],
                                                "hasOther": true,
                                                "otherText": "Other, specify:",
                                                "colCount": 3
                                            }, {
                                                "type": "text",
                                                "name": "patient_occupation_specify_location_facility_specify",
                                                "visible": false,
                                                "visibleIf": "{patient_occupation_specify_location_facility_checkbox} notempty",
                                                "title": "For each occupation, please specify location or facility:",
                                                "titleLocation": "default"
                                            }
                                        ],
                                        "title": "Patient occupation (specify location/facility)",
                                        "showQuestionNumbers": "off"
                                    }
                                ],
                                "title": "Patient visited traditional healer"
                            }
                        ],
                        "title": "Patient visited or was admitted to inpatient health facility",
                        "showQuestionNumbers": "off"
                    }
                ],
                "title": "Human exposures in the 14 days before illness onset",
                "showNumber": true
            }
        ],
        "navigationTitle": "Exposures",
        "navigationDescription": "Before illness"
    }, {
        "name": "page7",
        "elements": [
            {
                "type": "image",
                "name": "seventh_image",
                "width": "600",
                "imageLink": "/Content/Images/examples/covid/07.png",
                "imageHeight": 441,
                "imageWidth": 500
            }, {
                "type": "panel",
                "name": "status_of_form_completion_panel",
                "elements": [
                    {
                        "type": "boolean",
                        "name": "status_of_form_completion_boolean",
                        "title": "Form completed",
                        "isRequired": true,
                        "labelTrue": "Yes",
                        "labelFalse": "No or partially"
                    }, {
                        "type": "radiogroup",
                        "name": "status_of_form_completion_radio",
                        "visible": false,
                        "visibleIf": "{status_of_form_completion_boolean} = false",
                        "title": "Reason:",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Missed"
                            }, {
                                "value": "item2",
                                "text": "Not attempted"
                            }, {
                                "value": "item3",
                                "text": "Not performed"
                            }, {
                                "value": "item4",
                                "text": "Refusal"
                            }
                        ],
                        "hasOther": true,
                        "otherText": "Other, specific:"
                    }
                ],
                "title": "Status of form completion",
                "startWithNewLine": false,
                "showNumber": true,
                "showQuestionNumbers": "off"
            }
        ],
        "navigationTitle": "Completion",
        "navigationDescription": "Status of form"
    }
],
"showProgressBar": "top",
"progressBarType": "buttons"
};

export default json;