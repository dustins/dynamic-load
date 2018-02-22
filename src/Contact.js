import React, {Component} from 'react';
import {Form, Text, TextArea} from './Form';


export default class Contact extends Component {
    render() {
        return <Form onSubmit={this.handleSubmit}>
            {(formApi) => (
                <form onSubmit={formApi.submitForm}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Text field="email" id="email"/>
                    </div>

                    <div>
                        <label htmlFor="comment">Comment:</label>
                        <TextArea field="comment" id="comment"/>
                    </div>

                    <button type="submit">Leave Comment</button>
                </form>
            )}
        </Form>
    }
}