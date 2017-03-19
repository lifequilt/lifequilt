import React, { Component } from 'react';
import SingleInput from '../../../../forms/single-input';
import AmountInput from '../AmountInput';
import { postDatabase } from '../../../../api/apiDatabase';

const FIELDS_ARRAY = [
  { stateKey: 'firstName', title: 'First Name', required: true },
  { stateKey: 'lastName', title: 'Last Name', required: true },
  { stateKey: 'middleInitial', title: 'Middle Initial' },
  { stateKey: 'suffix', title: 'Suffix' },
  { stateKey: 'phoneNumber', title: 'Phone Number' },
  { stateKey: 'email', title: 'Email', required: true },
  { stateKey: 'address1', title: 'Address Line 1', required: true },
  { stateKey: 'address2', title: 'Address Line 2' },
  { stateKey: 'city', title: 'City', required: true },
  { stateKey: 'state', title: 'State', required: true },
  { stateKey: 'zip', title: 'Zip Code', required: true },
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
      userType: 'donor',
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
      errors: {
        firstName: false,
        lastName: false,
        email: false,
        address1: false,
        city: false,
        state: false,
        zip: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeCustomDonate = this.onChangeCustomDonate.bind(this);
    this.onSelectCustomDonate = this.onSelectCustomDonate.bind(this);
    this.onChangeDonate = this.onChangeDonate.bind(this);
    this.checkRequiredFields = this.checkRequiredFields.bind(this);
    this.showErrors = this.showErrors.bind(this);
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

  checkRequiredFields() {
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'address1',
      'city',
      'state',
      'zip',
    ];

    let valid = false;
    const newErrors = { ...this.state.errors };
    requiredFields.forEach(item => {
      newErrors[item] = this.state[item] === '';
      valid = this.state[item] === '';
      this.setState({ errors: newErrors });
    });

    return valid;
  }


  handleSubmit(e) {
    if (this.checkRequiredFields()) {
      e.preventDefault();
      this.setState({ showErrors: true });
      return;
    }
    this.setState({ showErrors: false });
    const refName = '/users';
    const onFulfilled = snapshot => snapshot.key;
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

  showErrors() {
    return Object.keys(this.state.errors).map(inputName => {
      const [displayNameObject] = FIELDS_ARRAY.filter(item => item.stateKey === inputName);
      if (this.state.errors[inputName] === true) {
        return <div>{displayNameObject.title} is required</div>;
      }
      return null;
    });
  }

  render() {
    const styles = require('./DonateForm.css');

    return (
      <div className={styles.formContainer}>
        <form className={styles.DonateForm} onSubmit={this.handleSubmit} method="POST" action="https://www.paypal.com/cgi-bin/webscr" target="_top">
          <div className={styles.formHeader}>
            Donor Form
          </div>
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="25P939GKLLXB4" />

          <div className={styles.donateTiersHeader}>
            Please choose a donation amount:
          </div>
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
            <div className={styles.customDonateInput}>
              <input type="radio" onChange={this.onSelectCustomDonate} checked={this.state.customDonateAmount !== '' && this.state.donateAmount === ''} />
              <input
                type="text"
                value={this.state.customDonateAmount}
                placeholder="Custom Amount"
                onChange={e => this.onChangeCustomDonate('customDonateAmount', e)}
              />
            </div>
          </div>
          <div className={styles.errorsContainer}>
            {this.state.showErrors ? this.showErrors() : null}
          </div>
          {FIELDS_ARRAY.map(field =>
            <SingleInput
              key={field.stateKey}
              stateKey={field.stateKey}
              onChange={this.onChange}
              value={this.state[field.stateKey]}
              title={field.title}
              required={field.required}
            />
          )}
          <div className={styles.formBottom} />
          <input type="hidden" name="amount" value={this.state.donateAmount === '' ? this.state.customDonateAmount : this.state.donateAmount} />
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
          <input className={styles.submitButton} type="submit" value="Donate" />
        </form>
      </div>
    );
  }
}

export default DonateForm;
