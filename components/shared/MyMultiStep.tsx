import MultiStep from "react-multistep";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";


function MyMultiStep(){
    return (
        <MultiStep activeStep={0} prevButton={{title: 'Back',style:{ background: 'red' }}} nextButton={{title: 'Back',style:{ background: 'red' }}}>
            <StepOne title="Step 1" />
            <StepTwo title="Step 2" />
            <StepThree title="Step 3"/>
        </MultiStep>
    )
}

export default MyMultiStep;