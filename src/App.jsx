import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const [sended, setSended] = useState(false)
  const [blur, setBlur] = useState(false)

  const handleInput = (e) => {
    setText(e.target.value)
    setSended(false)
  }
  const submitInputValue = (e) => {
    e.preventDefault()
    console.log(text)
    setText('')
    setSended(true)
    setBlur(false)
  }

  const handleBlur = () => {
    setBlur(true)
    setSended(false)
  }

  return (
    <div className="main">
      <form onSubmit={submitInputValue}>
        <input
          type="text"
          value={text}
          onChange={handleInput}
          onBlur={handleBlur}
        />
        <button type="submit" disabled={!text}>отправить</button>
      </form>
      {sended && <div className="sendedOrNot">Сообщение отправлено</div>}
      {!text && blur && <div className='blur'>поле ввода не должно быть пустым</div>}
    </div>
  )
}

export default App
