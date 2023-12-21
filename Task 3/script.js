const ENDPOINT = 'https://api.github.com/users'
const btn = document.getElementById("btn")
const output = document.getElementById("output")

const loadData = () => {
    return fetch(ENDPOINT)
        .then(resp => resp.json())
}

const printData = (data) => {
    output.innerHTML = ''

    data.forEach(user => {
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')

        const avatar = document.createElement('img')
        avatar.src = user.avatar_url
        avatar.alt = 'Avatar'

        const login = document.createElement('p')
        login.textContent = user.login

        userDiv.appendChild(avatar)
        userDiv.appendChild(login)

        output.appendChild(userDiv)
    })
}

btn.addEventListener('click', () => {
    loadData()
        .then(printData)
        .catch(error => {
            console.error('Error fetching data:', error)
        })
})




