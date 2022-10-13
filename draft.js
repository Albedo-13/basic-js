// Draft to test custom test cases

function createDreamTeam(members) {
    // Filter unvalid values
    const filteredMembers = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            filteredMembers.push(members[i]);
        }
    }
    members = filteredMembers;

    // Trimming & capitalize
    for (let i = 0; i < members.length; i++) {
        members[i] = members[i].trim();
        members[i] = members[i].charAt(0).toUpperCase() + members[i].slice(1);
    }
    members.sort();

    // Abbr
    let result = "";
    for (let i = 0; i < members.length; i++) {
        result += members[i].charAt(0);
    }
    return result;
}

createDreamTeam([
    ['David Abram'],
    ['Robin Attfield'],
    'Thomas Berry',
    ['Paul R.Ehrlich'],
    'donna Haraway',
    ' BrIaN_gOodWiN  ',
    {
      0: 'Serenella Iovino'
    },
    'Erazim Kohak',
    '  val_plumwood',
  ]);   // 'BDETV'