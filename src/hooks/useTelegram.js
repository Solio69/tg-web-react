const tg = window.Telegram.WebApp

export function useTelegram() {

  const onClose = () => {
    tg.close()
  }

  const onToggleMainButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }

  return {
    tg,
    onClose,
    onToggleMainButton,
    userName: tg.initDataUnsafe?.user?.username
  }
}