import React, { Component } from 'react';
import SingleInput from '../../../../forms/single-input';
import AmountInput from '../AmountInput';
import { postDatabase } from '../../../../api/apiDatabase';

const FIELDS_ARRAY = [
  { stateKey: 'firstName', title: 'First Name' },
  { stateKey: 'lastName', title: 'Last Name' },
  { stateKey: 'middleInitial', title: 'Middle Initial' },
  { stateKey: 'suffix', title: 'Suffix' },
  { stateKey: 'phoneNumber', title: 'Phone Number' },
  { stateKey: 'email', title: 'Email' },
  { stateKey: 'address1', title: 'Address Line 1' },
  { stateKey: 'address2', title: 'Address Line 2' },
  { stateKey: 'city', title: 'City' },
  { stateKey: 'state', title: 'State' },
  { stateKey: 'zip', title: 'Zip Code' },
];

const DONATE_LEVELS_ARRAY = [
  { stateKey: 'donateAmount', amount: '5', title: '$5' },
  { stateKey: 'donateAmount', amount: '10', title: '$10' },
  { stateKey: 'donateAmount', amount: '20', title: '$20' },
  { stateKey: 'donateAmount', amount: '50', title: '$50' },
  { stateKey: 'donateAmount', amount: '100', title: '$100' },
  { stateKey: 'donateAmount', amount: '150', title: '$150' },
];

export class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'donor',
      firstName: '',
      lastName: '',
      middleInitial: '',
      suffix: '',
      phoneNumber: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      donateAmount: '',
      customDonateAmount: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeCustomDonate = this.onChangeCustomDonate.bind(this);
    this.onChangeDonate = this.onChangeDonate.bind(this);
  }
  onChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    console.log(this.state);
    this.setState(newState);
  }

  onChangeCustomDonate(key, event) {
    const newState = {
      donateAmount: '',
    };
    newState[key] = event.target.value;
    this.setState(newState);
  }

  onChangeDonate(key, event) {
    const newState = {
      customDonateAmount: '',
    };
    newState[key] = event.target.value;
    this.setState(newState);
  }


  handleSubmit(e) {
    e.preventDefault();

    const refName = '/users';
    const onFulfilled = snapshot => {
      console.log(snapshot.key);
      return snapshot.key;
    };
    const onRejected = error => console.log('Errors: ', error);

    const {
      donateAmount,
      customDonateAmount,
    } = this.state;
    const newDonateAmount = donateAmount === '' ? customDonateAmount : donateAmount;

    const jsonObject = {
      ...this.state,
      donateAmount: newDonateAmount,
    };


    postDatabase({ jsonObject, refName })
      .then(onFulfilled)
      .catch(onRejected);
  }
  render() {
    const styles = require('./DonateForm.css');

    return (
      <div className={styles.formContainer}>
        <form className={styles.DonateForm} onSubmit={this.handleSubmit}>
          <div className={styles.donateTiers}>
            {DONATE_LEVELS_ARRAY.map((field, id) =>
              <AmountInput
                key={id}
                stateKey={field.stateKey}
                onChange={this.onChangeDonate}
                value={field.amount}
                title={field.title}
                checked={this.state.donateAmount === field.amount && this.state.customDonateAmount === ''}
              />
            )}
            <input type="radio" checked={this.state.customDonateAmount !== '' && this.state.donateAmount === ''} />
            <input
              type="text"
              value={this.state.customDonateAmount}
              placeholder="Custom Amount"
              onChange={e => this.onChangeCustomDonate('customDonateAmount', e)}
            />
          </div>
          {FIELDS_ARRAY.map(field =>
            <SingleInput
              key={field.stateKey}
              stateKey={field.stateKey}
              onChange={this.onChange}
              value={this.state[field.stateKey]}
              title={field.title}
            />
          )}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default DonateForm;
