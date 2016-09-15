class Movie extends React.Component{
	render(){
		// debugger
		let data = this.props.data
		return (
			<div>
			  <img src={data.Poster} /><br/>
				<span className="movie-name">{data.Title}</span>
				<ul>
					<li><span className="movie-item">{data.Year}</span></li>
					<li><span className="movie-item">{data.Type}</span></li><br/>
				</ul>
			</div>
		)
	}
}