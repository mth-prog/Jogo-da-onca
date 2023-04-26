const AdminCrud = async () => {
    const response = await fetch('http://localhost:3333/api/user');
    const get_result = await response.json();
    return get_result;
};

//criar o elemento no doc passando como paramentro ele
const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag);
    element.innerText = innerText;

    return element;
};
//criar a linha no html 
const creatrow = (linha) => {
    const {id , user} = linha;

    const tr = createElement('tr');
    const tdTitulo = createElement('td', 'titulo da tablea'); 
};