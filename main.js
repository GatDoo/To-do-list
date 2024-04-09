const addButton = document.getElementById('add-button')
const addText = document.getElementById('tache')
const finishTasks = document.getElementById('finish-tasks')
const liste = document.getElementById('liste')

addButton.addEventListener('click', function (event) {
    event.preventDefault()
    const taskDiv = document.createElement('div')
    const conteneurTache = document.createElement('div');
    conteneurTache.classList.add('tache');
    taskDiv.classList.add('task-div')


    const nouvelleTache = document.createElement('p')
    const uppercase = addText.value.toUpperCase()
    const icons = document.createElement('div')
    icons.classList.add('icons')
    const iconeCroix = document.createElement('i');
    const iconeCheck = document.createElement('i');
    const iconePlus = document.createElement('i');
    const iconeComment = document.createElement('i');
    const iconeEdit = document.createElement('i');
    iconeCroix.classList.add('fa-solid', 'fa-xmark');
    iconeCheck.classList.add('fa-solid', 'fa-check');
    iconePlus.classList.add('fa-solid', 'fa-plus');
    iconeComment.classList.add('fa-solid', 'fa-comment');
    iconeEdit.classList.add('fa-solid', 'fa-pen-to-square');
    nouvelleTache.textContent = uppercase
    conteneurTache.appendChild(nouvelleTache);
    conteneurTache.appendChild(icons)
    icons.appendChild(iconeCroix);
    icons.appendChild(iconeCheck);
    icons.appendChild(iconePlus);
    icons.appendChild(iconeComment);
    icons.appendChild(iconeEdit);
    taskDiv.appendChild(conteneurTache)
    liste.appendChild(taskDiv);

    addText.value = '';


    // Bouton Delete Task
    iconeCroix.addEventListener('click', function() {
        taskDiv.remove();
    });


    // Bouton Tâche Finie
    iconeCheck.addEventListener('click', function() {
        if(conteneurTache.classList.contains('finish')) {
            conteneurTache.classList.remove('finish')
            liste.appendChild(taskDiv)
        } else {
            conteneurTache.classList.add('finish')
            finishTasks.appendChild(taskDiv)
        }
    })

    // SOUS TACHE
    // <i class="fa-solid fa-plus"></i>
    iconePlus.addEventListener('click', function() {
        if(conteneurTache.classList.contains('finish')) {
            return
        } else {
            const sousTache = document.createElement('div')
            const sousTacheText = document.createElement('input')
            sousTacheText.type = 'text'
            const sousTacheIcon = document.createElement('i')
            const deleteSousTache = document.createElement('i')
            const divIconsSousTache = document.createElement('div')
            divIconsSousTache.classList.add('div-icons-sous-tache')
            deleteSousTache.classList.add('fa-xmark', 'fa-solid')
            sousTache.classList.add('sous-tache')
            sousTacheText.classList.add('sous-tache-text')
            sousTacheIcon.classList.add('fa-list-check', 'fa-solid')
            sousTache.appendChild(sousTacheText)
            taskDiv.appendChild(sousTache)
            sousTache.appendChild(divIconsSousTache)
            divIconsSousTache.appendChild(deleteSousTache)
            divIconsSousTache.appendChild(sousTacheIcon)

            deleteSousTache.addEventListener('click', function() {
                sousTache.remove();
            });

            iconeCheck.addEventListener('click', function() {
                sousTache.classList.add('finish')
                finishTasks.appendChild(taskDiv)
                sousTacheText.readOnly = true;
            })
        }
    })



    // DEPENDANCE !!!!


    // NOTE
    // <i class="fa-regular fa-comment"></i>

    // EDIT
    // <i class="fa-solid fa-pen-to-square"></i>



})