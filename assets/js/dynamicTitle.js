window.onload = function () {
    const favicon = document.getElementById('favicon')
    const pageTitle = document.title
    const attentionMessage = 'Come back'
  
    document.addEventListener('visibilitychange', function (e) {
      const isPageActive = !document.hidden
      toggle(isPageActive)
    })
  
    function toggle(isPageActive) {
      if (isPageActive) {
        document.title = pageTitle
        favicon.href = './assets/img/logo_a_new.jpg'
      } else {
        document.title = attentionMessage
        favicon.href = './assets/img/Hand.gif'
      }
    }
  }
  