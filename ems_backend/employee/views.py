from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework import generics

from model.models import Department, Employee
from .serializers import DepartmentSerializer, EmployeeSerializer, DepartmentGetSerializer, EmployeeGetSerializer, \
    EmployeeUpdateSerializer
from helpers import constants as const


@csrf_exempt
def department(request, delete_id=0):
    # Gets list of all departments
    if request.method == 'GET':
        departments = Department.objects.all().order_by("name")
        departments_serializer = DepartmentGetSerializer(departments, many=True)

        return JsonResponse(departments_serializer.data, safe=False)

    # Creates new department/s
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data, many=True)

        # The key of the dictionary that holds the lists for new departments
        key = "dataDictionary"

        # Holds boolean value based on the success of the response
        json_response_array = []

        # Checks if there exists the key in the JSON dictionary
        if key in department_data:
            # Iterates through all the dictionary's lists (each list is a department)
            for department_data_list in department_data[key]:
                department_serializer = DepartmentSerializer(data=department_data_list)

                if department_serializer.is_valid():
                    department_serializer.save()
                    json_response_array.append('1')
                else:
                    json_response_array.append('0')
                    break  # Don't continue with other departments if one fails
        # If there is no 'dataDictionary' key it means it is only one department
        else:
            if department_serializer.is_valid():
                department_serializer.save()

                return JsonResponse(const.DEP_POST_TRUE, safe=False)

            return JsonResponse(const.DEP_POST_FALSE, safe=False)

        if '1' in json_response_array:
            return JsonResponse(const.DEPS_POST_TRUE, safe=False)
        else:
            return JsonResponse(const.DEPS_POST_TRUE, safe=False)

    # Updates a department
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        the_department = Department.objects.get(id=department_data['id'])

        department_serializer = DepartmentSerializer(the_department, data=department_data)

        if department_serializer.is_valid():
            department_serializer.save()

            return JsonResponse(const.DEP_PUT_TRUE, safe=False)

        return JsonResponse(const.DEP_PUT_FALSE, safe=False)

    # Deletes a department
    elif request.method == 'DELETE':
        the_department = Department.objects.get(id=delete_id)
        the_department.delete()

        return JsonResponse(const.DEP_DEL_TRUE, safe=False)


@csrf_exempt
def employee(request, delete_id=0):
    # Gets list of all employees
    if request.method == 'GET':
        employees = Employee.objects.select_related('department').order_by("name")
        employees_serializer = EmployeeGetSerializer(employees, many=True)

        return JsonResponse(employees_serializer.data, safe=False)

    # Creates new employee/s
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data, many=True)

        # The key of the dictionary that holds the lists for new departments
        key = "dataDictionary"

        # Holds boolean value based on the success of the response
        json_response_array = []

        # Checks if there exists the key in the JSON dictionary
        if key in employee_data:
            # Iterates through all the dictionary's lists (each list is a department)
            for employee_data_list in employee_data[key]:
                employee_serializer = EmployeeSerializer(data=employee_data_list)

                if employee_serializer.is_valid():
                    employee_serializer.save()
                    json_response_array.append('1')
                else:
                    json_response_array.append('0')
                    break  # Don't continue with other departments if one fails
        # If there is no 'dataDictionary' key it means it is only one department
        else:
            if employee_serializer.is_valid():
                employee_serializer.save()

                return JsonResponse(const.EMP_POST_TRUE, safe=False)

            return JsonResponse(const.EMP_POST_FALSE, safe=False)

        if '1' in json_response_array:
            return JsonResponse(const.EMPS_POST_TRUE, safe=False)
        else:
            return JsonResponse(const.EMPS_POST_FALSE, safe=False)

    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        the_employee = Employee.objects.get(id=employee_data['id'])

        employee_serializer = EmployeeUpdateSerializer(the_employee, data=employee_data)

        if employee_serializer.is_valid():
            employee_serializer.save()

            return JsonResponse(const.EMP_PUT_TRUE, safe=False)

        return JsonResponse(const.EMP_PUT_FALSE, safe=False)

    elif request.method == 'DELETE':
        the_employee = Employee.objects.get(id=delete_id)
        the_employee.delete()

        return JsonResponse(const.EMP_DEL_TRUE, safe=False)


class GetDepartment(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class GetEmployee(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeUpdateSerializer


@csrf_exempt
def save_profile_photo(request):
    file = request.FILES['photo']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)
