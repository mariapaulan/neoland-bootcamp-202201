const homeHomeLink = homeView.querySelector('.home__home-link')
homeHomeLink.onclick = event => {
    event.preventDefault()
    profileView.classList.add('off')
    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')
    titleView.classList.remove('off')
}

const homeProfileLink = homeView.querySelector('.home__profile-link')
homeProfileLink.onclick = event => {
    event.preventDefault()

    const nameInput = profileView.querySelector('.profile__name-input')
    const emailInput = profileView.querySelector('.profile__email-input')

    nameInput.value = activeUser.name
    emailInput.value = activeUser.email

    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')
    titleView.classList.add('off')
    profileView.classList.remove('off')
}

const homeLogoutLink = homeView.querySelector('.home__logout-link')
homeLogoutLink.onclick = () => {
    homeView.classList.add('off')
    profileView.classList.add('off')
    titleView.classList.remove('off')
    updatePasswordView.classList.add('off')
    deleteAccountView.classList.add('off')

    landingView.classList.remove('off')
}