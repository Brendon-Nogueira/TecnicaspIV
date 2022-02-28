const serverUrl = 'https://news-api-node.herokuapp.com/api/v1/news/ea30897c-67fe-4f79-896a-369366a914bb'


const start = () =>{
    loadDataFromServer()
    

}

const loadDataFromServer = () =>{
    $.get(serverUrl, data =>{
        populateList(data)
    })
}

function populateList(data) {
    $('#mensageList').empty()

    const ul = document.getElementById('messageList')

    data.array.forEach(item => {
        $('#messageList').append(`li<> ${item.post}</li>`)
    })
}
start()