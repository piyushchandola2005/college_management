from django.shortcuts import render
from django.contrib.auth.decorators import login_required
import logging
from .models import Announcement, Mark
logger = logging.getLogger(__name__)

@login_required
def admin_dashboard_view(request):
    logger.debug("Rendering admin dashboard")
    return render(request, 'dashboard/admin_dashboard.html')

@login_required
def student_dashboard_view(request):
    logger.debug("Rendering student dashboard")
    return render(request, 'dashboard/student_dashbaord.html')



@login_required
def student_dashboard_view(request):
    announcements = Announcement.objects.all()
    marks = Mark.objects.filter(student=request.user)
    context = {
        'announcements': announcements,
        'marks': marks,
    }
    return render(request, 'dashboard/student_dashboard.html', context)

@login_required
def timetable_view(request):
    return render(request, 'dashboard/timetable.html')

@login_required
def exam_view(request):
    return render(request, 'dashboard/exam.html')

@login_required
def change_password_view(request):
    return render(request, 'dashboard/change_password.html')

@login_required
def profile_view(request):
    return render(request, 'dashboard/profile.html')