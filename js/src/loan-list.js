// LoanList Component

class LoanList extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {
		console.log(`Clicked...${evt.target.dataset.idx}`);
		this.props.clickListener(evt.target.dataset.idx);
	}

	render() {
		// <button type="button" class="list-group-item" data-idx="{{idx}}">{{title}}</button>
		if (this.props.loans.length === 0) {
			return (
				<div>
					<h3>Loan List</h3>
					<div className="list-group">
						<button type="button" className="list-group-item">
							No Loans Entered
						</button>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h3>Loan List</h3>
					<div className="list-group">
						{this.props.loans.map((loan, idx) => (
							<button
								key={idx}
								onClick={this.handleClick}
								type="button"
								className="list-group-item"
								data-idx={idx}>
								{loan.title}
							</button>
						))}
					</div>
				</div>
			);
		}
	}
}

export default LoanList;
