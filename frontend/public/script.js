const userForm = document.querySelector('#user-form');
const tableTBody = document.querySelector('#user-table tbody');
const userNameInput = document.querySelector('#user-name');
const userEmailInput = document.querySelector('#user-email');
const userAgeInput = document.querySelector('#user-age');
const regex = /^[^@\s]+@[^@\s\d]+\.[^\d\s@.]{2,}(?:\.[^\d\s@.]{2,})*$/;
let HTMLEditedRows = {};
let removerDepois = [saveEdit, backRow, enableToEditUser, deleteUser]; // remover


function checkInvalidEmail(email) {
    if (!regex.test(email)) {
        alert('Por favor, digite um e-mail válido.');
        return true;
    };
    return false;
}

function checkEmptyInputs(name, email, age) {
    if (!name || !email || !age) {
        alert('Por favor, preencha todos os campos.');
        return true;
    }
    return false;
}

function saveEdit(button) {
    const editedRow = button.closest('tr');

    const inputs = editedRow.querySelectorAll('.form-input-edit');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const age = inputs[2].value.trim();

    const inputsAreInvalid = checkEmptyInputs(name, email, age) || checkInvalidEmail(email);

    if (inputsAreInvalid) {
        return;
    }

    editedRow.innerHTML = buildRowContentHTML(name, email, age);
    return removerDepois; //remover
}

function backRow(button) {
    const rowToBack = button.closest('tr');
    const keyDataUser = rowToBack.dataset.user;
    const oldHTML = HTMLEditedRows[keyDataUser];
    rowToBack.innerHTML = oldHTML;
    delete HTMLEditedRows[keyDataUser];
};

function deleteUser(button) {
    const rowToDelete = button.closest('tr');
    rowToDelete.remove();
};

function enableToEditUser(button) {
    const rowToEdit = button.closest('tr');
    const keyDataUser = rowToEdit.dataset.user;
    const valueHTML = rowToEdit.innerHTML;
    HTMLEditedRows[keyDataUser] = valueHTML;

    const tableData = rowToEdit.querySelectorAll('td');
    const oldNameValue = tableData[0].textContent;
    const oldEmailValue = tableData[1].textContent;
    const oldAgeValue = tableData[2].textContent;

    rowToEdit.innerHTML = `
        <td class='name-td'><input type='text' placeholder='Nome' class='form-input-edit name-ipt-edit' value = '${oldNameValue}'></td>
        <td class='email-td'><input type='email' placeholder='Email' class='form-input-edit email-ipt-edit' value = '${oldEmailValue}'></td>
        <td class='age-td'><input type='number' min='1' max='150' placeholder='Idade' class='form-input-edit age-ipt-edit' value = '${oldAgeValue}'></td>
        <td class='action-td'>
            <button class='action-btn save-btn' onclick = 'saveEdit(this);'>Salvar</button>
            <button class='action-btn back-btn' onclick = 'backRow(this);'>Voltar</button>
        </td>
    `;
};

function buildRowContentHTML (name, email, age) {
    return `
        <td class='name-td'>${name}</td>
        <td class='email-td'>${email}</td>
        <td class='age-td'>${age}</td>
        <td class='action-td'>
            <button class='action-btn edit-btn' onclick = 'enableToEditUser(this);'>Editar</button>
            <button class='action-btn delete-btn' onclick = 'deleteUser(this);'>Excluir</button>
        </td>
    `;
};

function enableToAddUserToTable(e) {
    e.preventDefault();

    const name = userNameInput.value.trim();
    const email = userEmailInput.value.trim();
    const age = userAgeInput.value.trim();

    const inputsAreInvalid = checkEmptyInputs(name, email, age) || checkInvalidEmail(email);

    if (inputsAreInvalid) {
        return;
    }

    const newRow = document.createElement('tr');
    newRow.dataset.user = crypto.randomUUID();

    newRow.innerHTML = buildRowContentHTML(name, email, age);

    tableTBody.appendChild(newRow);

    userForm.reset();

    userNameInput.focus();
};

userForm.addEventListener('submit', enableToAddUserToTable);
