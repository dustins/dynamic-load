import React, {Component} from 'react';
import {Form, Text} from './Form';

export default class Signin extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit() {
        console.log(arguments)
    }
    
    render() {
        return <Form onSubmit={this.handleSubmit}>
            {(formApi) => (
                <form onSubmit={formApi.submitForm}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <Text field="username" id="username"/>
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <Text type="password" field="password" id="password"/>
                    </div>

                    <button type="submit">Sign In</button>
                </form>
            )}
        </Form>
    }
}