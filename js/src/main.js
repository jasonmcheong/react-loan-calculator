import LoanList from './loan-list.js';
import LoanForm from './loan-form.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.addLoan = this.addLoan.bind(this);
		this.loadLoan = this.loanLoan.bind(this);

		this.state = {
			loans: this.props.loans,
			loan: this.props.loan,
		};
	}

	addLoan(loan) {
		this.setState({
			loans: loans.push(loan),
		});
	}

	loanLoan(loanIdx) {
		console.log(`Loading #${loanIdx}`);
		this.setState({
			loan: loans[loanIdx],
		});
	}

	render() {
		return (
			<div>
				<LoanForm loan={this.state.loan} submitListener={this.addLoan} />
				<LoanList loans={loans} clickListener={this.loadLoan} />
			</div>
		);
	}
}

let loans = []; // array to store Loan objects

let listRenderDOM = document.querySelector('.loan-display');
ReactDOM.render(<App loans={loans} />, listRenderDOM);
