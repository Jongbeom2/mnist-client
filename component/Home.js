import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px 0 0 20px'
  },
  title: {
    width:'500px',
    fontSize:'20px',
    textAlign:'center',
  },
  content: {
    width:'500px',
    fontSize:'15px',
    margin:'20px 0'
  }
}))

const Home = (props) => {
  const classes = useStyles();
  const {value, index} = props;
	return (
    <div className={classes.root}>
      {value === index &&<div >
        <div className={classes.title}>
          숫자 판별 앱
        </div>
        <div className={classes.content}>
          <li>0 ~ 9 사이의 숫자 손글씨를 보고 숫자를 판별하는 앱입니다.</li>
          <li>Mnist이용한 숫자 판별 AI가 구현되어있습니다.</li>
          <li>python을 이용하여 구현하였습니다.</li>
          <ol>
          <li>가이드라인 탭을 클릭하여 가이드라인을 보고 숫자 손글씨 이미지를 생성하세요.</li>
          <li>파일 업로드 탭을 클릭하여 숫자 이미지를 업로드하세요.</li>
          <li>인공지능이 판별한 숫자와 비교해보세요.</li>
          </ol>
        </div>
      </div>}
    </div>
	)
}
export default Home;