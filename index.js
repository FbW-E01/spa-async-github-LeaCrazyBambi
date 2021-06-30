/* <input type="search" id="search" placeholder="Search GitHub username">    
    </input>
    
    <button>
        Hihihihih
    </button> */

function createWidget(container) {
  //   const container = document.querySelector("div");

  const wrapper = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const body = document.querySelector("body");

  button.addEventListener("click", () => {
    console.log(input.value);
    fetch("https://api.github.com/users/" + input.value + "/repos")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((resolved) => {
        console.log(resolved);
        resolved.forEach((repo) => {
          console.log(repo);
          const div = document.createElement("div");
          div.innerText = repo.full_name;
          wrapper.appendChild(div);
        });
      });
  });

  button.innerText = "Hahehehö";
  button.classList.add("btn", "btn-primary");
  input.classList.add("form-control");
  input.style.width = "300px";
  wrapper.appendChild(input);
  wrapper.appendChild(button);
  container.appendChild(wrapper);

  body.style.padding = "40px";
}

createWidget(document.querySelector("div"));
createWidget(document.querySelector("div"));
