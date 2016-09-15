class Movie extends React.Component{
	render(){
		// debugger
		return (
			<li className="movie-item">
			  <span className="movie-name">{this.props.data.Title}</span>
			</li>
		)
	}
}