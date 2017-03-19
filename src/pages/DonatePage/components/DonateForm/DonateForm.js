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
    this.onSelectCustomDonate = this.onSelectCustomDonate.bind(this);
    this.onChangeDonate = this.onChangeDonate.bind(this);
  }

  onChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }

  onSelectCustomDonate() {
    const newState = {
      donateAmount: '',
      customDonateAmount: 0,
    };

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
    const newState = { customDonateAmount: '' };
    newState[key] = event.target.value;
    this.setState(newState);
  }


  handleSubmit() {
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

    const jsonObject = { ...this.state, donateAmount: newDonateAmount,
    };

    postDatabase({ jsonObject, refName })
      .then(onFulfilled)
      .catch(onRejected);
  }
  render() {
    const styles = require('./DonateForm.css');

    return (
      <div className={styles.formContainer}>
        <form className={styles.DonateForm} onSubmit={this.handleSubmit} method="POST" action="https://www.paypal.com/cgi-bin/webscr" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="25P939GKLLXB4" />

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
            <input type="radio" onChange={this.onSelectCustomDonate} checked={this.state.customDonateAmount !== '' && this.state.donateAmount === ''} />
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
          <input type="hidden" name="amount" value="100" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="address_override" value="1" />
          <input type="hidden" name="first_name" value={this.state.firstName} />
          <input type="hidden" name="last_name" value={this.state.lastName} />
          <input type="hidden" name="address1" value={this.state.address1} />
          <input type="hidden" name="address2" value={this.state.address2} />
          <input type="hidden" name="city" value={this.state.city} />
          <input type="hidden" name="email" value={this.state.email} />
          <input type="hidden" name="night_phone_a" value={this.state.phoneNumber.substring(1, 3)} />
          <input type="hidden" name="night_phone_b" value={this.state.phoneNumber.substring(3, 6)} />
          <input type="hidden" name="night_phone_c" value={this.state.phoneNumber.substring(6, 10)} />
          <input type="hidden" name="state" value={this.state.state} />
          <input type="hidden" name="zip" value={this.state.zip} />
          <input type="hidden" name="country" value="US" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default DonateForm;
