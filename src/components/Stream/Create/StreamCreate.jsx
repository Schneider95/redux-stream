import React from 'react';
import { Field } from 'redux-form';

class StreamCreateJsx extends React.Component {

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  }

  renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // return <input {...formProps.input} />
    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value} p
    //   />
    // );

    const className= `field ${meta.error && meta.touched ? 'error': ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  render = () => {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          component={this.renderInput}
          label="Title"
          name="title"
        />
        <Field
          component={this.renderInput}
          label="Description"
          name="description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default StreamCreateJsx;
