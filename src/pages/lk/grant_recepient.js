import React from 'react';
import {Link} from 'react-router-dom';

import {firestore as db} from '../../config/firebase';
import API from '../../services/api';

export default class Menu extends React.Component {
	state = {
		selected: 1,
	};

	render() {
		let state = this.state;

		return (
			<>
				<div id="menu">
					<div className={'menu_tab'+(state.selected==0 ? ' selected' : '')} onClick={_=>this.setState({selected:0})}>Общая информация</div>
					<div className={'menu_tab'+(state.selected==1 ? ' selected' : '')} onClick={_=>this.setState({selected:1})}>Финансовый план</div>
					<div className={'menu_tab'+(state.selected==2 ? ' selected' : '')}>Юридические данные</div>
				</div>
				<div id="area_container"><div id="area">
				{[
					<Overall next={_=>{this.setState({selected:1});window.scrollTo(0,0)}} />,
					<Finance/>,
				][state.selected]}
				</div></div>
			</>
		);
	}
}

class Overall extends React.Component {
	state = {
		fio:		'Тимур',
		phone:		'+79171234567',
		mail:		'',
		birthday:	'',
		inn:		'',
		grants:		1,
		photo:		'',
	};

	async componentDidMount() {
		// console.log(await API(db.collection('grant_recepient')));
		setTimeout(_=>this.setState({
			fio:		'Тимур Кинзябулатов',
			phone:		'+79171234567',
			mail:		'millioner-iz-kolhoza@mail.ru',
			birthday:	'2000-04-17',
			inn:		'0202123123',
			grants:		1,
			photo:		'',
		}),3000);
	}

	handle = (type,e) => this.setState({[type]:e.target.value});

	find_file = () => document.getElementById('input_file').click();
	open_file = (e) => {
		let file   = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => this.setState({photo:reader.result});
		// reader.onerror = (err) => console.log(err);
	}

	send = async () => {
		// localStorage.st = {
		// 	...localStorage.st,
		// 	grant_recepient: this.state,
		// };
		// await db.collection('grant_recepient').add(this.state);
		this.props.next();
	}

	render() {
		let state = this.state;

		return (
			<>
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
					<div className="left">ИНН</div>
					<div className="right">
						<input type="text" value={state.inn} onChange={e => this.handle('inn',e)} />
					</div>
				</div>
				<div className="row">
					<div className="left">Гранты</div>
					<div className="right">
						<select value={state.grants} onChange={e => this.handle('grants',e)}>
							<option value={1}>Начинающий фермер</option>
							<option value={2}>Семейный сельхоз</option>
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
			</>
		);
	}
}

class Finance extends React.Component {
	supplier_list = [
		'ООО "Рога и копыта"',
		'ПАО "Строймаш"',
	];
	state = {
		bank: -1,
		bank_state: 0,
		approved: true,
		video: '',
		expenses: [
			{
				title: 'Корова',
				supplier: 0,
				supplier_name: '',
				num: '10',
				cost: '125',
				source: 'Грант',
			},
			{
				title: 'Трактор',
				supplier: 1,
				supplier_name: '',
				num: '2',
				cost: '420',
				source: 'Грант',
			},
			{
				title: 'Стойло',
				supplier: 0,
				supplier_name: 'Самостоятельно',
				num: '1',
				cost: '10',
				source: 'Личные средства',
			},
		],
		new_expense: {
			title: '',
			supplier: -1,
			supplier_name: '',
			num: '',
			cost: '',
			source: '',
		},

		waiting: false,
		result: false,
	};

	handle = (type,e) => this.setState({[type]:e.target.value});

	handle_bank = (value) => {
		this.setState({
			bank: value,
			bank_state: value,
		});
	}

	handle_new = (type,value) => {
		this.setState(state => ({
			new_expense: {
				...state.new_expense,
				[type]: value,
			},
		}));
	}

	send = () => {
		this.setState({waiting:true});
		setTimeout(_ => {
			this.setState({waiting:false,result:true});
		},1000);
	}

