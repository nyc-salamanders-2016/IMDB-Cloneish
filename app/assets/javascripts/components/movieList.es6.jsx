class MovieList extends React.Component {

	constructor(){
		super()
		this.state = {
			movies: []
		}
		this.fetchMovies = this.fetchMovies.bind(this)
		this.showMovies = this.showMovies.bind(this)
	}

	componentDidMount() {
		this.fetchMovies();
	}

	fetchMovies(){
		$.ajax({
			url: 'http://www.omdbapi.com/?s=Edwin',
			method: 'get'
		}).done((response) => {
		  	this.setState({movies: response.Search})
		  })
	}

	showMovies(movies) {
		this.setState({
			movies: [movies]
		})
	}

	render(){
		return(
			<ul>
				{
					this.props.movies.map((movie, idx) => {
						return (<Movie key={idx} data={movie} />)
					})
				}
			</ul>
		)
	}
}