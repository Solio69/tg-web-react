import React, {useCallback, useEffect, useState} from 'react'
import './Form.scss'
import {useTelegram} from "../../hooks/useTelegram"

const Form = () => {
  const {tg} = useTelegram()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')

  const onSendData = useCallback(() => {
    const data = {
      name, phone, comment
    }
    tg.sendData(JSON.stringify(data))
  }, [tg, name, phone, comment])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)

    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [tg, onSendData])

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  }, [tg])

  useEffect(() => {
    if (!name || !phone || !comment) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [tg, name, phone, comment])

  const onNameChange = (e) => {
    setName(e.target.value)
  }
  const onPhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const onCommentChange = (e) => {
    setComment(e.target.value)
  }

  return (
    <form className='form'>
      <input className='form__input'
             placeholder='Имя'
             type='text'
             value={name}
             onChange={onNameChange}
      />
      <input className='form__input'
             placeholder='Телефон'
             type='number'
             value={phone}
             onChange={onPhoneChange}
      />
      <textarea className='form__input'
                placeholder='Комментарий'
                value={comment}
                onChange={onCommentChange}
      />
    </form>
  )
}

export default Form