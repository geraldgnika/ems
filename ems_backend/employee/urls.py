from django.urls import re_path, path
from django.conf.urls.static import static
from django.conf import settings

from . import views
app_name = 'employee_api'

urlpatterns = [
                  path('departments/', views.department, name="list-departments"),
                  re_path(r'^departments/(\d+)$', views.department, name="the-department"),

                  path('employees/', views.employee, name="list-employees"),
                  re_path(r'^employees/(\d+)$', views.employee, name="the-employee"),

                  path('save_profile_photo', views.save_profile_photo, name="add-photo"),

                  path('departments/department-page/<int:pk>', views.GetDepartment.as_view(), name="department-page"),
                  path('departments/employee-page/<int:pk>', views.GetEmployee.as_view(), name="employee-page"),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
