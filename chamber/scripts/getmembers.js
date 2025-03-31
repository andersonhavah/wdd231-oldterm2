document.addEventListener("DOMContentLoaded", () => {
    const memberList = document.getElementById("members");
    const gridButton = document.getElementById("btnGrid");
    const listButton = document.getElementById("btnList");

    // Fetch member data from the JSON file
    async function fetchMembers() {
        try {
            const response = await fetch('./data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Display members in the current view (grid or list)
    function displayMembers(members) {
        memberList.innerHTML = '';  // Clear any existing content

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" loading="lazy">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Level: ${getMembershipLevel(member.membership_level)}</p>
            `;
            memberList.appendChild(memberCard);
        });
    }

    // Toggle between grid and list views
    function toggleView(viewType) {
        if (viewType === 'grid') {
            memberList.classList.remove('list');
            memberList.classList.add('grid');
            gridButton.classList.add('active');
            listButton.classList.remove('active');
        } else if (viewType === 'list') {
            memberList.classList.remove('grid');
            memberList.classList.add('list');
            gridButton.classList.remove('active');
            listButton.classList.add('active');
        }
    }

    // Handle button clicks to toggle view
    gridButton.addEventListener('click', () => toggleView('grid'));
    listButton.addEventListener('click', () => toggleView('list'));

    // Return membership level as a string
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    // Initialize the app
    fetchMembers();

    // Default view should be grid
    toggleView('grid');
});
