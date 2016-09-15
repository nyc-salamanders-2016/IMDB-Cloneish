class App extends React.Component {
		constructor() {
		super()
		this.state = {
			movies: []
		}
		this.handleSearch = this.handleSearch.bind(this)
	}

	handleSearch(query) {
		debugger;
		$.ajax({
			url: "http://www.omdbapi.com/?s=" + query + '',
			method: "GET"
		})
		.done(function(response) {
			this.setState({
				movies: response.Search
			})
		}.bind(this))
	}


	render(){
		return(
			<div>
				<header>
		      <Header />
		      <SearchBar onSearch={this.handleSearch} />
				</header>

				<section>
			    <h3>Stuff to Watch with Edwin in the title</h3>
			    <MovieList movies={this.state.movies} />
			  </section>
			</div>
		)
	}
}