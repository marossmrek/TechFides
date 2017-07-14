import React from 'react';
import {Field, reduxForm} from 'redux-form';
import 'bootstrap/js/modal';

const validate = values => {

    function CosmonautAge(dateString) {
        return ((Date.now() - new Date(dateString)) / (31557600000));
    }

    const errors = {};
    if (!values.name) {
        errors.name = 'Name is required'
    } else if (values.name.trim().length < 4) {
        errors.name = 'Name must be 4 characters or more'
    }
    if (!values.lastname) {
        errors.lastname = 'Last name required'
    } else if (values.lastname.trim().length < 3) {
        errors.lastname = 'Last name must be 3 characters or more'
    }
    if (!values.birthday) {
        errors.birthday = 'Birthday required'
    } else if (CosmonautAge(values.birthday) < 18) {
        errors.birthday = 'You are not 18 years old'
    }
    if (!values.superpower) {
        errors.superpower = 'superpower required'
    } else if (values.superpower.trim().length < 3) {
        errors.lastname = 'Super power must be 3 characters or more'
    }
    return errors;
};

const renderField = ({input, label, type, meta: {touched, error,}}) => (
    <div>
        {touched && error && <div className="alert alert-danger">
            <strong>Wrong!</strong> {error}
        </div>}
        <label>{label}</label>
        <div className="form-group">
            <input className="form-control" {...input} type={type} placeholder={label}/>
        </div>
    </div>
);

export class Form extends React.Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="col-md-offset-2 col-md-8">
                <div className="row">
                    <div className="col-xs-8"><h3>My awesome cosmonaut list</h3></div>
                    <div className="col-xs-4">
                        <button type="button" className="btn btn-info pull-right my-btn" data-toggle="modal"
                                data-target="#newCosModal">New
                            cosmonaut
                        </button>
                    </div>
                </div>
                <div className="modal fade" id="newCosModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Add new cosmonaut</h4>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <Field name="name" type="text" component={renderField} label="Name"/>
                                    <Field name="lastname" type="text" component={renderField} label="Last name"/>
                                    <Field name="birthday" type="date" component={renderField} label="Birthday"/>
                                    <Field name="superpower" type="text" component={renderField} label="Super power"/>
                                    <button className="btn btn-success" type="submit">Send to the universe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Form = reduxForm({
    form: 'Form',
    validate
})(Form);
