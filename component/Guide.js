import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px 0 0 20px'
  },
  content: {
    border : '1px solid black',
    margin: '20px 0px 0px 0px',
    width: '500px',
    padding: '10px',
    height:'500px'
  },
}))

const Guide = (props) => {
  const classes = useStyles();
  const { value, index } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const getSteps = () => {
    return ['그림판 열기', '크기 조절', '숫자 그리기','이미지 저장'];
  }
  const steps = getSteps();
  const getStepContent = (stepIndex) =>{
    switch (stepIndex) {
      case 0:
        return '윈도우 기본 앱 그림판을 실행합니다.';
      case 1:
        return '[홈] - [크기 조정]을 클릭합니다.\n[기준]에서 [픽셀]을 클릭합니다.\n가로와 세로를 28*28로 설정합니다.';
      case 2:
        return '자유롭게 숫자를 그립니다.';
      case 3:
        return '[파일] - [저장]을 클릭합니다.\n그림을 저장합니다.';
      default:
        return '오류';
    }
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      {value === index && <div >
        <Stepper style={{padding: '0px', width: '500px'}} activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <div className={classes.content}>파일 업로드 탭을 클릭하여 파일을 업로드하세요!</div>
              <Button  style={{width: '100px', marginTop: '20px'}} onClick={handleReset}>다시 보기</Button>
            </div>
          ) : (
              <div>
                <div className={classes.content}>
                  {getStepContent(activeStep).split('\n').map(line=>{
                    return <div>{line}<br/></div>
                  })}
                </div>
                <div style={{marginTop:'20px'}}>
                  <Button disabled={activeStep === 0} onClick={handleBack} style={{width: '100px', marginRight: '20px'}}>
                    이전
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext} style={{width: '100px'}}>
                    {activeStep === steps.length - 1 ? '왼료' : '다음'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>}
    </div>
  )
}
export default Guide;