	render() {
		let state = this.state;

		return (
			<>
				<h2>Заявка на грант</h2>
				<div className="block orange">
					<div className="inner">
						<h3>Проверка наличия средств</h3>
						<p>
							Мы выделяем вам грант, который покрывает до 90% от объема реализации вашего проекта. Для подтверждения серьезности ваших 
							намерений вам необходимо подтвердить наличие собственных средств. Объем собственных средств зависит от объема инвестиций 
							проекта. Пожалуйста, укажите, банк, которые может подтвердить вашу  финансовую состоятельность.
						</p>
						<div className="caption">
							<select value={state.bank} onChange={e => this.handle_bank(e.target.value)}>
								<option value={-1} disabled>Выберите банк</option>
								<option value={0}>Сбербанк</option>
								<option value={1}>Россельхозбанк</option>
								<option value={2}>Уралсиб</option>
								<option value={3}>Ак Барс Банк</option>
							</select>
							{[
								<p className="grey">На проверке</p>,
								<p className="proved">Одобрено</p>,
							][state.bank]}
						</div>
					</div>
				</div>
				<div className="block green">
					<div className="inner">
						<h3>Проверка наличия недвижимости</h3>
						<p>
							Для реализации проекта вам необходимо подтвердить наличие земли и строений. Мы можем получить эти данные в реестре ЕГРН. 
							Для этого нам нужна доверенность от вас. Проставьте пожалуйста галочку в чек-боксе, чтобы подписать доверенность.
						</p>
						<div className="caption">
							<input type="checkbox" checked />
							<p>Одобрено</p>
						</div>
					</div>
				</div>
				<div className="block orange">
					<div className="inner">
						<h3>Видеоролик</h3>
						<p>
							Запишите на видео презентацию о себе, своем хозяйстве и планах на расширение. Желательно снимать видео на территории вашего 
							хозяйства, чтобы подтвердить текущее состояние вашего хозяйства. Загрузите видео на Youtube или облачное хранилище и 
							поделитесь ссылкой на него ниже.
						</p>
						<div className="caption">
							<div className="video"><input type="text" value="youtube.com" /></div>
							<p className="grey"></p>
						</div>
					</div>
				</div>
				<div className="block green">
					<div className="inner">
						<h3>Смета расходов</h3>
						<p>Грант выделяется под конкретные расходы. Заполните пожалуйста смету - необходимо расписать, что вы планируете приобрести.</p>
						<table border="1">
						<tbody>
							<tr>
								<th style={{width:160}}>Статья расходов</th>
								<th style={{width:155}}>Поставщик</th>
								<th style={{width:100,fontSize:12}}>Кол-во, ед.</th>
								<th style={{width:100,fontSize:12}}>Стоимость, тыс. Р</th>
								<th style={{width:190}}>Источник финансирования</th>
							</tr>
							{state.expenses.map((e,i) => (
								<tr key={i}>
									<td><p>{e.title}</p></td>
									<td><p>{e.supplier_name || this.supplier_list[e.supplier]}</p></td>
									<td><p style={{textAlign:'right'}}>{e.num}</p></td>
									<td><p style={{textAlign:'right'}}>{e.cost}</p></td>
									<td><p>{e.source}</p></td>
								</tr>
							))}
							<tr>
								<td>
									<textarea placeholder="Название покупки" onChange={e => this.handle_new('',e.target.value)}>{state.new_expense.title}</textarea>
								</td>
								<td>
									<select style={{width:155}} value={state.new_expense.supplier} onChange={e => this.handle_new('supplier',e.target.value)}>
										<option value={-1}>Выбрать из списка рекомендованных</option>
										{this.supplier_list.map((e,i) => (<option key={i} value={i}>{e}</option>))}
									</select>
									<input
										type="text"
										value={state.new_expense.supplier_name}
										placeholder="или указать свой"
										onChange={e => this.handle_new('supplier_name',e.target.value)}
									/>
								</td>
								<td>
									<input
										type="text"
										style={{textAlign:'right'}}
										value={state.new_expense.num}
										placeholder="Заполнить"
										onChange={e => this.handle_new('num',e.target.value)}
									/>
								</td>
								<td>
									<input
										type="text"
										style={{textAlign:'right'}}
										value={state.new_expense.cost}
										placeholder="Авто расчет"
										onChange={e => this.handle_new('cost',e.target.value)}
									/>
								</td>
								<td>
									<textarea placeholder="Сам/грант" onChange={e => this.handle_new('source',e.target.value)}>{state.new_expense.source}</textarea>
								</td>
							</tr>
						</tbody>
						</table>
					</div>
				</div>
				<div className="block grey">
					<div className="inner">
						{state.waiting ? (
							<img className="waiting" src="https://psv4.userapi.com/c848436/u144877927/docs/d16/c17ed4b7f1c1/123-02.png?extra=ouPbQDFjf3jYCbWPxhahyLVsazYkFLOZsvkeJGhx8ZqKo4DGU-3CKnJIiZlXw-O1aBJdZYfKZX5ISU2NrvqkmPg-6YRIQqkOT2qAzkGiwhZ_9KfCotCwH3BZJU0BqMRnWnNQUQXbHczd9lUa_3MMwEQ" />
						) : !state.result ? (
							<button className="send" onClick={this.send}>Отправить</button>
						) : (
							<>
							<h3>Оценка</h3>
							<img src="https://psv4.userapi.com/c848028/u144877927/docs/d13/108d798d8cce/5-01.png?extra=x-7A0Pwh-kux3-R_SiHpavYKhPZTjxCq2BMww7VceSDouOjIvz6-WlvGlGH29CrWFbYqUukjC65O-uKSEgF_jad_AgQn239Ytpvdbwst-UhmblOo28eciRaf4x32KgW1QGyk3_nfEPtTsqGpfsGO7nc" />
							</>
						)}
					</div>
				</div>
			</>
		);
	}
}
