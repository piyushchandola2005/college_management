import json
from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Attendance

# View to update attendance
@csrf_exempt  # Disable CSRF for simplicity (use a token in production)
def update_attendance(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            student_id = data.get('studentId')
            status = data.get('status')

            # Check if student already exists and update attendance
            attendance, created = Attendance.objects.update_or_create(
                student_id=student_id, 
                defaults={'status': status}
            )
            
            return JsonResponse({'message': 'Attendance updated successfully.'}, status=200)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    
    return JsonResponse({'message': 'Invalid request method.'}, status=405)

# View to fetch marks status (just a mock example)
def marks_status(request):
    # Example: Fetching mock marks for a student
    return JsonResponse({'marks': 85})


''' update_attendance: This view listens for POST requests to update a student's attendance status. It expects JSON data with the studentId and status (either "present" or "absent").
    marks_status: A simple view to return mock marks status data as JSON. In a real application, this data would be fetched from the database.
'''