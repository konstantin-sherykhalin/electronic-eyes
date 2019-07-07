import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

export default () => null;

/*
export default class Main extends React.Component {
	state = {
		fio:		'',
		phone:		'',
		mail:		'',
		birthday:	'',
		fiz:		'',
		inn:		'',
		grants:		1,
		photo:		'',
	};

	handle = (type,e) => this.setState({[type]:e.target.value});

	find_file = () => document.getElementById('input_file').click();
	open_file = (e) => {
		let file   = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => this.setState({photo:reader.result});
		// reader.onerror = (err) => console.log(err);
	}

	send = () => {
		localStorage.st = {
			...localStorage.st,
			grant_recepient: this.state,
		};
	}

	render() {
		let state = this.state;
		console.log(state);

		return (
			<>
				<div id="menu">
					<div className="menu_tab selected">Общая информация</div>
					<div className="menu_tab">Финансовый план</div>
					<div className="menu_tab">Юридические данные</div>
				</div>
				<div id="area_container">
				<div id="area">
					<h2>Заявка на грант</h2>
					<div className="row">
						<div className="left">ФИО</div>
						<div className="right">
							<input type="text" value={state.fio} onChange={e => this.handle('fio',e)} />
						</div>
					</div>
					<div className="row">
						<div className="left">Телефон</div>
						<div className="right">
							<input type="text" value={state.phone} onChange={e => this.handle('phone',e)} />
						</div>
					</div>
					<div className="row">
						<div className="left">Электронный адрес</div>
						<div className="right">
							<input type="text" value={state.mail} onChange={e => this.handle('mail',e)} />
						</div>
					</div>
					<div className="row">
						<div className="left">Дата рождения</div>
						<div className="right">
							<input type="date" value={state.birthday} onChange={e => this.handle('birthday',e)} />
						</div>
					</div>
					<div className="row">
						<div className="left">Физическое лицо</div>
						<div className="right">
							<input type="text" value={state.fiz} onChange={e => this.handle('fiz',e)} />
						</div>
					</div>
					<div className="row">
						<div className="left">ИНН</div>
						<div className="right">
							<input type="text" value={state.inn} onChange={e => this.handle('inn',e)} />
						</div>
					</div>
					<div className="row">
						<div className="left">Гранты</div>
						<div className="right">
							<select value={state.grants} onChange={e => this.handle('grants',e)}>
								<option value={1}>Номер 1</option>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="left">Прикрепить фото паспорта</div>
						<div className="right">
							<div className="file_input" onClick={this.find_file}>
								<div className="dot" /> <div className="dot" /> <div className="dot" />
							</div>
							<input id="input_file" type="file" value="" onChange={this.open_file} />
						</div>
					</div>
					<div className="row">
						<div className="left" />
						<div className="right">
							<input type="checkbox" />
							<div>
								<p>
									Подтверждаю свое согласие с условиями <Link to="#">Пользовательского соглашения</Link> и даю свое согласие на 
									обработку моих персональных данных в соответствии с положениями <Link to="#">Политики конфиденциальности</Link>.
								</p>
								<div className="button_area">
									<button onClick={this.send}>Далее</button>
									<p>Изменения сохранены</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</>
		);
	}
}

// <div>
// 	<p><Link to="/lk/expert">Эксперт</Link></p>
// 	<p><Link to="/lk/grant_giver">Грантодатель</Link></p>
// 	<p><Link to="/lk/grant_recepient">Грантополучатель</Link></p>
// 	<p><Link to="/lk/regulator">Регулятор</Link></p>
// </div>
*/
