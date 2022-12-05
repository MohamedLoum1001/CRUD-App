let form = `<div class="justify-content-center mt-3 mb-4">
   
<div class="row mb-4">
    <div class="col">
        <div>
             <label class="form-label" for="prenom">Prénom</label>
             <input type="text" id="prenom" class="form-control" required="required"/>

         </div>
    </div>

    <div class="col">
         <div>
             <label class="form-label" for="nom">Nom</label>
             <input type="text" id="nom" class="form-control" required="required"/>

         </div>
     </div>
 </div>

 <div class="row mb-4">
     <div class="col">
         <div  class="form-group">
             <label class="form-label" for="email">Email</label>
             <input type="email" id="email" class="form-control" required="required"/>
     
         </div>
     </div>

     <div class="col">
         <div class="form-group">
             <label class="form-label" for="telephone">Téléphone</label>
             <input type="tel" id="telephone" class="form-control" required="required"/>

         </div>
     </div>
 </div>
 <!-- Bouton -->
 <div class="col">
     <button type="button" class="btn btn-success w-100" onclick="Ajouter()">Ajouter</button>
 </div>

</div>`;

document.getElementById("form").innerHTML = form;

function table() {
    let table = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Prenom</th>
        <th scope="col">Nom</th>
        <th scope="col">Email</th>
        <th scope="col">Telephone</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table +`<tr>
  
        <td>${details[i].Prenom}</td>
        <td>${details[i].Nom}</td>
        <td>${details[i].Email}</td>
        <td>${details[i].Telephone}</td>
        <td><button type="button" class="btn btn-warning" onclick="Modifier(${i})">Modifier</button></td>
        <td><button type="button" class="btn btn-danger" onclick="Supprimer(${i})">Supprimer</button></td>
      </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};

details = [];
setData();
table();

// Local Storage Debut
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
// Local Storage Fin

// Ajouter les données 
function Ajouter() {
    let Prenom = document.getElementById("prenom");
    let Nom = document.getElementById("nom");
    let Email = document.getElementById("email");
    let Telephone = document.getElementById("telephone");
    

    if ((Prenom.value == 0)){
        alert("Veillez remplire le champ prénom");
        return
    }else if ((Nom.value == 0)) {
        alert("Veillez remplire le champ nom");
        return
    }else if ((Email.value == 0)) {
        alert("Veillez remplire le champ email");
        return
    }else if ((Telephone.value == 0)) {
        alert("Veillez remplire le champ téléphone");
        return
    }

    let data = {
        Prenom: Prenom.value,
        Nom: Nom.value,
        Email: Email.value,
        Telephone: Telephone.value
    };
    details.push(data);
    setData();

    table();
    Prenom.value = "";
    Nom.value = "";
    Email.value = "";
    Telephone.value = "";
};

// Supprimer une donnée dans le tableau
function Supprimer(index) {
    details.splice(index, 1);
    setData();
    table();
};

// Modifier une donnée dans le tableau

function Modifier(index) {
    let editForm = `<div class="justify-content-center mt-3 mb-4">
   
<div class="row mb-4">
    <div class="col">
        <div>
             <label class="form-label" for="prenom">Update Prénom</label>
            <input type="text" value="${details[index].Prenom}" id="newprenom" class="form-control" required/>

         </div>
    </div>

    <div class="col">
         <div>
             <label class="form-label" for="nom">Nom</label>
             <input type="text" value="${details[index].Nom}" id="newnom" class="form-control" required/>

         </div>
     </div>
 </div>

 <div class="row mb-4">
     <div class="col">
         <div  class="form-group">
             <label class="form-label" for="email">Email</label>
             <input type="email" value="${details[index].Email}" id="newemail" class="form-control" required/>
     
         </div>
     </div>

     <div class="col">
         <div class="form-group">
             <label class="form-label" for="telephone">Téléphone</label>
             <input type="tel" value="${details[index].Telephone}" id="newtelephone" class="form-control" required/>

         </div>
     </div>
 </div>
 <!-- Bouton -->
 <div class="col">
     <button type="button" class="btn btn-warning w-100" onclick="update(${index})">Modifier</button>
 </div>

</div>`;
    document.getElementById("form").innerHTML = editForm;
   
};

function update(index) {
    let NewPrenom = document.getElementById("newprenom");
    let NewNom = document.getElementById("newnom");
    let NewEmail = document.getElementById("newemail");
    let NewTelephone = document.getElementById("newtelephone");

    details[index] = {
        Prenom : NewPrenom.value,
        Nom : NewNom.value,
        Email : NewEmail.value,
        Telephone : NewTelephone.value,
    };
    table();
    document.getElementById("form").innerHTML = form;
}