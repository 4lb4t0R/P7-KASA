import style from "../styles/Accueil";

function Accueil() {
  return (
    <section>
      ici le sysytème de fetch et exportation vers module page d'accueil pour
      integration data recuperee?
    </section>
  );
}

export default Accueil;

/*
⚠️ : useEffect déclenche fetch
⚠️ : useState stock retour API dans le state



		Call API + tableau dépendance vide (important)


useEffect(() => {
   fetch(`http://localhost:8000/survey`)
        .then((response) => response.json()
        .then(({ surveyData }) => console.log(surveyData))
        .catch((error) => console.log(error))
    )
}, [])



		Stocker infos retournées par API

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
