const API_URL = "/api";  // The URL to the Django backend API

document.addEventListener('DOMContentLoaded', function() {
    const attendanceForm = document.getElementById('attendance-form');
    
    attendanceForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const studentId = document.getElementById('attendance-id').value;
        const status = document.getElementById('attendance-status').value;

        const formData = {
            studentId: studentId,
            status: status
        };

        // Show loading state
        document.getElementById('loading-modal').style.display = 'block';

        // POST request to Django backend
        fetch(`${API_URL}/update-attendance/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);  // Show response message
        })
        .catch(error => {
            console.error('Error updating attendance:', error);
            alert('Error updating attendance.');
        })
        .finally(() => {
            document.getElementById('loading-modal').style.display = 'none';
        });
    });

    // Example: Fetching marks status from Django backend
    fetch(`${API_URL}/marks-status/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('marks-status').textContent = data.marks;
        })
        .catch(error => {
            console.error('Error fetching marks status:', error);
        });
});
