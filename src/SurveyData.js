const json = {
    "showProgressBar": "top",
    "progressBarType": "buttons",
    "title": "Data reporting form for suspected and probable cases of COVID-19",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "panel",
                    "name": "first_page_container_panel_1",
                    "elements": [
                        {
                        "type": "image",
                        "name": "first_page_image",
                        //"imageLink": "https://www.pinclipart.com/picdir/big/532-5323786_coronavirus-cartoon-for-kids-clipart.png",
                        "imageLink": "https://content.energage.com/company-images/45140/logo.png",
                        "imageHeight": 450,
                        "imageWidth": 450
                        }
                    ]
                }, {
                    "type": "panel",
                    "name": "first_page_container_panel_2",
                    "elements": [
                        {
                            "type": "text",
                            "name": "unique_case_id_textbox",
                            "startWithNewLine": false,
                            "title": "Unique Case Number ID / Cluster Number (if applicable):",
                            "hideNumber": true,
                            "inputType": "number",
                            "isRequired": true,
                            "requiredErrorText": "Please insert Case Number ID"
                        }, {
                            "type": "panel",
                            "name": "data_collector_information",
                            "titleLocation": "left",
                            "elements": [
                                {
                                    "type": "text",
                                    "name": "name_of_data_collector",
                                    "title": "Name of data collector",
                                    "isRequired": true,
                                    "requiredErrorText": "Please insert data collector's full name",
                                    "validators": [
                                        {
                                            "type": "regex",
                                            "text": "Only letters, spaces and dashes are allowed",
                                            "regex": "^[a-zA-Z -]+$"
                                        },
                                        {
                                            "type": "text",
                                            "text": "You must enter name with at least 5 letters",
                                            "minLength": 5
                                        }
                                    ]
                                }, {
                                    "type": "text",
                                    "name": "data_collector_institution",
                                    "title": "Data collector Institution",
                                    "startWithNewLine": false,
                                    "isRequired": true,
                                    "requiredErrorText": "Please insert health institution",
                                    "validators": [
                                        {
                                            "type": "regex",
                                            "text": "Allowed: letters, spaces, dashes, dots and numbers",
                                            "regex": "^[a-zA-Z0-9 -]+$"
                                        },
                                        {
                                            "type": "text",
                                            "text": "You must enter institution with length at least 5",
                                            "minLength": 5
                                            },
                                    ]
                                }, {
                                    "type": "text",
                                    "name": "data_collector_telephone_number",
                                    "title": "Data collector telephone number",
                                    "inputType": "tel",
                                    "isRequired": true,
                                    "requiredErrorText": "Please insert telephone number",
                                    "validators": [
                                        {
                                        "type": "text",
                                        "text": "You must enter number with length between 5-25",
                                        "minLength": 5,
                                        "maxLength": 25,
                                        "allowDigits": true
                                        },
                                        {
                                        "type": "regex",
                                        "text": "Only digits are allowed in the telephone number",
                                        "regex": "^[0-9]+$"
                                        }
                                    ]
                                }, {
                                    "type": "text",
                                    "name": "email",
                                    "title": "Email",
                                    "inputType": "email",
                                    "startWithNewLine": false,
                                    "isRequired": true,
                                    "requiredErrorText":"Please insert email",
                                    "validators": [
                                        {
                                            "type": "email",
                                            "text": "Please type valid form of email"
                                        }
                                    ]
                                }, {
                                    "name": "form_completion_date",
                                    "title": "Date of form completion",
                                    "inputType": "date",
                                    "dateFormat": "mm/dd/yy",
                                    "type": "text", 
                                    "isRequired": true,
                                    "titleLocation": "left",
                                    "requiredErrorText":"Please insert a valid date in form mm/dd/yyyy",
                                    "min": "2021-12-01",
                                    "max": "2024-12-01"
                                }, {
                                    "type": "signaturepad",
                                    "name": "signature",
                                    "title": "Data collector's signature", 
                                    "isRequired": true,
                                    "width": "400%",
                                    "height": 100,
                                    "titleLocation": "left",
                                    "penColor": "#9370db",
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
                    "type": "radiogroup",
                    "name": "is_the_person_providing_the_information_is_the_patient",
                    "title": "Is the person providing the information the patient?",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices":[
                        "Yes",
                        "No"
                    ],
                    "colCount": 2
                }, {
                    "type": "panel",
                    "name": "case_identifier_information",
                    "elements": [
                        {
                            "type": "text",
                            "name": "first_name",
                            "isRequired": true,
                            "title": "First name",
                            "requiredErrorText": "Please insert patient first name",
                            "validators": [
                                {
                                    "type": "regex",
                                    "text": "Only letters, spaces and dashes are allowed",
                                    "regex": "^[a-zA-Z -]+$"
                                },
                                {
                                    "type": "text",
                                    "text": "You must enter name with at least 3 letters",
                                    "minLength": 3
                                }
                            ]      
                        }, {
                            "type": "text",
                            "name": "last_name",
                            "startWithNewLine": false,
                            "isRequired": true,
                            "title": "Last name",
                            "requiredErrorText": "Please insert patient last name",
                            "validators": [
                                {
                                    "type": "regex",
                                    "text": "Only letters, spaces and dashes are allowed",
                                    "regex": "^[a-zA-Z -]+$"
                                },
                                {
                                    "type": "text",
                                    "text": "You must enter last name with at least 3 letters",
                                    "minLength": 3
                                }
                            ]
                        }, {
                            "type": "text",
                            "name": "case_identifier_information_patient_national_social_number",
                            "startWithNewLine": false,
                            "isRequired": true,
                            "requiredErrorText": "Please insert national social number",
                            "title": "National social number / identifier",
                            "validators": [
                                {
                                "type": "text",
                                "text": "You must enter 13 digits",
                                "minLength": 13,
                                "maxLength": 13,
                                "allowDigits": true
                                },
                                {
                                "type": "regex",
                                "regex": "^[0-9]{13}$"
                                }
                            ]
                        },  {
                            "type": "panel",
                            "name": "case_identifier_information_patient_age",
                            "elements": [
                                {
                                    "type": "dropdown",
                                    "name": "case_identifier_information_patient_country_of_residence",
                                    "title": "Country of residence",
                                    "choicesByUrl": {
                                        "url": "https://surveyjs.io/api/CountriesExample",
                                        "valueName": "name"
                                    }
                                },
                                {
                                    "type": "text",
                                    "name": "case_identifier_information_patient_date_of_birth_date",
                                    "inputType": "date",
                                    "startWithNewLine": false,
                                    "title": "Date of Birth",
                                    "requiredErrorText": "Please insert date of birth"                        
                                },
                                {
                                    "type": "text",
                                    "name": "case_identifier_information_patient_age_years",
                                    "title": "Age",
                                    "startWithNewLine": false,
                                    "titleLocation": "default",
                                    "inputType": "number"
                                }
                            ]
                        },
                        {
                            "type": "panel",
                            "name": "case_identifier_patient_contact_info",
                            "elements": [
                                {
                                    "type": "text",
                                    "name": "case_identifier_information_patient_email",
                                    "title": "Email",
                                    "inputType": "email",
                                    "validators": [
                                        {
                                            "type": "email",
                                            "text": "Please type valid form of email"
                                        }
                                    ]
                                }, {
                                    "type": "text",
                                    "name": "case_identifier_information_patient_address",
                                    "startWithNewLine": false,
                                    "title": "Address",
                                }, 
                                {
                                    "type": "text",
                                    "name": "case_identifier_information_patient_telephone_mobile_number",
                                    "title": "Telephone (mobile) number",
                                    "startWithNewLine": false,
                                    "inputType": "tel",
                                    "validators": [
                                        {
                                        "type": "text",
                                        "text": "You must enter number with length between 5-25",
                                        "minLength": 5,
                                        "maxLength": 25,
                                        "allowDigits": true
                                        },
                                        {
                                        "type": "regex",
                                        "text": "Only digits are allowed in the telephone number",
                                        "regex": "^[0-9]+$"
                                        }
                                    ]
                                }
                             ]
                        },
                        {
                            "type": "radiogroup",
                            "name": "case_identifier_information_sex",
                            "title": "Sex",
                            "choices": [
                                {
                                    "value": "item1",
                                    "text": "Male"
                                }, {
                                    "value": "item2",
                                    "text": "Female"
                                }
                            ],
                            "colCount": 2
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
                    "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = 'Yes'",
                    "title": "Case Identifier Information",
                    "showNumber": true,
                    "showQuestionNumbers": "off"
                }, {
                    "type": "panel",
                    "name": "interview_respondent_information_if_the_persons_providing_the_information_is_not_the_patient",
                    "elements": [
                        {
                            "type": "text",
                            "name": "first_name_respondent",
                            "title": "First name of respondent",
                            "requiredErrorText": "Please insert respondent first name",
                            "isRequired": true,
                            "validators": [
                                {
                                    "type": "regex",
                                    "text": "Only letters, spaces and dashes are allowed",
                                    "regex": "^[a-zA-Z -]+$"
                                },
                                {
                                    "type": "text",
                                    "text": "You must enter name with at least 3 letters",
                                    "minLength": 3
                                }
                            ]
                            
                        }, {
                            "type": "text",
                            "name": "last_name_respondent",
                            "requiredErrorText": "Please insert respondent last name",
                            "startWithNewLine": false,
                            "isRequired": true,
                            "title": "Last name of respondent",
                            "validators": [
                                {
                                    "type": "regex",
                                    "text": "Only letters, spaces and dashes are allowed",
                                    "regex": "^[a-zA-Z -]+$"
                                },
                                {
                                    "type": "text",
                                    "text": "You must enter last name with at least 3 letters",
                                    "minLength": 3
                                }
                            ]
                        }, {
                            "type": "dropdown",
                            "name": "relationship_to_patient",
                            "title": "Relationship to patient",
                            "choices": [
                                "Husbad",
                                "Wife",
                                "Child",
                                "Sibling",
                                "Brother",
                                "Sister",
                                "Friend",
                                "Girlfriend",
                                "Boyfriend",
                                "Other"
                            ]
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
                            "inputType": "tel",
                            "validators": [
                                {
                                "type": "text",
                                "text": "You must enter number with length between 5-25",
                                "minLength": 5,
                                "maxLength": 25,
                                "allowDigits": true
                                },
                                {
                                "type": "regex",
                                "text": "Only digits are allowed in the telephone number",
                                "regex": "^[0-9]+$"
                                }
                            ]
                        }
                    ],
                    "visible": false,
                    "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = 'No'",
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
                                    "inputType": "date",
                                    "enableIf": "{date_of_first_symptom_onset_checkbox} empty",
                                    "title": "Date of first symptom onset",
                                    "titleLocation": "left"
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
                                    "type": "rating",
                                    "rateMax": 10,
                                    "name": "fever",
                                    "title": "Fever (≥37 °C) or history of fever ",
                                    "titleLocation": "default",
                                },
                                {
                                    "name": "throat",
                                    "startWithNewLine": false,
                                    "title": "Sore throat",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                }, {
                                    "name": "nose",
                                    "startWithNewLine": false,
                                    "title": "Runny nose",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                }, {
                                    "name": "cough",
                                    "title": "Cough",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                }, {
                                    "name": "breath",
                                    "startWithNewLine": false,
                                    "title": "Shortness of Breath",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                }, {
                                    "name": "vomiting",
                                    "startWithNewLine": false,
                                    "title": "Vomiting",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                }, {
                                    "name": "nausea",
                                    "title": "Nausea",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                }, {
                                    "name": "diarrhea",
                                    "startWithNewLine": false,
                                    "title": "Diarrhea",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                },
                                {
                                    "name": "backache",
                                    "startWithNewLine": false,
                                    "title": "Back ache",
                                    "titleLocation": "default",
                                    "type": "rating",
                                    "rateMax": 10
                                }
                            ],
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
                    "type": "panel",
                    "name": "initial_sample_collection",
                    "elements": [
                        {
                            "type": "text",
                            "name": "date_respiratory_sample_collected",
                            "title": "Date respiratory sample collected",
                            "inputType": "date",
                            "titleLocation": "left"
                        }, {
                            "type": "panel",
                            "name": "type_of_respiratory_sample_collected",
                            "title": "What type of respiratory sample was collected?",
                            "elements": [{
                            "type": "radiogroup",
                            "name": "what_type_of_respiratory_sample_was_collected",
                            "titleLocation": "hidden",
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
                                }, {
                                    "value": "item4",
                                    "text": "Other"
                                }
                            ],
                            "colCount": 1
                        }, {
                            "type": "text",
                            "name": "other_type_of_respiratory_sample_collected",
                            "visible": false,
                            "visibleIf": "{what_type_of_respiratory_sample_was_collected} = 'item4'",
                            "startWithNewLine": false,
                            "isRequired": true,
                            "title": "Specify",
                            "titleLocation": "default",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regex",
                                    "text": "Only letters, spaces and dashes are allowed",
                                    "regex": "^[a-zA-Z -]+$"
                                },
                                {
                                    "type": "text",
                                    "text": "You must enter at least 3 letters",
                                    "minLength": 3
                                }
                            ]
                        }]
                        }, {
                            "type": "panel",
                            "startWithNewLine": false,
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
                                    "colCount": 1
                                }, {
                                    "type": "text",
                                    "name": "were_other_samples_collected_textbox",
                                    "visible": false,
                                    "visibleIf": "{were_other_samples_collected_radio} = 'item1'",
                                    "startWithNewLine": false,
                                    "isRequired": true,
                                    "title": "Which samples:",
                                    "validators": [
                                        {
                                            "type": "regex",
                                            "text": "Only letters, spaces and dashes are allowed",
                                            "regex": "^[a-zA-Z -]+$"
                                        },
                                        {
                                            "type": "text",
                                            "text": "You must enter at least 3 letters",
                                            "minLength": 3
                                        }
                                    ]
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
                 "type": "matrixdropdown",
                 "name": "clinical_course_complications_panel",
                 "title": "Clinical Course: Complications",
                 "columns": [
                  {
                   "name": "hospitalization_required_radio",
                   "title": "Required?",
                   "cellType": "radiogroup",
                   "choices": [
                    {
                     "value": "item1",
                     "text": "Yes"
                    },
                    {
                     "value": "item2",
                     "text": "No"
                    }
                   ]
                  },
                  {
                   "name": "name_of_hospital",
                   "title": "Name of hospital",
                   "cellType": "text"
                  },
                  {
                   "name": "rate",
                   "title": "Please rate your health"
                  }
                 ],
                 "choices": [
                  "Excellent",
                  "Good",
                  "Average",
                  "Fair",
                  "Poor"
                 ],
                 "columnMinWidth": "130px",
                 "rows": [
                  {
                   "value": "hospitalization",
                   "text": "Hospitalization"
                  },
                  {
                   "value": "icu_Intensive_Care_Unit_admission",
                   "text": "ICU (Intensive Care Unit) admission"
                  },
                  {
                   "value": "acute_respiratory_distress_syndrome",
                   "text": "Acute Respiratory Distress Syndrome (ARDS)"
                  },
                  {
                   "value": "pneumonia_by_chest_xray",
                   "text": "Pneumonia by chest X-ray"
                  },
                  {
                   "value": "mechanical_ventilation",
                   "text": "Mechanical ventilation"
                  },
                  {
                   "value": "icu_Intensive_Care_Unit_admission",
                   "text": "Extracorporeal membrane oxygenation (EMO)"
                  }
                 ]
                }
               ],
            "navigationTitle": "Complications",
            "navigationDescription": "Clinical Course"
        }, {
            "name": "page6",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "close_contact_other_person",
                    "title": "Have you been in close contact with a healthy person?",
                    "hideNumber": true,
                    "choices":[
                        "Yes",
                        "No"
                    ],
                    "colCount": 2
                }, 
                {
                    "type": "matrixdynamic",
                    "name": "contact_people",
                    "title": "Please enter people you know you've been in contact with",
                    "visible": false,
                    "visibleIf": "{close_contact_other_person} = 'Yes'",
                    "showNumber": true,
                    "columns": [
                        {
                            "name": "relativeType",
                            "title": "Relation",
                            "cellType": "dropdown",
                            "width": 350,
                            "choices": [
                                "father",
                                "mother",
                                "brother",
                                "sister",
                                "son",
                                "daughter",
                                "spouse",
                                "cousin",
                                "grandparent",
                                "uncle/aunt",
                                "partner",
                                "friend",
                                "other"
                            ]
                        }, {
                            "name": "firstName",
                            "title": "First name",
                            "cellType": "text",
                            "width": 350
                        }, {
                            "name": "lastName",
                            "title": "Last name",
                            "cellType": "text",
                            "width": 350
                        },
                        {
                            "name": "lastContact",
                            "title": "Last contact",
                            "cellType": "text",
                            "width": 350
                        }
                    ],
                    "rowCount": 1,
                    "detailPanelMode": "underRow",
                    "addRowText": "Add a person in contact",
                    "removeRowText": "Remove the person in contact",
                    "width": 350
                }
            ],
            "navigationTitle": "Exposures",
            "navigationDescription": "Before illness"
        }, 
        {
            "name": "page7",
            "elements": [
                {
                    "type": "text",
                    "name": "time_taken_textbox",
                    "startWithNewLine": false,
                    "title": "How much time (minutes) did you need to complete the survey",
                    "hideNumber": true,
                    "titleLocation": "left",
                    "inputType": "number",
                    "width": 100
                }
            ],
            "navigationTitle": "Completion",
            "navigationDescription": "Status of form"
        }
    ]
    };
    
    export default json;