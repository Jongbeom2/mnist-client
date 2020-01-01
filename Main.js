import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PredictWithFile from './component/PredictWithFile';
import Guide from './component/Guide';
import Home from './component/Home';
const Main = () => {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div >
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange}>
					<Tab label = "홈"/>
					<Tab label = "가이드라인"/>
					<Tab label = "파일 업로드"/>
				</Tabs>
			</AppBar>
			<Home value={value} index = {0}/>
			<Guide value={value} index = {1}/>
			<PredictWithFile value={value} index = {2}/>
		</div>
	)
}
export default Main;