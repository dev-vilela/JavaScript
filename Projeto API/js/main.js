const repositories = document.querySelector(".content-main");

function getApiGitHub(){
    fetch("https://api.github.com/users/github.com/dev-vilela/repos")
        .then(async response => {
                if(!response.ok){
                    throw new Error("Houve um erro com a resposta da api");
                }

                let dados = await response.json();

                dados.map( item =>{
                    let project = document.createElement("div");

                    project.innerHTML = `
                    <div class="project">
                    <div>
                        <h4 class="title">${item.name}</h4>
                        <span class="date-create">${int1.DateTimerFormat('pt-BR').format(new Date)}</span>
                    </div>
        
                    <div>
                        <a href="${item.html_url}">${item.html_url}</a>
                        <span class="language">
                            <span class="circle"></span>
                            ${item.language}
                        </span>
                    </div>
                </div>
                    `;

                    repositories.appendChild(project);
                });
        })
            .catch(error=>{
                throw new Error("Houve erro ao buscar os dados", error);
            });
}

getApiGitHub()