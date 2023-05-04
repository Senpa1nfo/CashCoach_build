import {useContext, useEffect, useState} from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

import Header from './components/elements/header/Header';
import Adding from './components/elements/adding/Adding';
import Menu from './components/elements/menu/Menu';
import WorkingArea from './components/elements/workingArea/WorkingArea';

const App = () => {

	const {store} = useContext(Context);
	const [changeBoolean, setChangeBoolean] = useState<boolean>();

	const getBool = (bool: boolean) => {
		setChangeBoolean(bool);
	}

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!store.isAuth) {
		return (
			<Header/>
		)
	}

  	// const SendLinkButton = () => {
	// 	return (
	// 		<div>
	// 			Активуйте акаунт
	// 			<button onClick={() => store.sendLink()}>Отправить письмо</button>
	// 		</div>			
	// 	)
	// }

	return (
		<div>
            <Header></Header>
            <main>
                <Adding getChangeBool={getBool}></Adding>
                <div className="main-area-wrapper">
                    <Menu></Menu>
					<WorkingArea getBool={changeBoolean}></WorkingArea>
                </div>
            </main>
        </div>     
	);
}

export default observer(App);
