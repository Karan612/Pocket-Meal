import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';

class Progress extends Component {    
    constructor(props){
        super(props)
        this.state = {
        }      
        this.onCompleteComponent = this.onCompleteComponent.bind(this)  
    }

    onCompleteComponent = () => {
        this.setState({
            isCompleted: true
        })
    }

    render () {                
        var json = {                        
            showProgressBar: "top",
            goNextPageAutomatic: true,
            showNavigationButtons: true,
            pages: [
                {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "spot",
                            title: "How Long Will You Be At This Spot?",
                            choices: ["Less Than 30 Minutes", "More Than 30 Minutes"]
                        }
                    ]
                }, {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "foodType",
                            title: "What Is Your Preferred Food Type?",                 
                            choices: ["Vegetarian", "Non-Vegetarian"]
                        }
                    ]
                }, {
                    questions: [
                        {
                            type: "text",
                            name: "allergy",
                            title: "Are You Allergic To Any Food Item?",
                        }
                    ]
                }
            ],
            completedHtml: ""
            };
            
            var surveyRender = !this.state.isCompleted ? (
                <Survey.Survey 
                    json = { json }
                    showCompletedPage = { false }
                    onComplete = { this.onCompleteComponent }
                />
            ) : null
            
            var onSurveyCompletion = this.state.isCompleted ? (
                <div className = "Form__Submission black">Your Answers Have Been Submitted. Please Wait Till We Find A Suitable Donor.</div>
            ) : null;

        return (
            <div className = "Questionnaire">
                <div>
                    <p className = "f2 b code navy bb br-pill tc">Questionnaire</p>
                    { surveyRender }
                    { onSurveyCompletion }
                </div>
            </div>
        );
    }
}

export default Progress;