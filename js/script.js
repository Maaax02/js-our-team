const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
  ];

  const output = document.querySelector('.team-container');

 function create (x){
  
    let teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    output.append(teamCard);

    let teamImage = document.createElement('div');
    teamImage.className = 'card-image';
    teamCard.append(teamImage);

    let teamCardImage = document.createElement('img');
    teamImage.append(teamCardImage);
    teamCardImage.src = team[x].image;

    let cardText = document.createElement('div');
    cardText.className = 'card-text';
    teamCard.append(cardText);

    let memberName = document.createElement('h3');
    memberName.innerHTML = team[x].name;
    cardText.append(memberName);

    let memberRole = document.createElement('p');
    memberRole.innerHTML = team[x].role;
    cardText.append(memberRole);

  }

  for (x = 1; x < team.length; x++){
    create(x)
  }

let newButton = document.getElementById('addMemberButton');
let output2 = document.getElementById('team');

newButton.addEventListener('click' ,function(){
  newName = document.getElementById('name');
  newRole = document.getElementById('role');
  newimage = document.getElementById('image');
  newMember = {
    name: newName.value,
    role: newRole.value,
    image: newimage.value,
  }
  create(team.length - 1);
})


