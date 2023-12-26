import React, { useEffect, useState } from 'react'

import scss from './PostRrequest.module.scss'

import validateEmail from '../helpers/validate/validateEmail'
import validateNumber from '../helpers/validate/validateNumber'
import SuccessSignUp from '../SuccessSignUp/SuccessSignUp'
import { fetchToken } from '../helpers/validate/fetch/fetchToken'

function PostRequest({ successRegister, setSuccessRegister }) {
  const [token, setToken] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [photo, setPhoto] = useState(null)
  const [selectedOption, setSelectedOption] = useState('2')

  const [isNameFocused, setNameFocused] = useState(false)
  const [isEmailFocused, setEmailFocused] = useState(false)
  const [isPhoneFocused, setPhoneFocused] = useState(false)

  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidNumber, setIsValidNumber] = useState(true)

  const isFormValid =
    name && isValidEmail && phone && isValidNumber && selectedOption && photo

  useEffect(() => {
    fetchToken().then((response) => setToken(response.data.token))
  }, [])

  const handleInputChange = (event) => {
    let inputValue = event.target.value

    if (event.target.name === 'name') {
      setName(inputValue)
    } else if (event.target.name === 'email') {
      setEmail(inputValue)
      setIsValidEmail(validateEmail(inputValue))
    } else if (event.target.name === 'phone') {
      setPhone(inputValue)
      setIsValidNumber(validateNumber(inputValue))
    } else if (event.target.name === 'file') {
      const file = event.target.files[0]
      setPhoto(file)
    }
  }

  const handleSpaceDelete = () => {
    setEmail(email.trim())
    setPhone(phone.trim())
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0])
    console.log('first', event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    var formData = new FormData()
    formData.append('position_id', selectedOption)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('photo', photo)

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: { Token: token },
    }).then((res) => {
      if (res.ok) {
        setSuccessRegister(true)
      } else if (!res.ok) {
        alert('помилка реєстрації')
        console.log('error.', res.status)
      }
    })
  }

  console.log('POST successRegister', successRegister)

  return (
    <>
      {successRegister ? (
        <SuccessSignUp />
      ) : (
        <section id="signUpAnchor" className={scss.postSection}>
          <div className={scss.postSectionContainer}>
            <h2 className={scss.postSectionTitle}>Working with POST request</h2>
            <form onChange={handleInputChange} onBlur={handleSpaceDelete}>
              <div className={scss.inputContainer}>
                <label
                  htmlFor="name"
                  className={
                    !isNameFocused ? scss.inputLabel : scss.inputLabelChecked
                  }
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  minLength={2}
                  maxLength={60}
                  required
                  className={scss.postInput}
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => {
                    if (name) {
                      return
                    }
                    setNameFocused(false)
                  }}
                />
              </div>

              <div className={scss.inputContainer}>
                <label
                  htmlFor="email"
                  className={
                    !isEmailFocused ? scss.inputLabel : scss.inputLabelChecked
                  }
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  minLength={2}
                  maxLength={100}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Невалідний імейл"
                  required
                  className={`${scss.postInput} ${
                    !isValidEmail ? scss.invalidInput : ''
                  }`}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => {
                    if (email) {
                      return
                    }
                    setEmailFocused(false)
                  }}
                />
                {!isValidEmail && (
                  <div className={scss.errorMessage}>Incorrect email</div>
                )}
              </div>

              <div className={scss.inputContainer}>
                <label
                  htmlFor="phone"
                  className={
                    !isPhoneFocused ? scss.inputLabel : scss.inputLabelChecked
                  }
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  pattern="^[\+]{0,1}380([0-9]{9})$)"
                  required
                  className={
                    isValidNumber
                      ? scss.postInput
                      : `${scss.postInput} ${scss.postInputError}`
                  }
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => {
                    if (phone) {
                      return
                    }
                    setPhoneFocused(false)
                  }}
                />
                <span
                  className={
                    isValidNumber
                      ? scss.phonePattern
                      : `${scss.phonePattern} ${scss.phonePatternError}`
                  }
                >
                  +38 (XXX) XXX - XX - XX
                </span>
              </div>

              <fieldset className={scss.radioField}>
                <h3 className={scss.postReqRadioTitle}>Select your position</h3>
                <input
                  id="Frontend"
                  type="radio"
                  value="2"
                  checked={selectedOption === '2'}
                  onChange={handleOptionChange}
                  className={scss.radioInput}
                />
                <label for="Frontend" className={scss.radioFieldLable}>
                  Frontend developer
                </label>
                <input
                  id="Backend"
                  type="radio"
                  value="1"
                  checked={selectedOption === '1'}
                  onChange={handleOptionChange}
                  className={scss.radioInput}
                />
                <label for="Backend" className={scss.radioFieldLable}>
                  Backend developer
                </label>
                <input
                  id="Designer"
                  type="radio"
                  value="4"
                  checked={selectedOption === '4'}
                  onChange={handleOptionChange}
                  className={scss.radioInput}
                />
                <label htmlFor="Designer" className={scss.radioFieldLable}>
                  Designer
                </label>
                <input
                  id="QA"
                  type="radio"
                  value="3"
                  checked={selectedOption === '3'}
                  onChange={handleOptionChange}
                  className={scss.radioInput}
                />{' '}
                <label htmlFor="QA" className={scss.radioFieldLable}>
                  QA
                </label>
              </fieldset>

              <div className={scss.container}>
                <div className={scss.customFileInputContainer}>
                  <div className={scss.customFileInput}>
                    <span className={`${scss.customFileInputText}`}>
                      {photo ? photo.name : 'Upload your photo '}
                    </span>
                  </div>
                  <label
                    className={scss.customFileInputLabel}
                    htmlFor="customFileInput"
                  >
                    Upload
                  </label>

                  <input
                    id="customFileInput"
                    type="file"
                    placeholder="Upload your photo"
                    name="file"
                    accept="image/*,.jpg,.jpeg"
                    className={scss.postInputUpload}
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <button
                type="button"
                disabled={!isFormValid}
                className={scss.signUpBtn}
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  )
}

export default PostRequest
