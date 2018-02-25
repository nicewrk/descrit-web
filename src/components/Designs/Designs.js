import React from 'react';
import {Link} from 'react-router-dom';
import './Designs.css';

import {fetchDesigns} from '../../services/design-brain-api';

class Designs extends React.Component {
  constructor() {
    super();

    this.addDesign = this.addDesign.bind(this);
    
    this.state = {
      designs: []
    };
  }

  addDesign(design) {
    const designs = this.state.designs;
    designs.push(design);

    this.setState({
      designs: designs
    });
  }

  placeholder = "Search design tags"

  search(e) {
    e.preventDefault();
    console.log(this.searchInput.value)
  }

	render() {
    return (
      <div className="designs">

        <h2>Designs</h2>

        <div>
          <Link 
            to='/designs/new'
          >
            Create New Design
          </Link>
        </div>

        {/*<Design critiqueCount={5}/>*/}
        <form className="search" onSubmit={this.search.bind(this)}>
          <input 
            type="text"
            required placeholder={this.placeholder}
            ref={(input) => {this.searchInput = input}}
          />
          <button type="submit">Search</button>
        </form>
        
        {/* Designs */}
        <div className="designs-grid">
          <ul>
            {fetchDesigns().map((d) => <li>{d.designID}</li>)}
          </ul>
        </div>

      </div>
    );
  }
}

export default Designs;
