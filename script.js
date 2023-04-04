function FuncRepos() {
    $('#repos').empty();
    let url = "https://api.github.com/users/" + $("#username").val() + "/repos";
    return $.ajax({
        url: url,
        success: displayRepos,
        error: displayError
    });
        
}

//функция ,която показва хранилището  като <li> таг и като хипервръзка 
function displayRepos(repos) {
    for (let repo of repos) {
        let link = $('<a>').text(repo.full_name).attr('href', repo.html_url);
        $('#repos').append($('<li>').append(link));
    }
}

//функция ,ако няма хранилище с име ,което е въведено от потребителя във формата
function displayError(err) {
    $('#repos').append($('<li>').text('Грешка: Виж дали си написал правилно името!'));

}