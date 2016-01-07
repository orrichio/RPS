


var Game = React.createClass({
	// initial starting variables
	getInitialState: function(){
		return ({	
			computerScore: 0,
			humanScore: 0,
			winningPlayer: "",
			gameOptions: this.props.moves,
			humanMove: "",
			computerMove: "",
		})

	},
		ShootAction: function(value) {
			this.setState({humanMove: this.props.moves[value]});
			var computerTurn = this.computerTurn();
			var humanTurn = this.props.moves[value]
			console.log(computerTurn);
			this.setState({computerMove: this.props.moves[computerTurn]});
			console.log(value, computerTurn);
			if (value == computerTurn) {
				this.setState({winningPlayer: "Tie!"});

			}
			else if ((value - computerTurn + 3) % 3 == 1) {
				this.setState({winningPlayer: "You Win!"});
				this.setState({humanScore:  this.state.humanScore += 1});
			}
			else {
				this.setState({winningPlayer: "Computer Wins!"});
				this.setState({computerScore: this.state.computerScore += 1});
			}

	},
	computerTurn: function() {
		return Math.floor(Math.random() * 3);
	},
	render: function() {
		return (
			<div>
			<div className="container-fluid">
				<div className="jumbotron text-center">
				<div className="row">
					  <div className="col-md-6">
					  <h1>Computer</h1>
						  <p>Score: {this.state.computerScore}</p>
						  <h1>{this.state.computerMove}</h1>

					  </div>
					  <div className="col-md-6">
					  <h1>You</h1>
						  <p>Score: {this.state.humanScore}</p>
						  <h1>{this.state.humanMove}</h1>

					  </div>
					</div>
				</div>
					  <div className="col-md-12 text-center">
						  <h1>{this.state.winningPlayer}</h1>
					  </div>
			</div>
					
			<GameOptions playGame={this.ShootAction} options={this.props.moves}/>
				</div>
			)
	}
})

var GameOptions = React.createClass({
	getInitialState: function(){
		return {
			null
		};
	},

	render: function() {

		return (
				<nav className="navbar navbar-default navbar-fixed-bottom">
					<div className="row">
					{this.props.options.map(function(move, i){
						 var play = this.props.playGame.bind(null, i);
						return(
								<div className="col-md-4" key={i}><button type="button" onClick={play} className="btn btn-primary btn-lg btn-block">{move}</button></div>
							);
					}, this)}
					</div>
				</nav>
			)
	}
})

ReactDOM.render(<Game moves={['Rock', 'Paper', 'Scissors']}/>, document.getElementById("root"));