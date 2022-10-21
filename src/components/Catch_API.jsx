import React from "react";
import { useEffect } from "react";

const catch_API = () => {
  useEffect(() => {
    fetch(
      `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
    ).then((response) =>
      response
        .json()
        .then(({ logementData }) => console.log(logementData))
        .catch((error) => console.log(error))
    );
  }, []);
};

export default catch_API;

/*
⚠️ : useEffect déclenche fetch
⚠️ : useState stock retour API dans le state

1)		Call API + tableau dépendance vide (important)

2)		Stocker infos retournées par API

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})  👈
 
    useEffect(() => {
        setDataLoading(true)
        fetch(`http://localhost:8000/survey`)
            .then((response) => response.json()
            .then(({ surveyData }) => console.log(surveyData))
            .catch((error) => console.log(error))
        )
    }, [])
 
    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            <QuestionContent>{surveyData[questionNumber]}   </QuestionContent>
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}
 
export default Survey
*/
