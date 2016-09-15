class MovieList extends React.Component {

	constructor(){
		super()
		this.state = {
			movies: []
		}
		this.fetchMovies = this.fetchMovies.bind(this)
	}

	componentDidMount() {
		this.fetchMovies();
	}

	fetchMovies(){
		$.ajax({
			url: 'http://www.omdbapi.com/?s=Edwin',
			method: 'get'
		}).done((response) => {
			// console.log(response)
			// debugger
		  	this.setState({movies: response.Search})
		  })
	}

	render(){
		return(
			<ul>
				{
					this.state.movies.map((movie, idx) => {
						return (<Movie key={idx} data={movie} />)
					})
				}
			</ul>
		)
	}
}