function FuncRepos() {
    // Изчистваме списъка с хранилищата
    $('#repos').empty();

    // Съставяме URL адреса за заявката, като използваме стойността в полето за въвеждане на потребителското име
    let url = "https://api.github.com/users/" + $("#username").val() + "/repos";

    // Изпращаме заявка към GitHub API и връщаме Promise обект
    return $.ajax({
        url: url,
        success: displayRepos, // Извикваме функцията за показване на хранилищата, ако заявката е успешна
        error: displayError // Извикваме функцията за показване на грешката, ако заявката е неуспешна
    });
}

// Функция, която показва хранилищата като списък с хипервръзки
function displayRepos(repos) {
    for (let repo of repos) {
        let link = $('<a>').text(repo.full_name).attr('href', repo.html_url);
        $('#repos').append($('<li>').append(link));
    }
}

// Функция, която показва грешката, ако няма хранилище с името, въведено от потребителя
function displayError(err) {
    $('#repos').append($('<li>').text('Грешка: Виж дали си написал правилно името!'));
}
