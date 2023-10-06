import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSubmitEventHandler(e) {
    e.preventDefault();

    this.props.addContact(this.state);
  }

  onNameChangeEventHandler(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onTagChangeEventHandler(e) {
    this.setState(() => {
      return {
        tag: e.target.value,
      };
    });
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={this.onNameChangeEventHandler}
        />
        <input
          type="text"
          placeholder="Tag"
          onChange={this.onTagChangeEventHandler}
        />
        <button type="submit">Tambah </button>
      </form>
    );
  }
}

export default ContactInput;
