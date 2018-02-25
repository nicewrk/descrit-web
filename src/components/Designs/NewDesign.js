import React from 'react';

class NewDesign extends React.Component {
  createDesign(event) {
    event.preventDefault();
    const design = {
      title: this.title.value,
      description: this.description.value
    };
    console.log(design);
  }

  render() {
    return (
      <div className="new-design">

        <h2>New Design</h2>

        <form className="new-design-form" onSubmit={(e) => this.createDesign(e)}>
          <input 
            type="text"
            required placeholder="title"
            ref={(input) => this.title = input}
          />
          <textarea
            placeholder="Describe your design..."
            ref={(input) => this.description = input}
          >
          </textarea>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default NewDesign;
