class SearchBar extends React.Component {
	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSearch(this.refs.search.value);
	}

	render() {
		return (
			<div>
			  <form id="search-form" onSubmit={this.handleSubmit}>
			  	<input ref="search" id="search" type="text" name="query"/>
			  </form>
			</div>
		)
	}
}


