document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/profile/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('profile-picture').src = data.picture;
            document.getElementById('profile-name').textContent = data.name;
            document.getElementById('profile-id').textContent = data.id;
            document.getElementById('profile-course').textContent = data.course;
            document.getElementById('profile-dob').textContent = data.dob;
            document.getElementById('profile-contact').textContent = data.contact;
            document.getElementById('profile-email').textContent = data.email;
            document.getElementById('profile-address').textContent = data.address;
        })
        .catch(error => console.error('Error fetching profile data:', error));
});