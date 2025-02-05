from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
import logging
from .models import Announcement, Mark, TimetableEntry  # Ensure TimetableEntry model is imported
logger = logging.getLogger(__name__)

from django.shortcuts import render




class CustomLoginView(LoginView):
    template_name = 'registration/login.html'
    form_class = AuthenticationForm


    def form_valid(self, form):
        auth_login(self.request, form.get_user())
        return redirect(self.get_success_url())

    def get_success_url(self):
        user = self.request.user
        if user.is_superuser:
            return reverse_lazy('admin:index')
        elif user.groups.filter(name='Teachers').exists():
            return reverse_lazy('teacher_dashboard')
        else:
            return reverse_lazy('student_dashboard')

@login_required
def admin_dashboard_view(request):
    return render(request, 'dashboard/admin_dashboard.html')

@login_required
def teacher_dashboard_view(request):
    return render(request, 'dashboard/teacher_dashboard.html')


@login_required
def student_dashboard_view(request):
    return render(request, 'dashboard/student_dashboard.html')

@login_required
def timetable_view(request):
    timetable = TimetableEntry.objects.filter(day_of_week=request.GET.get('day', 'Monday'))  # Adjust the filter as needed
    context = {
        'timetable': timetable,
    }
    return render(request, 'dashboard/timetable.html', context)

@login_required
def exam_view(request):
    return render(request, 'dashboard/exam.html')

@login_required
def change_password_view(request):
    return render(request, 'dashboard/change_password.html')

@login_required
def profile_view(request):
    return render(request, 'dashboard/profile.html')

@login_required
def dashboard_view(request):
    return render(request, 'dashboard/index.html')
@login_required
def logout_view(request):
    return render(request, 'accounts/login.html')