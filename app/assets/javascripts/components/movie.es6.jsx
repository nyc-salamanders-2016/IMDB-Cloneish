class Movie extends React.Component{
	render(){
		// debugger
		return (
			<div>
			  <img src={this.props.data.Poster} /><br/>
				<span className="movie-name">{this.props.data.Title}</span>
				<ul>
					<li><span className="movie-item">{this.props.data.Year}</span></li>
					<li><span className="movie-item">{this.props.data.Type}</span></li><br/>
				</ul>
			</div>
		)
	}
}