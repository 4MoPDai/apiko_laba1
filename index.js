'use strict'

// TASK I
const user = new User()

const showUsers = () => {
    return user.showAll().map(user => {
        const el = document.createElement('el')
        result.appendChild(el)
        el.textContent += user
    })
}
const showUser = (user) => {
    if(!user) console.log('User is not found')
    const el = document.createElement('el')
    result.appendChild(el)
    el.textContent = `${user.firstName} ${user.lastName} ${user.ratting}`
}
showUsers()

addUserBtn.addEventListener('click', () => {
    user.addUser(fName.value, sName.value, ratting.value)
    result.textContent = ''
    showUsers()

})
showAllBtn.addEventListener('click', () => {
    result.textContent = ''
    showUsers()
})
sortByAlpha.addEventListener('click', () => {
    result.textContent = ''
    user.sortNameByAlpha()
    showUsers()
})
sortByRatting.addEventListener('click', () => {
    result.textContent = ''
    user.sortByRatting()
    showUsers()
})

showMaxRatting.addEventListener('click', () => {
    result.textContent = ''
    const res = user.sortByRatting('max')
    console.log(res)
    showUser(res)

})
showMiddleRatting.addEventListener('click', () => {
    result.textContent = ''
    const res = user.sortByRatting('middle')
    showUser(res)
})
showMinRatting.addEventListener('click', () => {
    result.textContent = ''
    const res = user.sortByRatting('min')
    showUser(res)
})



// TASK II

const userStatic = new User()

userStatic.showAllWithDiference = (arr) => {
    arr.map(user => {
        console.log(user)
        const el = document.createElement('el')
        result.appendChild(el)
        el.textContent += `${user.firstName} ${user.lastName} ${user.ratting} (${user.rate})`
    })
}
showDifferenceRatting.addEventListener('click', () => {
    result.textContent = ''
    const max = user.sortByRatting('max')
    userStatic.users.map(user => user.rate = max.ratting - user.ratting)
    userStatic.showAllWithDiference(userStatic.users)
})



// TASK III



password.textContent = 'Click to generate password'
message.textContent = 'Default  length is 32 letters without Numeric'

generate.addEventListener('click', () => {
    const generator = new PasswordGenerator(lengthPass.value, letters.value)  // length|number, letters|string
    if (withNum.checked) {
        return password.textContent = generator.generateNumericLetters()
    }

    if(letters.value.replace(/[^-0-9]/g,'') == true && !withNum.checked){
        message.textContent = 'If u wanna use numbers in your password, check this config!'
    } else {
        message.textContent = 'We generate new password with only letters'
    }
    return password.textContent = generator.generateLetters()

})
