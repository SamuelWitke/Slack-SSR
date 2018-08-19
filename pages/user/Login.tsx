import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { userSignOn } from "../../store/user";
import { Field, reduxForm, formValueSelector } from "redux-form";
//import { WrappedFieldProps} from 'redux-form';
import {
  Button,
  Form,
  Input as InputComponent,
  Label,
  Message
} from "semantic-ui-react";
import { signUpValidateAync, sigunUpValidate } from "../../utils/submit";

export interface LoginFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const renderInput = ({
  input,
  label,
  required,
  width,
  inline,
  meta: { touched, error },
  ...rest
}: any) => (
  <Form.Field error={!!(touched && error)} required={required} inline={inline}>
    {label && <label>{label}</label>}
    <InputComponent required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

class ContactForm extends React.Component<any & any, any> {
  handleSubmit = () => {
    setTimeout(() => {
      const { username } = this.props;
      const user: any = {
        username
      };
      this.props.loadUser(user);
    }, Math.random() * 1000);
  };
  render() {
    const {
      error,
      submitSucceeded,
      handleSubmit,
      pristine,
      reset,
      submitting
    } = this.props;
    return (
      <Form
        error={error != null}
        success={submitSucceeded}
        loading={submitting}
        className="form-horizontal"
        onSubmit={handleSubmit(this.handleSubmit)}
      >
        {error && <Message error header="Error" content={error} />}
        {submitSucceeded && (
          <Message
            success
            header="Form Completed"
            content="You're all signed up"
          />
        )}
        <Field
          name="username"
          component={renderInput}
          placeholder="User Name"
          type="text"
        />
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </Form>
    );
  }
}

const selector = formValueSelector("Login");

function mapStateToProps(state: any) {
  const username = selector(state, "username") || "";
  return {
    username
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    loadUser: (user: any) => dispatch(userSignOn(user))
  };
}

const FormRedux: any = connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);

export default reduxForm({
  form: "Login", // a unique identifier for this form,
  fields: ["username"],
  validate: sigunUpValidate, // Not Async Validation,
  asyncValidate: signUpValidateAync as any
})(FormRedux as any);
