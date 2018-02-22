import React from 'react';
import Loadable from 'react-loadable';

export const Form = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.Form),
  loading: () => null
});

export const Select = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.Select),
  loading() {
    return <div>Loading...</div>
  }
});

export const Text = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.Text),
  loading() {
    return <div>Loading...</div>
  }
});

export const TextArea = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.TextArea),
  loading() {
    return <div>Loading...</div>
  }
});

export const RadioGroup = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.RadioGroup),
  loading() {
    return <div>Loading...</div>
  }
});

export const Radio = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.Radio),
  loading() {
    return <div>Loading...</div>
  }
});

export const Checkbox = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.Checkbox),
  loading() {
    return <div>Loading...</div>
  }
});

export const StyledSelect = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.StyledSelect),
  loading() {
    return <div>Loading...</div>
  }
});

export const StyledText = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.StyledText),
  loading() {
    return <div>Loading...</div>
  }
});

export const StyledTextArea = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.StyledTextArea),
  loading() {
    return <div>Loading...</div>
  }
});

export const StyledRadioGroup = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.StyledRadioGroup),
  loading() {
    return <div>Loading...</div>
  }
});

export const StyledRadio = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.StyledRadio),
  loading() {
    return <div>Loading...</div>
  }
});

export const StyledCheckbox = Loadable({
  loader: () => import(/* webpackChunkName: "react-form" */ 'react-form').then(ReactForm => ReactForm.StyledCheckbox),
  loading() {
    return <div>Loading...</div>
  }
});