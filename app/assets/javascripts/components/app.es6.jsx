class App extends React.Component {
	render(){
		return(
			<div>
			<header>
			  <label>Search for Stuff</label>
	      <Header />
			</header>

				<section>
			    <h3>Stuff to Watch with Edwin in the title</h3>
			    <MovieList/>
			  </section>
			</div>
		)
	}
}