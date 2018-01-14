import React from 'react';
//import Design from './Design';

class Designs extends React.Component {
  placeholder = "Search design tags"

  search(e) {
    e.preventDefault();
    console.log(this.searchInput.value)
  }

	render() {
    return (
    <div className="designs">
      <h2>Designs</h2>
      {/*<Design critiqueCount={5}/>*/}
      <form className="search" onSubmit={this.search.bind(this)}>
        <input 
          type="text"
          required placeholder={this.placeholder}
          ref={(input) => {this.searchInput = input}}
        />
        <button type="submit">Search</button>
      </form>
    </div>
    );
  }
}

export default Designs;
