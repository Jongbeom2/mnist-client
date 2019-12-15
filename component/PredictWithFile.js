import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
		margin: '20px 0 0 20px',
		display: 'grid'
  },
  title: {
    width:'500px',
    fontSize:'20px',
    textAlign:'center',
  },
  content: {
    width:'500px',
    fontSize:'15px',
  }
}))
const predictWithFile = (props) => {
	const { value, index } = props;
	const [data, setData] = React.useState('');
	const [result,setResult] = React.useState('');
	const classes = useStyles();
	const handleFileInput = (e) => {
		// Init
		setData(e.target.files[0]);
		let file = e.target.files[0];
		let reader = new FileReader();
		// Read File
		if (file) {
			reader.readAsDataURL(file);
		}
		// Draw
		reader.onload = (e) => {
			let image = document.querySelector('#img');
			image.src = e.target.result;
		}
	}
	const handleSubmit = () => {
		const formData = new FormData();
		formData.append('file', data);
		return axios.post("https://app-mnist.herokuapp.com/number", formData, {
			headers: {
				mode: 'no-cors',
				'Access-Control-Allow-Origin': '*'
			}
		}).then(res => {
			alert('결과는 ' + res.data +' 입니다.');
			setResult(res.data);
			console.log(res);
		}).catch(err => {
			alert('실패했습니다.')
			console.log(err);
		})
	}
	return (
		<div >
			{value === index && <div className={classes.root}>
				<div className={classes.content}>파일은 반드시 28*28 크기의 이미지 파일이어야합니다.</div>
				<div style={{height:'500px', width: '500px', border: '1px black solid', marginTop: '20px',  }} >
					<img id="img" style={{width:'500px'}}/>
				</div>
				<div style={{margin:'20px 0 0 0 '}}>
					<div className={classes.content}>결과 : {result}</div>
				</div>
				<div style={{margin:'20px 0 0 0 '}}>
					<input style={{ display: "none" }} type="file" id="file" name="file" onChange={handleFileInput} accept="image/*" />
					<Button style={{ height: '35px', width: '380px', marginRight: '20px' }} variant="contained">
						<label for="file" style={{ width: '100%' }}>파일 선택</label>
					</Button>
					<Button style={{ height: '35px', width: '100px' }} variant="contained" color="primary" onClick={handleSubmit}>
						제출
					</Button>
				</div>
			</div>}
		</div>
	)
}
export default predictWithFile;